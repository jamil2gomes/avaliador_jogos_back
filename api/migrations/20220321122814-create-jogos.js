'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Jogos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING(60)
      },
      sinopse: {
        type: Sequelize.STRING(600)
      },
      data_lancamento: {
        type: Sequelize.DATEONLY
      },
      desenvolvedora: {
        type: Sequelize.STRING(60)
      },
      imagem_url: {
        type: Sequelize.STRING,
        validate:{
          isUrl:{
            msg:"Url inválida"
          }
        }
      },
      jogo_url: {
        type: Sequelize.STRING(400),
        validate:{
          isUrl:{
            msg:"Url inválida"
          }
        }
      },
      usuario_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Usuarios', key: 'id'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Jogos');
  }
};