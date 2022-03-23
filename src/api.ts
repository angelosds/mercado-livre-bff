import { Router } from 'express';

import items from '@components/items/items.router';

const router: Router = Router();
router.use(items);

export default router;
