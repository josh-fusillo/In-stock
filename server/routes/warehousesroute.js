const express = require("express");
const router = express.Router();
const warehouseList = require('../data/warehouses.json');

// Get request for all warehouse 

router.get("/", (_req, res) => {res.json(warehouseList)});

<<<<<<< HEAD

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
=======
router.get('/:id', (req, res) => {
    const selected = warehouseList.find (warehouse => warehouse.id === req.params.id);
    console.log(req)
    res.json({
      id: selected.id,
      name: selected.contact.name,
      warehouse: selected.name,
      position: selected.contact.position,
      address: selected.address,
      city: selected.city,
      country: selected.country,
      email: selected.contact.email,
      phone: selected.contact.phone
>>>>>>> developer
    })
  })

module.exports = router;