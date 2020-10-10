import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import './Modal.scss';
import closeButton from '../../assets/Icons/close-24px.svg';
import axios from 'axios';
import {Link} from 'react-router-dom';


export default class InventoryModal extends Component {
    state = {
        visible: false
    }

    openModal() {
        this.setState({
            visible: true
        });
    }

    closeModal() {
        this.setState({
            visible: false
        });
    }

    // editInventory = (e) => {
    //     e.preventDefault();
    //     const {match: {params}} = this.props;
    //     const invID = params.id;
        // let editedItem = {
        //   itemName: e.target.name.value,
        //   description:  e.target.description.value,
        //   category: 'gear',
        //   status: 'in-stock',
        //   quantity: e.target.quantity.value,
        // }
  
    //     axios
    //     .delete(`/inventory/${invID}`)
        
    //     .then (res=> {
    //         console.log(res.data)
    //         console.log(params)
    //     })
    //     e.target.reset();
    // }


    render() {
        return (
            <section>
                <input type="button" className="delete__button" onClick={() => this.openModal()} />
                <Modal visible={this.state.visible} effect="fadeInDown" onClickAway={() => this.closeModal()}>
                    <div className="delete__modal">
                        <h1 className="modal__header">Delete Television inventory item?</h1>
                        <p className="modal__text">Please confirm that you'd like to delete Television from the inventory list.  You won't be able to undo this action.</p>
                        <button onClick={() => this.closeModal()} className="modal-cancel button">Cancel</button>
                      <button className="modal-delete button">Delete</button>
                        <a href="" onClick={() => this.closeModal()}><img className="close__X" src={closeButton} alt="Close Button" /></a>
                    </div>
                </Modal>
            </section>
        )
    }
}


