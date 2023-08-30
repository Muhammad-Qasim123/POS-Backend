const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.mongo_URI);
    console.log(`MongoDb Connected localHost`.yellow);
  } catch (error) {
    console.log(`Error : ${error.messeage}`.bgRed);
    process.exit(1);
  }
};

module.exports = connectDb;
