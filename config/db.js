const mongoose = require("mongoose");

const dbUser = process.env.DB_USER_EXPRESS;
const dbPassword = process.env.DB_PASS_EXPRESS;

const conn = async () => {
  try {
    const dbConn = await mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPassword}@cluster0.jvls8ng.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log("Conectou ao banco!");

    return dbConn;
  } catch (error) {
    console.log(error);
  }
};

conn();

module.exports = conn;
