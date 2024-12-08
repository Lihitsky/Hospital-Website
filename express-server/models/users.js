const { DataTypes } = require("@sequelize/core");
const sequelize = require("../config/database");

const Users = sequelize.define("Users", {
  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Users;
