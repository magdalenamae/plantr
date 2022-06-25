const express = require("express");
const router = express.Router();
const db = require("../database/db");
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
  const sql = "SELECT * FROM users";
  db.query(sql).then((dbResult) => {
    res.json(dbResult.rows);
  });
});

router.post("/", (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let password = req.body.password;

  function generateHash(pass) {
    return bcrypt.hashSync(pass, bcrypt.genSaltSync(10), null);
  }
  let passwordHash = generateHash(password);

  if (name === undefined || name === "") {
    res.status(400).json({ success: false, message: "name is required" });
  } else if (email === undefined || email === "") {
    res.status(400).json({ success: false, message: "email is required" });
  } else if (email.length < 7) {
    res.status(400).json({ success: false, message: "email is too short" });
  } else if (passwordHash === undefined || passwordHash === "") {
    res.status(400).json({ success: false, message: "password is required" });
  } else if (passwordHash.length < 6) {
    res.status(400).json({ success: false, message: "password is too short" });
  } else {
    const sql = `INSERT INTO users (name, email, password_hash) VALUES ($1, $2, $3)`;

    db.query(sql, [name, email, passwordHash])
      .then((dbRes) => {
        res.json({ success: true });
      })
      .catch((reason) => {
        res.status(500).json({ message: reason });
      });
  }
});

module.exports = router;
