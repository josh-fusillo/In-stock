import React, { Component } from 'react';
import IconSort from '../Icons/IconSort';
import Sort from '../../assets/Icons/sort-24px.svg';

class InventoryTitle extends Component {
    render() {
        return (
            <div className="inventory__title-container wrapper">
                <div className="inventory__title inventory__title-nametype">
                    <h4 className="inventory__title">inventory item</h4>
                    <IconSort />
                </div>

                <div className="inventory__title inventory__title-type">
                    <h4 className="inventory__title">category</h4>
                    <IconSort />
                </div>

                <div className="inventory__title inventory__title-status">
                    <h4 className="inventory__title">status</h4>
                    <IconSort />
                </div>

                <div className="inventory__title inventory__title-qty">
                    <h4 className="inventory__title">qty</h4>
                    <IconSort />
                </div>
                
                <div className="inventory__title inventory__title-location">
                    <h4 className="inventory__title">warehouse</h4>
                    <IconSort />
                </div>

                <div className="inventory__title">
                    <h4 className="inventory__title">actions</h4>
                </div>
            </div>
        )
    }
}

export default InventoryTitle;