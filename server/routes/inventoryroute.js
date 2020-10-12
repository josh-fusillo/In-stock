const express = require("express");
const router = express.Router();
const inventoryList = require('../data/inventories.json');
const bodyParser = require('body-parser')
const fs = require('fs');
router.use(bodyParser.json())

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
    warehouse: selected.warehouseName,
    warehouseId: selected.warehouseID
    })
  })

  router.post('/', (req, res) => {
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
      ...inventoryList,
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

  router.put('/:id', (req, res) => {
    const selected = inventoryList.find (item => item.id === req.params.id);
    const objectKeys = Object.keys(req.body);
    objectKeys.forEach(key =>{selected[key] = req.body[key]});
    res.json({
      itemName: selected.itemName,
      warehouseID: selected.warehouseID,
      id: selected.id,
      description: selected.description,
      category: selected.category,
      status: selected.status,
      quantity: selected.quantity,
      warehouse: selected.warehouseName
      })
  })

  router.delete('/:id', (req, res) => {
    const selected = inventoryList.find (item => item.id === req.params.id);

    const indexValue = inventoryList.indexOf(selected);

    inventoryList.splice(indexValue, 1);

    res.send('item has been deleted')

  })

module.exports = router;