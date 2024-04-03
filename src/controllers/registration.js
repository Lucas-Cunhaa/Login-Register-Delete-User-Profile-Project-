const Db = require('../database/sequelize')
const myDb = new Db()
const User = require('../controllers/user')

exports.postUser = async (req, res) => {
    try{
        console.log("API POST USER")
        const { Username, Email, Password } = req.body; 
        const newUser = new User(Username, Email, Password)
        await myDb.addUser(Username, Email, Password)
        console.log(newUser)
        res.status(200).send(newUser)
    } catch(error) {
        return res.status(404).json({ error: 'O usuário já existe.' });
    }
}
