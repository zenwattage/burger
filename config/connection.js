//connect to burger_db
var mysql = require('mysql');


//create connection to db
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Snowba1!T055',
    database: 'burgers_db'
});

connection.connect((err) => {
    if(err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id: " + connection.threadId);
});

module.exports = connection; 
