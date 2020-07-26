const route = require('express').Router()
const Controller = require('../controllers/Controller')

route.get('/', Controller.showTeachers)

module.exports = route