import React, { Component } from 'react'
import axios from 'axios';

export default class InventoryList extends Component {
    state ={

    }

    
    getInventoryList = () => {
        axios
            .get(`http://localhost:8080/inventory/`)
            .then(res => console.log(res.data))        
    }    
        
    componentDidMount() {
        this.getInventoryList();        
    }    
    

    render() {
        return (
            <div>
                
            </div>
        )
    }
}