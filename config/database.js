const { createClient } = require('@supabase/supabase-js')
require('dotenv').config()

const supabase = createClient(
  process.env.Big_News_SUPABASE_URL,
  process.env.Big_News_SUPABASE_ANON_KEY
)

module.exports = supabase





// const { Sequelize } = require("sequelize");
// require('dotenv').config()

// module.exports = new Sequelize(
//   process.env.Big_News_POSTGRES_DATABASE,
//   process.env.Big_News_POSTGRES_USER,
//   process.env.Big_News_POSTGRES_PASSWORD,
//   {
//     host: process.env.Big_News_POSTGRES_HOST,
//     dialect: "postgres",
//     port: 5432,
//     dialectOptions: {
//       ssl: {
//         require: true,
//         rejectUnauthorized: false
//       }
//     }
//   }
// );



// postgres:3991001993@localhost:3000/

