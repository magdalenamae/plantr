const { response } = require("express");
const express = require("express");
const router = express.Router();
const db = require("../database/db.js");

//to get all plants
router.get("/", (req, res) => {
  const sql = "select * from plants";
  db.query(sql).then((dbResult) => {
    res.json(dbResult.rows);
  });
});

//to get plants
router.get("/:name", (req, res) => {
  const plantName = req.params.name;
  const array = plantName.split(" ");
  const newArray = [];
  array.forEach((value) => {
    newArray.push(`%${value}%`);
  });
  const queryText = newArray.toString();
  const sql = `SELECT * FROM plants where name  ILIKE ANY($1)`;
  db.query(sql, [newArray])
    .then((dbResult) => {
      res.json(dbResult.rows);
    })
    .catch((error) => {
      res.status(500).json({ success: false, message: "No plants to display" });
    });
});

//add into plants
router.post("/", (req, res) => {
  let name = req.body.name;
  let image = req.body.image;
  let description = req.body.description;

  if (name === undefined || name === "") {
    res.status(400).json({ success: false, message: "name is required" });
  } else {
    const sql = `INSERT INTO plants (name, image, description) VALUES ($1, $2, $3)`;

    db.query(sql, [name, image, description])
      .then((dbRes) => {
        res.json({ success: true });
      })
      .catch((reason) => {
        res.status(500).json({ message: reason });
      });
  }
});

module.exports = router;
