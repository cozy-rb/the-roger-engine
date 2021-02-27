const models = [
  // Example models
  require("../models/examples/UserModel.js")
];

module.exports = (sequelize) => {
  for(const model of models){ model(sequelize); }
}
