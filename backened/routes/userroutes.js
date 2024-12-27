import express from 'express'
// import { signup,login } from '../controller/authController.js';
// import { protect,restrictedto } from '../middleware/authentication.js';
import { protect,restrictedto } from '../middleware/authentication.js';
import { adminlogin } from '../controller/authController.js';
import { signup,login } from '../controller/authController.js';

const router = express.Router();

router.post('/signup',signup);
router.post('/login',login);
router.post('/admin-login',protect,restrictedto('admin'),adminlogin);

export default router;