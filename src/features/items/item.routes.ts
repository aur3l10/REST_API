import { Router } from 'express';
import itemController from './item.controller';

const router = Router();

router.get('/', itemController.getItems);

export default router;
