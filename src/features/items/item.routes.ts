import { Router } from 'express';
import itemController from './item.controller';

/**
 * Router for item endpoints.
 *
 * Routes:
 * - GET / - returns list of items
 */
const router = Router();

// GET /api/items
router.get('/', itemController.getItems);

export default router;
