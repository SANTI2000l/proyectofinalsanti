const mysql = require("mysql2");
const db = mysql.createConnection ({
    host: "127.0.0.1",
    user: "jpgarzon",
    password: "ejemploclave",
    database: "cursos",
});
// ejemplo de cambio de comentario .....
db.connect((err)=> {
    if (err) {
        throw err;
    }
    console.log ("BD Mysql Conectado");
});

module.exports = db;

//sudo npm install netlify-cli -g
//npm init
//netlify init
//netlify





