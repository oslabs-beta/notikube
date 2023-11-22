const { Pool } = require('pg');
require('dotenv').config();


const pool = new Pool({
    connectionString: process.env.PG_URI
})

module.exports = {
    query: (text, params, callback) => {
        console.log('successful query for: ', text);
        return pool.query(text, params, callback);
    }
}