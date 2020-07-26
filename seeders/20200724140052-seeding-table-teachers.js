'use strict';
const fs = require('fs')

module.exports = {
  up: (queryInterface, Sequelize) => {
    const teachers = JSON.parse(fs.readFileSync('./teachers.json', 'utf-8'))

    teachers.forEach(e => {
      e.createdAt = new Date()
      e.updatedAt= new Date()
    });
   return queryInterface.bulkInsert('Teachers', teachers, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Teachers', null, {})
  }
};
