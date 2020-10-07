import React, { Component } from 'react';
import axios from 'axios';
import WarehousesCard from './WarehousesCard';
import WarehousesTitle from './WarehousesTitle';
import IconSearch from '../Icons/IconSearch';
import './WarehousesList.scss';

class WarehousesList extends Component {
    state ={
               
    }
       
    getWarehousesList = () => {
        axios
            .get(`http://localhost:8080/warehouses/`)
            .then(res => console.log(res.data))        
    }    
        
    componentDidMount() {
        this.getWarehousesList();        
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
                    <WarehousesCard />
                </div>
            </div>
        )
    }
}

export default WarehousesList;