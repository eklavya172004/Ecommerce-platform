import jwt from "jsonwebtoken";
import User from "./../models/user.js";
import { promisify } from "util";

// Middleware to protect routes
export const protect = async (req, res, next) => {
    try {
        let token;

        // Extract token from the Authorization header
        if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
            token = req.headers.authorization.split(" ")[1];
        }

        if (!token) {
            return res.status(401).json({
                message: "You are not logged in. Please log in to access this resource.",
            });
        }

        // Verify the token
        const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

        // Check if the user still exists
        const loggedUser = await User.findById(decoded.id);
        if (!loggedUser) {
            return res.status(401).json({
                message: "The user associated with this token no longer exists.",
            });
        }

        // Check if the user changed their password after the token was issued
        if (loggedUser.changedpassword(decoded.iat)) {
            return res.status(401).json({
                message: "Password recently changed. Please log in again.",
            });
        }

        // Grant access to the protected route
        req.user = loggedUser;
        next();
    } catch (error) {
        console.error("Error in protect middleware:", error.message);
        res.status(500).json({
            message: "Error verifying the token.",
            error: error.message,
        });
    }
};

// Middleware to restrict access based on roles
export const restrictedto = (...roles) => {
    return (req, res, next) => {
        try {
            if (!roles.includes(req.user.role)) {
                return res.status(403).json({
                    message: "You do not have permission to perform this action.",
                });
            }
            next();
        } catch (error) {
            console.error("Error in restrictedto middleware:", error.message);
            res.status(500).json({
                message: "Error checking permissions.",
                error: error.message,
            });
        }
    };
};
