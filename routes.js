const express = require('express') 
const route = express.Router() 
const controllerLogin = require('./src/controllers/login.js')
const controllerRegister = require('./src/controllers/registration.js') 

route.post('/myapp/register', controllerRegister.postUser)
route.post('/myapp/login', controllerLogin.postLogin)
route.delete("/myapp/profile/:username", controllerLogin.deleteUser)
route.put("/myapp/profile/:username", controllerLogin.updateProfile)


module.exports = route