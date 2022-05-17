const { sequelize } = require("../../src/app/models");

module.exports = () => {
  return Promise.all(
    //percorrer todos os models que estao no sequelize
    Object.keys(sequelize.models).map(key => {
      return sequelize.models[key].destroy({ truncate: true, force: true });
    })
  );
};
