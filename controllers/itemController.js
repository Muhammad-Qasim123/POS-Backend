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

////edit Items
exports.editItemController = async (req, res) => {
  try {
    await itemModal.findOneAndUpdate({ _id: req.body.itemId }, req.body, {
      new: true,
    });
    res.status(201).send("Item Updated Successfully");
  } catch (error) {
    res.status(400).send("error", error);
    console.log(`error while call the editItemController api ${error}`);
  }
};

/////Delete items
exports.deleteItemController = async (req, res) => {
  try {
    const { itemId } = req.body;
    await itemModal.findOneAndDelete({ _id: itemId });
    res.status(200).json("item Deleted");
  } catch (error) {
    res.status(400).send("error", error);
    console.log("error while calling the editItemController Api", error);
  }
};
