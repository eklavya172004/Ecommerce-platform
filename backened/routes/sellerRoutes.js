import express from 'express';
import { signup,login } from '../controller/authController.js';
import { protect, restrictedto } from '../middleware/authentication.js';
import { getSellerProduct } from '../controller/sellerController.js';
// import { getSellerProduct } from '../controller/productController.js';

const router = express.Router();

router.post('/signup',protect,signup);
router.post('/login',protect,restrictedto("user"),login);
router.get('/getsellersproducts',protect,restrictedto("user"),getSellerProduct);

export default router;