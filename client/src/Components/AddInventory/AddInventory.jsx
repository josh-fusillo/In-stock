import React from 'react';
import './addInventory.scss';
import {Link} from 'react-router-dom';
import arrowLogo from '../../assets/Icons/arrow_back-24px.svg';
import axios from 'axios';
import uuid from 'uuid';



 class AddInventory extends React.Component {

    state = {
        qty: false,
    }


    displayQTY() {
        this.setState({
            qty: true
        });
    }

    hideQTY() {
        this.setState({
            qty: false
        });
    }

    addInventory = (e) => {
        e.preventDefault();
        let newItem = {
          id: 1001,
          warehouseID: '10001',
          itemName: e.target.name.value,
          description: e.target.description.value,
          category: e.target.category.value,
          status: e.target.availability_in.value,
          status: e.target.availability_out.value,
          quantity: e.target.quantity.value,   
        }
  
        axios
        .post('/inventory', newItem)
        
        .then (res=> {
            console.log(res.data)
        })
        e.target.reset();
    }


    render() {


    return (

        <main>
            <form className="add" onSubmit={this.addInventory} >

                <div className="add-head" >
                    <h1 className="add-head__header"> <Link to='/warehouse/inventoryList' alt='inventory-list'> <img src= {arrowLogo} alt="return-logo"/> </Link>Add New Inventory Item</h1>
                </div>

                <div className="add-inventory">

                    <div className="add-inventory__details">
                        <h2 className="add-inventory__details-header">Item Details</h2>
                        
                        <div className="add-inventory__details-item">
                            <label className="add-inventory__details-item-label">Item Name</label>
                            <input className="add-inventory__details-item-input" type="text" name="name" placeholder="Item Name"/>
                        </div>
            
                        <div className="add-inventory__details-description">
                            <label className="add-inventory__details-description-label">Description</label>
                            <textarea className="add-inventory__details-description-input" type="text" name="description" placeholder="Please enter a brief item description"/>
                        </div>

                        <div className="add-inventory__details-select">
                            <label className="add-inventory__details-select-label">Category</label>
                            <select className="add-inventory__details-select-field" placeholder="Please select" name="category">
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
                                
                                <div className="add-inventory__availability-status-options-selectors">
                                    <input className="add-inventory__availability-status-options-selectors-field" name="availability_in" type="radio" value="Out of stock"/>
                                    <label className="add-inventory__availability-status-options-selectors-label" >In Stock</label>
                                </div>

                                
                                <div className="add-inventory__availability-status-options-selectors">
                                    <input className="add-inventory__availability-status-options-selectors-field" name="availability_out" type="radio" value="in-stock"/>
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
                            <select className="add-inventory__availability-warehouse-select" name="select"/>
                        </div>
                    </div>
    
                </div>


                <div className="add-buttons">
                    <button className="add-buttons__cancel"> Cancel </button>
                    <button className="add-buttons__add" type="submit"> + Add Item </button>
                </div>
                
            </form>

            <footer className="footer">
                <div className="footer-label">
                    <p className="footer-label__text">© InStock Inc. All Rights Reserved.</p>
                </div>
            </footer>

        </main>
    )
    }
}

export default AddInventory;
