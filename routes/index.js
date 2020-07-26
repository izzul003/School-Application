const route = require('express').Router()
const studentRoutes = require('./studentRoutes')
const teacherRoutes = require('./teacherRoutes') 
const subjectRoutes = require('./subjectRoutes')
const Controller = require('../controllers/Controller')

route.get('/', Controller.home)

route.use('/students', studentRoutes)
route.use('/teachers', teacherRoutes)
route.use('/subjects', subjectRoutes)

module.exports = route