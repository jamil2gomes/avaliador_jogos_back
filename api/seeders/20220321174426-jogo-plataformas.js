'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Jogo_Plataformas', [

      {
        jogo_id: 1,
        plataforma_id: 1,
      },

      {
        jogo_id: 2,
        plataforma_id: 1,
      },
      {
        jogo_id: 3,
        plataforma_id: 1,
      },

      {
        jogo_id: 4,
        plataforma_id: 1,
      },
      {
        jogo_id: 5,
        plataforma_id: 1,
      },

      {
        jogo_id: 6,
        plataforma_id: 1,
      },
      {
        jogo_id: 7,
        plataforma_id: 1,
      },

      {
        jogo_id: 8,
        plataforma_id: 1,
      },
      {
        jogo_id: 9,
        plataforma_id: 1,
      },
      {
        jogo_id: 10,
        plataforma_id: 1,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Jogo_Plataformas', null, {});
  }
};
