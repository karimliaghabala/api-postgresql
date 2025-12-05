const { Pool } = require('pg')
require('dotenv').config()

const pool = new Pool({
  user: process.env.NewsData_POSTGRES_USER,
  password: process.env.NewsData_POSTGRES_PASSWORD,
  host: process.env.NewsData_POSTGRES_HOST,
  port: 5432,
  database: process.env.NewsData_POSTGRES_DATABASE,
  ssl: {
    rejectUnauthorized: false
  }
})

pool.on('error', (err) => {
  console.error('Pool xətası:', err)
})

module.exports = pool