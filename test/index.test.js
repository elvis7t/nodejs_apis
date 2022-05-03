import assert, { deepStrictEqual } from 'assert'
import  Product from './product.js'
import  Service from './service.js'

const callTracker = new assert.CallTracker()

// quando o programa terminar, valida todas as chamadas
process.on('exit', () => callTracker.verify())

// Teste caso de Erro
//Valida o qtde de caracteres maior que 5
{
    const params = {
        description: 'my peeeee',
        id: 1, 
        price: 10000
    }
    const product = new Product({
        onCreate: () => {},
        service: new Service()
    })
    assert.rejects(
        () => product.create(params),
        { message: 'Description must be higher than 5'},// mes
        'it should throw an error eith wrong description'// msn de descricao do teste
    )
    product.create(params)
}

//deve salvar o produto com sucesso
{
    // MOCK => o que precisamos para o teste funcionar
    const params = {
        description: 'my product',
        id: 1, 
        price: 10000
    }

     // serviceStub = impedir que seja ONLINE
    const spySave = callTracker.calls(1)
    const serviceStub = {
        async save(params) {
        // SPY: espiona a função
        spySave(params)
        return `${params.id} saved with success!`
        }
    }
    
    const fn = (msg) => {
        assert.deepStrictEqual(msg.id, params.id, 'id should be the same')
        assert.deepStrictEqual(msg.price, params.price, 'price should be the same')
        assert.deepStrictEqual(msg.description, params.description.toUpperCase(), 'description should be the same')
    }

    const spyOnCreate = callTracker.calls(fn, 1)
    const product = new Product({
        onCreate: spyOnCreate,
        // aqui fizemos o STUB
        service: serviceStub
    })

    const result = await product.create(params)
    assert.deepStrictEqual(result, `${params.id} SAVED WITH SUCCESS!`)
}