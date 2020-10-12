import React from 'react';
import axios from 'axios';
import './editInventory.scss';
import arrowLogo from '../../assets/Icons/arrow_back-24px.svg';
import {Link} from 'react-router-dom'
import Error from '../../assets/Icons/error-24px.svg';

 class EditInventory extends React.Component  {

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
        console.log(event.target.value)
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


    handleSubmit = (e) => {
        e.preventDefault();
        let status = document.querySelector('input[type="radio"]:checked');

        const isValid = this.validate();
        if (isValid) {
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
            this.setState(this.state);
            if (res.status===200) {
            alert('Item successfully updated')
            } else {
                alert('Error making changes. Please try updating again.')
            }
        })
        e.target.reset();
    }
}

    componentDidMount() {
        axios
            .get(`http://localhost:8080/warehouses/`)
            .then(res => {
                this.setState({ 
                    warehouseList: res.data,
                })
            })
    };
    
    render() {

        window.onload = function() {
            document.querySelector('.edit-inventory__availability-qty').style.display = 'none';
        }

        function check (stock) {

            if (stock==='y') {
                {document.querySelector('.edit-inventory__availability-qty').style.display = 'flex'};
            }
    
            else {
                {document.querySelector('.edit-inventory__availability-qty').style.display = 'none'};
            }
        }

    return (

        <main>
            <form className="edit" onSubmit={this.handleSubmit}>

                <div className="edit-head" >
                    <h1 className="edit-head__header"> <Link to="/warehouse/inventoryList"><img src= {arrowLogo} alt="return-logo"/></Link> Edit Inventory Item</h1>
                </div>

                <div className="edit-inventory">

                    <div className="edit-inventory__details">
                        <h2 className="edit-inventory__details-header">Item Details</h2>
                        
                        <div className="edit-inventory__details-item">
                            <label className="edit-inventory__details-item-label">Item Name</label>
                            <input className="edit-inventory__details-item-input" type="text" onChange={this.handleChange} name="name" placeholder="Television"/>
                            <div className='error'>
                            <div className='error__text'>{this.state.errorName}
                            {this.state.errorName ? (                         
                            <img className='error__icon' src={Error} alt="Error" />
                            ) : null}
                            </div>
                            </div>
                        </div>
            
                        <div className="edit-inventory__details-description">
                            <label className="edit-inventory__details-description-label">Description</label>
                            <textarea className="edit-inventory__details-description-input" type="text" onChange={this.handleChange} name="description" placeholder="This 50', 4K LED TV provides a crystal-clear picture and vivid colors."/>
                            <div className='error'>
                            <div className='error__text'>{this.state.errorDescription}
                            {this.state.errorDescription ? (                         
                            <img className='error__icon' src={Error} alt="Error" />
                            ) : null}
                            </div>
                            </div>
                        </div>

                        <div className="edit-inventory__details-select">
                            <label className="edit-inventory__details-select-label">Category</label>
                            <select className="edit-inventory__details-select-field" placeholder="Please select" onChange={this.handleChange} name="category">
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

                    <div className="edit-inventory__availability">
                        <div className="edit-inventory__availability-head">
                            <h2 className="edit-inventory__availability-head-header">Item Availability</h2>
                        </div>


                        <div className="edit-inventory__availability-status">

                            <p className="edit-inventory__availability-status-header">Status</p>

                            <div className="edit-inventory__availability-status-options">
                                <div className="edit-inventory__availability-status-options-selectors">
                                    <input onClick={() => check('y')} className="edit-inventory__availability-status-options-selectors-field" onChange={this.handleChange} name="availibility" value="In Stock" type="radio"/>
                                    <label className="edit-inventory__availability-status-options-selectors-label">In Stock</label>
                                </div>

                                <div className="edit-inventory__availability-status-options-selectors">
                                    <input onClick={() => check('n')}  className="edit-inventory__availability-status-options-selectors-field" onChange={this.handleChange} name="availibility" value= "Out of Stock" type="radio"/>
                                    <label className="edit-inventory__availability-status-options-selectors-label">Out of Stock</label>
                                    <div className='error'>
                                    <div className='error__text'>{this.state.errorStatus}
                                    {this.state.errorStatus ? (                         
                                    <img className='error__icon' src={Error} alt="Error" />
                                    ) : null}
                                    </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="edit-inventory__availability-qty">
                            <label className="edit-inventory__availability-qty-label">Quantity</label>
                            <input className="edit-inventory__availability-qty-input" type="text" onChange={this.handleChange} name="quantity" placeholder="0"/>
                            <div className='error'>
                            <div className='error__text'>{this.state.errorQuantity}
                            {this.state.errorQuantity ? (                         
                            <img className='error__icon' src={Error} alt="Error" />
                            ) : null}
                            </div>
                            </div>
                        </div>

                
                        <div className="edit-inventory__availability-warehouse"> 
                            <label className="edit-inventory__availability-warehouse-label">Warehouse</label>
                            <select className="edit-inventory__availability-warehouse-select" onChange={this.handleChange} name="warehouseName">
                                <option value="">Please Select</option>
                                {this.state.warehouseList.map(warehouse => <option value={warehouse.name}>{warehouse.name}</option>)}
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


                <div className="edit-buttons">
                    <Link to="/warehouse/inventoryList"><button className="edit-buttons__cancel"> Cancel </button></Link>
                    <button className="edit-buttons__save" type="submit"> Save </button>
                </div>
                
            </form>

        </main>
    )
    }
}

export default EditInventory;