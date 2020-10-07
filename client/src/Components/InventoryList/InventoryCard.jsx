import React, { Component } from 'react';
import IconRight from '../Icons/IconRight';
import IconDelete from '../Icons/IconDelete';
import IconEdit from '../Icons/IconEdit';

class InventoryCard extends Component {
    render() {
        return (
            <div className="card__container wrapper">
                <div className="card__content-wrapper">
                    <div className="card__detail">
                        <div className="card__detail-info">
                            <div className="card__detail-item">
                                <div className="card__detail-label">inventory item</div>
                                <div className="card__detail-text card__detail-name inventory__info">
                                    Television <IconRight />
                                </div>
                            </div>
                            <div className="card__detail-item">
                                <div className="card__detail-label">category</div>
                                <div className="card__detail-text inventory__info">Electronics</div>
                            </div>

                            <div className="card__detail-item">
                                <div className="card__detail-label">status</div>
                                <div className="card__detail-text card__detail-status inventory__info">
                                    in stock
                                </div>
                            </div>
                            
                            <div className="card__detail-item">
                                <div className="card__detail-label">qty</div>
                                <div className="card__detail-text inventory__info">500</div>
                            </div>

                            <div className="card__detail-item">
                                <div className="card__detail-label">warehouse</div>
                                <div className="card__detail-text inventory__info">Manhattan</div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="card__control">
                        <IconDelete />
                        <IconEdit />
                    </div>
                </div>
            </div>
        )
    }
}

export default InventoryCard;