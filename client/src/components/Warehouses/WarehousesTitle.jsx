import React, { Component } from 'react';
import IconSort from '../Icons/IconSort';

class WarehousesTitle extends Component {
    render() {
        return (
            <div className="warehouses__title-container wrapper">
                <div className="warehouses__title">
                    warehouse
                    <IconSort />
                </div>

                <div className="warehouses__title">
                    address
                    <IconSort />
                </div>

                <div className="warehouses__title">
                    contact name
                    <IconSort />
                </div>

                <div className="warehouses__title">
                    contact information
                    <IconSort />
                </div>

                <div className="warehouses__title">
                    action
                </div>
            </div>
        )
    }
}

export default WarehousesTitle;