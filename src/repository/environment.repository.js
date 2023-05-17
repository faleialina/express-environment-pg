const { pool } = require('../db');

async function getAllEnvironmentDb() {
  const client = await pool.connect();
  const sql = 'SELECT * FROM environment';
  const result = (await client.query(sql)).rows;
  return result;
}

async function getEnvironmentByIdDb(id) {
  const client = await pool.connect();
  const sql = 'SELECT * FROM environment where id = $1';
  const result = (await client.query(sql, [id])).rows;
  return result;
}

async function createEnvironmentDb(label, category, priority) {
  const client = await pool.connect();
  const sql = 'INSERT INTO environment(label, category, priority) VALUES ($1,$2,$3) returning *';
  const result = (await client.query(sql, [label, category, priority])).rows;
  return result;
}

async function updateEnvironmentDb(id, label, category, priority) {
  const client = await pool.connect();
  const sql = 'UPDATE environment SET  label = $1, category = $2, priority = $3 WHERE id = $4 returning *';
  const result = (await client.query(sql, [label, category, priority, id])).rows;
  return result;
}

async function deleteEnvironmentDb(id) {
  const client = await pool.connect();
  const sql = 'DELETE FROM environment WHERE id = $1 returning *';
  const result = (await client.query(sql, [id])).rows;
  return result;
}

module.exports = { getAllEnvironmentDb, getEnvironmentByIdDb, createEnvironmentDb, updateEnvironmentDb, deleteEnvironmentDb };
