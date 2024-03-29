const User = require('./user')
let users = []
let lastId = 0 

exports.postLogin = (req, res) => {
    try{
        console.log("API POST USER")
        const name = req.body.Username 
        const password = req.body.Password

        users.forEach(element => {
            if(element.Username === name  && element.Password === password){
                return res.status(200).send('login');
            } else {
                return res.status(404).json({ error:'Invalid User or Password' })
            }
        
        })     
    } catch(error) {
        return res.status(500).json({ error:'Invalid User or Password' });
    }
}

exports.postUser = (req, res) => {
    
    try{
        console.log("API POST USER")
        const  { Username, Email, Password } = req.body; 


        if(users.find(element => element.Username === Username  || element.Email === Email)) {
            return res.status(409).json({ error: 'Username or Email alredy exist.' });
            } 
            
        const id = ++lastId
        const user =  new User(id , Username , Email, Password)
        users.push(user)

        res.status(200).send(user)
        
    } catch(error) {
        return res.status(500).json({ error: 'O usuário já existe.' });
    }
}
