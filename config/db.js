const { default: mongoose } = require("mongoose");
const env = require("dotenv").config();

const db = {
  connect: async () => {
    try {
      await mongoose.connect(process.env.connection);
      console.log('====================================');
      console.log("mongodb connection succeeded");
      console.log('====================================');
      //("Mongoose connected!!");
    } catch (error) {
      //("Mongoose Error", error);
    }
  },
};

module.exports = {
  db,
};
