import express from 'express'
import { signup,login } from '../controller/authController';
import { protect,restrictedto } from '../middleware/authentication';
import { adminlogin } from '../controller/authController';

const router = express.Router();

router.post('/signup',signup);
router.post('/login',login);
router.post('/admin-login',protect,restrictedto('admin'),adminlogin);