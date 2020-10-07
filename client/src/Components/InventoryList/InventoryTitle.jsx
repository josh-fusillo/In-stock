import React, { Component } from 'react';
import IconSort from '../Icons/IconSort';

class InventoryTitle extends Component {
    render() {
        return (
            <div className="inventory__title-container wrapper">
                <div className="inventory__title inventory__title-nametype">
                    inventory item
                    <IconSort />
                </div>

                <div className="inventory__title inventory__title-type">
                    category
                    <IconSort />
                </div>

                <div className="inventory__title inventory__title-status">
                    status
                    <IconSort />
                </div>

                <div className="inventory__title inventory__title-qty">
                    qty
                    <IconSort />
                </div>
                
                <div className="inventory__title inventory__title-location">
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