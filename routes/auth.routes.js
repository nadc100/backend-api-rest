import { Router } from 'express-router';
const router = Router();

const authControl = require('./controllers/auth.controlles');

router.post('/registro', registro)
router.post('/login', login)

export default router;