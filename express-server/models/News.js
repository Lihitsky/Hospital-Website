const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const News = sequelize.define("News", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contentBlocks: {
    type: DataTypes.JSON,
    allowNull: false,
  },
});

module.exports = News;
