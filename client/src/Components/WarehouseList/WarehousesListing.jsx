import React, { Component } from 'react';
import WarehousesCard from './WarehousesCard';
import WarehousesTitle from './WarehousesTitle';
import IconSearch from '../Icons/IconSearch';
import './WarehouseList.scss';

class WarehousesListing extends Component {
    render() {
        return (
            <div className="container">
                <div className="warehouses">
                    <div className="warehouses__card-container wrapper">
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

export default WarehousesListing;