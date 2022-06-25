const { response } = require("express");
const express = require("express");
const format = require("pg-format");
const router = express.Router();
const db = require("../database/db.js");

router.get("/", (req, res) => {
  const sql = "select * from care";
  db.query(sql).then((dbResult) => {
    res.json(dbResult.rows);
  });
});

router.get("/:id", (req, res) => {
  const plant_id = req.params.id;
  const sql =
    "select p.name , p.description , p.image ,p.id , c.water, c.light, c.humidity, c.soil from  plants p, care c where p.id = c.plant_id and c.care_id in (select plant_id from care where plant_id=$1)";
  db.query(sql, [plant_id]).then((dbResult) => {
    console.log(dbResult);
    res.json(dbResult.rows);
  });
});

module.exports = router;
