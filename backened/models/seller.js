import mongoose from "mongoose";
import validator from 'validator';

const SellerSchema = mongoose.Schema({
        userID:{type:mongoose.Schema.Types.ObjectId,
                ref:"User",
                required:true
        },
         email:{
                type:String,
                required:[true,'Email is required'],
                unique:true,
                validate:[validator.isEmail,'Please provide and valid email'],
                lowercase:true
            },
       storename:{
            type:String,
            required: [true, "Store name is required"],
            trim:true
       },
       storeaddress:{
            type:String,
            required: [true, "Store address is required"],
            trim:true
       },
       storelogo: { type: String , required:false},
    //    role:{type:String,},
       
},
        { timestamps: true }
);

 export default mongoose.model('Seller', SellerSchema);