import pool from "../config/postgres.js";
// import seller from "../models/seller.js";
import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer'
import Seller from "../models/seller.js";
import { Readable } from 'stream';

export const getAllProducts = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM products");
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error fetching the products', error);
        res.status(500).json({ message: "Error fetching the products", error });
    }
}

export const createProducts = async (req,res) => {
    const {name,description,price,stock,size,category,subcategory,sellerEmail,bestsellers,topdeals,available_discount} = req.body;

    try {
        const seller = await Seller.findOne({ email: sellerEmail });
        console.log(req.body);

        if (!seller) {
            return res.status(404).json({ message: "Seller not found (make product using the existing sellers email)" });
          }

        const sellerId = seller._id.toString();

        console.log(req.files);
        const images1 = req.files.images1 && req.files.images1[0];
        const images2 = req.files.images2 && req.files.images2[0];
        const images3 = req.files.images3 && req.files.images3[0];
        const images4 = req.files.images4 && req.files.images4[0];
        const images5 = req.files.images5 && req.files.images5[0];
        
    // Filtering out undefined values
    const images = [images1, images2, images3, images4, images5].filter((item) => item !== undefined);

    // Uploading images to Cloudinary using buffers (not paths)
    // const images = [images1, images2, images3, images4, images5].filter((item) => item !== undefined);

    // Uploading images to Cloudinary using buffers (not paths)
    let imageUrls = await Promise.all(
        images.map((item) => {
            return new Promise((resolve, reject) => {
                const uploadStream = cloudinary.uploader.upload_stream(
                    { resource_type: 'image' },
                    (error, result) => {
                        if (error) {
                            return reject(error.message);  // Reject with error message
                        }
                        resolve(result.secure_url);  // Resolve with the URL of the uploaded image
                    }
                );

                // Create a readable stream from the buffer
                const bufferStream = Readable.from(item.buffer);
                bufferStream.pipe(uploadStream);  // Pipe the buffer into Cloudinary
            });
        })
    );

    // console.log(imageUrls);
          

    const query = `
      INSERT INTO products (name, description, price, stock, size,category,sub_category,seller_id, bestsellers, topdeals,image_urls,available_discount)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8,$9,$10,$11,$12) RETURNING id;
    `;

    const values = [name,description,price,stock,size,category,subcategory,sellerId,bestsellers || false,topdeals || false,imageUrls,available_discount || 0];
    const result = await pool.query(query, values);

    res.status(201).json({ message: 'Product created successfully', productId: result.rows[0].id });

    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ message: 'Error creating product' ,error});
    }
}

export const getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query("SELECT * FROM products WHERE id = $1", [id]);
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error fetching the product', error);
        res.status(500).json({ message: "Error fetching the product", error });
    }
}

export const deleteproduct = async (req,res) => {
    const {id} = req.params;

    try {
        const result = await pool.query("DELETE FROM products WHERE id = $1 RETURNING id;", [id]);

        if(result.rowCount === 0){
            return res.status(404).json({message:"Product not found"});
        }

        res.status(200).json({ message: 'Product deleted successfully', productId: id });

    } catch (error) {
            console.error('Error deleting the product', error);
            res.status(500).json({ message: "Error deleting the product", error });
    }
}

export const updateproduct = async (req,res) =>{
    
    const {id} = req.params;

    const { name,
            description,
            price,
            stock,
            size,
            category,
            subcategory,
            bestsellers,
            topdeals    } =      req.body;

    try {
        const fields = [];
        const values = [];
        let query = "UPDATE products SET ";

        if(name){
            fields.push("name = $"+(fields.length+1));
            values.push(name);
        }

        if(description){
            fields.push("description = $"+(fields.length+1));
            values.push(description);
        }

        if(price){
            fields.push("price = $"+(fields.length+1));
            values.push(price);
        }

        if(stock){
            fields.push("stock = $"+(fields.length+1));
            values.push(stock);
        }

        if(size){
            fields.push("size = $"+(fields.length+1));
            values.push(size);
        }

        if(category){
            fields.push("category = $"+(fields.length+1));
            values.push(category);
        }

        if(subcategory){
            fields.push("sub_category = $"+(fields.length+1));
            values.push(subcategory);
        }

        if(bestsellers !== undefined){
            fields.push("bestsellers = $"+(fields.length+1));
            values.push(bestsellers);
        }

        if(topdeals !== undefined){
            fields.push("topdeals = $"+(fields.length+1));
            values.push(topdeals);
        }

        if (fields.length === 0) {
            return res.status(400).json({ message: "No fields to update" });
        }

        query += fields.join(", ");
        query += " WHERE id = $" + (fields.length  + 1) + " RETURNING *;";
        values.push(id);

        const result  = await pool.query(query,values);

        if (result.rowCount === 0) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Product updated successfully", product: result.rows[0] });

    } catch (error) {
        console.error("Error updating the product", error);
        res.status(500).json({ message: "Error updating the product", error });
    }
}