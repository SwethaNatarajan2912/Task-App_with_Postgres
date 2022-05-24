const dbConfig = require(`../../config/db.config`);
const Sequelize = require(`sequelize`);
const { Op } = require(`sequelize`)
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,//maximum number of connection in pool
    min: dbConfig.pool.min,//minimum number of connection in pool
    acquire: dbConfig.pool.acquire,//maximum time, in milliseconds, that pool will try to get connection before throwing error
    idle: dbConfig.pool.idle//maximum time, in milliseconds, that a connection can be idle before being released
  }
});
const db = {};
db.Sequelize = Sequelize;//DataTypes
db.sequelize = sequelize;
db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
module.exports = db;