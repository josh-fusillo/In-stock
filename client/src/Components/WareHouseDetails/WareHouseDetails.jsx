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
        WarehouseInfo: [
            'Loading...'
        ],
        WarehouseCard: [
            'Loading...'
        ]
    }

    getWarehouses = () => {
        const warehouseId = 
        axios.get('http://localhost:8080/warehouses/' + )
    }

    componentDidMount() {
        axios.get()
    }
    render() {
        return(
            <>  
            <WarehouseDetailsInfo />   
            <WarehouseDetailsCard />
            </>
        )
    }
}

export default WarehouseDetails;