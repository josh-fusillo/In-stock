const express = require("express");
const router = express.Router();
const warehouseList = require('../data/warehouses.json');

// Get request for all warehouse 

router.get("/", (_req, res) => {res.json(warehouseList)});


// Get request for specific warehouse 

router.get('/:id', (req, res) => {
    const selected = warehouseList.find (warehouse => warehouse.id === req.params.id);
    console.log(req)
    
    res.json({
      id: selected.id,
      name: selected.name,
      address: selected.address,
      city: selected.city,
      country: selected.country,
      contact: selected.contact,
    })
  })

module.exports = router;