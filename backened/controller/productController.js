import pool from "../config/postgres.js";
import Seller from "../models/seller.js";

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
    const {name,description,price,stock,size,category,subcategory,sellerEmail,bestsellers,topdeals} = req.body;
    
    try {
        const seller = await Seller.findOne({ email: sellerEmail });

        if (!seller) {
            return res.status(404).json({ message: "Seller not found" });
          }

        const sellerId = seller._id.toString();

    const query = `
      INSERT INTO products (name, description, price, stock, size,category,sub_category,seller_id, bestsellers, topdeals)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8,$9,$10) RETURNING id;
    `;

    const values = [name,description,price,stock,size,category,subcategory,sellerId,bestsellers || false,topdeals || false];
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