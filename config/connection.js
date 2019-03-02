// Set up MySQL connection.
var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "",
//   database: "burgers_db"
// });

var connection = mysql.createConnection({
  port: 3306,
  host: 'h2cwrn74535xdazj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user: 'juj0mn01g5cse60f',
  password: "xy2ki3dmnjdip7yk",
  database: "ticikt0vkm7hco7g" 
});


// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
