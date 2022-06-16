const { response } = require('express');
const express = require('express');

const router = express.Router()
const db = require('../database/db.js')



// get all data 
router.get('/', (req, res) => {
    const sql = "select user_id ,plant_id from greenhouse"
    db.query(sql).then((dbResult) => {
      console.log(dbResult.rows)
       res.json(dbResult.rows)
  
    })
  })
// get for particular id
router.get('/:id',(req,res)=>{
    const user_id = req.params.id
    console.log(user_id,"user_id")
    const sql = 'select p.name ,p.description,p.image ,p.id from plants p,greenhouse g  where p.id = g.plant_id and p.id in (select plant_id from greenhouse where user_id=$1)'
    db.query(sql,[user_id])
    .then((dbResult)=>{
        console.log(dbResult)
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
router.post('/',(req,res)=>{
    const reqDtata= req.body
    const sql ='INSERT into greenhouse'
   
    console.log(reqDtata,"reqDtata")
    
})


  module.exports = router