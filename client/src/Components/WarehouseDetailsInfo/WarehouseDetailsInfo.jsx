import React from 'react';
import '../WarehouseDetailsInfo/WarehouseDetailsInfo.scss';
import ArrowBack from '../../assets/Icons/arrow_back-24px.svg';
import EditWhite from '../../assets/Icons/edit-24px-white.svg'
import {Link} from 'react-router-dom';

function WarehouseDetailsInfo (props) {
    return (
        <>
        <div className="main">
        <div className="warehouseHeader">
            <Link to='/warehouse/warehouseList'><img className="warehouseHeader__arrow" src={ArrowBack} alt=""/></Link>
            <h1 className="warehouseHeader__title">{props.warehouse}</h1>
            <Link to={`/warehouse/warehouseEdit/${props.id}`}><button className="warehouseHeader__btn"><img className="warehouseHeader__icon" src={EditWhite} alt="" fill="#2E66E6"/><p className="warehouseHeader__btnText">Edit</p></button></Link>
        </div>
        <hr className="warehouseInfoBreakStyle"/>
        

        <div className="warehouseInfoOne">
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

            <div className="warehouseInfoTwo">
                <div className="warehouseInfoTop">
                    <h4 className="warehouseInfoTop__label">WAREHOUSE ADDRESS:</h4>
                    <p className="warehouseInfoTop__data">{props.address}, {props.city}, {props.country}</p>
                </div>
                
                <div className="warehouseInfoTwo__vl"></div>
    
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
            </div>
        </>
    )
}

export default WarehouseDetailsInfo;