import React from 'react';
import './App.scss';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import WarehouseDetails from './Components/WareHouseDetails/WareHouseDetails';
import InventoryList from './Components/InventoryList/InventoryList';
import WarehouseEdit from './Components/WarehouseEdit/WarehouseEdit';
import WarehouseAdd from './Components/WarehouseAdd/WarehouseAdd';
import InventoryDetails from './Components/InventoryDetails/InventoryDetails';
import WarehousesList from './Components/WarehousesList/WarehousesList';
import InventoryListing from './Components/InventoryList/InventoryListing';
import AddInventory from './Components/AddInventory/AddInventory';
import EditInventory from './Components/EditInventory/EditInventory';
import WarehouseInventoryList from './Components/WarehouseInventoryList/WarehouseInventoryList';

class App extends React.Component {
  render() {
  return (
     <div className="App">
       <BrowserRouter>
        <Header />        
        {/* <Switch> */}          
          <Route exact path = '/warehouse/warehouseDetails' component = {WarehouseDetails}/>
          <Route exact path = '/warehouse/inventoryList' component = {InventoryList}/>
          <Route exact path = '/warehouse/warehouseEdit' component = {WarehouseEdit}/>
          <Route exact path = '/warehouse/warehouseAdd' component = {WarehouseAdd}/> 
          <Route exact path = '/inventory/inventoryDetails' component = {InventoryDetails}/>
          <Route exact path = '/inventory/addInventory' component = {AddInventory}/> 
          <Route exact path = '/inventory/editInventory' component = {EditInventory}/> 
          {/* <Redirect exact from = '/' to = '/warehouse'/>
          <Route exact = '/warehouse' component {Warehouse}/> */}
          {/* <Route exact path = '/warehouse/:id' component = {WarehouseDetails}/> */}
          {/* <Route exact = '/inventory' component = {Inventory}/>
          <Route exact path = '/inventory/:id' component = {InventoryDetails}/> */}
         {/* </Switch> */}
        <Route exact path = '/warehouse/warehouseList' component = {WarehousesList}/>
        <Route exact path = '/inventory/inventoryListing' component = {InventoryListing}/>
        <Route exact path = '/inventory/warehouseinventoryList' component = {WarehouseInventoryList}/>
      </BrowserRouter>
     </div>
  );
  }
}

export default App;