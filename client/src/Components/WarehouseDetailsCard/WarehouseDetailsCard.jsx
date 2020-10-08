import React from 'react';
import './WarehouseDetailsCard.scss';
import ArrowBack from '../../assets/Icons/arrow_back-24px.svg';
import Edit from '../../assets/Icons/edit-24px.svg';
import EditWhite from '../../assets/Icons/edit-24px-white.svg'
import ChevronRight from '../../assets/Icons/chevron_right-24px.svg';
import Delete from '../../assets/Icons/delete_outline-24px.svg';
import Sort from '../../assets/Icons/sort-24px.svg';

function WarehouseDetailsCard (props) {
    return (
        <div className="warehouseInventory">
            <div className="warehouseInventory__topContainer">
                <div className="warehouseInventory__groupLeft">
                    <h4 className="warehouseInventory__label">INVENTORY ITEM<img className="warehouseInventory__sort" src={Sort} /></h4>
                    <p className="warehouseInventory__item">Television<img src={ChevronRight} /></p>
                </div>
                <div className="warehouseInventory__groupRight">
                        <h4 className="warehouseInventory__label">CATEGORY<img className="warehouseInventory__sort" src={Sort} /></h4>
                    <p className="warehouseInventory__cat">Electronics</p>
                </div>
            </div>
            <div className="warehouseInventory__bottomContainer">
                <div className="warehouseInventory__groupLeft">
                    <h4 className="warehouseInventory__label">STATUS<img className="warehouseInventory__sort" src={Sort} /></h4>
                    <button className="warehouseInventory__status">IN STOCK</button>
                </div>
                <div className="warehouseInventory__groupRight">
                    <h4 className="warehouseInventory__label">QTY<img className="warehouseInventory__sort" src={Sort} /></h4>
                    <p className="warehouseInventory__qty">500</p>
                </div>
            </div>   
            <div className="warehouseInventoryTabletDesk">
                <div className="warehouseInventoryTabletDesk__headers">
                    <div className="warehouseInventoryTabletDesk__startGroup">
                        <h4 className="warehouseInventoryTabletDesk__label">INVENTORY ITEM<img className="warehouseInventoryTabletDesk__sort" src={Sort} /></h4>
                        <h4 className="warehouseInventoryTabletDesk__label">CATEGORY<img className="warehouseInventoryTabletDesk__sort" src={Sort} /></h4>
                        <h4 className="warehouseInventoryTabletDesk__label">STATUS<img className="warehouseInventoryTabletDesk__sort" src={Sort} /></h4>
                    </div>  
                    <div className="warehouseInventoryTabletDesk__endGroup">
                        <h4 className="warehouseInventoryTabletDesk__label">QUANTITY<img className="warehouseInventoryTabletDesk__sort" src={Sort} /></h4>
                        <h4 className="warehouseInventoryTabletDesk__labelActions">ACTIONS</h4>
                    </div>
                </div>
            </div>
    
            <div className="warehouseInventoryCard">
                <div className="warehouseInventoryCard__container">
                    <div className="warehouseInventoryCard__startGroup">
                        <p className="warehouseInventoryCard__item">Television<img src={ChevronRight} /></p>
                        <p className="warehouseInventoryCard__cat">Electronics</p>
                        <button className="warehouseInventoryCard__status">IN STOCK</button>
                    </div>
                    <div className="warehouseInventoryCard__endGroup">
                        <p className="warehouseInventoryCard__qty">500</p>
                        <div className="warehouseInventoryCard__actions">
                            <img className="warehouseInventoryCard__icon" src={Delete} alt=""/>
                            <img className="warehouseInventoryCard__icon" src={Edit} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="warehouseInventory__foot">
                <img src={Delete} alt=""/>
                <img src={Edit} alt=""/>
            </div>
            <hr className="warehouseBreak"/>
        </div>
    )
}

export default WarehouseDetailsCard;