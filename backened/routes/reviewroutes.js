import express from 'express';
import { createReview, deleteReview, getproductreview, updatereviews } from '../controller/reviewController.js';
import { protect } from '../middleware/authentication.js';

const router = express.Router();

router.get('/:id',getproductreview);
router.post('/createReview/:productId',protect,createReview);
router.put('/updateReview/:productId/:reviewId',protect,updatereviews);
router.delete('/deleteReview/:productId/:reviewId',protect,deleteReview);

export default router;
