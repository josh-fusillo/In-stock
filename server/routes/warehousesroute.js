const express = require("express");
const router = express.Router();
const warehouseList = require('../data/warehouses.json');
const uuid = require ('uuid');
const bodyParser = require ('body-parser');
const { ESRCH } = require("constants");

router.use(bodyParser.json());

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
    contactName,
    position,
    phone,
    email
  } = req.body

  res.json([
    ...warehouseList,
    {
      id,
      warehouseName,
      street,
      city,
      country,
      contactName,
      position,
      phone,
      email
    }
  ])

  if (req.body) {
  warehouseList.push(req.body);
  res.send(201).send(warehouseList)
  console.log(req.body)
  } else {
    res.status(400).send ('Error: invalid request body');
    console.log(req.body)
  }
})





//   router.post('/', (req, res) => {
//     console.log(req, res);
//     // try {

//     const newWarehouse = {
//         id: uuid.v4(),
//         warehouseName: req
//         // warehouseName: req.body.warehouse.name,
//         // street: req.body.warehouse.address,
//         // city: req.body.warehouse.city,
//         // country: req.body.warehouse.country,
//         // contactName: req.body.warehouse.contact.name,
//         // position: req.body.warehouse.contact.position,
//         // phone: req.body.warehouse.contact.phone,
//         // email: req.body.warehouse.contact.email
//     }

//     // const newWarehouseList = {
//     //     id: newWarehouse.id,
//         // warehouseName: newWarehouse.warehouseName,
//         // address: {
//         //     street: newWarehouse.street,
//         //     city: newWarehouse.city,
//         //     country: newWarehouse.country
//         // },
//         // contactName: newWarehouse.contactName,
//         // contactInfo: {
//         //     phone: newWarehouse.phone,
//         //     email: newWarehouse.email
//         // }
//     // }

//     if (req.body) {
//     warehouseList.push(newWarehouse)
//     res.send(201).send(warehouseList)
//     // console.log(req.body);
//     // })
//     res.send ('success')
//   }
//     else {
//         res.status(400).send ("Error: invalid request body");
//         console.log(req.body);
//     // })
//   }
// });


module.exports = router; 



