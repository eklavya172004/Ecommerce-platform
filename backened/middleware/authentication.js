import jwt from 'jsonwebtoken'
import User from '../models/user'
import { promisify } from 'util';

export const protect = async (req,res) => {
    try {
        let token;

        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
            token = req.headers.authorization.split(' ')[1];
        }
        
        if(!token){
            return res.status(401).json({
                message:'You are not logged in to get the access!'
            })
        }

        const decoded = await promisify(jwt.verify)(token,process.env.JWT_SECRET);

        const loggedUser = await User.findById(decoded.id);

        if(!loggedUser){
            res.status(401).json({
                message:'the user doesn\'t exist as any longer'
            });
        }

        if(loggedUser.changedpassword(decoded.iat)){
            return res.status(401).json({
                message:'The user changed password! Please login again'
            })
        }

        req.user = loggedUser;

        next();
    } catch (error) {

        res.status(500).json({
            message: "Error verifying the token.",
            error: error.message,
          });
    }
}

export const restrictedto = (...roles) => {
    return (req,res,next) => {
        
        if(!roles.includes(req.user.role)){
  
            return res.status(403).json({
                message:'You do not have permission for that!'
            })
        }

        next();
    }
}