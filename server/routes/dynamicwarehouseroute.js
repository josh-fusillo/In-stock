const express = require("express");
const router = express.Router();
const warehouseList = require('../data/warehouses.json');
const bodyParser = require('body-parser');
router.use(bodyParser.json());
const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || process.argv[2] || 8080

router.get("/warehouses/:warehouseid", (_req, res) => {
    const selectedWarehouse = warehouseList.find(warehouse => warehouse.id === "2922c286-16cd-4d43-ab98-c79f698aeab0");
    res.json({
      selected
      // id: selected.id,
      // name: selected.name,
      // address: selected.address,
      // city: selected.city,
      // country: selected.country,
      // contact: selected.contact,
    })
    console.log(selected);
  })

module.exports = router; 