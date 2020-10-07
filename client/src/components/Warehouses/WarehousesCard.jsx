import React, { Component } from 'react';
import IconRight from '../Icons/IconRight';
import Control from './Control';

class WarehousesCard extends Component {
    render() {
        return (
            <div className="card__container wrapper">
                <div className="card__content-wrapper">
                    <div className="card__detail">
                        <div className="card__detail-info">
                            <div className="card__detail-item">
                                <div className="card__detail-label">Warehouse</div>
                                <div className="card__detail-text card__detail-name">
                                    Manhattan <IconRight />
                                </div>
                            </div>
                            <div className="card__detail-item">
                                <div className="card__detail-label">Address</div>
                                <div className="card__detail-text">503 Broadway, New York, USA</div>
                            </div>

                            <div className="card__detail-item">
                                <div className="card__detail-label">Contact name</div>
                                <div className="card__detail-text">
                                    Parmin Aujla
                                </div>
                            </div>
                            <div className="card__detail-item">
                                <div className="card__detail-label">Contact information</div>
                                <div className="card__detail-text">+1 (629) 555-0129 paujla@instock.com</div>
                            </div>
                            
                        </div>
                    </div>
                    <Control />
                </div>
            </div>
        )
    }
}

export default WarehousesCard;