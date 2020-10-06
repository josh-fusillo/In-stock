const express = require("express");
const router = express.Router();
const inventoryList = require('../data/inventories.json');

// Get request for ALL warehouse 

router.get("/", (req, res) => {	res.json(inventoryList);});

module.exports = router;