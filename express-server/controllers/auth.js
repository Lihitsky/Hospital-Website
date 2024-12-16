const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Users = require("../models/users");

const SECRET_KEY = process.env.JWT_SECRET;

// exports.register = async (req, res) => {
//   try {
//     const { username, password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = await Users.create({ username, password: hashedPassword });
//     res.status(201).json({ message: "User registered successfully" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await Users.findOne({ where: { username } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ userId: user.id }, SECRET_KEY);
    res.json({ user, token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.validate = async (req, res) => {
  try {
    const { token } = req.body;

    if (!token) {
      return res.status(401).json({ message: "Invalid token" });
    }

    const payload = jwt.verify(token, SECRET_KEY);
    const userId = payload.userId;
    const user = await Users.findByPk(userId);
    if (!user) {
      return res.status(401).json({ message: "Invalid token" });
    }

    res.json({ user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
