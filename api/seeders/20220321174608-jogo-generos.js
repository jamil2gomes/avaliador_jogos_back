'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Jogo_Generos', [

      {
        jogo_id: 1,
        genero_id:10,
      },
      {
        jogo_id: 1,
        genero_id:12,
      },
      {
        jogo_id: 3,
        genero_id:10,
      },
      {
        jogo_id: 4,
        genero_id:10,
      },
      {
        jogo_id: 5,
        genero_id:12,
      },
      {
        jogo_id: 6,
        genero_id:12,
      },
      {
        jogo_id: 7,
        genero_id:12,
      },
      {
        jogo_id: 8,
        genero_id:12,
      },
      {
        jogo_id: 9,
        genero_id:12,
      },
      {
        jogo_id: 9,
        genero_id:10,
      },
      {
        jogo_id: 10,
        genero_id:10,
      },
      {
        jogo_id: 11,
        genero_id:10,
      },

      {
        jogo_id: 2,
        genero_id:12,
      },
      {
        jogo_id: 2,
        genero_id:10,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Jogo_Generos', null, {});
  }
};
