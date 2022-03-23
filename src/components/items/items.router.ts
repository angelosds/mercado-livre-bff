import { Router } from 'express';

import { readItem, readItems } from './items.controller';

const router: Router = Router();

router.get('/items', readItems);
router.get('/items/:id', readItem);

export default router;
