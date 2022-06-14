const { response } = require('express');
const express = require('express');

const router = express.Router()
const db = require('../database/db.js')



// get all data 
router.get('/', (req, res) => {
    const sql = "select id,name  from plants"
    db.query(sql).then((dbResult) => {
      console.log(dbResult.rows)
      res.json(dbResult.rows)
  
    })
  })
// get for particular id
router.get('/:id',(req,res)=>{
    const user_id = req.params.id
    console.log(user_id,"user_id")
    const sql = 'select * from plants where user_id=$1'
    db.query(sql,[user_id])
    .then((dbResult)=>{
        if( dbResult.rowCount == 0 ){
            res.status(500).json({success:false, message:" you dont have any plants to display"})
            return
        }else {
            console.log(dbResult.rows)
            res.json(dbResult.rows)
            return
        }   
    })
    .catch((error)=>{
        console.log('error',error)
        res.status(400).json({success:false, message: error})
    })
})



  module.exports = router