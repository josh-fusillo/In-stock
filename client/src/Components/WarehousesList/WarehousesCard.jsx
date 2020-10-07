import React, { Component } from 'react';
import IconRight from '../Icons/IconRight';
import Delete from '../../assets/Icons/delete_outline-24px.svg';
import Edit from '../../assets/Icons/edit-24px.svg';
import WarehouseModal from '../Modals/WarehouseModal'

class WarehousesCard extends Component {
    render() {
        return (
            <div className="warehouses__card-container wrapper">
                <div className="warehouses__card-content-wrapper">
                    <div className="warehouses__card-detail">
                        <div className="warehouses__card-detail-info">
                            <div className="warehouses__card-detail-item">
                                <div className="warehouses__card-detail-label">Warehouse</div>
                                <div className="warehouses__card-detail-text warehouses__card-detail-name">
                                    Manhattan <IconRight />
                                </div>
                            </div>
                            <div className="warehouses__card-detail-item warehouses__card-detail-item-address">
                                <div className="warehouses__card-detail-label">Address</div>
                                <div className="warehouses__card-detail-text">503 Broadway, New York, USA</div>
                            </div>

                            <div className="warehouses__card-detail-item">
                                <div className="warehouses__card-detail-label">Contact name</div>
                                <div className="warehouses__card-detail-text">
                                    Parmin Aujla
                                </div>
                            </div>
                            <div className="warehouses__card-detail-item warehouses__card-detail-item-contact">
                                <div className="warehouses__card-detail-label">Contact information</div>
                                <div className="warehouses__card-detail-text">+1 (629) 555-0129</div>
                                <div className="warehouses__card-detail-text">paujla@instock.com</div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="warehouses__card-control">
                        <WarehouseModal className="warehouses__card-modal" />
                        <img src={Edit} alt="Edit icon" />
                    </div>
                </div>
            </div>
        )
    }
}

export default WarehousesCard;