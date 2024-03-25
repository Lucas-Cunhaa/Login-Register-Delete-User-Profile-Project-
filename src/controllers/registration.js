let users = []
let lastId = 0 
exports.postUser = (req, res) => {
    
    try{
        console.log("API POST USER")
        const { Username, Email, } = req.body; 

        if(users.find(element => element.Username === Username  || element.Email === Email)) {
            return res.status(409).json({ error: 'Username or Email alredy exist.' });
            } 
        const id = ++lastId
        const user =  { Username, Email, id }
        users.push(user)

        res.status(200).send(user)
        
    } catch(error) {
        return res.status(500).json({ error: 'O usuário já existe.' });
    }
}
