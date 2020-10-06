import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Warehouse from '';
import WarehouseDetails from '';
import Inventory from '';
import InventoryDetails from '';

import WarehouseEdit from './WarehouseEdit';

class App extends React.Component {
  render() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Redirect exact from = '/' to = '/warehouse'/>
          <Route exact = '/warehouse' component {Warehouse}/>
          <Route exact path = '/warehouse/:id' component = {WarehouseDetails}/>
          <Route exact = '/inventory' component = {Inventory}/>
          <Route exact path = '/inventory/:id' component = {InventoryDetails}/>
        </Switch>
      </BrowserRouter>
    </>
  );
  }
}

export default App;
