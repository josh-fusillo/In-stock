import IconRight from '../Icons/IconRight';
import Delete from '../../assets/Icons/delete_outline-24px.svg';
import Edit from '../../assets/Icons/edit-24px.svg';
import WarehouseModal from '../Modals/WarehouseModal'
import React from 'react'
import {Link} from 'react-router-dom';

export default function WarehousesCard (props) {    
        return (
        // <div className="main">
            <div className="warehouses__card-container">
                <div className="warehouses__card-content-wrapper">
                    <div className="warehouses__card-detail">
                        <div className="warehouses__card-detail-info">
                            <div className="warehouses__card-detail-item">
                                <div className="warehouses__card-detail-label">Warehouse</div>
                                <Link to={`/warehouses/${props.warehouseId}`}><div className="warehouses__card-detail-text warehouses__card-detail-name">
                                    {props.name} 
                                        <IconRight/>        
                                </div></Link>
                            </div>
                            <div className="warehouses__card-detail-item warehouses__card-detail-item-address">
                                <div className="warehouses__card-detail-label">Address</div>
                                <div className="warehouses__card-detail-text warehouses__card-detail-text--location">{props.address}, {props.city}, {props.country}</div>
                            </div>

                            <div className="warehouses__card-detail-item">
                                <div className="warehouses__card-detail-label">Contact name</div>
                                <div className="warehouses__card-detail-text">
                                    {props.contactname}
                                </div>
                            </div>
                            <div className="warehouses__card-detail-item warehouses__card-detail-item-contact">
                                <div className="warehouses__card-detail-label">Contact information</div>
                                <div className="warehouses__card-detail-text">{props.phone}</div>
                                <div className="warehouses__card-detail-text">{props.email}</div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="warehouses__card-control">
                        <WarehouseModal whDataModal={props.whData} onDelete={props.handleDelete}/>
                            {/* openDeleteModel={props.openDeleteModel(props.warehouseId)}
                            closeDeleteModel={props.clsoeDeleteModel} 
                            onDelete={props.handleDelete} */}
                        {/* <Delete 
                            onClick={() => props.openDeleteModel(props.whData.id, props.whData.name)}
                        /> */}

                        <Link  to={`/warehouse/warehouseEdit/${props.id}`}>
                            <img src={Edit} alt="Edit icon" />
                        </Link>
                    </div>
                </div>
            </div>
        // </div>
        )
    
}
