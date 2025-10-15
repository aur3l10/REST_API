import type { Request, Response } from 'express';
import prisma from '../../db/prisma';

function itemController() {
  const getItems = async (_req: Request, res: Response) => {
    const items = await prisma.item.findMany({
      take: 10,
    });

    console.log('Items:', items);

    res.json(items);
  };

  return { getItems };
}

export default itemController();
