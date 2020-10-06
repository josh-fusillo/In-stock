import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './Components/Header/Header'
// import Warehouse from '';
import WarehouseDetails from './Components/WarehouseDetails/WarehouseDetails';
// import Inventory from '';
// import InventoryDetails from '';

class App extends React.Component {
  render() {
  return (
    <>
     <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          {/* <Redirect exact from = '/' to = '/warehouse'/>
          <Route exact = '/warehouse' component {Warehouse}/> */}
          <Route exact path = '/warehouse/:id' component = {WarehouseDetails}/>
          {/* <Route exact = '/inventory' component = {Inventory}/>
          <Route exact path = '/inventory/:id' component = {InventoryDetails}/> */}
        </Switch>
      </BrowserRouter>
     </div>
    </>
  );
  }
}

export default App;
