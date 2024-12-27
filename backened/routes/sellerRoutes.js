import express from 'express';
import { signup,login } from '../controller/authController.js';
import { protect, restrictedto } from '../middleware/authentication.js';

const router = express.Router();

router.post('/signup',protect,signup);
router.post('/login',protect,restrictedto("user"),login);

export default router;