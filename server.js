console.log("hi");
const express = require("express");
require("dotenv").config();
const db = require("./database/db.js");

const expressSession = require("express-session");
const pgSession = require("connect-pg-simple")(expressSession);

//const userController = require('./controllers/users.js')
const greenHouseControllers = require("./controllers/greenHouse.js");
const sessionController = require("./controllers/session");
const plantsController = require("./controllers/plants");
const signupController = require("./controllers/signup");
const careController = require("./controllers/care");
const { append } = require("express/lib/response.js");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("client"));
app.use(express.json());

//code for create session
app.use(
  expressSession({
    store: new pgSession({
      pool: db,
      createTableIfMissing: true,
    }),
    secret: 'secretidere',
    saveUninitialized: false,
    sameSite: 'none',
    secure: true,
  })
);


//middleware
app.use((req, res, next) => {
  console.log(`${new Date()} ${req.method} ${req.path}`);
  next();
});

//plants API
app.use("/api/greenHouse", greenHouseControllers);
app.use("/api/session", sessionController);
app.use("/api/plants", plantsController);
app.use("/api/users", signupController);
app.use("/api/care", careController);

//handle any error that wasn't handled
app.use((err, req, res, next) => {
  let status = err.status || 500;
  let message = err.message || "something went wrong";
  res.status(status).json({ message });
  next(err);
});


// start the web server
app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`);
});
