'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Generos extends Model {
    
    static associate(models) {
      Generos.belongsToMany(models.Jogos,{ 
        through: models.Jogo_Generos,
       });
    }
  }
  Generos.init({
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Generos',
  });
  return Generos;
};