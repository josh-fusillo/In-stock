import React from 'react';
import './addInventory.scss';
import {Link} from 'react-router-dom';
import arrowLogo from '../../assets/Icons/arrow_back-24px.svg';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';


 class AddInventory extends React.Component {

    state = {
        warehouseList: []
    }

    componentDidMount() {
        axios
            .get(`http://localhost:8080/warehouses/`)
            .then(res => {
                this.setState({
                    warehouseList: res.data 
                })
            })
    };

    addInventory = (e) => {
        e.preventDefault();
        let status = document.querySelector('input[type="radio"]:checked');
        let warehouseID = this.state.warehouseList.filter (warehouse => e.target.warehouseName.value === warehouse.name,)

        let newItem = {
          id: uuidv4(),
          warehouseID: warehouseID[0].id,
          itemName: e.target.name.value,
          warehouseName: e.target.warehouseName.value,
          description: e.target.description.value,
          category: e.target.category.value,
          status: status.value,
          quantity: e.target.quantity.value,   
        }
  
        axios
        .post('/inventory', newItem)
        
        .then (res=> {
            if (res.status===200) {
                alert('Item successfully added')
              } else {
                alert('Error adding item. Please try adding again.')
              }
        })
            e.target.reset();
    }


    render() {

        window.onload = function() {
            document.querySelector('.add-inventory__availability-qty').style.display = 'none';
        }

        function check (stock) {

            if (stock==='y') {
                {document.querySelector('.add-inventory__availability-qty').style.display = 'flex'};
            }
    
            else {
                {document.querySelector('.add-inventory__availability-qty').style.display = 'none'};
            }
        }




    return (

        <main>
            <div className="form-container">
            <form className="add" onSubmit={this.addInventory} >

                <div className="add-head" >
                    <h1 className="add-head__header"> <Link to='/warehouse/inventoryList' alt='inventory-list'> <img src= {arrowLogo} alt="return-logo"/> </Link>Add New Inventory Item</h1>
                </div>

                <div className="add-inventory">

                    <div className="add-inventory__details">
                        <h2 className="add-inventory__details-header">Item Details</h2>
                        
                        <div className="add-inventory__details-item">
                            <label className="add-inventory__details-item-label">Item Name</label>
                            <input className="add-inventory__details-item-input" type="text" name="name" placeholder="Item Name" required/>
                        </div>
            
                        <div className="add-inventory__details-description">
                            <label className="add-inventory__details-description-label">Description</label>
                            <textarea className="add-inventory__details-description-input" type="text" name="description" placeholder="Please enter a brief item description" required/>
                        </div>

                        <div className="add-inventory__details-select">
                            <label className="add-inventory__details-select-label">Category</label>
                            <select className="add-inventory__details-select-field" placeholder="Please select" name="category" required>
                                <option>Please Select</option>
                                <option value="Apparel">Apparel</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Gear">Gear</option>
                                <option value="Accessories">Accessories</option>
                                <option value="Accessories">Health</option>
                            </select>
                        </div>
                    </div>

                    <div className="add-inventory__availability">
                        <div className="add-inventory__availability-head">
                            <h2 className="add-inventory__availability-head-header">Item Availability</h2>
                        </div>


                        <div className="add-inventory__availability-status">

                            <p className="add-inventory__availability-status-header">Status</p>

                            <div className="add-inventory__availability-status-options">
                                
                                <div  className="add-inventory__availability-status-options-selectors">
                                    <input onClick={() => check('y')} className="add-inventory__availability-status-options-selectors-field in-stock" name="availability" type="radio" value="in-stock"/>
                                    <label className="add-inventory__availability-status-options-selectors-label" >In Stock</label>
                                </div>

                                
                                <div className="add-inventory__availability-status-options-selectors">
                                    <input onClick={() => check('n')} className="add-inventory__availability-status-options-selectors-field" name="availability" type="radio" value="out-of-stock"/>
                                    <label className="add-inventory__availability-status-options-selectors-label">Out of Stock</label>
                                </div>
                            </div>

                        </div>
                        
                        <div className="add-inventory__availability-qty">
                            <label className="add-inventory__availability-qty-label">Quantity</label>
                            <input className="add-inventory__availability-qty-input" name="quantity" type="text" placeholder="0"/>
                        </div>

                
                        <div className="add-inventory__availability-warehouse"> 
                            <label className="add-inventory__availability-warehouse-label">Warehouse</label>
                            <select className="add-inventory__availability-warehouse-select" name="warehouseName">
                                <option value="">Please Select</option>
                                {this.state.warehouseList.map(warehouse => <option key={warehouse.id} value={warehouse.name}>{warehouse.name}</option>)}
                            </select>
                        </div>
                    </div>
    
                </div>


                <div className="add-buttons">
                    <button className="add-buttons__cancel"> Cancel </button>
                    <button className="add-buttons__add" type="submit"> + Add Item </button>
                </div>
            </form>

            </div>
        </main>
    )
    }
}

export default AddInventory;
