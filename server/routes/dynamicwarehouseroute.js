const express = require("express");
const router = express.Router();
const warehouseList = require('../data/warehouses.json');

router.get("/warehouses/:warehouseid", (_req, res) => {
    const selectedWarehouse = warehouseList.find(warehouse => warehouse.id === "2922c286-16cd-4d43-ab98-c79f698aeab0");
    res.json({
        city:selectedWarehouse.city
        // selectedWarehouse
    })
});


module.exports = router; 