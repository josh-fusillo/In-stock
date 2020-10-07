import React, { Component } from 'react';
import IconSort from '../Icons/IconSort';

class InventoryTitle extends Component {
    render() {
        return (
            <div className="inventory__title-container wrapper">
                <div className="inventory__title">
                    inventory item
                    <IconSort />
                </div>

                <div className="inventory__title">
                    category
                    <IconSort />
                </div>

                <div className="inventory__title">
                    status
                    <IconSort />
                </div>

                <div className="inventory__title">
                    qty
                    <IconSort />
                </div>
                
                <div className="inventory__title">
                    warehouse
                    <IconSort />
                </div>

                <div className="inventory__title">
                    actions
                </div>
            </div>
        )
    }
}

export default InventoryTitle;