const Sequelize = require("sequelize");
const { DataTypes, Op } = Sequelize;
const sequelize = new Sequelize("userapp", "root", "12345", {
  dialect: "mysql",
});

const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

class Db {
  constructor (sequelize) {
    this.connectDatabase();
    this.syncDatabase();
  }

  async connectDatabase () {
    try {
      await sequelize.authenticate();
      console.log("connected");
    } catch (error) {
      console.error(error);
    }
  }
  async syncDatabase () {
    try {
      await User.sync({ alter: true });
    } catch (error) {
      console.error("Unable to connect to the database", error);
    }
  }
  async addUser (myUsername, myEmail, myPassword) {
    try {
      const user = User.build({
        username: myUsername,
        email: myEmail,
        password: myPassword,
      });
      console.log(user.toJSON());
      return user.save();
    } catch (error) {
      console.error(error);
    }
  }

  async findUser (myUsername, myPassword) {
    try {
      const data = await User.findAll({ where: { username: myUsername, password: myPassword } });
      
      data.forEach((element) => {
        console.log(element.toJSON());
      });
      return data
    } catch (error) {
      console.error('Error while finding user:', error);
    }
  }
  async verifyUser (myUsername, myEmail) {
    try {
      const data = await User.findAll({ where: { [Op.or] : {username: myUsername, email: myEmail } } });
      data.forEach((element) => {
        console.log(element.toJSON());
      });
      return data
    } catch (error) {
      console.error('Error while finding user:', error);
    }
  }
  async deleteUser (myUser) {
    try {
      const data = await User.destroy({ where: { username: myUser } });
      data.forEach((element) => {
        console.log(element.toJSON());
      });
      return data
    } catch (error) {
      console.error('Error while finding user:', error);
    }
  }

  async getUserInfos (myUsername) {
    try {
      const data = await User.findAll({ where: {username: myUsername }  });
      data.forEach((element) => {
        console.log(element.toJSON());
      });
      return data
    } catch (error) {
      console.error('Error while finding user:', error);
    }
  }
}
module.exports = Db;
