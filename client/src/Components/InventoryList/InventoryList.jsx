import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import IconSearch from '../Icons/IconSearch';
import InventoryTitle from './InventoryTitle';
import InventoryCard from './InventoryCard';
import './InventoryList.scss';
import FilterResults from 'react-filter-search';


export default class InventoryList extends Component {
    state = {
        inventoryInfo: [],
        value: ''
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


    componentDidMount() {
        this.getInventoryList();

        
    }

    handleChange = event => {
        const { value } = event.target;
        this.setState({ value });
    };


         
    render() {
        const { inventoryInfo, value } = this.state;
        return (
     
            <div className="container">
                <div className="inventory">
                    <div className="inventory__card-wrapper wrapper">
                        <div className="inventory__card-content">
                            <div className="inventory__header-container">
                                <div className="inventory__header-left">Inventory</div>

                                <div className="inventory__header-right">
                                    <div className="inventory__search-container input">
                                        <input type="text"
                                            value={value}
                                            onChange={this.handleChange}
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

                    <InventoryTitle
                    InventoryList={this.state.inventoryInfo} />

                    <FilterResults
                        value={value}
                        data={inventoryInfo}
                        renderResults={results => (
                            <div>
                                {results.map(data => (
                                    <InventoryCard
                                        key={data.id}
                                        id={data.id}
                                        warehouseID={data.warehouseID}
                                        warehouseName={data.warehouseName}
                                        itemname={data.itemName}
                                        category={data.category}
                                        status={data.status}
                                        quantity={data.quantity}
                                    />
                                ))}
                            </div>
                        )} />
                </div>
            </div>
        )
    }
}