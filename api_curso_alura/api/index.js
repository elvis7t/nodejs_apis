//Importar o mudulo de configuração 
const customExpress = require("./config/customExpress")
//Importa a conexao com o db
const conexao = require('./db/conexao')
//Importa o modulo para criar tabelas
const Tabelas = require('./db/tabelas')


conexao.connect(erro =>{
    //Criado a funcao verifica se existe erro
    if(erro) {
        console.log(erro)
    }else{
        console.log('conectato com sucesso')

        //conexao importada do modulo db
        Tabelas.init(conexao)
        // Instancia o APP
        const app = customExpress()

        //Comandos para subir o servidor
        app.listen(3001, ()=> console.log('Servidor rodando na  porta 3001'))
       
    }
})
