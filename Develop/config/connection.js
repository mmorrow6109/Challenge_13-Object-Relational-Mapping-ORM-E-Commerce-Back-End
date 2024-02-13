require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql',
  database: 'ecommerce_db',
  username: 'root',
  password: 'mySQLTweezer6109!',
  host: 'localhost'
});

module.exports = sequelize;