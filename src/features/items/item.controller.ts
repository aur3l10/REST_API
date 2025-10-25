import type { Request, Response } from 'express';
import logger from '../../shared/logger';
import { ItemSchema } from './item.model';
import itemService from './item.service';

/**
 * Item controller factory.
 *
 * Exposes Express request handlers that call into the service layer and
 * translate results into HTTP responses. Errors from the service are returned
 * as 500 responses with a generic message.
 *
 * @returns {{ getAll: (req: Request, res: Response) => Promise<void> }} Controller handlers.
 */
function itemController() {
  const childLogger = logger.child({ resource: 'itemController' });
  /**
   * GET /api/items
   *
   * Returns validated items as JSON. On error returns HTTP 500 with
   * { message }.
   */
  const getAll = async (_req: Request, res: Response) => {
    try {
      const items = await itemService.getAll();
      res.json(items);
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  };

  async function create(req: Request, res: Response) {
    const itemValidated = ItemSchema.safeParse(req.body);

    if (!itemValidated.success) {
      childLogger.error(
        { method: 'create' },
        `Invalid item data: ${itemValidated.error.message}`
      );
      res.status(400).json({ message: itemValidated.error.message });
      return;
    }

    try {
      const item = await itemService.create(itemValidated.data);
      res.status(201).json(item);
    } catch (_) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  return { getAll, create };
}

export default itemController();
