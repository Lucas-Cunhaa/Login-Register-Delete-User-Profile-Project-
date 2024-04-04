const Db = require('../database/sequelize')
const myDb = new Db()


exports.postUser = async (req, res) => {
    try{
        console.log("API POST USER")
        const { Username, Email, Password } = req.body; 
        
        const checkUser = await myDb.verifyUser(Username, Email)
        
        if(checkUser.length > 0){
            res.status(409).send({ message: 'Failed, User alredy exist' })
        } else{
            await myDb.addUser(Username, Email, Password)
            console.log(newUser)
            res.status(200).send(newUser)
        }
        
    } catch(error) {
        return res.status(404).json({ error: 'Failed' });
    }
}
