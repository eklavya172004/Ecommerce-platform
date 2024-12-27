import mongoose from "mongoose";
import validator from 'validator'

const AdminSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: [true, "Please enter your name"],
        trim: true,
        maxlength: [40, "Name must not exceed 40 characters"],
        minlength: [5, "Name must be at least 5 characters"],
      },
      email: {
        type: String,
        unique: true,
        required: [true, "Please enter your email"],
        validate: [validator.isEmail, "Please provide a valid email"],
        lowercase: true,
        trim: true,
      },
      password: {
        type: String,
        required: [true, "Please enter a password"],
        minlength: [8, "Password must be at least 8 characters long"],
        maxlength: [15, "Password must be at most 15 characters long"],
        select: false, // Do not expose password in queries by default
      },
      role: {
        type: String,
        default: "admin", // All records in Admin schema are admins
        enum: ["admin"], // Only 'admin' role is allowed here
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      passwordChangedAt: Date,
      passwordResetToken: String,
      passwordResetExpiresAt: Date,
    },
    { timestamps: true } // Automatically add `createdAt` and `updatedAt`
  );
  
 export default mongoose.model('Admin', AdminSchema);