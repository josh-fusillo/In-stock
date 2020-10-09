const express = require("express");
const router = express.Router();
const inventoryList = require('../data/inventories.json');
const bodyParser = require('body-parser')
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
    warehouse: selected.warehouseName
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
    console.log(req)
  })

  router.put('/:id', (req, res) => {
    // const selected = inventoryList.find(item => item.id === req.params.id);
    // console.log(req.params.id);


    const reqID = req.params.id
    const selected = inventoryList.filter(item => item.id === reqID)[0];
    const index = inventoryList.indexOf(selected);
    const keys = Object.keys(req.body);
    keys.forEach(key =>{selected[key] = req.body[key]});
    inventoryList[index] = selected;
    res.json(inventoryList[index]);


    // res.json({
      // selected
      // itemName: req.body.itemName,
      // id: req.body.id,
      // description: req.body.description,
      // category: req.body.category,
      // status: req.body.status,
      // quantity: req.body.quantity,
      // warehouse: req.body.warehouseName
      // })
    // inventoryList.update(req.body);

  })

module.exports = router;