'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Generos', [

      {
        descricao: 'Ação',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        descricao: 'Ação & Aventura',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descricao: 'Plataforma',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descricao: 'Aventura',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descricao: 'RPG',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descricao: 'Esporte',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descricao: 'Corrida',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descricao: 'Simulação',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descricao: 'Casual',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descricao: 'Comunicação',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descricao: 'Quebra-cabeça',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descricao: 'Educação',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descricao: 'Outro',
        createdAt: new Date(),
        updatedAt: new Date()
      },
     
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Generos', null, {});
  }
};
