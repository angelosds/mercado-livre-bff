import { Router } from 'express';

import healthCheck from '@components/healthcheck/healthCheck.router';
import user from '@components/user/user.router';
import items from '@components/items/items.router';

const router: Router = Router();
router.use(healthCheck);
router.use(user);
router.use(items);

export default router;
