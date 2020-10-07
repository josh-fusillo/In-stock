import React, { Component } from 'react';
import SearchBox from './SearchBox';
import AddWarehouseBtn from './AddWarehouseBtn';
import WarehousesCard from './WarehousesCard';
import WarehousesTitle from './WarehousesTitle';

class Warehouses extends Component {
    render() {
        return (
            <div className="container">
                <div className="warehouses">
                    <div className="card__container wrapper">
                        <div className="warehouses__card-content">
                            <div className="warehouses__header-container">
                                <div className="warehouses__header-left">Warehouses</div>

                                <div className="warehouses__header-right">
                                    <SearchBox />
                                    <AddWarehouseBtn />
                                </div>
                            </div>
                        </div>
                    </div>

                    <WarehousesTitle />
                    <WarehousesCard />
                </div>
            </div>
        )
    }
}

export default Warehouses;