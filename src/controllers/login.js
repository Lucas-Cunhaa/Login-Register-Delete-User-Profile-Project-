const db = require ('../database/sequelize') 
const myDb = new db

exports.postLogin = async (req, res) => {
    try{
        console.log("API LOGIN USER")
        const { Username, Password } = req.body;

        const users = await myDb.findUser(Username, Password)
      
        if (users.length > 0) {
            console.log('User found');
            res.status(200).json({ message: Username });
        } else {
            console.log('User not found');
            res.status(404).json({ message: 'Invalid User or Password' });
        }
    } catch(error) {
        return res.status(404).json({ error});
    }
}
let userData
exports.getInfos = async (req, res) => {
    try{
        console.log("API GET USER INFOS ")
        const username  = req.params.username
        userData = await myDb.getUserInfos(username)
        console.log(userData)
       
        res.status(200).send(data);

    } catch(error) {
         res.status(404).json({error});
    }
}
exports.showInfos = async (req, res) => {
    try{
        console.log("API SHOW USER INFOS ")
        console.log(userData)
        res.status(200).send(userData);
    } catch(error) {
         res.status(404).json({error});
    }
}