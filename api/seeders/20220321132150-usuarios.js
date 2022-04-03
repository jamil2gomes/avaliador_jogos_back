'use strict';
const service = require('../services/usuarioService')
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Usuarios', [

      {
        nome: 'Jamil',
        email: "jamil@hotmail.com",
        senha: "123456",
        role:"ADMIN",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Usuarios', null, {});
  }
};
