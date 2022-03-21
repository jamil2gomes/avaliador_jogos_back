'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Jogo_Generos', [

      {
        jogo_id: 1,
        genero_id:1,
      },

      {
        jogo_id: 2,
        genero_id:1,
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
