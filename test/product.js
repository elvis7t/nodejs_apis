import { EventEmitter } from 'events'
export default class Product {
    constructor ({ 
        onCreate, // Quando rolar insert uma atua.. manda um msn externa
        service // padrao injeçao de dependencias
    }) {
        this.service = service
        this.source = new EventEmitter()
        this.source.on('create', onCreate)//Nesse source se tiver create chama a funcao onCreate
    }
    // data  = recebe {description, id, price}
    #isValid(data) {// # torna a função privada
        if(data.description.length < 5) {
            throw new Error('description must be higher than 5')
          }
    }

    // data  = recebe {description, id, price}        
    #upperCaseStrings(data) {
        const finalObject = Reflect.ownKeys(data)
        //entrar em cada chave dos itens e validar o que tem nessa chave
        .map(key => {
            //agurdar item
            const item = data[key] //recebe data na posicao item e validar se é upercase se nao mantem ele
            return {
                // se o typeof for igual a string                   : se nao retorna so o tipo
                [key]: typeof item === 'string' ? item.toUpperCase(): item                
            }
        })
        .reduce((prev, next) => {// manter o mesmo objeto data  = recebe {description, id, price}  
            return {// mergia o prev e o next
              ...prev,
              ...next
            }
          }, {})
      
      
          return finalObject
    }

    async create(data) {
        this.#isValid(data)
        const mappedObject = this.#upperCaseStrings(data)
        console.log({mappedObject})
        const message = await this.service.save(mappedObject) //Metodo criado no services.js   
        this.source.emit('create', mappedObject)   // Agora que salvou no db vamos notificar quem estiver ouvindo
        return message.toUpperCase()
    }
}