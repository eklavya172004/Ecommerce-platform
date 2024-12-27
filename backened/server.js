import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./config/mongodb.js";
import connectToCloudinary from "./config/cloudinary.js";
import userRoute from './routes/userroutes.js'
import productRoute from './routes/productroutes.js'
import transactionRoute from './routes/transactionroutes.js'
import sellerRoute from './routes/sellerRoutes.js'
import reviewRoute from './routes/reviewroutes.js'

// const dotenv = require('dotenv');
dotenv.config({path:'./.env'})

const app = express();

app.use(express.json());

//connecting to the mongoose
connectDB();
//connecting to the cloudinary
connectToCloudinary();

app.use('/api/user',userRoute);
// app.use('/api/user/seller',userRoute);
app.use('/api/reviews',reviewRoute);
app.use('/api/user/seller',sellerRoute);
app.use('/api/products',productRoute);
app.use('/api/transactions',transactionRoute);

app.get('/',(req,res) => {
    res.send('API is working!!');
})

const port = process.env.PORT || 3000;

app.listen(port,() => {
    console.log(`App running on the port ${port}...`)
})