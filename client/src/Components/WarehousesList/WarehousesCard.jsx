import IconRight from '../Icons/IconRight';
import Delete from '../../assets/Icons/delete_outline-24px.svg';
import Edit from '../../assets/Icons/edit-24px.svg';
import WarehouseModal from '../Modals/WarehouseModal'
import React from 'react';
import {Link} from 'react-router-dom';
import WarehousesCardInfo from './WarehousesCardInfo';


// const deleteWarehouse = (houseId) => {
//     console.log(houseId);
// };

// import React, { Component } from 'react';

// class WarehousesCard extends Component {
//     render() {
//         return (
//             <div className="warehouses__card-container wrapper">
//                 <div className="warehouses__card-content-wrapper">
//                     <div className="warehouses__card-detail">
//                         <div className="warehouses__card-detail-info">
//                             <div className="warehouses__card-detail-item">
//                                 <div className="warehouses__card-detail-label">Warehouse</div>
//                                 <Link to={`/warehouses/${props.warehouseId}`}><div className="warehouses__card-detail-text warehouses__card-detail-name">
//                                     {props.name} <IconRight />
//                                 </div></Link>
//                             </div>
//                             <div className="warehouses__card-detail-item warehouses__card-detail-item-address">
//                                 <div className="warehouses__card-detail-label">Address</div>
//                                 <div className="warehouses__card-detail-text">{props.address}, {props.city}, {props.country}</div>
//                             </div>

//                             <div className="warehouses__card-detail-item">
//                                 <div className="warehouses__card-detail-label">Contact name</div>
//                                 <div className="warehouses__card-detail-text">
//                                     {props.contactname}
//                                 </div>
//                             </div>
//                             <div className="warehouses__card-detail-item warehouses__card-detail-item-contact">
//                                 <div className="warehouses__card-detail-label">Contact information</div>
//                                 <div className="warehouses__card-detail-text">{props.phone}</div>
//                                 <div className="warehouses__card-detail-text">{props.email}</div>
//                             </div>
                            
//                         </div>
//                     </div>
//                     <div className="warehouses__card-control">
//                         <WarehouseModal whModel={props} />
//                         {/* check warehouseId */}
//                         {/* <img src={Delete} alt="Edit icon" onClick={deleteWarehouse.bind(this, props.warehouseId)} /> */}
//                         <img src={Edit} alt="Edit icon" />
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default WarehousesCard;

export default function WarehousesCard (props) {
        return (
            <div className="warehouses__card-container wrapper">
                <div className="warehouses__card-content-wrapper">
                    {/* <div className="warehouses__card-detail">
                        <div className="warehouses__card-detail-info">
                            <div className="warehouses__card-detail-item">
                                <div className="warehouses__card-detail-label">Warehouse</div>
                                <Link to={`/warehouses/${props.warehouseId}`}><div className="warehouses__card-detail-text warehouses__card-detail-name">
                                    {props.name} <IconRight />
                                </div></Link>
                            </div>
                            <div className="warehouses__card-detail-item warehouses__card-detail-item-address">
                                <div className="warehouses__card-detail-label">Address</div>
                                <div className="warehouses__card-detail-text">{props.address}, {props.city}, {props.country}</div>
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
                    </div> */}
                    <WarehousesCardInfo 
                        key={props.whData.id} 
                        warehouseId={props.whData.id}
                        name={props.whData.name} 
                        address={props.whData.address} 
                        city={props.whData.city} 
                        country={props.whData.country} 
                        contactname={props.whData.contact.name}
                        phone={props.whData.contact.phone}
                        email={props.whData.contact.email} 
                    />
                    

                    <div className="warehouses__card-control">
                        {/* <WarehouseModal whModel={props} onClick={() => props.deleteModel(props.whDate.id, props.whDate.name)} /> */}
                        {/* <WarehouseModal currentId={props.whDate.id} currentItemName={props.whDate.name} /> */}
                        <WarehouseModal 
                            whModel={props.whData}
                            visible={props.visible} 
                            openModal={props.openModal}
                            closeModal={() => {props.closeModal()}}
                        />
                        {/* check warehouseId */}
                        {/* <img src={Delete} alt="Edit icon" onClick={deleteWarehouse.bind(this, props.warehouseId)} /> */}
                        <img src={Edit} alt="Edit icon" />
                    </div>
                </div>
            </div>
        )
    
}

