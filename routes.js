const express = require('express') 
const route = express.Router() 
const controllerLogin = require('./src/controllers/login.js')
const controllerRegister = require('./src/controllers/registration.js') 
const constrollerProfile = require('./src/controllers/profile.js')
let username = require('./src/views/includes/js/index.js')

route.post('/myapp/register', controllerRegister.postUser)
route.post('/myapp/login', controllerLogin.postLogin)
route.post(`myapp/profile:/${username}`, )

module.exports = route