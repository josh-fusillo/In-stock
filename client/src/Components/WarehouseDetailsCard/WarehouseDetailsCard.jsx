import React from 'react';
import './WarehouseDetailsCard.scss';
import ArrowBack from '../../assets/Icons/arrow_back-24px.svg';
import Edit from '../../assets/Icons/edit-24px.svg';
import EditWhite from '../../assets/Icons/edit-24px-white.svg'
import ChevronRight from '../../assets/Icons/chevron_right-24px.svg';
import Delete from '../../assets/Icons/delete_outline-24px.svg';
import Sort from '../../assets/Icons/sort-24px.svg';
import Status from '../Status/Status';

function WarehouseDetailsCard (props) {
    return (
        <>
        <div className="warehouseInventory">
            <div className="warehouseInventory__topContainer">
                <div className="warehouseInventory__groupLeft">
                    <h4 className="warehouseInventory__label">INVENTORY ITEM<img className="warehouseInventory__sort" src={Sort} /></h4>
                    <p className="warehouseInventory__item">{props.item}<img src={ChevronRight} /></p>
                </div>
                <div className="warehouseInventory__groupRight">
                    <h4 className="warehouseInventory__label">CATEGORY<img className="warehouseInventory__sort" src={Sort} /></h4>
                    <p className="warehouseInventory__cat">{props.category}</p>
                </div>
            </div>
            <div className="warehouseInventory__bottomContainer">
                <div className="warehouseInventory__groupLeft">
                    <h4 className="warehouseInventory__label">STATUS<img className="warehouseInventory__sort" src={Sort} /></h4>
                    <div className="warehouseInventory__statusMob"><Status quantity={props.quantity} /></div>
                </div>
                <div className="warehouseInventory__groupRight">
                    <h4 className="warehouseInventory__label">QTY<img className="warehouseInventory__sort" src={Sort} /></h4>
                    <p className="warehouseInventory__qty">{props.quantity}</p>
                </div>
                
            </div>    
        </div>
            <div className="warehouseInventory__foot">
                <img src={Delete} alt=""/>
                <img src={Edit} alt=""/>
            </div>
        
    
            <div className="warehouseInventoryCard">
                <div className="warehouseInventoryCard__container">
                    <div className="warehouseInventoryCard__startGroup">
                        <p className="warehouseInventoryCard__item">{props.item}<img src={ChevronRight} /></p>
                        <p className="warehouseInventoryCard__cat">{props.category}</p>
                        <div className="warehouseInventoryCard__statusOne"><Status quantity={props.quantity} /></div>
                    </div>
                    <div className="warehouseInventoryCard__endGroup">
                        <p className="warehouseInventoryCard__qty">{props.quantity}</p>
                        <div className="warehouseInventoryCard__actions">
                            <img className="warehouseInventoryCard__icon" src={Delete} alt=""/>
                            <img className="warehouseInventoryCard__icon" src={Edit} alt=""/>
                        </div>
                    </div>
                </div>
            </div>

            

            
            <hr className="warehouseBreak"/>
        </>
    )
}

export default WarehouseDetailsCard;