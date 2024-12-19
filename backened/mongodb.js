import mongoose from "mongoose";


const connectDB =  async () => {
    try {
        
        const con = mongoose.connect(process.env.MONGODB_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Connected to mongodb database');

    } catch (error) {
        console.error('Error connecting to the database');
        process.exit(1);
    }
}

export default connectDB;