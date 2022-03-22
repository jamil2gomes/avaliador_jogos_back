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
    nome: {
      type:DataTypes.STRING(30),
      allowNull: false,
    },
    nickname: DataTypes.STRING(15),
    email: {
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        isEmail:{
          msg:"Campo email inválido"
        }
      }
    },
    senha:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty:{
          msg:"Senha não pode ser vazia"
        }
      }
    },
    role:{ 
      type: DataTypes.ENUM('ADMIN', 'PROFESSOR'),
      defaultValue:'PROFESSOR'
    }
  }, {
    sequelize,
    modelName: 'Usuarios',
  });
  return Usuarios;
};