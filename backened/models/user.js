import mongoose from "mongoose";
import validator from 'validator'

const Userschema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please enter your name'],
        trim:true,
        maxlength:[40,'Please enter less than or equal to 40 characters'],
        minlength:[5,'Please enter more than 5 characters']
    },
    email:{
        type:String,
        required:[true,'Email is required'],
        validate:[validator.isEmail,'Please provide and valid email'],
        lowercase:true
    },
    role:{type:String,default:'user',enum: ["user", "seller", "admin"],},
    password:{
        type:String,
        required:[true,'Password is required'],
        minlength: [8, 'Password must be at least 8 characters long'], 
        maxlength: [15, 'Password must be at most 10 characters long'],
    },
    passwordConfirmation:{
        type:String,
        required:[true, 'Password confirmation is required'],
        validate: {
            // this only works on save and create
            validator: function(value) { 
            return value === this.password;
            },
            message: 'Passwords do not match'
        }
    },
    createdAt:{type:Date, default: Date.now },
    passwordChangedAt: Date,
    passwordResetToken:String,
    passwordResetExpiresAt: Date
});

const User = mongoose.model('User',Userschema);

module.exports = User;