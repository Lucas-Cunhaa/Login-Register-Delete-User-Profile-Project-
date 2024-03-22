const express = require('express') 
const route = express.Router() 
const controllerLogin = require('./src/controllers/login.js')
const controllerRegister = require('./src/controllers/registration.js') 

route.post('/myapp/register', controllerRegister.postUser)

module.exports = route