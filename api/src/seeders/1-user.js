'use strict';

// const bcrypt = require('bcrypt');
const config = require('../config/server.json');
const params = require('../config/params.json');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        firstname: 'Martina',
        lastname: 'Jindal',
        email: 'martinajindal@gmail.com',
        password: 'admin',
        // password: bcrypt.hashSync('123456', config.saltRounds),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstname: 'T',
        lastname: 'User',
        email: 'user@gmail.com',
        password: 'user',
        //password: bcrypt.hashSync('123456', config.saltRounds),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
}
