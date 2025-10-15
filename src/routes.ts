import { Router } from 'express';
import itemRoutes from './features/items/item.routes';

const api = Router().use('/items', itemRoutes);

export default Router().use('/api', api);
