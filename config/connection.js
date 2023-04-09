const Sequelize = require('sequelize');
require('dotenv').config();

// let sequelize;

// if (process.env.JAWSDB_URL) {
//   sequelize = new Sequelize(process.env.DB_URL);
// } else {
//   sequelize = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASSWORD,
//     {
//       host: '127.0.0.1',
//       dialect: 'mysql',
//       port: 3306
//     }
//   );
// }

const {DB_URL, DB_NAME, DB_USERNAME, DB_PASSWORD, DB_PORT } = process.env;

const sequelize = new Sequelize(
  DB_NAME,
  DB_USERNAME,
  DB_PASSWORD, {
    host: DB_URL,
    dialect: 'mysql',
    port: DB_PORT,
    dialectOptions: {
      multipleStatements: true
    }
  }
)

module.exports = sequelize;