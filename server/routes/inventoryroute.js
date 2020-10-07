const express = require("express");
const router = express.Router();
const inventoryList = require('../data/inventories.json');

// Get request for all inventory

router.get("/", (_req, res) => {	res.json(inventoryList);});

module.exports = router;