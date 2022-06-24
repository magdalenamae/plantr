const express = require("express");
const { redirect } = require("express/lib/response");
const res = require("express/lib/response");
const router = express.Router();
const db = require("../database/db");

router.post("/", (req, res) => {
  const { email, password } = req.body;
  const sql = `SELECT * FROM users WHERE email = $1`;
  db.query(sql, [email]).then((dbRes) => {
    const user = dbRes.rows[0];
    const bcrypt = require("bcrypt");

    const generateHash = (password) => {
      return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
    };

    function isValidPassword(plainTextPassword, passwordHash) {
      return bcrypt.compareSync(plainTextPassword, passwordHash);
    }

    if (user && isValidPassword(password, user.password_hash)) {
      req.session.userId = user.id;
      req.session.name = user.name;
      req.session.email = user.email;
      res.json({ message: "logged in successfully" });
      return;
    }
    res.status(400).json({ message: "invalid email or password" });
  });
});

router.get("/", (req, res) => {
  if (!req.session.userId) {
    res.status(401).json({ message: "Not Logged in" });
  } else {
    res.json({
      id: req.session.userId,
      name: req.session.name,
      email: req.session.email,
    });
  }
});

router.delete("/", (req, res) => {
  req.session.destroy(() => {
    res.json({ message: "logged out successfully" });
  });
});

module.exports = router;
