const pg = require("pg");

const db = new pg.Pool({
  database: "plantr",
});

module.exports = db;
