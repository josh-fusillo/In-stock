import React from 'react';
import './editInventory.scss';
import arrowLogo from '../../assets/Icons/arrow_back-24px.svg';

 function EditInventory(props) {

    return (

        <main>
            <form className="edit">

                <div className="edit-head" >
                    <h1 className="edit-head__header"> <img src= {arrowLogo} alt="return-logo"/> Edit Inventory Item</h1>
                </div>

                <div className="edit-inventory">

                    <div className="edit-inventory__details">
                        <h2 className="edit-inventory__details-header">Item Details</h2>
                        
                        <div className="edit-inventory__details-item">
                            <label className="edit-inventory__details-item-label">Item Name</label>
                            <input className="edit-inventory__details-item-input" type="text" placeholder="Telivision"/>
                        </div>
            
                        <div className="edit-inventory__details-description">
                            <label className="edit-inventory__details-description-label">Description</label>
                            <textarea className="edit-inventory__details-description-input" type="text" placeholder="This 50', 4K LED TV provides a crystal-clear picture and vivid colors."/>
                        </div>

                        <div className="edit-inventory__details-select">
                            <label className="edit-inventory__details-select-label">Category</label>
                            <select className="edit-inventory__details-select-field" placeholder="Please select"/>
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
                                    <input className="edit-inventory__availability-status-options-selectors-field" type="radio"/>
                                    <label className="edit-inventory__availability-status-options-selectors-label">In Stock</label>
                                </div>

                                <div className="edit-inventory__availability-status-options-selectors">
                                    <input className="edit-inventory__availability-status-options-selectors-field" type="radio"/>
                                    <label className="edit-inventory__availability-status-options-selectors-label">Out of Stock</label>
                                </div>
                            </div>

                        </div>

                        <div className="edit-inventory__availability-qty">
                            <label className="edit-inventory__availability-qty-label">Quantity</label>
                            <input className="edit-inventory__availability-qty-input" type="text" placeholder="0"/>
                        </div>

                
                        <div className="edit-inventory__availability-warehouse"> 
                            <label className="edit-inventory__availability-warehouse-label">Warehouse</label>
                            <select className="edit-inventory__availability-warehouse-select" name="select"/>
                        </div>
                    </div>
    
                </div>


                <div className="edit-buttons">
                    <button className="edit-buttons__cancel"> Cancel </button>
                    <button className="edit-buttons__save"> Save </button>
                </div>
                
            </form>

        </main>
    )
}

export default EditInventory;