const { pool } = require('../db');
async function getAllEnvironmentDb() {
    const client = await pool.connect();
    const sql = 'SELECT *FROM environment';
    const result = (await client.query(sql)).rows;
    return result;
}

module.exports = { getAllEnvironmentDb };