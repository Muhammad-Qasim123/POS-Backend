const itemModal = require("../models/itemModal");

////////// get items
exports.getItemController = async (req, res) => {
  try {
    const items = await itemModal.find();
    res.status(200).send(items);
  } catch (error) {
    console.log(`error while call the getItemController api ${error}`);
  }
};

///////add items
exports.addItemController = async (req, res) => {
  try {
    const newItem = new itemModal(req.body);
    await newItem.save();
    res.status(201).send("items add successfully");
  } catch (error) {
    res.status(400).send("error", error);
    console.log(`error while call the addItemController api ${error}`);
  }
};
