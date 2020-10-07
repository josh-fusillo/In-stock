import React from 'react';
import {Link} from 'react-router-dom';
import '../WarehouseEdit/warehouseEditAdd.scss';
import ArrowBack from '../../assets/Icons/arrow_back-24px.svg';

class WarehouseEdit extends React.Component {
    render() {
        return (
          <>
          <div className = 'card'>
           <div className='card__container'>
             <div className='card__content-wrapper'>              

                <div className = 'form'>
                  <form onSubmit = {this}>

                      <div className = 'form__details-card'>
                        <div className = 'form__details-header'>
                        <img className="form__details-header-arrow" src={ArrowBack} alt=""/>
                          <h1 className = 'form__details-header-txt'>Edit Warehouse</h1>
                        </div>
                       </div>

                      <div className = 'form__divider1'></div>

                  <div className = 'form__card-wrapper'>
                      <div className = 'form__details'>
          
                      <div className = 'form__details-card'>
                        <h2 className = 'form__details-heading'>Warehouse Details</h2>

                        <div className = 'form__details-input'>

                          <div className = 'form__details-input-section'>
                            <label className = 'form__details-input-subheading'>Warehouse Name</label>
                            <input
                                type = 'text'
                                id = {this}
                                className = 'form__details-input-text'
                                name = {this}
                                value = {this}
                            />
                          </div>

                          <div className = 'form__details-input-section'>
                            <label className = 'form__details-input-subheading'>Street Address</label>
                            <input
                                type = 'text'
                                id = {this}
                                className = 'form__details-input-text'
                                name = {this}
                                value = {this}
                            />
                          </div>


                          <div className = 'form__details-input-section'>
                            <label className = 'form__details-input-subheading'>City</label>
                            <input
                                type = 'text'
                                id = {this}
                                className = 'form__details-input-text'
                                name = {this}
                                value = {this}
                            />
                          </div>


                          <div className = 'form__details-input-section'>
                            <label className = 'form__details-input-subheading'>Country</label>
                            <input
                                type = 'text'
                                id = {this}
                                className = 'form__details-input-text'
                                name = {this}
                                value = {this}
                            />
                          </div>
                        </div>
                       </div>
                      </div>
                  </div>


                    <div className = 'form__divider2'></div>

              <div className = 'form__card-wrapper'>
                     <div className = 'form__details'>
                      <div className = 'form__details-card'>
                        <h2 className = 'form__details-heading'>Contact Details</h2>

                        <div className = 'form__details-input'>

                          <div className = 'form__details-input-section'>
                            <label className = 'form__details-input-subheading'>Contact Name</label>
                            <input
                                type = 'text'
                                id = {this}
                                className = 'form__details-input-text'
                                name = {this}
                                value = {this}
                            />
                          </div>

                          <div className = 'form__details-input-section'>
                            <label className = 'form__details-input-subheading'>Position</label>
                            <input
                                type = 'text'
                                id = {this}
                                className = 'form__details-input-text'
                                name = {this}
                                value = {this}
                            />
                          </div>


                          <div className = 'form__details-input-section'>
                            <label className = 'form__details-input-subheading'>Phone Number</label>
                            <input
                                type = 'text'
                                id = {this}
                                className = 'form__details-input-text'
                                name = {this}
                                value = {this}
                            />
                          </div>


                          <div className = 'form__details-input-section'>
                            <label className = 'form__details-input-subheading'>Email</label>
                            <input
                                type = 'email'
                                id = {this}
                                className = 'form__details-input-text'
                                name = {this}
                                value = {this}
                            />
                          </div>
                          </div>
                        </div>
                    </div>
                  </div>

                  <div className = 'form__details-button-container'>
                    <div className = 'form__details-button'>
                        <button className = 'form__details-button-cancel'>Cancel</button>
                        <button className = 'form__details-button-change'>Save</button>
                    </div>
                  </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          </>
        )
    }
}


export default WarehouseEdit;