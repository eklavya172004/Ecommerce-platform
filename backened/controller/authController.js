import User from './../models/user';
import Seller from './../models/seller'
import Admin from './../models/admin'
import jwt from 'jsonwebtoken'

const signToken = (id,role) => {
    return jwt.sign({id,role},process.env.JWT_SECRET,{ expiresIn: process.env.JWT_EXPIRES_IN })
}

//Login for any user/seller/admin
export const login = async (req,res) => {
    const {email,password,role} = req.body;

    try {
        let user;
        
        if(!email && !password){
            return res.status(400).json({
                message:"Please provide an valid email!"
            })
        }

        if(role === 'admin'){
            user = await Admin.findOne({email}).select('+password');
        }
        else if(role ==='seller'){
            user = await Seller.findOne({email}).select('password');
        }else{
            user = await User.findOne({email}).select('password');
        }

        if(!user || !(await user.correctPassword(password,user.password))){
            return res.status(404).json({
                message:"User not found"
            });
        }
        
        const token = signToken(user._id,user.role || "user");

    } catch (error) {
        res.status(500).json({ message: "Error during login", error });
    }
}

//sign up for every user ,seller and admin
export const signup = async (req,res) => {
    const {name,email,role,password,passwordConfirmation,storename,storeaddress,storelogo} = req.body;
    
    try {
        let newUser;

        if(role === "seller"){
            //Creating an seller account
            newUser = new Seller({name,email,role,password,passwordConfirmation,storename,storeaddress,storelogo});
        }else if(role === "admin"){
            return res.status(403).json({message:"Admins cannot sign-up directly!"});
        }else{
            //default is user
            newUser = new User({name,email,role,password,passwordConfirmation});
        }

        await newUser.save();

        const token = signToken(newUser._id,role||"user");

        res.status(201).json({
            message:`${role||"user"} created successfully!`,
            token
        })

    } catch (error) {
            res.status(500).json({message:"error during sign-up"});
    }
}

export const adminlogin = async(req,res) => {
    const {name,email,password,passwordConfirmation} = req.body;

    const requestingadmin = req.user?.id; //id of the admin making the req to check that if it exist or not

    try {
        const verifyadmin = await Admin.findById(requestingadmin);

        if(!verifyadmin){
            return res.status(403).json({
                message:'Only existing admins can create new admins'
            });
        }

        const newAdmin = new Admin({
            name,email,password,passwordConfirmation,
        })

        await newAdmin.save();

        const token = signToken(newAdmin._id,"admin");

        res.status(201).json({
            message:"Admin created successfully"
        })
    } catch (error) {
                res.status(500).json({
                message: "Error during admin sign-up.",
                error: error.message,
                });
            }
}