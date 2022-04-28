const express = require('express') //com aspas pois é uma biblioteca
const consign = require('consign')//O consign facilita o desenvolvimento de aplicativos com separação lógica de arquivos e carregamento automático de scripts.
const bodyParcer = require('body-parser')//Converte requisicoes para que seja lido no js

module.exports = () => {
    const app = express()

    app.use(bodyParcer.urlencoded({extended: true})) 
    app.use(bodyParcer.json()) 

    consign()
    .include('controller')
    .into(app)

    // aqui retorna  a app
    return app
}

