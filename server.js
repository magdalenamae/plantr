console.log('hi')
const express = require("express");
const db = require('./database/db.js')

//const pgSession = require('connect-pg-simple')(expressSession);



//const userController = require('./controllers/users.js')
const plantsControllers = require('./controllers/plants.js')

const app = express()
const port = 3000;

app.use(express.static('client'))
app.use(express.json())



//code for create session



//
//middleware 
app.use((req, res, next) => {
    console.log(`${new Date()} ${req.method} ${req.path}`);
    next()
  })

//plants API
app.use('/api/plants',plantsControllers)

//handle any error that wasn't handled

app.use((err,req,res,next)=>{
    let status = err.status || 500;
  let message = err.message || "something went wrong";

  res.status(status).json({ message });

  next(err);
})

// start the web server
app.listen(port, () => {
    console.log(`listening on port http://localhost:${port}`);
  });