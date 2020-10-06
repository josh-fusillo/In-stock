const express = require("express");
const router = express.Router();
const warehouseList = require('../data/warehouses.json');

// Get request for all warehouse 

router.get("/", (_req, res) => {res.json(warehouseList);});

module.exports = router;