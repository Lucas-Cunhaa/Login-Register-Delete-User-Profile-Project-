const Sequelize = require("sequelize");
const {DataTypes} = Sequelize
const sequelize = new Sequelize("userapp", "root", "12345", {
  dialect: "mysql",
});

const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
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
  }
});

class Db {

  constructor(sequelize) {
    
    this.connectDatabase()
  }

  async connectDatabase() {
    try {
      await sequelize.authenticate();
      console.log("connected");
    } catch (error) {
      console.error(error);
    }
  }
  async addUser(myUsername, myEmail, myPassword) {
    try {
     

      await User.sync({ alter: true });
      const user = User.build({
        username: myUsername,
        email: myEmail,
        password: myPassword
      });
      console.log(user.toJSON());
      return user.save();

    } catch (error) {
      console.error(error);
    }
  }

  async findUser() {
    try {
      const User = sequelize.define('user', {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
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
        }
      });

      await User.sync({ alter: true });
      const data = await User.findAll();
      data.forEach((element) => {
        console.log(element.toJSON());
      });
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = Db
