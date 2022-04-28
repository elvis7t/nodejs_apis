const mysql = require('mysql2')

const conexao = mysql.createConnection({
    host: 'mysql-container',
    port: 3306,
    password: 'admin',
    user: 'root', 
    database: 'agenda-petshop'
})

module.exports = conexao