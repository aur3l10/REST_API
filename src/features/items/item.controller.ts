import type { Request, Response } from 'express';
import { items } from './item.model';

function itemController() {
  const getItems = (_req: Request, res: Response) => {
    res.json(items);
  };

  return { getItems };
}

export default itemController();
