const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sequelize = require("../config/database");

const authRoutes = require("../routes/auth");
const newsRoutes = require("../routes/news");

const { getOrCreateSystemUser } = require("../utils/sysUser");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/auth", authRoutes);
app.use("/news", newsRoutes);

sequelize
  .authenticate()
  .then(async () => {
    console.log("Connected to PostgreSQL");

    try {
      const sysUser = await getOrCreateSystemUser();
      console.log(`System User: ${sysUser.username}`);
    } catch (err) {
      console.error("Failed to initialize system user:", err.message);
    }
  })
  .catch((err) => console.error("Unable to connect to the database:", err));

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on PORT:${port}`);
  });
});
