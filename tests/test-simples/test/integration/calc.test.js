
const lib = require('../../src/modulos_mat')
//  import lib from './modulos_mat'

// describe('Test Simplao',  () => {
//     test('should test that true === true', (done)=>{
//         const result = true
//         expect(result).toBe(true)
//         done();
//     })
// })

describe('SUM Tests', () => {
	test ('shoud return 10', (done) => {
        // const lib = 10
		expect(lib.sum(5, 5)).toBe(10);
        done();
	})
})

describe('SUBTRACT Tests', () => {
	test ('shoud return 10', (done) => {
        // const lib = 10
		expect(lib.subtract(5, 5)).toBe(0);
        done();
	})
})

describe('MULTIPLY Tests', () => {
	test ('shoud return 25', (done) => {
        // const lib = 10
		expect(lib.multiply(5, 5)).toBe(25);
        done();
	})
})

describe('DIVIDE Tests', () => {
	test ('shoud return 1', (done) => {
        // const lib = 10
		expect(lib.divide(5, 5)).toBe(1);
        done();
	})
})