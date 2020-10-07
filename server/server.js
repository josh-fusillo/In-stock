const express = require('express');
const app = express();
const port = process.env.PORT || process.argv[2] || 8080;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const cors = require('cors');
const warehousesRoute = require('./routes/warehousesroute.js');
const inventoryRoute = require('./routes/inventoryroute.js');


app.use(express.json());
app.use(cors());
app.use('/warehouses', warehousesRoute);
app.use('/inventory', inventoryRoute);


app.listen(port, () => console.log(`We're live on ${port}`))

