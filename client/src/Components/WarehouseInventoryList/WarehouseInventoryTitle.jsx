import React, { Component } from 'react';
import IconSort from '../Icons/IconSort';

class WarehouseInventoryTitle extends Component {
    render() {
        return (
            <div className="warehouses__title-container wrapper">
                <div className="warehouses__title">
                    inventory item
                    <IconSort />
                </div>

                <div className="warehouses__title">
                    category
                    <IconSort />
                </div>

                <div className="warehouses__title">
                    status
                    <IconSort />
                </div>

                <div className="warehouses__title">
                    qty
                    <IconSort />
                </div>

                <div className="warehouses__title">
                    actions
                </div>
            </div>
        )
    }
}

export default WarehouseInventoryTitle;