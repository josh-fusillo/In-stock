import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header'
import Warehouse from '';
import WarehouseDetails from '';
import WarehouseEdit from './Components/WarehouseEdit';

class App extends React.Component {
  render() {
  return (
    <>
     <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Redirect exact from = '/' to = '/warehouse'/>
          <Route exact = '/warehouse' component {Warehouse}/>
          <Route exact path = '/warehouse/:id' component = {WarehouseDetails}/>
          <Route exact = '/inventory' component = {}/>
          <Route exact path = '/inventory/:id' component = {}/>
        </Switch>
      </BrowserRouter>
     </div>
    </>
  );
  }
}

export default App;
