const mysql = require('mysql2')

const conexao = mysql.createConnection({
    host: 'mysql-container',
    port: 3306,
    password: 'db_user_pass',
    user: 'db_user', 
    database: 'app_db'
})

module.exports = conexao