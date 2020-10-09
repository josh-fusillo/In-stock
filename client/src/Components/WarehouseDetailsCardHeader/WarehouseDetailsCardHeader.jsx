import React from 'react';
import '../WarehouseDetailsCard/WarehouseDetailsCard.scss';
import Sort from '../../assets/Icons/sort-24px.svg';

function WarehouseDetailsCardHearder () {
    return (
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
    )
}

export default WarehouseDetailsCardHearder;

