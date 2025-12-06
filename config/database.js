const { Sequelize } = require("sequelize");
require('dotenv').config()
import postgres from 'postgres';
import { neon } from "@neondatabase/serverless";

const sql = postgres(process.env.DATABASE_URL,  { ssl: 'verify-full' });

export async function getData() {
    const sql = neon(process.env.DATABASE_URL);
    const data = await sql`SELECT * FROM posts;`;
    return data;
}
module.exports = new Sequelize(
  process.env.PGDATABASE,
  process.env.PGUSER,
  process.env.PGPASSWORD,
  {
    host: process.env.PGHOST,
    dialect: "postgres",
    port: 5432,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
);