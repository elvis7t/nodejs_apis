const moment = require('moment')
const conexao = require('../db/conexao')

// inserir no banco
class Atendimento {
    adiciona(atendimento, res) {//res vem do controller
            const dataCriacao = moment().format('YYYY-MM-DD')
            // const dataCriacao = new Date()// pega a data atual
            //passa tudo dentro de atendimento e data de criacao
            const data = moment(atendimento.data, 'DD/MM/YYYY HH:MM:SS').format('YYYY-MM-DD HH:MM:SS')
            
            //Tratamento de erros/Validaçao regra de negocio
            const dataEhvalida = moment(data).isSameOrAfter(dataCriacao)
            const clienteEhvalido = atendimento.cliente.length >= 5
            
            //Objeto de validacoes
            const validacoes = [
                {
                    nome: 'data',
                    valido: dataEhvalida,
                    mensagem: 'Data deve ser maior ou igual a data atual'
                },
                {
                    nome: 'cliente',
                    valido: clienteEhvalido,
                    mensagem: 'Cliente 5 caracteres'
                }
            ]

            //passar para o res.json
            //verificar itens invalidos
            const erros = validacoes.filter(campo => !campo.valido)//so retorna se essa campo nao for valido
            //verificar se tem erros e se length = 0
            const exitemErros = erros.length
            if(exitemErros) {
                res.status(400).json(erros)// retorna json e add status
            }else{            
            const atendimentoDatado = {...atendimento, dataCriacao, data}
            //criar a query e envia para a conexao.js
            const sql = 'INSERT INTO Atendimentos SET ?'

            // 
            conexao.query(sql, atendimentoDatado, (erro, resultados) => {
                if(erro) {
                    res.status(400).json(erro)// retorna json e add status
                    // console.log(erro)
                }else{
                    res.status(201).json(atendimento)// retorna json e add status// console.log(resultados)
                }
            })
        }
    } 
    

// listar do banco    
    lista(res){
        const sql = 'SELECT * FROM Atendimentos'

        conexao.query(sql, (erro, resultados) =>{
            if(erro) {
                res.status(400).json(erro)
            }else {
                res.status(200).json(resultados)
            }
        })
    }

// Listar com id no banco    
    buscaPorId(id, res) {
        const sql ='SELECT * FROM Atendimentos WHERE id='+id
        conexao.query(sql, (erro, resultados) =>{
            // pegando  o primeiro elemento do array 
            const atendimento = resultados[0]
            if(erro) {
                res.status(400).json(erro)
            }else{
                res.status(200).json(atendimento)
            }
        })

    }

// Atualizar com id no banco    
    altera(id, valores, res) {
        if(valores.data) {
            valores.data =  moment(valores.data, 'DD/MM/YYYY HH:MM:SS').format('YYYY-MM-DD HH:MM:SS')
        }
        const sql = 'UPDATE Atendimentos SET ? WHERE id=?'

        conexao.query(sql, [valores, id], (erro, resultados) =>{
            if(erro) {
                res.status(400).json(erro)
            }else{
                res.status(200).json({...valores, id})
            }
        })

    }

// Deletar com id no banco        
    deleta(id, res) {       
        const sql = 'DELETE FROM Atendimentos WHERE id=?'

        conexao.query(sql, id, (erro, resultados) =>{
            if(erro) {
                res.status(400).json(erro)
            }else{
                res.status(200).json({id})
            }
        })

    }
}

//conexao com o controller
module.exports = new Atendimento