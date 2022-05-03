import {setTimeout} from 'timers/promises' 
export default class Service {
    async save(params) {//Simular uma chamada assincrona
      await setTimeout(2000)// dois segundos
      return '${params.id} save with success!'
    }
}