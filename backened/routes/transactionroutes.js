import express from 'express'
import { createTransaction } from '../controller/transactionController.js'

const router = express.Router();

router.post('/createtransaction',createTransaction);

export default router;