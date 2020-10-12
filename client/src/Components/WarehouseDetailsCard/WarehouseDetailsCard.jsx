import React from 'react';
import './WarehouseDetailsCard.scss';
import Edit from '../../assets/Icons/edit-24px.svg';
import ChevronRight from '../../assets/Icons/chevron_right-24px.svg';
import Delete from '../../assets/Icons/delete_outline-24px.svg';
import Sort from '../../assets/Icons/sort-24px.svg';
import Status from '../Status/Status';
import {Link} from 'react-router-dom';

function WarehouseDetailsCard (props) {
    return (
        <>
        <div className="main warehouseInventory__main">
            <div className="warehouseInventory">
                <div className="warehouseInventory__topContainer">
                    <div className="warehouseInventory__groupLeft">
                        <h4 className="warehouseInventory__label">INVENTORY ITEM<img className="warehouseInventory__sort" src={Sort} alt="sort" /></h4>
                        <Link to={`/inventory/inventoryDetails/${props.id}`}><p className="warehouseInventory__item">{props.item}<img src={ChevronRight} alt="chevron" /></p></Link>
                    </div>
                    <div className="warehouseInventory__groupRight">
                        <h4 className="warehouseInventory__label">CATEGORY<img className="warehouseInventory__sort" src={Sort} alt="sort" /></h4>
                        <p className="warehouseInventory__cat">{props.category}</p>
                    </div>
                </div>
                <div className="warehouseInventory__bottomContainer">
                    <div className="warehouseInventory__groupLeft">
                        <h4 className="warehouseInventory__label">STATUS<img className="warehouseInventory__sort" src={Sort} alt="sort" /></h4>
                        <div className="warehouseInventory__statusMob"><Status quantity={props.quantity} /></div>
                    </div>
                    <div className="warehouseInventory__groupRight">
                        <h4 className="warehouseInventory__label">QTY<img className="warehouseInventory__sort" src={Sort} alt="sort" /></h4>
                        <p className="warehouseInventory__qty">{props.quantity}</p>
                    </div>  
                </div>    
            </div>
        
            <div className="warehouseInventory__foot">

                <Link to={`/warehouses/modals/${props.id}`}><img src={Delete} alt="delete"/></Link>
                <Link to={`/inventory/editInventory/${props.id}`}><img src={Edit} alt="edit"/></Link>

            </div>
        
            
            <div className="warehouseInventoryCard">
                <div className='mainTwo'></div>
                <div className="warehouseInventoryCard__container">
                    <div className="warehouseInventoryCard__startGroup">
                        <Link to={`/inventory/inventoryDetails/${props.id}`}><p className="warehouseInventoryCard__item">{props.item}<img src={ChevronRight} alt="chevron" /></p></Link>
                        <p className="warehouseInventoryCard__cat">{props.category}</p>
                        <div className="warehouseInventoryCard__statusOne"><Status quantity={props.quantity} /></div>
                    </div>
                    <div className="warehouseInventoryCard__endGroup">
                        <p className="warehouseInventoryCard__qty">{props.quantity}</p>
                        <div className="warehouseInventoryCard__actions">
                            <Link to={`/warehouses/modals/${props.id}`}><img className="warehouseInventoryCard__icon" src={Delete} alt="delete"/></Link>
                            <Link to={`/inventory/editInventory/${props.id}`}><img className="warehouseInventoryCard__icon" src={Edit} alt="edit"/></Link>
                        </div>
                    </div>
                </div>
                </div>
            
            <hr className="warehouseBreak"/>
        </div>
        </>
    )
}

export default WarehouseDetailsCard;