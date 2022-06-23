const { response } = require("express");
const express = require("express");
const format = require("pg-format");
const router = express.Router();
const db = require("../database/db.js");

// get all data
router.get("/", (req, res) => {
  const sql = "select id, user_id ,plant_id from greenhouse";
  db.query(sql).then((dbResult) => {
    console.log(dbResult.rows);
    res.json(dbResult.rows);
  });
});
// get for particular id from greenhouse table to display user plants
router.get("/:id", (req, res) => {
  const user_id = req.params.id;
  console.log(user_id, "user_id");
  const sql =
    "select p.name ,p.description,p.image ,p.id, g.id as greenhouseid from plants p,greenhouse g  where p.id = g.plant_id and  g.user_id=$1 ORDER BY p.name ASC";

  db.query(sql, [user_id]).then((dbResult) => {
    console.log(dbResult);
    if (dbResult.rowCount == 0) {
      res.status(500).json({ success: false, message: " you dont have any plants to display" });
      return;
    } else {
      console.log(dbResult.rows);
      res.json(dbResult.rows);
      return;
    }
  });
});
router.post("/", (req, res) => {
  const reqData = req.body;
  const username = reqData["name"];
  const userid = reqData["userid"];
  console.log(reqData, "reqData");
  const plantidsArrayString = reqData["plantid"];
  const plantsidNumArray = plantidsArrayString.map((a) => parseInt(a));

  // const sql ='INSERT into greenhouse(name,plant_id,user_id) values ($1,$2,$3)'
  // db.query(sql,[reqDtata['name'],reqDtata['plantid'],reqDtata['userid']])
  console.log(reqData, "reqData");
  console.log(username, "username");
  console.log(userid, "userid");
  console.log(plantsidNumArray, "plants.id");

  let values = [
    // ['sam1', 3, 2],
    // ['sam1',3,3]
  ];

  plantsidNumArray.forEach((value) => {
    values.push(dataArray(username, userid, value));
  });
  console.log(values, "ee hai value");

  //lets try it this way

  return db
    .query(format("INSERT INTO greenhouse (name, user_id, plant_id) VALUES %L", values))
    .then((result) => {
      console.log("this ");
      console.log(result);
      res.json({ success: true });
    })
    .catch((err) => {
      res.status(500).json({ success: false, message: "error" });
    });
});

// , (err, result)=>{
//     res.status(200).json({ success:true });
//   })
//   .catch((error)=>{
//     console.log('error',error)
//     res.status(400).json({success:false, message: error})
// })

// })

function dataArray(username, userid, plantid) {
  console.log(username, userid, plantid);

  return [username, userid, plantid];
}

//to delete from greenhouse
//remove plant
router.delete("/:id", (req, res) => {
  const plantId = req.params.id;
  const sql = `DELETE FROM greenhouse WHERE (id) = ($1)`;

  db.query(sql, [plantId]).then((dbRes) => {
    res.json({ success: true });
  });
});

//   console.log(reqDtata, "reqDtata");
// });

module.exports = router;
