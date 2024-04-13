const db = require("../database/sequelize");
const myDb = new db();

exports.postLogin = async (req, res) => {
  try {
    console.log("API LOGIN USER");
    const { Username, Password } = req.body;

    const users = await myDb.findByUsernameAndPassword(Username, Password);

    if (users.length > 0) {
      console.log("User found");
      res.status(200).json({ message: Username });
    } else {
      console.log("User not found");
      res.status(404).json({ message: "Invalid User or Password" });
    }
  } catch (error) {
    return res.status(404).json({ error });
  }
};
exports.deleteUser = async (req, res) => {
  try {
    console.log("API DELETE PROFILE ");
    myDb.deleteUser(req.params.username);
    res.status(200).send(userData);
  } catch (error) {
    res.status(404).json({ error });
  }
};
exports.updateProfile= async (req, res) => {
    try {
      console.log(" API CHANGE PROFILE ");
      const key = Object.keys(req.body)
      console.log(key)

      const checkTheChange = await myDb.changeProfile(
        req.params.username,
        key[0] ,
        req.body[key]
      );
      console.log(checkTheChange)
      if(checkTheChange.length > 0) {
          res.status(200).json({ message: "Your profile has been updated" })
      } else {
          res.status(404).json({ error: "Error on updated the password", error });
      }
    } catch (error) {
      res.status(500).json({ error });
    }
  };
