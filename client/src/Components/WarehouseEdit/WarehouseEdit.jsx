import React from 'react';
import {Link} from 'react-router-dom';
import '../WarehouseEdit/warehouseEditAdd.scss';
import ArrowBack from '../../assets/Icons/arrow_back-24px.svg';
import axios from 'axios';

class WarehouseEdit extends React.Component {
    editWarehouse = (event) => {
    event.preventDefault();
    const {match: {params}} = this.props;
    const whID = params.id;
    let warehouseName = event.target.WarehouseName.value;
    let street = event.target.Street.value;
    let city = event.target.City.value;
    let country = event.target.Country.value;
    let contactName = event.target.ContactName.value;
    let position = event.target.Position.value;
    let phone = event.target.Phone.value;
    let email = event.target.Email.value;

  axios  
  .put(`/warehouses/${whID}`, 
      {
      name: warehouseName,
      address: street,
      city: city,
      country: country,
      contact: {
        name: contactName,
        position: position,
        phone: phone,
        email: email
      }
    })
  .then (res => {
    console.log(res.data)
  })
  event.target.reset();
}

render() {
return (
  <main>
    <div className = 'wrap'>
    <form className = 'add'
          onSubmit={this.editWarehouse}>

    <div className = 'add-wrap'>
      <div className = 'add-top'>
        <Link to={{ pathname: '/warehouses '}}>
          <img className= 'add-top__arrow' src={ArrowBack} alt='Return Button'/>
        </Link>
        <h1 className = 'add-top__header'>Edit Warehouse</h1>
      </div>

      <div className = 'add__divider1'></div>

      <div className = 'add-warehouse'>
      
          <div className = 'add-warehouse__details'>
              <h2 className = 'add-warehouse__details-header'>Warehouse Details</h2>

              <div className = 'add-warehouse__details-info'>
                  <label className = 'add-warehouse__details-info-label'>Warehouse Name</label>
                  <input className = 'add-warehouse__details-info-input' 
                         name = 'WarehouseName'
                         type='text' 
                         placeholder='Warehouse Name'
                         value={this.props.warehouseName}
                         />
              </div>

              <div className = 'add-warehouse__details-info'>
                  <label className = 'add-warehouse__details-info-label'>Street Address</label>
                  <input className = 'add-warehouse__details-info-input' 
                         type='text' 
                         name = 'Street'
                         placeholder='Street Address'
                         value={this.props.street}
                         />
              </div>

              <div className = 'add-warehouse__details-info'>
                  <label className = 'add-warehouse__details-info-label'>City</label>
                  <input className = 'add-warehouse__details-info-input' 
                         type='text' 
                         name = 'City'
                         placeholder='City'
                         value={this.props.city}
                         />
              </div>

              <div className = 'add-warehouse__details-info'>
                  <label className = 'add-warehouse__details-info-label'>Country</label>
                  <input className = 'add-warehouse__details-info-input' 
                         type='text' 
                         name = 'Country'
                         placeholder='Country'
                         value={this.props.country}
                         />
              </div>
      
          </div>

      <div className = 'add__divider2'></div>


          <div className = 'add-warehouse__details'>
              <h2 className = 'add-warehouse__details-header'>Contact Details</h2>

              <div className = 'add-warehouse__details-info'>
                  <label className = 'add-warehouse__details-info-label'>Contact Name</label>
                  <input className = 'add-warehouse__details-info-input' 
                         type='text' 
                         name = 'ContactName'
                         placeholder='Contact Name'
                         value={this.props.contactName}
                         />
              </div>

              <div className = 'add-warehouse__details-info'>
                  <label className = 'add-warehouse__details-info-label'>Position</label>
                  <input className = 'add-warehouse__details-info-input' 
                         type='text' 
                         name = 'Position'
                         placeholder='Position'
                         value={this.props.position}
                         />
              </div>

              <div className = 'add-warehouse__details-info'>
                  <label className = 'add-warehouse__details-info-label'>Phone Number</label>
                  <input className = 'add-warehouse__details-info-input' 
                         type='text' 
                         name = 'Phone'
                         placeholder='Phone Number'
                         value={this.props.number}
                         />
              </div>
              
              <div className = 'add-warehouse__details-info'>
                  <label className = 'add-warehouse__details-info-label'>Email</label>
                  <input className = 'add-warehouse__details-info-input' 
                         type='email' 
                         name = 'Email'
                         placeholder='Email'
                         value={this.props.email}
                         />
              </div>
          </div>

      </div>

        <div className='add-buttons'>
          <button className='add-buttons__cancel'>Cancel</button>
          <button className='add-buttons__add'>Save</button>
        </div>
      </div>
    </form>

        <footer className="footer">
          <div className="footer-cont">
            <p className="footer-cont__text">© InStock Inc. All Rights Reserved.</p>
          </div>
        </footer>

    </div>
  </main>
)
}}
export default WarehouseEdit;