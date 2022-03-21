'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Jogo_Plataformas', [

      {
        jogo_id: 1,
        plataforma_id:1,
      },

      {
        jogo_id: 2,
        plataforma_id:1,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Jogo_Plataformas', null, {});
  }
};
