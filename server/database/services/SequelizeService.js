const Sequelize = require("sequelize");
const parseDbUrl = require("parse-database-url");
const dbConfig = parseDbUrl(process.env["SQL_DB_URL"]);
const CallbackUtil = require("../../util/CallbackUtil.js");
const callbackUtil = new CallbackUtil("SequelizeConfig");
const modelLoader = require("./ModelLoader.js");

const db = {};
db.Sequelize = Sequelize;

const sequelize = new Sequelize(
  dbConfig.database, dbConfig.user, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.driver,
  pool: {
    max: parseInt(process.env.SQL_DB_POOL_MAX_CONNECTIONS),
    min: parseInt(process.env.SQL_DB_POOL_MIN_CONNECTIONS),
    acquire: parseInt(process.env.SQL_DB_POOL_AQUIRE_TIME),
    idle: parseInt(process.env.SQL_DB_POOL_IDLE_TIME)
  }
});

db.sequelize = sequelize;
db.proved = false;

db.prove = (callback) => {
  db.sequelize.authenticate()
    .then(()=>{
      db.proved = true;
      callback(callbackUtil.new("success", "none",
        "Successfully connected to the database.", false, "test"));
    })
    .catch((error) => {
      callback(callbackUtil.new("error", "none",
        "Unable to connect to the database. Error: "+error, false, "test"));
    });
}

db.loadModels = () => { modelLoader(db.sequelize); }

module.exports = db;
