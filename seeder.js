const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDb = require("./config/config");
const itemModal = require("./models/itemModal");
const items = require("./utils/data");
require("colors");

dotenv.config();
connectDb();

const importData = async () => {
  try {
    await itemModal.deleteMany();
    const itemData = await itemModal.insertMany(items);
    console.log(`all items added`.bgGreen);
    process.exit();
  } catch (error) {
    console.log(
      `${error} error while fetching the data from seeder`.bgRed.inverse
    );
    process.exit(1);
  }
};

importData();
