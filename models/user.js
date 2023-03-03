// user model
const Sequelize = require("sequelize");
const db = require("../util/database");

const User = db.define("user", {
  id: {},
  name: Sequelize.STRING,
  email: Sequelize.STRING,
});
