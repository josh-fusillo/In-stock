import React from 'react';
import {Link} from 'react-router-dom';
import '../WarehouseEdit/warehouseEditAdd.scss';
import ArrowBack from '../../assets/Icons/arrow_back-24px.svg';

function WarehouseAdd(props) {
return (
  <main>
    <form className = 'add'>

      <div className = 'add-top'>
        <h1 className = 'add-top__header'> <img src= {ArrowBack} alt='return-logo'/>Add New Warehouse</h1>
      </div>

      <div className = 'add-warehouse'>
      
          <div className = 'add-warehouse__details'>
              <h2 className = 'add-warehouse__details-header'>Warehouse Details</h2>

              <div className = 'add-warehouse__details-info'>
                  <label className = 'add-warehouse__details-info-label'>Warehouse Name</label>
                  <input className = 'add-warehouse__details-info-input' type='text' placeholder='Warehouse Name'/>
              </div>
              <div className = 'add-warehouse__details-info'>
                  <label className = 'add-warehouse__details-info-label'>Street Address</label>
                  <input className = 'add-warehouse__details-info-input' type='text' placeholder='Street Address'/>
              </div>
              <div className = 'add-warehouse__details-info'>
                  <label className = 'add-warehouse__details-info-label'>City</label>
                  <input className = 'add-warehouse__details-info-input' type='text' placeholder='City'/>
              </div>
              <div className = 'add-warehouse__details-info'>
                  <label className = 'add-warehouse__details-info-label'>Country</label>
                  <input className = 'add-warehouse__details-info-input' type='text' placeholder='Country'/>
              </div>
      
          </div>

      <div className = 'add__divider'></div>


          <div className = 'add-warehouse__details'>
              <h2 className = 'add-warehouse__details-header'>Contact Details</h2>

              <div className = 'add-warehouse__details-info'>
                  <label className = 'add-warehouse__details-info-label'>Contact Name</label>
                  <input className = 'add-warehouse__details-info-input' type='text' placeholder='Contact Name'/>
              </div>
              <div className = 'add-warehouse__details-info'>
                  <label className = 'add-warehouse__details-info-label'>Position</label>
                  <input className = 'add-warehouse__details-info-input' type='text' placeholder='Position'/>
              </div>
              <div className = 'add-warehouse__details-info'>
                  <label className = 'add-warehouse__details-info-label'>Phone Number</label>
                  <input className = 'add-warehouse__details-info-input' type='text' placeholder='Phone Number'/>
              </div>
              <div className = 'add-warehouse__details-info'>
                  <label className = 'add-warehouse__details-info-label'>Email</label>
                  <input className = 'add-warehouse__details-info-input' type='email' placeholder='Email'/>
              </div>
          </div>

      </div>

        <div className='add-buttons'>
          <button className='add-buttons__cancel'>Cancel</button>
          <button className='add-buttons__add'>+ Add Warehouse</button>
        </div>
    </form>
  </main>

// class WarehouseAdd extends React.Component {
//     render() {
//         return (
//           <>
//           <div className = 'card'>
//            <div className='card__container'>
//              <div className='card__content-wrapper'>              

//                 <div className = 'form'>
//                   <form onSubmit = {this}>

//                       <div className = 'form__details-card'>
//                         <div className = 'form__details-header'>
//                         <img className="form__details-header-arrow" src={ArrowBack} alt=""/>
//                           <h1 className = 'form__details-header-txt'>Add New Warehouse</h1>
//                         </div>
//                        </div>

//                       <div className = 'form__divider'></div>

//                       <div className = 'form__details'>
          
//                       <div className = 'form__details-card'>
//                         <h2 className = 'form__details-heading'>Warehouse Details</h2>

//                         <div className = 'form__details-input'>

//                           <div className = 'form__details-input-section'>
//                             <label className = 'form__details-input-subheading'>Warehouse Name</label>
//                             <input
//                                 type = 'text'
//                                 id = {this}
//                                 className = 'form__details-input-text'
//                                 placeholder = 'Warehouse Name'
//                                 name = "name"
//                             />
//                           </div>

//                           <div className = 'form__details-input-section'>
//                             <label className = 'form__details-input-subheading'>Street Address</label>
//                             <input
//                                 type = 'text'
//                                 id = {this}
//                                 className = 'form__details-input-text'
//                                 placeholder = 'Street Address'
//                                 name = 'street'
//                             />
//                           </div>


//                           <div className = 'form__details-input-section'>
//                             <label className = 'form__details-input-subheading'>City</label>
//                             <input
//                                 type = 'text'
//                                 id = {this}
//                                 className = 'form__details-input-text'
//                                 placeholder = 'City'
//                                 name = 'city'
//                             />
//                           </div>


//                           <div className = 'form__details-input-section'>
//                             <label className = 'form__details-input-subheading'>Country</label>
//                             <input
//                                 type = 'text'
//                                 id = {this}
//                                 className = 'form__details-input-text'
//                                 placeholder = 'Country'
//                                 name = 'country'                            
//                               />
//                           </div>
//                         </div>
//                        </div>
//                       </div>

//                     <div className = 'form__divider'></div>

//                      <div className = 'form__details'>
//                       <div className = 'form__details-card'>
//                         <h2 className = 'form__details-heading'>Contact Details</h2>

//                         <div className = 'form__details-input'>

//                           <div className = 'form__details-input-section'>
//                             <label className = 'form__details-input-subheading'>Contact Name</label>
//                             <input
//                                 type = 'text'
//                                 id = {this}
//                                 className = 'form__details-input-text'
//                                 placeholder = 'Contact Name'
//                                 name = 'contactName'
//                             />
//                           </div>

//                           <div className = 'form__details-input-section'>
//                             <label className = 'form__details-input-subheading'>Position</label>
//                             <input
//                                 type = 'text'
//                                 id = {this}
//                                 className = 'form__details-input-text'
//                                 placeholder = 'Position'
//                                 name = 'position'
//                             />
//                           </div>


//                           <div className = 'form__details-input-section'>
//                             <label className = 'form__details-input-subheading'>Phone Number</label>
//                             <input
//                                 type = 'text'
//                                 id = {this}
//                                 className = 'form__details-input-text'
//                                 placeholder = 'Phone Number'
//                                 name = 'phone'
//                             />
//                           </div>


//                           <div className = 'form__details-input-section'>
//                             <label className = 'form__details-input-subheading'>Email</label>
//                             <input
//                                 type = 'email'
//                                 id = {this}
//                                 className = 'form__details-input-text'
//                                 placeholder = 'Email'
//                                 name = 'email'                            
//                               />
//                           </div>

//                         </div>
//                     </div>
//                   </div>

//                   <div className = 'form__details-button-container'>
//                     <div className = 'form__details-button'>
//                         <button className = 'form__details-button-cancel'>Cancel</button>
//                         <button className = 'form__details-button-change'>+ Add Warehouse</button>
//                     </div>
//                   </div>

//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//           </>
//         )
//     }
// }

  )
}

export default WarehouseAdd;