const customExpress = require("../config/customExpress")
const conexao = require('../db/conexao')
const Tabelas = require('../db/tabela')


conexao.connect(erro =>{
   
    if(erro) {
        console.log(erro)
    }else{
        console.log('conectato com sucesso')
        Tabelas.init(conexao)

        const app = customExpress()

        app.listen(3001, ()=> console.log('Servidor rodando na  porta 3001'))
       
    }
})
