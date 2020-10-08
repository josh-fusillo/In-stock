import React from 'react';
import {Link} from 'react-router-dom';
import '../WarehouseEdit/warehouseEditAdd.scss';
import ArrowBack from '../../assets/Icons/arrow_back-24px.svg';

function WarehouseAdd(props) {
return (
  <main>
    <div className = 'wrap'>
    <form className = 'add'>

    <div className = 'add-wrap'>
      <div className = 'add-top'>
        <img className= 'add-top__arrow' src={ArrowBack} alt='Return Button'/>
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
                         placeholder='Warehouse Name'
                         required/>
              </div>
              <div className = 'add-warehouse__details-info'>
                  <label className = 'add-warehouse__details-info-label'>Street Address</label>
                  <input className = 'add-warehouse__details-info-input' 
                         type='text' 
                         placeholder='Street Address'
                         required/>
              </div>
              <div className = 'add-warehouse__details-info'>
                  <label className = 'add-warehouse__details-info-label'>City</label>
                  <input className = 'add-warehouse__details-info-input' 
                         type='text' 
                         placeholder='City'
                         required/>
              </div>
              <div className = 'add-warehouse__details-info'>
                  <label className = 'add-warehouse__details-info-label'>Country</label>
                  <input className = 'add-warehouse__details-info-input' 
                         type='text' 
                         placeholder='Country'
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
                         placeholder='Contact Name'
                         required/>
              </div>
              <div className = 'add-warehouse__details-info'>
                  <label className = 'add-warehouse__details-info-label'>Position</label>
                  <input className = 'add-warehouse__details-info-input' 
                         type='text' 
                         placeholder='Position'
                         required/>
              </div>
              <div className = 'add-warehouse__details-info'>
                  <label className = 'add-warehouse__details-info-label'>Phone Number</label>
                  <input className = 'add-warehouse__details-info-input' 
                         type='text' 
                         placeholder='Phone Number'
                         required/>
              </div>
              <div className = 'add-warehouse__details-info'>
                  <label className = 'add-warehouse__details-info-label'>Email</label>
                  <input className = 'add-warehouse__details-info-input' 
                         type='email' 
                         placeholder='Email'
                         required/>
              </div>
          </div>

      </div>
      </div>


        <div className='add-buttons'>
          <button className='add-buttons__cancel'>Cancel</button>
          <button className='add-buttons__add'>+ Add Warehouse</button>
        </div>
      {/* </div> */}
    </form>
    </div>
  </main>
)
}
export default WarehouseAdd;