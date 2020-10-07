import React from 'react';
import './WarehouseDetails.scss';
import ArrowBack from '../../assets/Icons/arrow_back-24px.svg';
import Edit from '../../assets/Icons/edit-24px.svg';
import EditWhite from '../../assets/Icons/edit-24px-white.svg'
import ChevronRight from '../../assets/Icons/chevron_right-24px.svg';
import Delete from '../../assets/Icons/delete_outline-24px.svg';

function WarehouseDetails () {
    return(
        <>  
        <div className="warehouseHeader">
            <img className="warehouseHeader__arrow" src={ArrowBack} alt=""/>
            <h1 className="warehouseHeader__title">King West</h1>
            <button className="warehouseHeader__btn"><img className="warehouseHeader__icon" src={EditWhite} alt="" fill="#2E66E6"/></button>
        </div>

        <hr className="warehouseBreak"/>

        <div className="warehouseInfoTop">
            <h4 className="warehouseInfoTop__label">WAREHOUSE ADDRESS:</h4>
            <p className="warehouseInfoTop__data">469 King Street West, Toronto, CAN</p>
        </div>


        <div className='warehouseInfoBottom'>
            <div className="warehouseInfoBottom__containerLeft">
                <h4 className="warehouseInfoBottom__label">CONTACT NAME:</h4>
                <p className="warehouseInfoBottom__data">Graeme Lyon</p>
                <p className="warehouseInfoBottom__data">Warehouse Manager</p>
            </div>
            <div className="warehouseInfoBottom__containerRight">
                <h4 className="warehouseInfoBottom__label">CONTACT INFORMATION:</h4>
                <p className="warehouseInfoBottom__data">+1 647-504-0911</p>
                <p className="warehouseInfoBottom__data">glyon@instock.com</p>
            </div>
        </div>

        <hr className="warehouseBreak"/>    

        <div className="warehouseInventory">
            <div className="warehouseInventory__containerTop">
                <h4 className="warehouseInventory__label">INVENTORY ITEM</h4>
                <p className="warehouseInventory__item">Television<img src={ChevronRight} /></p>
                <h4 className="warehouseInventory__label">CATEGORY</h4>
                <p className="warehouseInventory__cat">Electronics</p>
                
            </div>
            <div className="warehouseInventory__containerBottom">
                <h4 className="warehouseInventory__label">STATUS</h4>
                <button className="warehouseInventory__status">IN STOCK</button>
                <h4 className="warehouseInventory__label">QTY</h4>
                <p className="warehouseInventory__qty">500</p>
            </div>
        </div>

        <div className="warehouseInventory__foot">
            <img src={Delete} alt=""/>
            <img src={Edit} alt=""/>
        </div>

        <hr className="warehouseBreak"/>
       
        </>
    )
}

export default WarehouseDetails;