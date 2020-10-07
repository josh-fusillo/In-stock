import React from 'react';
import './InventoryDetails.scss';
import ArrowBack from '../../assets/Icons/arrow_back-24px.svg';
import EditWhite from '../../assets/Icons/edit-24px-white.svg'

function InventoryDetails () {
    return (
        <>  
        <div className="inventoryDetailsHeader">
            <img className="inventoryDetailsHeader__arrow" src={ArrowBack} alt=""/>
            <h1 className="inventoryDetailsHeader__title">Television</h1>
            <button className="inventoryDetailsHeader__btn"><img className="warehouseHeader__icon" src={EditWhite} alt="" fill="#2E66E6"/><p className="warehouseHeader__btnText">Edit</p></button>
        </div>

        <hr className="inventoryDetailsBreak"/>

        <div className="inventoryDetails">
            <div className="inventoryDetails__topContainer">
                <div className="inventoryDetails__groupLeft">
                    <h4 className="inventoryDetails__label">ITEM DESCRIPTION</h4>
                    <p className="inventoryDetails__item">This 50", 4K LED TV provides a crystal-clear picture and vivid colors.</p>
                </div>
                <div className="inventoryDetails__groupRight">
                    <h4 className="inventoryDetails__label">CATEGORY</h4>
                    <p className="inventoryDetails__cat">Electronics</p>
                </div>
            </div>
            <div className="inventoryDetails__vl"></div>
            <div className="inventoryDetails__tabletRightGroup">
                <div className="inventoryDetails__middleContainer">
                    <div className="inventoryDetails__groupLeft">
                        <h4 className="inventoryDetails__label">STATUS</h4>
                        <button className="inventoryDetails__status">IN STOCK</button>
                    </div>
                    <div className="inventoryDetails__middleGroupRight">
                        <h4 className="inventoryDetails__label">QUANTITY</h4>
                        <p className="inventoryDetails__qty">500</p>
                    </div>
                </div>  
                <div className="inventoryDetails__bottomContainer">
                    <h4 className="inventoryDetails__label">WAREHOUSE</h4>
                    <p className="inventoryDetails__qty">Manhattan</p>
                </div> 
            </div>
        </div>
        </>
    )
}

export default InventoryDetails;