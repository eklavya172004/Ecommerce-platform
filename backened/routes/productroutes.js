import express from 'express'
import multer from 'multer';
import { getAllProducts,createProducts, getProductById, updateproduct } from '../controller/productController.js'
import { protect,restrictedto } from '../middleware/authentication.js';
import { deleteproduct } from '../controller/productController.js';

const router = express.Router();

const storage = multer.memoryStorage();  // Use memory storage to store file in memory (alternatively, you can use diskStorage)
const upload = multer({ storage }).fields([
  { name: 'images1', maxCount: 1 },
  { name: 'images2', maxCount: 1 },
  { name: 'images3', maxCount: 1 },
  { name: 'images4', maxCount: 1 },
  { name: 'images5', maxCount: 1 }
]);

router.get('/getproducts',getAllProducts);
router.get('/getproduct/:id',getProductById);
router.post('/createproducts',protect,restrictedto("user"),upload,createProducts);
router.delete('/deleteproduct/:id',protect,restrictedto("user"),deleteproduct);
router.put('/updateproduct/:id',protect,restrictedto("user"),updateproduct);

export default router;