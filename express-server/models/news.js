const { DataTypes } = require("@sequelize/core");
const sequelize = require("../config/database");

const News = sequelize.define("News", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contentBlocks: {
    type: DataTypes.JSONB,
    allowNull: false,
  },
});

module.exports = News;
