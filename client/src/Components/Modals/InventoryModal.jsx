import React from 'react'
import './Modal.scss'
import close from '../../assets/Icons/close-24px.svg'

export default function InventoryModal() {
    return (
        <div classNameName="modal">
            <div className="modal-container">
                <input id="modal-toggle" type="checkbox" />
                <button classNameName="modal-button"></button>
                <div className="modal-backdrop">
                    <div className="modal-content">
                        <label className="modal-close" for="modal-toggle"><img src={close} /></label>
                        <h1 className="modal__header">Delete Television inventory item?</h1>
                        
                        <p className="modal__text">Please confirm that you'd like to delete Television from the inventory list.  You won't be able to undo this action.</p>
                        <label className="modal-cancel button" for="modal-toggle">Cancel</label>
                        <label className="modal-close button" for="modal-toggle">Delete</label>
                    </div>
                </div>
            </div>
        </div>
    )
}
