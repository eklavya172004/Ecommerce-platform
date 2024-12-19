import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./mongodb.js";
import connectToCloudinary from "./cloudinary.js";

// const dotenv = require('dotenv');
dotenv.config({path:'./.env'})

const app = express();

app.use(express.json());

//connecting to the mongoose
connectDB();
//connecting to the cloudinary
connectToCloudinary();

app.get('/',(req,res) => {
    res.send('API is working!!');
})

const port = process.env.PORT || 3000;

app.listen(port,() => {
    console.log(`App running on the port ${port}...`)
})