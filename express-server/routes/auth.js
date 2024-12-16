const express = require("express");
const { login, validate } = require("../controllers/auth");

const router = express.Router();

router.post("/login", login);
router.post("/validate", validate);

module.exports = router;
