import React from 'react';
import axios from 'axios';
import './editInventory.scss';
import arrowLogo from '../../assets/Icons/arrow_back-24px.svg';
import {Link} from 'react-router-dom'

 class EditInventory extends React.Component  {

    state = {
        warehouseList: []
    }
  

    editInventory = (e) => {
        e.preventDefault();
        let status = document.querySelector('input[type="radio"]:checked');
        const {match: {params}} = this.props;
        const invID = params.id;
        let editedItem = {
          itemName: e.target.name.value,
          warehouseName: e.target.warehouseName.value,
          description:  e.target.description.value,
          category: e.target.category.value,
          status: status.value,
          quantity: e.target.quantity.value,
        }
  
        axios
        .put(`/inventory/${invID}`, editedItem)
        
        .then (res=> {
            console.log(res.data)
            console.log(params)
        })
        e.target.reset();
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
    
    render() {
    return (

        <main>
            <form className="edit" onSubmit={this.editInventory}>

                <div className="edit-head" >
                    <h1 className="edit-head__header"> <Link to="/warehouse/inventoryList"><img src= {arrowLogo} alt="return-logo"/></Link> Edit Inventory Item</h1>
                </div>

                <div className="edit-inventory">

                    <div className="edit-inventory__details">
                        <h2 className="edit-inventory__details-header">Item Details</h2>
                        
                        <div className="edit-inventory__details-item">
                            <label className="edit-inventory__details-item-label">Item Name</label>
                            <input className="edit-inventory__details-item-input" type="text" name="name" placeholder="Telivision" required/>
                        </div>
            
                        <div className="edit-inventory__details-description">
                            <label className="edit-inventory__details-description-label">Description</label>
                            <textarea className="edit-inventory__details-description-input" type="text" name="description" placeholder="This 50', 4K LED TV provides a crystal-clear picture and vivid colors." required/>
                        </div>

                        <div className="edit-inventory__details-select">
                            <label className="edit-inventory__details-select-label">Category</label>
                            <select className="edit-inventory__details-select-field" placeholder="Please select" name="category" required>
                                <option>Please Select</option>
                                <option value="Apparel">Apparel</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Gear">Gear</option>
                                <option value="Accessories">Accessories</option>
                                <option value="Accessories">Health</option>
                            </select>
                        </div>
                    </div>

                    <div className="edit-inventory__availability">
                        <div className="edit-inventory__availability-head">
                            <h2 className="edit-inventory__availability-head-header">Item Availability</h2>
                        </div>


                        <div className="edit-inventory__availability-status">

                            <p className="edit-inventory__availability-status-header">Status</p>

                            <div className="edit-inventory__availability-status-options">
                                <div className="edit-inventory__availability-status-options-selectors">
                                    <input className="edit-inventory__availability-status-options-selectors-field" name="availibility" value="In Stock" type="radio"/>
                                    <label className="edit-inventory__availability-status-options-selectors-label">In Stock</label>
                                </div>

                                <div className="edit-inventory__availability-status-options-selectors">
                                    <input className="edit-inventory__availability-status-options-selectors-field" name="availibility" value= "Out of Stock" type="radio"/>
                                    <label className="edit-inventory__availability-status-options-selectors-label">Out of Stock</label>
                                </div>
                            </div>

                        </div>

                        <div className="edit-inventory__availability-qty">
                            <label className="edit-inventory__availability-qty-label">Quantity</label>
                            <input className="edit-inventory__availability-qty-input" type="text" name="quantity" placeholder="0" required/>
                        </div>

                
                        <div className="edit-inventory__availability-warehouse"> 
                            <label className="edit-inventory__availability-warehouse-label">Warehouse</label>
                            <select className="edit-inventory__availability-warehouse-select" name="warehouseName">
                                <option value="">Please Select</option>
                                {this.state.warehouseList.map(warehouse => <option value={warehouse.name}>{warehouse.name}</option>)}
                            </select>
                        </div>
                    </div>
    
                </div>


                <div className="edit-buttons">
                    <Link to="/warehouse/inventoryList"><button className="edit-buttons__cancel"> Cancel </button></Link>
                    <button className="edit-buttons__save" type="submit"> Save </button>
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

export default EditInventory;