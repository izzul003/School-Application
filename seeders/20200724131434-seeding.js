'use strict';
const fs = require('fs')

module.exports = {
  up: (queryInterface, Sequelize) => {
    const students = JSON.parse(fs.readFileSync('./students.json', 'utf-8'))

    students.forEach(e => {
      e.createdAt = new Date()
      e.updatedAt= new Date()
    });
   return queryInterface.bulkInsert('Students', students, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Students', null, {})
  }
};
