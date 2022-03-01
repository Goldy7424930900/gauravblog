const mysql = require("mysql");

const mySqlConnection = mysql.createConnection({
    host: "",
    user: "root",
    password: "",
    database: "sql12329497",
    multipleStatements: true
});

mySqlConnection.connect(err => {
    if (err) console.log(err);
    else console.log("Database Connected!");
});

module.exports = mySqlConnection;