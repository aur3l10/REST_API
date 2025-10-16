import type { Request, Response } from 'express';
import itemService from './item.service';

function itemController() {
  const getItems = async (_req: Request, res: Response) => {
    try {
      const items = await itemService.getItems();
      res.json(items);
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  };

  return { getItems };
}

export default itemController();
