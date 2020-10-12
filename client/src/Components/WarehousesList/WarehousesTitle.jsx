import React, { Component } from 'react';
import IconSort from '../Icons/IconSort';

class WarehousesTitle extends Component {
    render() {
        return (
            <div className="warehouses__title-container wrapper">
                <div className="warehouses__title">
                    <h4 className="warehouses__title">warehouse</h4>
                    <IconSort />
                </div>

                <div className="warehouses__title warehouses__title--address">
                    <h4 className="warehouses__title">address</h4>
                    <IconSort />
                </div>

                <div className="warehouses__title warehouses__title--contactName">
                    <h4 className="warehouses__title">contact name</h4>
                    <IconSort />
                </div>

                <div className="warehouses__title warehouses__title--contact">
                    <h4 className="warehouses__title">contact information</h4>
                    <IconSort />
                </div>

                <div className="warehouses__title">
                    <h4 className="warehouses__title">actions</h4>
                </div>
            </div>
        )
    }
}

export default WarehousesTitle;