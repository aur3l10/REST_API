import prisma from '../../db/prisma';
import logger from '../../shared/logger';

/**
 * Item repository factory.
 *
 * Provides data-access methods for the `item` model using Prisma.
 * The repository logs errors and throws a generic Error on DB failures to avoid leaking
 * implementation details to higher layers.
 *
 * @returns {{ getAll: function(): Promise<import('@prisma/client').Item[]> }} An object with data-access methods.
 */
function itemRepository() {
  const childLogger = logger.child({ resource: 'itemRepository' });

  async function getAll() {
    /**
     * Retrieve up to 10 items from the database.
     *
     * @returns {Promise<import('@prisma/client').Item[]>} Array of Item records.
     * @throws {Error} Throws a generic error with message 'Database error' when the DB call fails.
     */
    try {
      return await prisma.item.findMany({
        take: 10,
      });
    } catch (_) {
      childLogger.error({ method: 'getAll' }, 'Database error');
      throw new Error('Database error');
    }
  }

  return { getAll };
}

export default itemRepository();
