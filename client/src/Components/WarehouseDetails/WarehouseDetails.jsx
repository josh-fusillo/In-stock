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
            'Loading...'
        ],
        WarehouseInventory: [
            'Loading...'
        ]
    }

    getWarehouses = () => {
        const warehouseId = this.props.match.params.warehouseId;
        axios.get('/warehouses/' + warehouseId)
            .then(res => {
                axios.get('/inventory')
                console.log("data", res.data)
                this.setState({
                    WarehouseDetails: res.data,
                    WarehouseInventory: res.data
                })
            });
    }

    componentDidMount() {
        this.getWarehouses();
    }


    render() {
        return(
            <>  
            <WarehouseDetailsInfo 
                name={this.state.WarehouseDetails.contact.name}
                warehouse={this.state.WarehouseDetails.warehouse}
                position={this.state.WarehouseDetails.position}
                address={this.state.WarehouseDetails.address}
                city={this.state.WarehouseDetails.city}
                country={this.state.WarehouseDetails.country}
                email={this.state.WarehouseDetails.contact.email}
                phone={this.state.WarehouseDetails.contact.phone}
                />  
            {/* {const inventory = this.state.WarehouseInventory.find(item => item.warehouseID === this.state.WarehouseDetails.id)
            inventory.forEach(item => 
                <WarehouseDetailsCard 
                item={item.itemName}
                description={item.description}
                category={item.category}
                qty={item.quantity}
                status={item.status}/>
            )} */}
            
            </>
        )
    }
}

<<<<<<< HEAD:client/src/Components/WareHouseDetails/WareHouseDetails.jsx

export default WarehouseDetails;
=======
export default WarehouseDetails;
>>>>>>> developer:client/src/Components/WarehouseDetails/WarehouseDetails.jsx
