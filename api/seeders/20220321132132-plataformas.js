'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Plataformas', [

      {
        descricao: 'Android',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descricao: 'IOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descricao: 'Navegador Web',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descricao: 'Steam',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descricao: 'Nintendo Switch',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descricao: 'Xbox Series S/X',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descricao: 'Xbox 360',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descricao: 'Xbox One',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descricao: 'Playstation 3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descricao: 'Playstation 4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descricao: 'Playstation  5',
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Plataformas', null, {});
  }
};
