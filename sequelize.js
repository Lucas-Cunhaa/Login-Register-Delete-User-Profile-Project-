const Sequelize = require("sequelize");
const {DataTypes} = Sequelize
const sequelize = new Sequelize("userapp", "root", "12345", {
  dialect: "mysql",
});


async function connectDatabase() {
  try {
    await sequelize.authenticate();
    console.log("connected");
  } catch (error) {
    console.error(error);
  }
}

const User = sequelize.define('user', { 
  id : { 
    type : DataTypes.INTEGER,
    allowNull : false, 
    autoIncrement : true, 
    primaryKey: true
   }, 
  username: {
    type: DataTypes.STRING,
    allowNull : false,
    
  }, 
  email : {
    type: DataTypes.STRING,
    allowNull : false,
  } , 
  password: {
    type: DataTypes.STRING,
    allowNull : false,
  }
});

async function createTable () {
  try {
    await User.sync()
    console.log('Table and model synced')
  } catch (error) {
    console.error(error)
  }
}


connectDatabase()
createTable()
