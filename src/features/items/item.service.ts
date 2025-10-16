import logger from '../../shared/logger';
import { ItemsSchema } from './item.model';
import itemRepository from './item.repository';

/**
 * Item service factory.
 *
 * Contains business-logic level operations for items. The service validates
 * raw data from the repository using Zod schemas and returns validated shapes
 * to the controller layer.
 *
 * @returns {{ getItems: function(): Promise<import('./item.model').Item[]> }} Service methods.
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
  async function getItems() {
    const items = await itemRepository.getItems();
    const itemValidated = ItemsSchema.safeParse(items);

    if (!itemValidated.success) {
      childLogger.error(
        { method: 'getItems' },
        `Invalid item data from DB: ${itemValidated.error.message}`
      );
      throw new Error(itemValidated.error.message);
    }

    return itemValidated.data;
  }

  return { getItems };
}

export default itemService();
