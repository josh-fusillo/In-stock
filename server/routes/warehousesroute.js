const express = require("express");
const router = express.Router();
const warehouseList = require('../data/warehouses.json');
const uuid = require ('uuid');

// Get request for all warehouse 

router.get("/", (_req, res) => {res.json(warehouseList)});

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
    })
  })


  router.post("/warehouses", (req, res) => {
    const newWarehouse = {
        id: uuid.v4(),
        warehouseName: req,
        street: req,
        city: req,
        country: req,
        contactName: req,
        position: req,
        phone: req,
        email: req.body
    };

    const newWarehouseList = {
        id: newWarehouse.id,
        warehouseName: req,
        address: {
            street: req,
            city: req,
            country: req
        },
        contactName: req,
        contactInfo: {
            phone: req,
            email: req.body
        }
    }

    if (req.body) {
    warehouseList.push(newWarehouseList);
    res.send(201).send(warehouseList);
    console.log(req.body);
    }

    else {
        res.status(400).send ("Error: invalid request body");
    }
});


module.exports = router; 



