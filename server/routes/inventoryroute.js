const express = require("express");
const router = express.Router();
const inventoryList = require('../data/inventories.json');

// Get request for all inventory

router.get("/", (_req, res) => {	res.json(inventoryList);});

router.get('/:id', (req, res) => {
    const selected = inventoryList.find (item => item.id === req.params.id);
    console.log(req)
<<<<<<< HEAD
    
=======
>>>>>>> developer
    res.json({
    selected
    })
  })

<<<<<<< HEAD
  app.post('/intentory', (req, res) => {
    const {
      id,
      warehouseID,
      itemName,
      description,
      category,
      status,
      quantity,
      } = req.body
    res.json([
      ...videos,
      {
        id,
        warehouseID,
        itemName,
        description,
        category,
        status,
        quantity,
      }
    ])
    inventoryList.push(req.body);
  })

=======
>>>>>>> developer
module.exports = router;