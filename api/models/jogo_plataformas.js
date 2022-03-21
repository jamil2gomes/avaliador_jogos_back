'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jogo_Plataformas extends Model {
   
    static associate(models) {
      
    }
  }
  Jogo_Plataformas.init({}, {
    sequelize,
    timestamps: false,
    modelName: 'Jogo_Plataformas',
  });
  return Jogo_Plataformas;
};