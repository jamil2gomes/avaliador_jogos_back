'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Avaliacoes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      
      audio: {
        type: Sequelize.INTEGER,
        defaultValue:0
      },

      feedback: {
        type: Sequelize.INTEGER,
        defaultValue:0
      },

      cores: {
        type: Sequelize.INTEGER,
        defaultValue:0
      },

      interface: {
        type: Sequelize.INTEGER,
        defaultValue:0
      },

      jogo_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Jogos', key: 'id'}
      },

      usuario_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Usuarios', key: 'id'}
      },

     plataforma_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Plataformas', key: 'id'}
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
    await queryInterface.dropTable('Avaliacoes');
  }
};