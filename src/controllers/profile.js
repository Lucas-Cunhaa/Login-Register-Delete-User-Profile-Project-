const db = require ('../database/sequelize') 
const myDb = new db()

exports.getInfos = async (req, res) => {
    try{
        console.log("API GET USER INFOS ")
        const { Username } = req.body;
        console.log(Username)

        const user = await myDb.findUser(Username, Password)
        console.log(users)
      
        if (user.length > 0) {
            console.log('User found');
            res.status(200).json({ user : Username });
        } else {
            console.log('User not found');
            res.status(404).json({ message: 'Invalid User or Password' });
        }
    } catch(error) {
        return res.status(404).json({error});
    }
}



/* respnder os dados do usuário , nome, imagem */ 