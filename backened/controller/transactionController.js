import pool from "../config/postgres.js";

export const createTransaction = async (req,res) => {
    const {userId,amount,paymentMethod,paymentStatus,productIds,transactionId} = req.body;

    try {
        const query = `
        INSERT INTO transactions (user_id, amount, payment_method, payment_status, product_ids, 
        stripe_transaction_id, razorpay_transaction_id)
        VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id;
      `;
        
        const values = [userId,amount,paymentMethod,paymentStatus,productIds,
            paymentMethod === 'stripe' ? transactionId : null,
            paymentMethod === 'razorpay' ? transactionId : null
        ];

        const result = await pool.query(query,values);

        res.status(201).json({ message: 'Transaction created successfully', transactionId: result.rows[0].id });
    } catch (error) {
        console.error('Error creating transaction:', error);
        res.status(500).json({ message: 'Error creating transaction' });
    }
}