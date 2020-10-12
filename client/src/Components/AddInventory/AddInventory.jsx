import React from 'react';
import './addInventory.scss';
import {Link} from 'react-router-dom';
import arrowLogo from '../../assets/Icons/arrow_back-24px.svg';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Error from '../../assets/Icons/error-24px.svg';



 class AddInventory extends React.Component {

    state = {
        warehouseList: [],
        name: "",
        description: "",
        category: "",
        status: "",
        quantity: "",
        warehouseName: "",
        errorName: "",
        errorDescription: "",
        errorCategory: "",
        errorStatus: "",
        errorQuantity: "",
        errorWarehouse: ""
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value});
      }


      validate = () => {
        let errorName = "";
        let errorDescription = "";
        let errorCategory = "";
        let errorStatus = "";
        let errorQuantity = "";
        let errorWarehouse = "";
      
        if(!this.state.name) {
          errorName = "This field is required";
        }
      
        if(!this.state.description) {
          errorDescription = "This field is required";
        }
      
        if(!this.state.category) {
          errorCategory = "This field is required";
        }
      
        if(!this.state.quantity) {
          errorQuantity = "This field is required";
        }
      
        if(!this.state.warehouseName) {
          errorWarehouse = "This field is required";
        }
    
      
      if (errorName || errorDescription || errorCategory || errorStatus || errorQuantity || errorWarehouse ) {
        this.setState({  errorName, errorDescription, errorCategory, errorStatus, errorQuantity, errorWarehouse });
        return false;
      }
        return true;
      };


    componentDidMount() {
        axios
            .get(`http://localhost:8080/warehouses/`)
            .then(res => {
                this.setState({
                    warehouseList: res.data 
                })
            })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let status = document.querySelector('input[type="radio"]:checked');
        let warehouseID = this.state.warehouseList.filter (warehouse => e.target.warehouseName.value === warehouse.name,)

        const isValid = this.validate();
        if (isValid) {
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
            this.setState(this.state);
            if (res.status===200) {
                alert('Item successfully added')
              } else {
                alert('Error adding item. Please try adding again.')
              }
        })
            e.target.reset();
        }
    };




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
            <form className="add" onSubmit={this.handleSubmit} >

                <div className="add-head" >
                    <h1 className="add-head__header"> <Link to='/warehouse/inventoryList' alt='inventory-list'> <img src= {arrowLogo} alt="return-logo"/> </Link>Add New Inventory Item</h1>
                </div>

                <div className="add-inventory">

                    <div className="add-inventory__details">
                        <h2 className="add-inventory__details-header">Item Details</h2>
                        
                        <div className="add-inventory__details-item">
                            <label className="add-inventory__details-item-label">Item Name</label>
                            <input className="add-inventory__details-item-input" onChange={this.handleChange} type="text" name="name" placeholder="Item Name"/>
                            <div className='error'>
                            <div className='error__text'>{this.state.errorName}
                            {this.state.errorName ? (                         
                            <img className='error__icon' src={Error} alt="Error" />
                            ) : null}
                            </div>
                            </div>
                        </div>
            
                        <div className="add-inventory__details-description">
                            <label className="add-inventory__details-description-label">Description</label>
                            <textarea className="add-inventory__details-description-input" onChange={this.handleChange} type="text" name="description" placeholder="Please enter a brief item description"/>
                            <div className='error'>
                            <div className='error__text'>{this.state.errorDescription}
                            {this.state.errorDescription ? (                         
                            <img className='error__icon' src={Error} alt="Error" />
                            ) : null}
                            </div>
                            </div>
                        </div>

                        <div className="add-inventory__details-select">
                            <label className="add-inventory__details-select-label">Category</label>
                            <select className="add-inventory__details-select-field" placeholder="Please select" onChange={this.handleChange} name="category">
                                <option>Please Select</option>
                                <option value="Apparel">Apparel</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Gear">Gear</option>
                                <option value="Accessories">Accessories</option>
                                <option value="Accessories">Health</option>
                            </select>
                            <div className='error'>
                            <div className='error__text'>{this.state.errorCategory}
                            {this.state.errorCategory ? (                         
                            <img className='error__icon' src={Error} alt="Error" />
                            ) : null}
                            </div>
                            </div>
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
                                    <input onClick={() => check('y')}  onChange={this.handleChange} className="add-inventory__availability-status-options-selectors-field in-stock" name="availability" type="radio" value="in-stock"/>
                                    <label className="add-inventory__availability-status-options-selectors-label" >In Stock</label>
                                </div>

                                
                                <div className="add-inventory__availability-status-options-selectors">
                                    <input onClick={() => check('n')}  onChange={this.handleChange} className="add-inventory__availability-status-options-selectors-field" name="availability" type="radio" value="out-of-stock"/>
                                    <label className="add-inventory__availability-status-options-selectors-label">Out of Stock</label>
                                </div>
                            </div>
                            <div className='error'>
                                    <div className='error__text'>{this.state.errorStatus}
                                    {this.state.errorStatus ? (                         
                                    <img className='error__icon' src={Error} alt="Error" />
                                    ) : null}
                                    </div>
                                    </div>
                        </div>
                        
                        <div className="add-inventory__availability-qty">
                            <label className="add-inventory__availability-qty-label">Quantity</label>
                            <input className="add-inventory__availability-qty-input"  onChange={this.handleChange} name="quantity" type="text" placeholder="0"/>
                            <div className='error'>
                            <div className='error__text'>{this.state.errorQuantity}
                            {this.state.errorQuantity ? (                         
                            <img className='error__icon' src={Error} alt="Error" />
                            ) : null}
                            </div>
                            </div>
                        </div>

                
                        <div className="add-inventory__availability-warehouse"> 
                            <label className="add-inventory__availability-warehouse-label">Warehouse</label>
                            <select className="add-inventory__availability-warehouse-select"  onChange={this.handleChange} name="warehouseName">
                                <option value="">Please Select</option>
                                {this.state.warehouseList.map(warehouse => <option key={warehouse.id} value={warehouse.name}>{warehouse.name}</option>)}
                            </select>
                            <div className='error'>
                            <div className='error__text'>{this.state.errorWarehouse}
                            {this.state.errorWarehouse ? (                         
                            <img className='error__icon' src={Error} alt="Error" />
                            ) : null}
                            </div>
                            </div>
                        </div>
                    </div>
    
                </div>


                <div className="add-buttons">
                   <Link to="/warehouse/inventorylist"><button className="add-buttons__cancel"> Cancel </button></Link> 
                    <button className="add-buttons__add" type="submit"> + Add Item </button>
                </div>
            </form>

            </div>
        </main>
    )
    }
}

export default AddInventory;
