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
        type: Sequelize.STRING(50)
      },
      sinopse: {
        type: Sequelize.STRING(600)
      },
      data_lancamento: {
        type: Sequelize.DATEONLY
      },
      desenvolvedora: {
        type: Sequelize.STRING(30)
      },
      imagem_url: {
        type: Sequelize.STRING,
        validate:{
          isUrl:{
            msg:"Url inválida"
          }
        }
      },
      status: {
        type: Sequelize.ENUM('APROVADO', 'ANALISE'),
        defaultValue: 'ANALISE',
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