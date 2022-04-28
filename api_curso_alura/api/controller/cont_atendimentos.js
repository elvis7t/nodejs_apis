const Atendimento = require('../model/mod_atendimentos')

module.exports = app =>{
     //Criando a rota para atendimentos
    //Quando for na '/' quero que ele execute uma funcao
    // o Express tem 2 elementos que devolve pra nos
    //req = requisição que foi enviada 
    //res = requisição que estamos devolvendo que seja renderizado na tela
    //app.get('/', (req, res)=> res.send('Servidor rodando ok')) 
    // app.get('/atendimentos', (req, res)=> res.send('Voce  esta na rota de atendimentos certo ')) 

//Inserir no banco
    // rota atendimentos POST, quando receber uma requisição direciona
    // app.post('/atendimentos', (req, res)=> res.send('Voce  esta na rota de atendimentos fazendo um POST'))     
    app.post('/atendimentos', (req, res)=> {
        const atendimento = req.body// conteudo do bady é um atendimento
        // console.log(req.body)

        Atendimento.adiciona(atendimento, res)//Dar resposta atravez do model "Devolver dados"
        // Atendimento.adiciona(atendimento)//chama o atendimento, passando o atendimento como parametro
        // res.send('Voce  esta na rota de atendimentos fazendo um POST') 
    })

//Lista atendimentos totais             
    // rota atendimentos GET, quando receber uma requisição direciona
    //app.get('/atendimentos', (req, res)=> res.send('Voce  esta na rota de atendimentos fazendo um GET ')) 
    app.get('/atendimentos', (req, res)=> {
       //Chamar o metodo lista do model Recebe a todos os dados do banco
        Atendimento.lista(res)

    }) 

//Lista atendimentos com where          
    app.get('/atendimentos/:id', (req, res)=> {
        //pega o valor do id e converte para int
        const id = parseInt(req.params.id)

        Atendimento.buscaPorId(id, res)// metodo que vem o model
       //Chamar o metodo lista do model Recebe a o dado do banco
       //console.log(req.params) pega o id

       //res.send('OK') envia o ok
    }) 
   
//Alerar atendimentos com where          
    app.patch('/atendimentos/:id', (req, res)=> {
        //pega o valor do id e converte para int
        const id = parseInt(req.params.id)
        //recebe os valores
        const valores = req.body

        Atendimento.altera(id, valores, res)// metodo que vem o model
        
    }) 

//Deletar atendimentos com where          
    app.delete('/atendimentos/:id', (req, res)=> {
        //pega o valor do id e converte para int
        const id = parseInt(req.params.id)
        
        Atendimento.deleta(id, res)// metodo que vem o model
        
    }) 

}



