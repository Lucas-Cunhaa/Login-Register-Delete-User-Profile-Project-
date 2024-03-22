let users = [];
let lastId = 0 
exports.postUser = (req, res) => {
    
    try{
        console.log("API POST USER")
        const { Username, Email, } = req.body; 
        const id = ++lastId
        const user =  { Username, Email, id }
        
        
        if(users.find(element => element.Username === Username  || element.Email === Email)) {
             throw new Error('Username or email alredy exists')
            } 
            
        users.push(user)

        res.status(200).send(newForm)
        
    } catch(error) {
        res.status(404).send(error.message)
    }
}