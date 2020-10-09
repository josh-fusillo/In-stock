import React from 'react';
import {Link} from 'react-router-dom';
import '../WarehouseEdit/warehouseEditAdd.scss';
import ArrowBack from '../../assets/Icons/arrow_back-24px.svg';
import axios from 'axios';

class WarehouseAdd extends React.Component {

state = {
  list: [],
  warehouseList: {}
}

updateList() {
  axios.get('http://localhost:8080/warehouses').then(data => {
    this.setState({
      list: data.data
    });
  });
}

addWarehouse = event => {
  event.preventDefault();
    // let addForm = {
    //   warehouseName: event.target.WarehouseName.value,
    //   street: event.target.Street.value,
    //   city: event.target.City.value,
    //   country: event.target.Country.value,
    //   contactName: event.target.ContactName.value,
    //   position: event.target.Position.value,
    //   phone: event.target.Phone.value,
    //   email: event.target.Email.value
    // }

    let warehouseName = event.target.WarehouseName.value;
    let street = event.target.Street.value;
    let city = event.target.City.value;
    let country = event.target.Country.value;
    let contactName = event.target.ContactName.value;
    let position = event.target.Position.value;
    let phone = event.target.Phone.value;
    let email = event.target.Email.value;
  
  axios
    .post('http://localhost:8080/warehouses', 
    {
      name: warehouseName,
      street: street,
      city: city,
      country: country,
      contact: {
        contactName: contactName,
        position: position,
        phone: phone,
        email: email
      }
    })
    .then(console.log(warehouseName, city))
    // .then (() => {
    //   axios.get('http://localhost:8080/warehouse')
    //         // .then(data => {
    //         //   this.setState({
    //         //     list: data.data
    //                 .then(console.log('Success', warehouseName));

    //           // }); 
    //         }) 
            .catch((err) => {
              console.log(err);
            // })
    });
    // .then(console.log('Success', addForm));
}

componentDidMount() {
  this.updateList();
      .then (() => {
      axios.get('http://localhost:8080/warehouse')
            .then(data => {
              this.setState({
                list: data.data
                    .then(console.log('Success', warehouseName))

              }); 
            }) 
    .catch((err) => {
      console.log(err);
    })
})}

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