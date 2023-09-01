const express = require("express");
const {
  getItemController,
  addItemController,
} = require("../controllers/itemController");
const router = express.Router();

//routes
//method-get
router.get("/get-item", getItemController);
router.post("/add-item", addItemController);

module.exports = router;
