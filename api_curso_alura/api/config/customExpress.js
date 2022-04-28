// Chamar os modulos
const express = require('express') //com aspas pois é uma biblioteca
const consign = require('consign')//O consign facilita o desenvolvimento de aplicativos com separação lógica de arquivos e carregamento automático de scripts.
const bodyParcer = require('body-parser')//Converte requisicoes para que seja lido no js



//Exporta a Funcao
module.exports = () => {
    //aplicativo e servidor, aqui é executado essa biblioteca express 
    //Aqui é criado a variavel app
    const app = express()

    //o App vai usar algumas coisas
    //A funçao app.user() vem do express
    //Pode ser ler json bodyParcer.json()etc..
    app.use(bodyParcer.urlencoded({extended: true})) 
    app.use(bodyParcer.json()) 


    // Apos instanciar o consign definimos que a pasta controller e todos 
    // os modulos dentro dela, para que possa ser acessado pelo app
    // todo o novo controller adicionado na pasta controller sera acessado automaticamente
    // aqui é configurado a variavel app
    consign()
    .include('controller')
    .into(app)

    // aqui retorna  a app
    return app
}

