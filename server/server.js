const express = require('express')
const app = express()
const port = process.env.PORT || process.argv[2] || 8080
const bodyParser = require('body-parser')
app.use(bodyParser.json())

const warehouses = require ('./warehouses.json')

app.get('/warehouse/:id', (req, res) => {
    const selectedWarehouse = warehouses.find(warehouse => warehouse.id === req.params.id);
    res.json({
      id: selectedWarehouse.id, 
      name: selectedWarehouse.name, 
      address: selectedWarehouse.address,
      city: selectedWarehouse.city,
      country: selectedWarehouse.country,
      contact: selectedWarehouse.contact,

  })
  })


app.listen(port, () => console.log(`We're live on ${port}`))