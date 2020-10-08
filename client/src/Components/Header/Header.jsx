import React from 'react';
import logo from '../../assets/Logo/InStock-Logo.svg';
import './Header.scss';
import { Link, NavLink } from 'react-router-dom';



export default function Header() {
    return (
        <div className="nav">
            <div className="nav__logo">
                <img src={logo} alt="In-stock logo" />
            </div>
            <div className="nav__container">
                <div className=" nav__menu">
                  <NavLink to="/warehouse/warehouseList">
                      <div className="nav__menu-button nav__menu-button-warehouses">Warehouses</div>
                    </NavLink>   
                    <NavLink to="/warehouse/inventoryList">             
                        <div className="nav__menu-button nav__menu-button-inventory">Inventory</div> 
                    </NavLink>               
                </div>
            </div>
        </div>
    )
}
