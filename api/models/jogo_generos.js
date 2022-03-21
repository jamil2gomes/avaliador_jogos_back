'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jogo_Generos extends Model {
  
    static associate(models) {
      
    }
  }
  Jogo_Generos.init({}, {
    sequelize,
    timestamps: false,
    modelName: 'Jogo_Generos',
  });
  return Jogo_Generos;
};