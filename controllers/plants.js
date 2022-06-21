const { response } = require("express");
const express = require("express");
const router = express.Router();
const db = require("../database/db.js");

//to get all plants
router.get("/", (req, res) => {
  const sql = "select * from plants";
  db.query(sql).then((dbResult) => {
    console.log(dbResult.rows);
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

router.get('/:name', (req,res)=>{
    const plantName = req.params.name
    const array = plantName.split(" ")
    const newArray =[]
    array.forEach((value)=>{(newArray.push(`%${value}%`))
    })
    
   console.log(newArray.toString(),"new array")
   const queryText = newArray.toString()
console.log(newArray,"new array 2")
    const sql = `SELECT * FROM plants where name  ILIKE ANY($1)`
    db.query(sql,[newArray]).then((dbResult) => {
        console.log(sql,queryText)
      console.log(dbResult.rows,"searchplants ") 

       res.json(dbResult.rows)
    
    })
    .catch(error=>{
        res.status(500).json({success:false, message:"No plants to display"})
    })

//   console.log(newArray.toString(), "new array");
//   const queryText = newArray.toString();
//   console.log(newArray, "new array 2");
//   const sql = `SELECT * FROM plants where name  ILIKE ANY($1)`;
//   db.query(sql, [newArray]).then((dbResult) => {
//     console.log(sql, queryText);
//     console.log(dbResult.rows);
//     res.json(dbResult.rows);
//   });
// });


module.exports = router;
