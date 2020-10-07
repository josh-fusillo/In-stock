import React, { Component } from 'react';
import IconRight from '../Icons/IconRight';
import Delete from '../../assets/Icons/delete_outline-24px.svg';
import Edit from '../../assets/Icons/edit-24px.svg';

class InventoryCard extends Component {
    render() {
        return (
            <div className="inventory__card-container wrapper">
                <div className="inventory__card-content-wrapper">
                    <div className="inventory__card-detail">
                        <div className="inventory__card-detail-info">
                            <div className="inventory__card-detail-info--cl2">
                                <div className="inventory__card-detail-item inventory__card-detail-item-nametype">
                                    <div className="inventory__card-detail-label">inventory item</div>
                                    <div className="inventory__card-detail-text inventory__card-detail-name">
                                        Television <IconRight />
                                    </div>
                                </div>

                                <div className="inventory__card-detail-item inventory__card-detail-item-type">
                                    <div className="inventory__card-detail-label">category</div>
                                    <div className="inventory__card-detail-text">Electronics</div>
                                </div>
                            </div>

                            <div className="inventory__card-detail-info--cl3">
                                <div className="inventory__card-detail-item inventory__card-detail-item-status">
                                    <div className="inventory__card-detail-label">status</div>
                                    <div className="inventory__card-detail-text">In stock</div>
                                </div>

                                <div className="inventory__card-detail-item inventory__card-detail-item-qty">
                                    <div className="inventory__card-detail-label">qty</div>
                                    <div className="inventory__card-detail-text">500</div>
                                </div>

                                <div className="inventory__card-detail-item inventory__card-detail-item-location">
                                    <div className="inventory__card-detail-label">warehouse</div>
                                    <div className="inventory__card-detail-text">Manhattan</div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="inventory__card-control">
                        <img src={Delete} alt="Delete icon" />
                        <img src={Edit} alt="Edit icon" />
                    </div>
                </div>
            </div>
        )
    }
}

export default InventoryCard;