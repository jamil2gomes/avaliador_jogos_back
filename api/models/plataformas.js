'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Plataformas extends Model {

    static associate(models) {
      Plataformas.hasMany(models.Avaliacoes, {
        foreignKey: 'plataforma_id'
      });

      Plataformas.belongsToMany(models.Jogos,{ 
        through: models.Jogo_Plataformas,
      });
    }
  }
  Plataformas.init({
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Plataformas',
  });
  return Plataformas;
};