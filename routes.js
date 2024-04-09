const express = require('express') 
const route = express.Router() 
const controllerLogin = require('./src/controllers/login.js')
const controllerRegister = require('./src/controllers/registration.js') 



route.post('/myapp/register', controllerRegister.postUser)
route.post('/myapp/login', controllerLogin.postLogin)
route.get("/myapp/profile/:username", controllerLogin.getInfos)
route.get("/myapp/profile", controllerLogin.showInfos)
route.delete("/myapp/profile/:username", controllerLogin.deleteUser)

module.exports = route