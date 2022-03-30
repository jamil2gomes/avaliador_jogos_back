'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Avaliacoes', [

      {
        audio: 6,
        feedback: 6,
        cores: 6,
        interface: 6,
        jogo_id: 1,
        usuario_id:1,
        plataforma_id:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        audio: 7,
        feedback: 8,
        cores: 7,
        interface: 8,
        jogo_id: 2,
        usuario_id:1,
        plataforma_id:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Avaliacoes', null, {});
  }
};
