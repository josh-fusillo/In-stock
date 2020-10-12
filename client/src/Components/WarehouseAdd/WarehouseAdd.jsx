import React from 'react';
import {Link} from 'react-router-dom';
import '../WarehouseEdit/warehouseEditAdd.scss';
import ArrowBack from '../../assets/Icons/arrow_back-24px.svg';
import axios from 'axios';
import Error from '../../assets/Icons/error-24px.svg';

const initialState ={
  Name: "",
  Street: "",
  City: "",
  Country: "",
  ContactName: "",
  Position: "",
  Phone: "",
  Email: "",

  errorName: "",
  errorStreet: "",
  errorCity: "",
  errorCountry: "",
  errorContactName: "",
  errorPosition: "",
  errorPhone: "",
  errorEmail: "",
};

const mailTest = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
const phoneTest = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/

class WarehouseAdd extends React.Component {

state = initialState;

handleChange = (event) => {
  this.setState({ [event.target.name]: event.target.value});
  console.log(event.target.value)
}


validate = () => {
  let errorName = "";
  let errorStreet = "";
  let errorCity = "";
  let errorCountry = "";
  let errorContactName = "";
  let errorPosition = "";
  let errorPhone = "";
  let errorEmail = "";

  if(!this.state.WarehouseName) {
    errorName = "This field is required";
  }

  if(!this.state.Street) {
    errorStreet = "This field is required";
  }

  if(!this.state.City) {
    errorCity = "This field is required";
  }

  if(!this.state.Country) {
    errorCountry = "This field is required";
  }

  if(!this.state.ContactName) {
    errorContactName = "This field is required";
  }

  if(!this.state.Position) {
    errorPosition = "This field is required";
  }

  if(!this.state.Email) {
    errorEmail = "This field is required";
  } else if(!mailTest.test(this.state.Email)) {
    errorEmail = "Email address is not a valid email";
  }

  if(!this.state.Phone) {
    errorPhone = "This field is required";
  } else if(!phoneTest.test(this.state.Phone)) {
    errorPhone = "Please enter in format xxx-xxx-xxxx";
  }

if (errorName || errorStreet || errorCity || errorCountry || errorContactName || errorPosition || errorPhone || errorEmail ) {
  this.setState({ errorName, errorStreet, errorCity, errorCountry, errorContactName, errorPosition, errorPhone, errorEmail});
  return false;
}
  return true;
};

handleSubmit = (event) => {
  event.preventDefault();
  this.setState(initialState);

 
  const isValid = this.validate();
  if (isValid) {
    let addForm = {
      id: event.target.id.value,
      name: event.target.WarehouseName.value,
      street: event.target.Street.value,
      city: event.target.City.value,
      country: event.target.Country.value,
      contact: {
        name: event.target.ContactName.value,
        position: event.target.Position.value,
        phone: event.target.Phone.value,
        email: event.target.Email.value
      }
    }
    axios
    .post('/warehouses', addForm)
  .then (res => {
    this.setState(initialState);
    if (res.status===200) {
      alert('Warehouse successfully added')
    } else {
      alert('Error adding warehouse. Please try adding again.')
    }
  })
  
  event.target.reset();

  }
};
  
render() {

return (
  <main>
    <div className = 'wrap'>
    <form 
      className='add'
      onSubmit={this.handleSubmit}>


    <div className = 'add-wrap'>
      <div className = 'add-top'>
        <Link to={{ pathname: '/warehouse/warehouseList'}}>
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
                  <input className = 'add-warehouse__details-info-input error__outline' 
                         type='text'
                         name='WarehouseName' 
                         value={this.props.name}
                         onChange={this.handleChange}
                         placeholder='Warehouse Name'
                         />
                        <div className='error'>
                        <div className='error__text'>{this.state.errorName}
                          {this.state.errorName ? (                         
                        <img className='error__icon' src={Error} alt="Error" />
                        ) : null}
                        </div>
                        </div>
              </div>

              <div className = 'add-warehouse__details-info'>
                  <label className = 'add-warehouse__details-info-label'>Street Address</label>
                  <input className = 'add-warehouse__details-info-input' 
                         type='text' 
                         name='Street' 
                         value={this.props.street}
                         onChange={this.handleChange}
                         placeholder='Street Address'
                         />
                        <div className='error'>
                        <div className='error__text'>{this.state.errorStreet}
                          {this.state.errorStreet ? (                         
                        <img className='error__icon' src={Error} alt="Error" />
                        ) : null}
                        </div>
                        </div>
              </div>

              <div className = 'add-warehouse__details-info'>
                  <label className = 'add-warehouse__details-info-label'>City</label>
                  <input className = 'add-warehouse__details-info-input' 
                         type='text' 
                         name='City' 
                         value={this.props.city}
                         onChange={this.handleChange}
                         placeholder='City'
                         />
                        <div className='error'>
                        <div className='error__text'>{this.state.errorCity}
                          {this.state.errorCity ? (                         
                        <img className='error__icon' src={Error} alt="Error" />
                        ) : null}
                        </div>
                        </div>
              </div>

              <div className = 'add-warehouse__details-info'>
                  <label className = 'add-warehouse__details-info-label'>Country</label>
                  <input className = 'add-warehouse__details-info-input' 
                         type='text' 
                         name='Country' 
                         value={this.props.country}
                         onChange={this.handleChange}
                         placeholder='Country'
                         />
                        <div className='error'>
                        <div className='error__text'>{this.state.errorCountry}
                          {this.state.errorCountry ? (                         
                        <img className='error__icon' src={Error} alt="Error" />
                        ) : null}
                        </div>
                        </div>
              </div>
      
          </div>

          <div className = 'add-border-container'>

          <div className = 'add-warehouse__details add-warehouse__details-contact'>
              <h2 className = 'add-warehouse__details-header'>Contact Details</h2>

              <div className = 'add-warehouse__details-info'>
                  <label className = 'add-warehouse__details-info-label'>Contact Name</label>
                  <input className = 'add-warehouse__details-info-input' 
                         type='text' 
                         name='ContactName' 
                         value={this.props.contactname}
                         onChange={this.handleChange}
                         placeholder='Contact Name'
                         />
                        <div className='error'>
                        <div className='error__text'>{this.state.errorContactName}
                          {this.state.errorContactName ? (                         
                        <img className='error__icon' src={Error} alt="Error" />
                        ) : null}
                        </div>
                        </div>
              </div>

              <div className = 'add-warehouse__details-info'>
                  <label className = 'add-warehouse__details-info-label'>Position</label>
                  <input className = 'add-warehouse__details-info-input' 
                         type='text' 
                         name='Position' 
                         value={this.props.position}
                         onChange={this.handleChange}
                         placeholder='Position'
                         />
                        <div className='error'>
                        <div className='error__text'>{this.state.errorPosition}
                          {this.state.errorPosition ? (                         
                        <img className='error__icon' src={Error} alt="Error" />
                        ) : null}
                        </div>
                        </div>
              </div>

              <div className = 'add-warehouse__details-info'>
                  <label className = 'add-warehouse__details-info-label'>Phone Number</label>
                  <input className = 'add-warehouse__details-info-input' 
                         type='text' 
                         name='Phone' 
                         value={this.props.phone}
                         onChange={this.handleChange}
                         placeholder='Phone Number'
                         />
                        <div className='error'>
                        <div className='error__text'>{this.state.errorPhone}
                          {this.state.errorPhone ? (                         
                        <img className='error__icon' src={Error} alt="Error" />
                        ) : null}
                        </div>
                        </div>
              </div>
              
              <div className = 'add-warehouse__details-info'>
                  <label className = 'add-warehouse__details-info-label'>Email</label>
                  <input className = 'add-warehouse__details-info-input' 
                         type='text' 
                         name='Email' 
                         value={this.props.email}
                         onChange={this.handleChange}
                         placeholder='Email'
                         />
                        <div className='error'>
                        <div className='error__text'>{this.state.errorEmail}
                          {this.state.errorEmail ? (                         
                        <img className='error__icon' src={Error} alt="Error" />
                        ) : null}
                        </div>
                        </div>
              </div>
          </div>

      </div>
      </div>


        <div className='add-buttons'>
         <Link to={{ pathname: '/warehouse/warehouseList'}}>
          <button type='cancel' className='add-buttons__cancel'>Cancel</button>
        </Link>
          <button type='submit' className='add-buttons__add'>+ Add Warehouse</button>
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
}
}
export default WarehouseAdd;