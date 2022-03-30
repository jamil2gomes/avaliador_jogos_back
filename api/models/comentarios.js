'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comentarios extends Model {
   
    static associate(models) {
      Comentarios.belongsTo(models.Usuarios, {
        foreignKey: 'usuario_id'
      });

      Comentarios.belongsTo(models.Jogos, {
        foreignKey: 'jogo_id'
      });
    }
  }
  Comentarios.init({
    descricao: DataTypes.STRING(600)
  }, {
    sequelize,
    modelName: 'Comentarios',
  });
  return Comentarios;
};