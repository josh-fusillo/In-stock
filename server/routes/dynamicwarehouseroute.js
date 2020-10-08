const express = require("express");
const router = express.Router();
const warehouseList = require('../data/warehouses.json');
const bodyParser = require('body-parser');
router.use(bodyParser.json());
const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || process.argv[2] || 8080



// app.get('/warehouses', (_req, res) => {
//  res.json(warehouseList)
// })

router.get('/', (req, res) => {
    const selected = warehouseList.find (warehouse => warehouse.id === req.params.id);
    console.log(req)
    req
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