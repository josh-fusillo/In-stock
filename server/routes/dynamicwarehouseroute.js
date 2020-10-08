const express = require("express");
const router = express.Router();
const warehouseList = require('../data/warehouses.json');

router.get("/warehouses/:warehouseid", (_req, res) => {
    const selectedWarehouse = warehousesRoute.find(warehouse => warehouse.id === req.params.id);
    res.json({
        selectedWarehouse
    })
});

module.exports = router;