import React, { Component } from 'react'
import axios from 'axios';

export default class WarehouseList extends Component {
    state ={
               
    }
       
    getWarehousesList = () => {
        axios
            .get(`http://localhost:8080/warehouses/`)
            .then(res => console.log(res.data))        
    }    
        
    componentDidMount() {
        this.getWarehousesList();        
    }    
    

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
