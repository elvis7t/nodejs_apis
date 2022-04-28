class Tabelas {
    //Init metodo que inicializa
    //dentro do metodo recebe a conexao, porem ainda nao sab de onde
    init(conexao){
       this.conexao = conexao //Desa forma pode ser utilizado por varios metodos
        // console.log('Tabelas foram chamadas')

        //Chamar  o metodo
        this.criarAtendimentos()
    }
    //Metodo criar atendimentos
    criarAtendimentos() {        
        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id INTEGER PRIMARY KEY AUTO_INCREMENT, cliente VARCHAR(50) NOT NULL, pet varchar(50), servico varchar (20) NOT NULL, data datetime,  dataCriacao datetime,  status varchar(20) NOT NULL, observacoes text )'
        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            }else{
                console.log('Tabela Atendimento criada com sucesso')
            }            

        })

    }
}

// exporta já instanciada
module.exports = new Tabelas