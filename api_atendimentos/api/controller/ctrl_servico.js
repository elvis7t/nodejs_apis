const Atendimento = require('../model/mdl_servico')

module.exports = app =>{
  app.post('/atendimentos', (req, res)=> {
        const atendimento = req.body// conteudo do bady é um atendimento
        // console.log(req.body)

        Atendimento.adiciona(atendimento, res)//Dar resposta atravez do model "Devolver dados"       
    })

    app.get('/atendimentos', (req, res)=> {
       //Chamar o metodo lista do model Recebe a todos os dados do banco
        Atendimento.lista(res)

    }) 

    app.get('/atendimentos/:id', (req, res)=> {
        //pega o valor do id e converte para int
        const id = parseInt(req.params.id)

        Atendimento.buscaPorId(id, res)// metodo que vem o model
    }) 
   
    app.patch('/atendimentos/:id', (req, res)=> {
        //pega o valor do id e converte para int
        const id = parseInt(req.params.id)
        //recebe os valores
        const valores = req.body

        Atendimento.altera(id, valores, res)// metodo que vem o model
        
    }) 

    app.delete('/atendimentos/:id', (req, res)=> {
        //pega o valor do id e converte para int
        const id = parseInt(req.params.id)
        
        Atendimento.deleta(id, res)// metodo que vem o model
        
    }) 

}



