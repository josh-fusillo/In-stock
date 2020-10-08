import React, { Component } from 'react';
import IconSearch from '../Icons/IconSearch';
import WarehouseInventoryTitle from './WarehouseInventoryTitle';
import WarehouseInventoryCard from './WarehouseInventoryCard';

 class WarehouseInventoryList extends Component {
    render() {
        return (
            <div className="container">
                <div className="warehouses">
                    <div className="warehouses__card-wrapper wrapper">
                        <div className="warehouses__card-content">
                            <div className="warehouses__header-container">
                                <div className="warehouses__header-left">Inventory</div>

                                <div className="warehouses__header-right">
                                <div className="warehouses__search-container input">
                                    <input type="search"
                                    placeholder="Search ..."
                                    className="warehouses__search-input" />
                                    <IconSearch />
                                </div>
                                    <div className="warehouses__add-btn btn-large">
                                        + Add New Item
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <WarehouseInventoryTitle />
                    <WarehouseInventoryCard />
                </div>
            </div>
        )
    }
}

export default WarehouseInventoryList;