const express = require("express");
const { getItemController } = require("../controllers/itemController");
const router = express.Router();

//routes
//method-get
router.get("/get-item", getItemController);

module.exports = router;
