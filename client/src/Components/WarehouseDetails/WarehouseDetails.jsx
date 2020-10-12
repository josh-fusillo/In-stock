import React from 'react';
import axios from 'axios';
import './WarehouseDetails.scss';
import WarehouseDetailsInfo from '../WarehouseDetailsInfo/WarehouseDetailsInfo';
import WarehouseDetailsCard from '../WarehouseDetailsCard/WarehouseDetailsCard';
import WarehouseDetailsCardHeader from '../WarehouseDetailsCardHeader/WarehouseDetailsCardHeader';

class WarehouseDetails extends React.Component {
    state = {   
        sort: 'asc',      
        WarehouseDetails: [
            
        ],

        WarehouseInventory: [
            
        ],
    }

    

    getWarehouses = () => {
        const warehouseId = this.props.match.params.id;
        console.log("This", this)
        axios.get('/warehouses/' + warehouseId)
            .then(res => {
                console.log("data", res.data)
                this.setState({
                    WarehouseDetails: res.data
                })
                // .catch(err => {
                //     console.log(err);
                // })
            }); 
    }

    getInventory = () => {
        axios.get('/inventory')
            .then(res => {
                console.log(res.data)
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
        const {itemList, sort} = this.state.WarehouseInventory;

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
