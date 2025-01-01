// import Seller from "../models/sellerModel.js";
import Seller from "../models/seller.js";
import pool from "../config/postgres.js";

export const getSellerProduct = async (req,res) => {
    try {
        const userID = req.user.id;
        
        const seller = await Seller.findOne({userID:userID});
        
        if (!seller) {
            return res.status(404).json({ message: "Seller account not found.Please make an seller account"});
        }
        
        const sellerId = seller._id.toString();
        
        
        console.log("seller ID from req:", sellerId);
        const result = await pool.query("SELECT * FROM products WHERE seller_id = $1 ;", [sellerId]);

        res.status(200).json(result.rows);
        } 
        catch (error) {
            console.error("Error fetching seller's products", error);
            res.status(500).json({ message: "Error fetching seller's products", error });
        }
}