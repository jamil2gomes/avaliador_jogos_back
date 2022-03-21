'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
   
    static associate(models) {
      Usuarios.hasMany(models.Comentarios, {
        foreignKey: 'usuario_id'
      });

      Usuarios.hasMany(models.Jogos, {
        foreignKey: 'usuario_id'
      });

      Usuarios.hasMany(models.Avaliacoes, {
        foreignKey: 'usuario_id'
      });
    }
  }
  Usuarios.init({
    nome: DataTypes.STRING(30),
    nickname: DataTypes.STRING(15),
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    role: DataTypes.ENUM('ADMIN', 'PROFESSOR')
  }, {
    sequelize,
    modelName: 'Usuarios',
  });
  return Usuarios;
};