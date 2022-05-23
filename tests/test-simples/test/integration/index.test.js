const request = require("supertest");
const app = require('../../src/server/server')

describe('Test Simplao de Rota',  () => {
  it('should test that true === true', async () => {
    const res = await request(app).get("/");
      console.log(res.body);
   
    expect(res.body).toHaveProperty('message');  
  })
  
  it('GET / - should redirect to home page', async () => {
    const res = await request(app).get("/");
      console.log(res.body);
      
    expect(res.statusCode).toEqual(200);  
    
  })
})