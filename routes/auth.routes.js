import { Router } from 'express-router';
const router = Router();

import * as authControl from '../controllers/auth.controlles'

router.post('/registro', registro)
router.post('/login', login)

export default router;