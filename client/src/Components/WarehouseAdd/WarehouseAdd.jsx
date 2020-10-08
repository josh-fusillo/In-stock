import React from 'react';
import {Link} from 'react-router-dom';
import '../WarehouseEdit/warehouseEditAdd.scss';
import ArrowBack from '../../assets/Icons/arrow_back-24px.svg';
import axios from 'axios';

class WarehouseAdd extends React.Component {

addWarehouse = event => {
  event.preventDefault();
  let addForm = {
    warehouseName: event.target.WarehouseName.value,
    street: event.target.Street.value,
    city: event.target.City.value,
    country: event.target.Country.value,
    contactName: event.target.ContactName.value,
    position: event.target.Position.value,
    phone: event.target.Phone.value,
    email: event.target.Email.value
  };
  console.log(event.target.WarehouseName.value);

  axios
    .post('/warehouses', addForm)
    .then(console.log('Success', addForm));
}

render() {
return (
  <main>
    <div className = 'wrap'>
    <form 
      className='add'
      action='/warehouses'
      name='AddWarehouse'
      method='POST'
      onSubmit={this.addWarehouse}>

    <div className = 'add-wrap'>
      <div className = 'add-top'>
        <Link to={{ pathname: '/warehouses '}}>
          <img className= 'add-top__arrow' src={ArrowBack} alt='Return Button'/>
        </Link>
        <h1 className = 'add-top__header'>Add New Warehouse</h1>
      </div>

      <div className = 'add__divider1'></div>

      <div className = 'add-warehouse'>
      
          <div className = 'add-warehouse__details'>
              <h2 className = 'add-warehouse__details-header'>Warehouse Details</h2>

              <div className = 'add-warehouse__details-info'>
                  <label className = 'add-warehouse__details-info-label'>Warehouse Name</label>
                  <input className = 'add-warehouse__details-info-input' 
                         type='text'
                         name='WarehouseName' 
                         placeholder='Warehouse Name'
                         value={this.props.warehouseName}
                         required/>
              </div>

              <div className = 'add-warehouse__details-info'>
                  <label className = 'add-warehouse__details-info-label'>Street Address</label>
                  <input className = 'add-warehouse__details-info-input' 
                         type='text' 
                         name='Street' 
                         placeholder='Street Address'
                         value={this.props.street}
                         required/>
              </div>

              <div className = 'add-warehouse__details-info'>
                  <label className = 'add-warehouse__details-info-label'>City</label>
                  <input className = 'add-warehouse__details-info-input' 
                         type='text' 
                         name='City' 
                         placeholder='City'
                         value={this.props.city}
                         required/>
              </div>

              <div className = 'add-warehouse__details-info'>
                  <label className = 'add-warehouse__details-info-label'>Country</label>
                  <input className = 'add-warehouse__details-info-input' 
                         type='text' 
                         name='Country' 
                         placeholder='Country'
                         value={this.props.country}
                         required/>
              </div>
      
          </div>

          {/* <div className = 'add-border-container'> */}

      <div className = 'add__divider2'></div>


          <div className = 'add-warehouse__details'>
              <h2 className = 'add-warehouse__details-header'>Contact Details</h2>

              <div className = 'add-warehouse__details-info'>
                  <label className = 'add-warehouse__details-info-label'>Contact Name</label>
                  <input className = 'add-warehouse__details-info-input' 
                         type='text' 
                         name='ContactName' 
                         placeholder='Contact Name'
                         value={this.props.contactName}
                         required/>
              </div>

              <div className = 'add-warehouse__details-info'>
                  <label className = 'add-warehouse__details-info-label'>Position</label>
                  <input className = 'add-warehouse__details-info-input' 
                         type='text' 
                         name='Position' 
                         placeholder='Position'
                         value={this.props.position}
                         required/>
              </div>

              <div className = 'add-warehouse__details-info'>
                  <label className = 'add-warehouse__details-info-label'>Phone Number</label>
                  <input className = 'add-warehouse__details-info-input' 
                         type='text' 
                         name='Phone' 
                         placeholder='Phone Number'
                         value={this.props.number}
                         required/>
              </div>
              
              <div className = 'add-warehouse__details-info'>
                  <label className = 'add-warehouse__details-info-label'>Email</label>
                  <input className = 'add-warehouse__details-info-input' 
                         type='email' 
                         name='Email' 
                         placeholder='Email'
                         value={this.props.email}
                         required/>
              </div>
          </div>

      </div>
      </div>


        <div className='add-buttons'>
          <button type='submit' className='add-buttons__cancel'>Cancel</button>
          <button type='submit' className='add-buttons__add'>+ Add Warehouse</button>
        </div>
      {/* </div> */}
    </form>
    </div>
  </main>
)
}
}
export default WarehouseAdd;