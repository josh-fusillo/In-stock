import React from 'react'
import logo from './InStock-Logo.svg'
import './Header.scss'

export default function Header() {
    return (
        <div className="nav">
            <div className="nav__logo">
                <img src={logo} alt="In-stock logo" />
            </div>
            <div className="nav__container">
                <div className=" nav__menu">
                    <div className="nav__menu-button nav__menu-button-warehouses">Warehouses</div>                
                    <div className="nav__menu-button nav__menu-button-inventory">Inventory</div>                
                </div>
            </div>
        </div>
    )
}
