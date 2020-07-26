'use strict';
const fs = require('fs')

module.exports = {
  up: (queryInterface, Sequelize) => {
    const subjects = JSON.parse(fs.readFileSync('./subjects.json', 'utf-8'))

    subjects.forEach(e => {
      e.createdAt = new Date()
      e.updatedAt= new Date()
    });
   return queryInterface.bulkInsert('Subjects', subjects, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Subjects', null, {})
  }
};
