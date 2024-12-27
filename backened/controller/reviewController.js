import Review from "../models/review.js";
import pool from "../config/postgres.js";
// import Product from "../models/product.js";

export const getproductreview = async (req,res) => {
    
    try {
        
        const { id } = req.params;

        const reviews = await Review.find({ productId: id }).populate("userId","name");

        res.status(200).json(reviews);

    } catch (error) {
        
        console.error('Error fetching the reviews', error);
        res.status(500).json({ message: "Error fetching the reviews", error });
    }
}

export const createReview = async (req,res) => {

    const { productId } = req.params;
    const {rating,reviewText,image} = req.body;
    
    const userId = req.user._id;

    try {

        const result = await pool.query("SELECT * FROM products WHERE id = $1", [productId]);

        if(result.rows.length === 0){
            return res.status(404).json({message:"Product not found"});
        }

        const newReview = await Review.create({
            productId,
            userId,
            rating,
            reviewText,
            image,
        });

        await newReview.save();

        res.status(201).json({ message: 'Review created successfully', reviewId: newReview._id });

    } catch (error) {
        console.log('Error creating review:', error);
        res.status(500).json({ message: 'Error creating review', error });
    }
}

export const updatereviews = async (req,res) => {
    const {productId,reviewId} = req.params;
    const {rating,reviewText,image} = req.body;

    const userId = req.user._id;

    try {
        const review = await Review.findOne({_id:reviewId,productId,userId});

        if(!review){
            return res.status(404).json({message:"Review not found or you're not authorized to update this review"});
        }

        if (rating) review.rating = rating;

        if (reviewText)  review.reviewText = reviewText;

        if (image) review.image = image;

        await review.save();

        res.status(200).json({ message: "Review updated successfully", review });

}catch(error){
    console.error('Error fetching the review', error);
    res.status(500).json({ message: "Error fetching the review", error });
}

}

export const deleteReview = async (req,res) =>{
    const {productId,reviewId} = req.params;

    const userId = req.user._id;

    try {
        const review = await Review.findOneAndDelete({_id:reviewId,productId,userId});

        if(!review){
            return res.status(404).json({message:"Review not found or you're not authorized to delete this review"});
        }

        res.status(200).json({ message: "Review deleted successfully" });

        }catch(error){
        console.error('Error fetching the review', error);
        res.status(500).json({ message: "Error fetching the review", error });
         }
}