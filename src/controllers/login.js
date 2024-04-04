const db = require ('../database/sequelize') 
const myDb = new db
exports.postLogin = async (req, res) => {
    try{
        console.log("API LOGIN USER")
        const { Username, Password } = req.body;
        console.log(Username, Password)

        const users = await myDb.findUser(Username, Password)
        console.log(users)
      
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

