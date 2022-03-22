'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jogos extends Model {

    static associate(models) {
      Jogos.hasMany(models.Avaliacoes, {
        foreignKey: 'jogo_id'
      });

      Jogos.hasMany(models.Comentarios, {
        foreignKey: 'jogo_id'
      });

      Jogos.belongsToMany(models.Plataformas,{ 
        through: models.Jogo_Plataformas,
        foreignKey: 'jogo_id', 
        otherKey: 'plataforma_id'
      });

      Jogos.belongsToMany(models.Generos,{ 
        through: models.Jogo_Generos,
        foreignKey: 'jogo_id', 
        otherKey: 'genero_id'
       });
    }
  }
  Jogos.init({
    nome: DataTypes.STRING(50),
    sinopse: DataTypes.STRING(400),
    data_lancamento: DataTypes.DATEONLY,
    desenvolvedora: DataTypes.STRING(30),
    imagem_url: DataTypes.STRING,
    status: DataTypes.ENUM('APROVADO', 'ANALISE')
  }, {
    sequelize,
    modelName: 'Jogos',
  });
  return Jogos;
};