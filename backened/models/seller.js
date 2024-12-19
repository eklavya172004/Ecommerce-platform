import mongoose from "mongoose";

const SellerSchema = mongoose.Schema({
        userID:{type:mongoose.Schema.Types.ObjectId,
                ref:"User",
                required:true
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

const Seller = mongoose.model('Seller',SellerSchema);
module.exports  = Seller;