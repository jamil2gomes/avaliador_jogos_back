'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Usuarios', [

      {
        nome: 'Jamil',
        nickname:"jamil2gomes",
        email: "jamil.lanister@hotmail.com",
        senha:"123456",
        role:"ADMIN",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Teste',
        nickname:"teste123",
        email: "teste@teste.com",
        senha:"teste123",
        role:"PROFESSOR",
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Usuarios', null, {});
  }
};
