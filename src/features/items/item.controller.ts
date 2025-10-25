import type { Request, Response } from 'express';
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

  return { getAll };
}

export default itemController();
