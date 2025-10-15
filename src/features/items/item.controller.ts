import type { Request, Response } from 'express';
import prisma from '../../db/prisma';
import { ItemsSchema } from './item.model';

function itemController() {
  // TODO: add error management
  const getItems = async (_req: Request, res: Response) => {
    const items = await prisma.item.findMany({
      take: 10,
    });
    const itemValidated = ItemsSchema.parse(items);

    res.json(itemValidated);
  };

  return { getItems };
}

export default itemController();
