import React from 'react';
import logo from '../../assets/Logo/InStock-Logo.svg';
import './Header.scss';
import { NavLink , Link } from 'react-router-dom';



export default function Header() {
    return (
        <div className="nav">
            <Link to ="/">
            <div className="nav__logo">
                <img src={logo} alt="In-stock logo" />
            </div></Link>
            <div className="nav__container">
                <div className=" nav__menu">
                    <NavLink to="/warehouse/warehouseList" activeClassName="nav__menu-button--active">
                      <div className="nav__menu-button nav__menu-button-warehouses">Warehouses</div>
                    </NavLink>   
                    <NavLink to="/warehouse/inventoryList" activeClassName="nav__menu-button--active">             
                        <div className="nav__menu-button nav__menu-button-inventory" activeClassName="nav__menu-button--active">Inventory</div> 
                    </NavLink>               
                </div>
            </div>
        </div>
    )
}
