import React, { Component } from 'react';
import Delete from '../../assets/Icons/delete_outline-24px.svg';
import Edit from '../../assets/Icons/edit-24px.svg';
import IconRight from '../Icons/IconRight';

class WarehouseInventoryCard extends Component {
    render() {
        return (
            <div className="warehouses__card-container wrapper">
                <div className="warehouses__card-content-wrapper">
                    <div className="warehouses__card-detail">
                        <div className="warehouses__card-detail-info">
                            <div className="warehouses__card-detail-item">
                                <div className="warehouses__card-detail-label">Warehouse</div>
                                <div className="warehouses__card-detail-text warehouses__card-detail-name">Television
                                    <IconRight />
                                </div>
                            </div>
                            <div className="warehouses__card-detail-item">
                                <div className="warehouses__card-detail-label">category</div>
                                <div className="warehouses__card-detail-text">Electronics</div>
                            </div>

                            <div className="warehouses__card-detail-item">
                                <div className="warehouses__card-detail-label">status</div>
                                <div className="warehouses__card-detail-text">
                                    in stock
                                </div>
                            </div>
                            <div className="warehouses__card-detail-item">
                                <div className="warehouses__card-detail-label">qty</div>
                                <div className="warehouses__card-detail-text">500</div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="warehouses__card-control">
                        <img src={Delete} alt="Delete icon" />
                        <img src={Edit} alt="Edit icon" />
                    </div>
                </div>
            </div>
        )
    }
}

export default WarehouseInventoryCard;