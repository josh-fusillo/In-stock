const express = require("express");
const router = express.Router();
const warehouseList = require('../data/warehouses.json');

// Get request for all warehouse 

router.get("/", (_req, res) => {res.json(warehouseList)});

// router.get("/warehouses/:warehouseid", (req, res) => {
//     const selectedWarehouse = warehouseList.find(warehouse => warehouse.id === req.params.id);
//     res.json({
//         city:selectedWarehouse.city
//         // selectedWarehouse
//     })
//     console.log(req.params.id)
// });

module.exports = router;