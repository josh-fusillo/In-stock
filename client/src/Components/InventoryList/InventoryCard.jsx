import React from 'react';
import IconRight from '../Icons/IconRight';
import axios from 'axios';
import {Link} from 'react-router-dom';
import InventoryModal from '../Modals/InventoryModal';
import Edit from '../../assets/Icons/edit-24px.svg';
import Status from '../Status/Status';

export default function InventoryCard (props) {

    let deleteItem = (e) => {
        const {match: {params}} = this.props;
        const invID = params.id;
        axios
        .delete(`/inventory/${invID}`)
    }
    
        return (
            <div className="inventory__card-container wrapper">
                <div className="inventory__card-content-wrapper">
                    <div className="inventory__card-detail">
                        <div className="inventory__card-detail-info">
                            <div className="inventory__card-detail-info--cl2">
                                <div className="inventory__card-detail-item inventory__card-detail-item-nametype">
                                    <div className="inventory__card-detail-label">inventory item</div>
                                    <Link to={`/inventory/${props.id}`}><div className="inventory__card-detail-text inventory__card-detail-name">
                                        {props.itemname} <IconRight />
                                    </div></Link>
                                </div>

                                <div className="inventory__card-detail-item inventory__card-detail-item-type">
                                    <div className="inventory__card-detail-label">category</div>
                                    <div className="inventory__card-detail-text">{props.category}</div>
                                </div>
                            </div>

                            <div className="inventory__card-detail-info--cl3">
                                <div className="inventory__card-detail-item inventory__card-detail-item-status">
                                    <div className="inventory__card-detail-label">status</div>
                                    <Status quantity={props.quantity} />
                                </div>

                                <div className="inventory__card-detail-item inventory__card-detail-item-qty">
                                    <div className="inventory__card-detail-label">qty</div>
                                    <div className="inventory__card-detail-text">{props.quantity}</div>
                                </div>

                                <div className="inventory__card-detail-item inventory__card-detail-item-location">
                                    <div className="inventory__card-detail-label">warehouse</div>
                                    <div className="inventory__card-detail-text">{props.warehouseName}</div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="inventory__card-control">
                        <InventoryModal />
                        <Link  to={`/inventory/editinventory/${props.id}`}>
                            <img src={Edit} alt="Edit icon" />
                        </Link>
                    </div>
                </div>
            </div>
        )
    
}



