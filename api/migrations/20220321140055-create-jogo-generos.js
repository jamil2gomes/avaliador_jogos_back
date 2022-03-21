'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Jogo_Generos', {
     
      jogo_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Jogos', key: 'id'}
      },
      genero_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Generos', key: 'id'}
      },
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Jogo_Generos');
  }
};