import React from 'react';

function WareHouseDetails () {
    return(
        <>  
        <div className="warehouseHeader">
            <img className="warehouseHeader__arrow" src="" alt=""/>
            <h1 className="warehouseHeader__title">King West</h1>
            <button className="warehouseHeader__btn">Edit</button>
        </div>

        <hr className="warehouseBreak"/>

        <div className="warehouseInfoTop">
            <h4 className="warehouseInfoTop__label">WareHouse Address:</h4>
            <p className="warehouseInfoTop__data">469 King Street West, Toronto, CAN</p>
        </div>


        <div className='warehouseInfoBottom'>
            <div className="warehouseInfoBottom__containerLeft">
                <h4 className="warehouseInfoBottom__label">Contact Name:</h4>
                <p className="warehouseInfoBottom__data">Graeme Lyon</p>
                <p className="warehouseInfoBottom__data">Warehouse Manager</p>
            </div>
            <div className="warehouseInfoBottom__containerRight">
                <h4 className="warehouseInfoBottom__label">Contact Information:</h4>
                <p className="warehouseInfoBottom__data">+1 647-504-0911</p>
                <p className="warehouseInfoBottom__data">glyon@instock.com</p>
            </div>
        </div>

        <hr className="warehouseBreak"/>    

        <div className="warehouseInventory">
            <div className="warehouseInventory__containerTop">
                <h4 className="warehouseInfoBottom__label">Inventory Item</h4>
                <p className="warehouseInfoBottom__item">Television</p>
                <h4 className="warehouseInfoBottom__label">Status:</h4>
                <p className="warehouseInfoBottom__status">IN STOCK</p>
            </div>
            <div className="warehouseInventory__containerBottom">
                <h4 className="warehouseInfoBottom__label">Category</h4>
                <p className="warehouseInfoBottom__item">Electronics</p>
                <h4 className="warehouseInfoBottom__label">QTY</h4>
                <p className="warehouseInfoBottom__status">500</p>
            </div>
        </div>

        <div className="warehouseInventory__foot">
            <img src="" alt=""/>
            <img src="" alt=""/>
        </div>

        <hr className="warehouseBreak"/>
       
        </>
    )
}

export default WareHouseDetails;