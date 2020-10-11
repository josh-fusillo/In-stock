const express = require("express");
const router = express.Router();
const warehouseList = require('../data/warehouses.json');
const bodyParser = require ('body-parser');


router.use(bodyParser.json());
// router.use(methodOverride('_method'))

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

// Post request to add new warehouse 

router.post('/', (req, res) => {
  const {
    id,
    warehouseName,
    street,
    city,
    country,
    contact: {
      name,
      position,
      phone,
      email,
    },
  } = req.body

  res.json([
    ...warehouseList,
    {
      id,
      warehouseName,
      street,
      city,
      country,
      contact: {
        name,
        position,
        phone,
        email,
      },
    }
  ])

  if (req.body) {
  warehouseList.push(req.body);
  res.send(201).send(warehouseList)
  console.log(req.body)
  } else {
    res.status(400).send ('Error: invalid request');
    console.log(req.body)
  }
})

// Put request to edit and update a warehouse 

router.put('/:id', (req, res) => {
const reqID = req.params.id
const selected = warehouseList.filter(warehouse => warehouse.id === reqID)[0];
const index = warehouseList.indexOf(selected);
const keys = Object.keys(req.body);
keys.forEach(key =>{selected[key] = req.body[key]});
warehouseList[index] = selected;
res.json(warehouseList[index]);
  if(!err){
    res.send("Successfully updated article.");
  } else {
  res.status(400).send ('Error: invalid request');
  }
})


module.exports = router; 



