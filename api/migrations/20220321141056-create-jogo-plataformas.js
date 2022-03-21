'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Jogo_Plataformas', {
     
      jogo_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Jogos', key: 'id'}
      },
      plataforma_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Plataformas', key: 'id'}
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Jogo_Plataformas');
  }
};