import pkg from 'pg';
const { Pool } = pkg;


const pool = new Pool({
 
});

// console.log(`${process.env.PG_USER} ${process.env.PG_HOST} ${process.env.PG_DATABASE} ${process.env.PG_PASSWORD} ${process.env.PG_PORT}`);

export default pool;
