const express = require('express')
const app = express()
const port = 3000
const ejs = require('ejs')
const {urlencoded} = require('express')
const routes = require('./routes')

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

app.use('/', routes)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))