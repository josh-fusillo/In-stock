import React, { Component } from 'react';
import axios from 'axios';
import WarehousesCard from './WarehousesCard';
import WarehousesTitle from './WarehousesTitle';
import IconSearch from '../Icons/IconSearch';
import './WarehousesList.scss';

class WarehousesList extends Component {
    state ={
        warehousesInfo: [],      
        currentId: null,
        currentItemName: "",
        visible: false
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
        this.getWarehousesList();               
    }

    openModal = (id, itemName) => {
        this.setState({
            currentId: id,
            currentItemName: itemName,
            visible: true
        });
    }

    closeModal = (id, itemName) => {
        this.setState({
            currentId: id,
            currentItemName: itemName,
            visible: false
        });
    }
    
    render() {
        return (
            <div className="container">
                <div className="warehouses">
                    <div className="warehouses__card-wrapper wrapper">
                        <div className="warehouses__card-content">
                            <div className="warehouses__header-container">
                                <div className="warehouses__header-left">Warehouses</div>

                                <div className="warehouses__header-right">
                                <div className="warehouses__search-container input">
                                    <input type="search"
                                    placeholder="Search ..."
                                    className="warehouses__search-input" />
                                    <IconSearch />
                                </div>
                                    <div className="warehouses__add-btn btn-large">
                                        + Add New Warehouse
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <WarehousesTitle />

                    {/* {this.state.warehousesInfo.map(data => 
                    <WarehousesCard 
                        key={data.id} 
                        warehouseId={data.id}
                        name={data.name} 
                        address={data.address} 
                        city={data.city} 
                        country={data.country} 
                        contactname={data.contact.name}
                        phone={data.contact.phone}
                        email={data.contact.email}        
                     />)} */}

                    {this.state.warehousesInfo.map(data => 
                    <WarehousesCard 
                        // key={data.id} 
                        // warehouseId={data.id}
                        // name={data.name} 
                        // address={data.address} 
                        // city={data.city} 
                        // country={data.country} 
                        // contactname={data.contact.name}
                        // phone={data.contact.phone}
                        // email={data.contact.email} 
                        whData={data} 
                        closeModal={this.closeModal}
                        openModal={this.openModal}   
                        visible={this.state.visible}  
                     />)}
                    
                </div>
            </div>
        )
    }
}

export default WarehousesList;