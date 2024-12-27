import express from 'express'

import { getAllProducts,createProducts, getProductById, updateproduct } from '../controller/productController.js'
import { protect,restrictedto } from '../middleware/authentication.js';
import { deleteproduct } from '../controller/productController.js';

const router = express.Router();

router.get('/getproducts',getAllProducts);
router.get('/getproduct/:id',getProductById);
router.post('/createproducts',protect,restrictedto("user"),createProducts);
router.delete('/deleteproduct/:id',protect,restrictedto("user"),deleteproduct);
router.put('/updateproduct/:id',protect,restrictedto("user"),updateproduct);

export default router;