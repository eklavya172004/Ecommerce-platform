import pkg from 'pg';
const { Pool } = pkg;


// PG_USER=postgres
// PG_HOST=localhost
// PG_DATABASE=ecommerce
// PG_PASSWORD=eklavya17
// PG_PORT=5432
const pool = new Pool({
 
});

// console.log(`${process.env.PG_USER} ${process.env.PG_HOST} ${process.env.PG_DATABASE} ${process.env.PG_PASSWORD} ${process.env.PG_PORT}`);

export default pool;
