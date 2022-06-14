// 1. Import the pg library
const pg = require("pg")
// 2. Connect to the database


const db = new pg.Pool({
    database: 'plantr'
  })

  
  module.exports = db