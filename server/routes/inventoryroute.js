const express = require("express");
const router = express.Router();
const inventoryList = require('../data/inventories.json');

// Get request for all inventory

router.get("/", (_req, res) => {	res.json(inventoryList);});

router.get('/:id', (req, res) => {
    const selected = inventoryList.find (item => item.id === req.params.id);
    console.log(req)
    res.json({
    itemName: selected.itemName,
    id: selected.id,
    description: selected.description,
    category: selected.category,
    status: selected.status,
    quantity: selected.quantity,
    warehouse: selected.warehouseName
    })
  })


module.exports = router;