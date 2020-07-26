const route = require('express').Router()
const Controller = require('../controllers/Controller')

route.get('/', Controller.showSubjects)

module.exports = route