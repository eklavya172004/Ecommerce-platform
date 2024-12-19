import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema(
  {
    // Reference to the product being reviewed (from PostgreSQL)
    productId: {
      type: String, 
      required: [true, "Product ID is required"],
    },

    // Reference to the user who wrote the review
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",  
      required: [true, "User is required"],
    },

    // Rating given by the user (1 to 5 stars, for example)
    rating: {
      type: Number,
      required: [true, "Rating is required"],
      min: 1,
      max: 5,
    },

    // The review content (text)
    reviewText: {
      type: String,
      required: [true, "Review text is required"],
      maxlength: [500, "Review can't be more than 500 characters"],
    },

    // Image URL uploaded with the review (optional)
    image: {
      type: String,  // This will store the URL of the image uploaded to Cloudinary or other service
      required: false, // Optional, not all reviews will have images
    },

    // Date when the review was created
    createdAt: {
      type: Date,
      default: Date.now,
    },

    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }  // Automatically adds createdAt and updatedAt fields
);

const Review = mongoose.model("Review", ReviewSchema);
export default Review;
