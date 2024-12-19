import mongoose from "mongoose";

const userActivity = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", 
      required: true,
    },
    cart: [
      {
        productId: { 
          type: String,  // (referencing PostgreSQL product ID)
          required: true,
        },
        quantity: { type: Number, default: 1 },
        addedAt: { type: Date, default: Date.now },
      },
    ],
    wishlist: [
      {
        productId: { 
          type: String,  
          required: true,
        },
        addedAt: { type: Date, default: Date.now },
      },
    ],
    viewedProducts: [
      {
        productId: { 
          type: String,  
          required: true,
        },
        viewedAt: { type: Date, default: Date.now },
      },
    ],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

const UserActivity = mongoose.model("UserActivity", userActivity);

export default UserActivity;
