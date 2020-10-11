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

    

    sortItems = (event) => {
        const {itemList} = this.state.WarehouseInventory;
        let newItemList = itemList.sort();
        this.setState({
            WarehouseInventory: newItemList.sort((a,b) => a.itemName > b.itemName)
        })
    }

    componentDidMount() {
        this.getWarehouses();
        this.getInventory();
    }


    render() {
        const {itemList, sort} = this.state.WarehouseInventory;

        // const sortedItems = itemList.sort( () => {
        //     const reversedList = (sort === 'asc') ? 1 : -1;
        //     return reversedList * a.itemName.localeCompare(b.itemName)
        // })
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
            onClick={this.sortItem} />
            {this.state.WarehouseInventory && list.map(item => {
                return <WarehouseDetailsCard
                id={item.id}
                item={item.itemName}
                description={item.description}
                category={item.category}
                quantity={item.quantity}
                status={item.status} />
                }
                )
                }
            
            </>
        )
    }
}

export default WarehouseDetails;
