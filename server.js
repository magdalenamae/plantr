const express = require("express");
// require("dotenv").config();
const expressSession = require("express-session");
const pgSession = require("connect-pg-simple")(expressSession);

//controller paths
const sessionController = require("./controllers/session");

const db = require("./database/db");

const app = express();
const port = 4000;

app.use(
  expressSession({
    store: new pgSession({
      pool: db,
      createTableIfMissing: true,
    }),
    secret: "this is a secret key",
  })
);

app.use(express.static("client"));
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${new Date()} ${req.method} ${req.path}`);
  next();
});

//controllers
app.use("/api/session", sessionController);

app.listen(port, () => {
  console.log(`Web server is listening on http://localhost:${port}`);
});
