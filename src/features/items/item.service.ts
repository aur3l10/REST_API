import logger from '../../shared/logger';
import { ItemsSchema } from './item.model';
import itemRepository from './item.repository';

function itemService() {
  async function getItems() {
    const items = await itemRepository.getItems();
    const itemValidated = ItemsSchema.safeParse(items);

    if (!itemValidated.success) {
      logger.error(`Invalid item data from DB: ${itemValidated.error.message}`);
      throw new Error(itemValidated.error.message);
    }

    return itemValidated.data;
  }

  return { getItems };
}

export default itemService();
