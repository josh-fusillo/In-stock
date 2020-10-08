import React from 'react';

import ArrowBack from '../../assets/Icons/arrow_back-24px.svg';
import Edit from '../../assets/Icons/edit-24px.svg';
import EditWhite from '../../assets/Icons/edit-24px-white.svg'
import ChevronRight from '../../assets/Icons/chevron_right-24px.svg';
import Delete from '../../assets/Icons/delete_outline-24px.svg';
import Sort from '../../assets/Icons/sort-24px.svg';

function WarehouseDetailsInfo (props) {
    return (
        <>
        <div className="warehouseHeader">
            <img className="warehouseHeader__arrow" src={ArrowBack} alt=""/>
            <h1 className="warehouseHeader__title">{props.warehouse}</h1>
            <button className="warehouseHeader__btn"><img className="warehouseHeader__icon" src={EditWhite} alt="" fill="#2E66E6"/><p className="warehouseHeader__btnText">Edit</p></button>
        </div>
        <hr className="warehouseBreak"/>

        <div className="warehouseInfo">
                <div className="warehouseInfoTop">
                    <h4 className="warehouseInfoTop__label">WAREHOUSE ADDRESS:</h4>
                    <p className="warehouseInfoTop__data">{props.address}, {props.city}, {props.country}</p>
                </div>
    
                <div className="warehouseInfo__vl"></div>
    
                <div className='warehouseInfoBottom'>
                 <div className="warehouseInfoBottom__containerLeft">
                        <h4 className="warehouseInfoBottom__label">CONTACT NAME:</h4>
                        <p className="warehouseInfoBottom__data">{props.name}</p>
                        <p className="warehouseInfoBottom__data">{props.position}</p>
                    </div>
                    <div className="warehouseInfoBottom__containerRight">
                        <h4 className="warehouseInfoBottom__label">CONTACT INFORMATION:</h4>
                        <p className="warehouseInfoBottom__data">{props.phone}</p>
                        <p className="warehouseInfoBottom__data">{props.email}</p>
                    </div>
                </div>
            </div>
    
            <hr className="warehouseInfo__break"/> 
        </>
    )
}

export default WarehouseDetailsInfo;