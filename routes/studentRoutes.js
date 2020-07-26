const route = require('express').Router()
const Controller = require('../controllers/Controller')

route.get('/', Controller.showStudent)
route.get('/add', Controller.addStudent)
route.post('/add', Controller.addPostStudent)
route.get('/:id/edit', Controller.editStudent)
route.post('/:id/edit', Controller.editPostStudent)
route.get('/:id/delete', Controller.deleteStudent)

module.exports = route