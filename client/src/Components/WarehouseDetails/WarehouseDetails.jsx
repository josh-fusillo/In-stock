import React from 'react';
import axios from 'axios';
import './WarehouseDetails.scss';
import ArrowBack from '../../assets/Icons/arrow_back-24px.svg';
import Edit from '../../assets/Icons/edit-24px.svg';
import EditWhite from '../../assets/Icons/edit-24px-white.svg'
import ChevronRight from '../../assets/Icons/chevron_right-24px.svg';
import Delete from '../../assets/Icons/delete_outline-24px.svg';
import Sort from '../../assets/Icons/sort-24px.svg';
import WarehouseDetailsInfo from '../WarehouseDetailsInfo/WarehouseDetailsInfo';
import WarehouseDetailsCard from '../WarehouseDetailsCard/WarehouseDetailsCard';

class WarehouseDetails extends React.Component {
    state = {          
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
        const list = this.state.WarehouseInventory.find(item => item.warehouseID === this.props.match.params.id)
        console.log(list)
        return(
            <> 
            <WarehouseDetailsInfo 
                name={this.state.WarehouseDetails.name}
                warehouse={this.state.WarehouseDetails.warehouse}
                position={this.state.WarehouseDetails.position}
                address={this.state.WarehouseDetails.address}
                city={this.state.WarehouseDetails.city}
                country={this.state.WarehouseDetails.country}
                email={this.state.WarehouseDetails.email}
                phone={this.state.WarehouseDetails.phone}
                />  
            {/* {this.state.WarehouseInventory &&  this.state.WarehouseInventory.find(item => item.warehouseID === this.props.match.params.id)
            .forEach(item => {
                return <WarehouseDetailsCard 
                item={item.itemName}
                description={item.description}
                category={item.category}
                qty={item.quantity}
                status={item.status} />
            }
                
            )} */}
            {/* {this.state.WarehouseInventory && this.state.WarehouseInventory.map(item => {
                return <WarehouseDetailsCard
                item={item.itemName}
                description={item.description}
                category={item.category}
                qty={item.quantity}
                status={item.status} />
                }
                )} */}
                
                
                {this.state.WarehouseInventory && list.map(item => {
                    return <WarehouseDetailsCard
                    item={item.itemName}
                    description={item.description}
                    category={item.category}
                    qty={item.quantity}
                    status={item.status} />
                    }
                    )
                    }
            </>
        )
    }
}

export default WarehouseDetails;
