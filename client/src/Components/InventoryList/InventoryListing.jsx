import React, { Component } from 'react';
import IconSearch from '../Icons/IconSearch';
import InventoryTitle from './InventoryTitle';
import InventoryCard from './InventoryCard';
import './InventoryList.scss';

class InventoryListing extends Component {
    render() {
        return (
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
                                    <div className="inventory__add-btn btn-large">
                                        + Add New Item
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <InventoryTitle />
                    <InventoryCard />
                </div>
            </div>
        )
    }
}

export default InventoryListing;