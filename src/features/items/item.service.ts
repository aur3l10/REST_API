import logger from '../../shared/logger';
import { Item, ItemSchema, ItemsSchema } from './item.model';
import itemRepository from './item.repository';

/**
 * Item service factory.
 *
 * Contains business-logic level operations for items. The service validates
 * raw data from the repository using Zod schemas and returns validated shapes
 * to the controller layer.
 *
 * @returns {{ getAll: function(): Promise<import('./item.model').Item[]> }} Service methods.
 */
function itemService() {
  const childLogger = logger.child({ resource: 'itemService' });

  /**
   * Get validated items.
   *
   * Fetches items from the repository, validates them using `ItemsSchema` and
   * returns the validated data. On validation failure a generic Error is thrown
   * and the failure is logged for debugging.
   *
   * @returns {Promise<import('./item.model').Item[]>} Array of validated items.
   * @throws {Error} When validation fails.
   */
  async function getAll() {
    const items = await itemRepository.getAll();
    const itemValidated = ItemsSchema.safeParse(items);

    if (!itemValidated.success) {
      childLogger.error(
        { method: 'getAll' },
        `Invalid item data from DB: ${itemValidated.error.message}`
      );
      throw new Error(itemValidated.error.message);
    }

    return itemValidated.data;
  }

  async function create(data: Item) {
    try {
      const itemFromDb = await itemRepository.create(data);

      const itemValidated = ItemSchema.safeParse(itemFromDb);

      if (!itemValidated.success) {
        childLogger.error(
          { method: 'create' },
          `Invalid item data from DB: ${itemValidated.error.message}`
        );
        throw new Error(itemValidated.error.message);
      }

      return itemValidated.data;
    } catch (_) {
      childLogger.error({ method: 'create' }, `Error creating item in DB`);
      throw new Error('Error creating item');
    }
  }

  return { getAll, create };
}

export default itemService();
