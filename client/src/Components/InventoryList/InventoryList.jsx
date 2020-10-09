import React, { Component } from 'react'
import axios from 'axios';
import uuid from 'uuid';
import IconSearch from '../Icons/IconSearch';
import InventoryTitle from './InventoryTitle';
import InventoryCard from './InventoryCard';
import AddInventory from '../AddInventory/AddInventory';
import {Route, Switch, Link} from 'react-router-dom'
import './InventoryList.scss';


export default class InventoryList extends Component {
    state ={
        inventoryInfo: [],
        warehousesInfo: []
    }
    
    getInventoryList = () => {
        axios
            .get(`http://localhost:8080/inventory/`)
            .then(res => {
                this.setState({                        
                inventoryInfo: res.data
            })                            
        })                     
    }
    
    getWarehousesList = () => {
        axios
            .get(`http://localhost:8080/warehouses/`)
            .then(res => {
                        this.setState({                        
                        warehousesInfo: res.data
                    })                
            })                  
    }   
        
    componentDidMount() {
        this.getInventoryList();
         this.getWarehousesList();        
    } 

    addInventory = (e) => {
        e.preventDefault();
        let newItem = {
          id: 1001,
          warehouseID: e.target.title.value,
          itemName: e.target.name.value,
          description: e.target.description,
          category: 'gear',
          status: e.target.description,
          quantity: '0',
          
        }
  
        axios
        .post('/inventory', newItem)
        
        .then (res=> {
            console.log(res.data)
          this.setState({
            inventoryInfo: res.data
       
        
          })
        })
        e.target.reset();
      }
      componentDidUpdate () {
          this.addInventory();
      }
    
    
    

    render() {
        return (
     
            <Switch>
                <Route exact path="/inventory/addInventory" render = {()=> <AddInventory addInventory = {this.addInventory} />}/>
            <div className="container">
                <div className="inventory">
                    <div className="inventory__card-wrapper wrapper">
                        <div className="inventory__card-content">
                            <div className="inventory__header-container">
                                <div className="inventory__header-left">Inventory</div>

                                <div className="inventory__header-right">
                                <div className="inventory__search-container input">
                                    <input type="search"
                                    placeholder="Search ..."
                                    className="inventory__search-input" />
                                    <IconSearch />
                                </div>
                                    <Link to="/inventory/addInventory">
                                        <div className="inventory__add-btn btn-large">
                                
                                            + Add New Item
                                    
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <InventoryTitle />

                    {this.state.inventoryInfo.map(data => 
                    <InventoryCard 
                       key={data.id}
                       warehouseID={data.warehouseID}
                       warehouseName={data.warehouseName}
                       itemname={data.itemName} 
                       category={data.category}
                       status={data.status}
                       quantity={data.quantity}
                    />)}
                </div>
            </div>
            </Switch>
        )
    }
}