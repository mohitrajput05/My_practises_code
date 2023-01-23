import mysql from 'mysql';

const pool = mysql.createPool({
    host: 'localhost',
    database: 'productdb',
    user: 'root',
    password: 'root'
});

export default pool;