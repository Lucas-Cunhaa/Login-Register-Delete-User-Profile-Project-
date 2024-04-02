const Sequelize = require("sequelize");

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

connectDatabase()
