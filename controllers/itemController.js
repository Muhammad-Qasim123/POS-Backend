const itemModal = require("../models/itemModal");

exports.getItemController = async (req, res) => {
  try {
    const items = await itemModal.find();
    res.status(200).send(items);
  } catch (error) {}
};
