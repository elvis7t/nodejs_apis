const { factory } = require("factory-girl");
const { User } = require("../src/app/models");

factory.define("User", User, {
  name: 'Diego',
  email: "giego@rocketseat.com.br",
  password: 'faker.internet.password()'
});

module.exports = factory;
