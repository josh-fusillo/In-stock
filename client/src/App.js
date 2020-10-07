import React from 'react';

// import './App.css';

import './App.scss';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './Components/Header/Header'
import WarehousesList from './Components/Warehouses/WarehousesList';
import WarehouseDetails from './Components/WarehouseDetails/WarehouseDetails';
import InventoryList from './Components/InventoryList/InventoryList';

import WarehousesList from './Components/Warehouses/WarehousesList.jsx';
// import Inventory from '';
// import InventoryDetails from '';

// import WarehouseEdit from './Components/WarehouseEdit/WarehouseEdit';
// import WarehouseAdd from './Components/WarehouseAdd/WarehouseAdd';

class App extends React.Component {
  render() {
  return (
    // <>
     <div className="App">
      {/* <BrowserRouter>
        <Header />
        <WarehouseList />
        <InventoryList />
        <Switch>
          <Route exact path = '/warehouse/warehousesList' component = {WarehousesList}/>

          <Route exact path = '/warehouse/warehouseEdit' component = {WarehouseEdit}/>
          <Route exact path = '/warehouse/warehouseAdd' component = {WarehouseAdd}/> */}
          {/* <Redirect exact from = '/' to = '/warehouse'/>
          <Route exact = '/warehouse' component {Warehouse}/> */}
          {/* <Route exact path = '/warehouse/:id' component = {WarehouseDetails}/> */}
          {/* <Route exact = '/inventory' component = {Inventory}/>
          <Route exact path = '/inventory/:id' component = {InventoryDetails}/> */}

        </Switch>
      </BrowserRouter>

        {/* </Switch>
      </BrowserRouter> */}
      {/* <WarehousesList /> */}

     </div>
    // </>
  );
  }
}

export default App;
