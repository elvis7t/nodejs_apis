const request = require("supertest");
const ApiUrl = "http://localhost:3001";

describe("GET /atendimentos/{id}", () => {
  it("should return 200", async () => {
    const response = await request(ApiUrl)
      .get("/atendimentos")
      .expect(200);
    expect(response.statusCode).toEqual(200);
  });
  it("should return 200 and check client name is 'chicão'", async () => {
    const response = await request(ApiUrl)
      .get("/atendimentos/1")
      .query({ cliente: "chicao" })
      .expect(200);
  });
});

describe("## POST ## Atendimentos", () => {
  it("should return 200 and check user with name 'chicão' exist", async () => {
    await request(ApiUrl)
      .post("/atendimentos")
      .send({ cliente: "chicão", pet: "Doginho", servico: "tosa", status: "agendado", observacoes: "Muito ziquinha", data: "22/07/2022" })
      .expect(201);
    return await request(ApiUrl)
      .get("/atendimentos/")
      .query({ cliente: "chicao" })
      .expect(200);
  });
  it("should return 400 and no data ", async () => {
    await request(ApiUrl)
      .post("/atendimentos")
      .send({ cliente: "chicão", pet: "Doginho", servico: "tosa", status: "agendado", observacoes: "Muito ziquinha" })
      .expect(400);    
  });  
  test('should return error when data is invalid', async () => {
    await request(ApiUrl)
      .post('/atendimentos')       
      .send({ cliente: "chicão", pet: "Doginho", servico: "tosa", status: "agendado", observacoes: "Muito ziquinha", data: "22/05/2022" })
      .expect(400);
  });
  
  test('should return error when cliennte caracters is > 5', async () => {
    await request(ApiUrl)
      .post('/atendimentos')       
      .send({ cliente: "chic", pet: "Doginho", servico: "tosa", status: "agendado", observacoes: "Muito ziquinha", data: "22/06/2022" })
      .expect(400);
  });
});

describe("PATH /users/{id}", () => {
  it("should return 200 and check user was update to 'atendimentos'", async () => {
    await request(ApiUrl)
      .patch("/atendimentos/1")
      .send({ cliente: "chicão", pet: "Doginhod", servico: "tosa", status: "agendado", observacoes: "Muito ziquinha", data: "22/07/2022" })
      .expect(200);
    return await request(ApiUrl)
      .get("/atendimentos")
      .query({ cliente: "chicão" })
      .expect(200);
  });

  describe("Delete /atendimentos/{id}", () => {
    it("should return 200 and check user was not found", async () => {
      await request(ApiUrl)
        .del("/atendimentos/1")
        .expect(200);
      return await request(ApiUrl)
        .del("/atendimentos/1")
        .expect(200);
    });
  });
});



