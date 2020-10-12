import React from 'react';
import axios from 'axios';
import './WarehouseDetails.scss';
import WarehouseDetailsInfo from '../WarehouseDetailsInfo/WarehouseDetailsInfo';
import WarehouseDetailsCardHeader from '../WarehouseDetailsCardHeader/WarehouseDetailsCardHeader';

class WarehouseDetails extends React.Component {
    state = {        
        WarehouseDetails: [
            
        ],

        WarehouseInventory: [
            
        ],
    }

    

    getWarehouses = () => {
        const warehouseId = this.props.match.params.id;
        axios.get('/warehouses/' + warehouseId)
            .then(res => {
                this.setState({
                    WarehouseDetails: res.data
                })
            }); 
    }

    getInventory = () => {
        axios.get('/inventory')
            .then(res => {
                this.setState({
                    WarehouseInventory: res.data
                })
            })
    }

    componentDidMount() {
        this.getWarehouses();
        this.getInventory();
    }


    render() {

        const list = this.state.WarehouseInventory.filter(item => item.warehouseID === this.props.match.params.id)
        return(
            <> 
            <WarehouseDetailsInfo 
                name={this.state.WarehouseDetails.name}
                id={this.state.WarehouseDetails.id}
                warehouse={this.state.WarehouseDetails.warehouse}
                position={this.state.WarehouseDetails.position}
                address={this.state.WarehouseDetails.address}
                city={this.state.WarehouseDetails.city}
                country={this.state.WarehouseDetails.country}
                email={this.state.WarehouseDetails.email}
                phone={this.state.WarehouseDetails.phone}
                />  
            <WarehouseDetailsCardHeader
            InventoryList={list}/>
            
            </>
        )
    }
}

export default WarehouseDetails;
