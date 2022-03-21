'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Avaliacoes extends Model {

    static associate(models) {
      Avaliacoes.belongsTo(models.Usuarios, {
        foreignKey: 'usuario_id'
      });

      Avaliacoes.belongsTo(models.Jogos, {
        foreignKey: 'jogo_id'
      });

      Avaliacoes.belongsTo(models.Plataformas, {
        foreignKey: 'plataforma_id'
      });
    }
  }
  Avaliacoes.init({
    audio: DataTypes.INTEGER,
    feedback: DataTypes.INTEGER,
    cores: DataTypes.INTEGER,
    interface: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Avaliacoes',
  });
  return Avaliacoes;
};