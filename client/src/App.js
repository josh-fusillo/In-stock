import React from 'react';
import './App.scss';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import InventoryList from './Components/InventoryList/InventoryList';
import WarehouseEdit from './Components/WarehouseEdit/WarehouseEdit';
import WarehouseAdd from './Components/WarehouseAdd/WarehouseAdd';
import InventoryDetails from './Components/InventoryDetails/InventoryDetails';
import WarehousesList from './Components/WarehousesList/WarehousesList';
// import InventoryListing from './Components/InventoryList/InventoryListing';
import AddInventory from './Components/AddInventory/AddInventory';
import EditInventory from './Components/EditInventory/EditInventory';
import WarehouseInventoryList from './Components/WarehouseInventoryList/WarehouseInventoryList';
import WarehouseDetails from './Components/WarehouseDetails/WarehouseDetails';
import InventoryModal from './Components/Modals/InventoryModal';

class App extends React.Component {
  render() {
  return (
     <div className="App">
       <BrowserRouter>
        <Header />       
        <Switch> 
        {/* <Switch> */}          
          <Route exact path = '/warehouse/warehouseDetails/' component = {WarehouseDetails}/>
          <Route exact path = '/warehouse/inventoryList' component = {InventoryList}/>
          <Route exact path = '/warehouse/warehouseEdit/:id' component = {WarehouseEdit}/>
          <Route exact path = '/warehouse/warehouseAdd' component = {WarehouseAdd}/> 
          <Route exact path = '/inventory/inventoryDetails/:id' component = {InventoryDetails}/>
          <Route exact path = '/inventory/addInventory' component = {AddInventory}/> 
          <Route exact path = '/inventory/editInventory/:id' component = {EditInventory}/> 
          
          {/* <Redirect exact from = '/' to = '/warehouse'/>
          <Route exact = '/warehouse' component {Warehouse}/> */}
          <Route exact path = '/warehouses/:id' component = {WarehouseDetails}/>
          <Route exact path = '/warehouses/modal/:id' component={InventoryModal}/>
          <Route exact path = '/inventory/:id' component = {InventoryDetails}/>
          {/* <Route exact = '/inventory' component = {Inventory}/>
          
         {/* </Switch> */}
        <Route exact path = '/warehouse/warehouseList' component = {WarehousesList}/>
        <Route exact path = '/inventory/warehouseinventoryList' component = {WarehouseInventoryList}/>
        {/* <Route exact path = '/inventory/inventoryList' component = {InventoryListing}/> */}
        <Route exact path = '/' component = {WarehousesList}/>
        </Switch>

      </BrowserRouter>
     </div>
  );
  }
}

export default App;