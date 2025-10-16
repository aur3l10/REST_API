import prisma from '../../db/prisma';
import logger from '../../shared/logger';

function itemRepository() {
  async function getItems() {
    try {
      return await prisma.item.findMany({
        take: 10,
      });
    } catch (_) {
      logger.error(
        { resorce: 'itemRepository', method: 'getItems' },
        'Database error'
      );
      throw new Error('Database error');
    }
  }

  return { getItems };
}

export default itemRepository();
