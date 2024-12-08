const bcrypt = require("bcrypt");
const User = require("../models/users");

require("dotenv").config();

async function getOrCreateSystemUser() {
  try {
    const sysUserName = process.env.SYS_USER_NAME;
    const sysUserPassword = process.env.SYS_USER_PASS;

    if (!sysUserName || !sysUserPassword) {
      throw new Error(
        "SYS_USER_NAME or SYS_USER_PASSWORD is not defined in environment variables."
      );
    }

    let sysUser = await User.findOne({ where: { username: sysUserName } });

    if (!sysUser) {
      console.log(`System user "${sysUserName}" not found. Creating...`);

      const hashedPassword = await bcrypt.hash(sysUserPassword, 10);

      // Создаем системного пользователя
      sysUser = await User.create({
        username: sysUserName,
        password: hashedPassword,
      });

      console.log(`System user "${sysUserName}" created successfully.`);
    } else {
      console.log(`System user "${sysUserName}" found.`);
    }

    return sysUser;
  } catch (err) {
    console.error("Error fetching or creating system user:", err.message);
    throw err;
  }
}

module.exports = { getOrCreateSystemUser };
