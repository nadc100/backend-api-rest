import { Router } from 'express-router';
const router = Router();

const authControl = require('./controllers/auth.controller');

router.post('/login', authControl.login)

export default router;