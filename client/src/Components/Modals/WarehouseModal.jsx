import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import './Modal.scss';
import closeButton from '../../assets/Icons/close-24px.svg';


export default class WarehouseModal extends Component {
    constructor(props){
        super();
        this.state = {
            visible: false
        }
    }

    openModal = (id) => {
        this.setState({
            currentId: id,
            visible: true
        });
    }

    closeModal = (event, id) => {
        // event.preventDefault();
        console.log(event, id);
        this.setState({
            currentId: id,
            visible: false,
        });
    }

    // closeModal() {
    //     this.setState({
    //         visible: false
    //     });
    // }

    render() {
        return (
            <section>
                <input type="button" className="delete__button" onClick={() => this.openModal()} />
                <Modal visible={this.state.visible} effect="fadeInDown" onClickAway={() => this.closeModal()}>
                    <div className="delete__modal">
                        <h1 className="modal__header">Delete {this.props.whModel.name} warehouse?</h1>
                        <p className="modal__text">Please confirm that you'd like to delete the {this.props.whModel.name} from the list of warehouses.  You won't be able to undo this action.</p>
                        <button className="modal-cancel button">Cancel</button>
                        {/* <button onClick={(event) => this.closeModal(event, this.props.whModel.id)} className="modal-delete button">Delete</button> */}
                        <button onClick={(event) => this.closeModal(event, this.props.whModel.id)} className="modal-delete button">Delete</button>
                        <a href="" onClick={() => this.closeModal()}><img className="close__X" src={closeButton} alt="Close Button" /></a>
                    </div>
                </Modal>
            </section>
        )
    }
}


//  const WarehouseModal =(
//     visible,
//     closeModal,
//     openModal,
//     props
//  ) => {
//     return (
//             <section>
//                 <input type="button" className="delete__button" onClick={ openModal } />
//                 <Modal visible={ visible } effect="fadeInDown" onClickAway={ closeModal }>
//                     <div className="delete__modal">
//                         <h1 className="modal__header">Delete {props.whModel.name} warehouse?</h1>
//                         <p className="modal__text">Please confirm that you'd like to delete the {props.whModel.name} from the list of warehouses.  You won't be able to undo this action.</p>
//                         <button onClick={ closeModal } className="modal-cancel button">Cancel</button>
//                         <button className="modal-delete button">Delete</button>
//                         <a href="" onClick={ closeModal }><img className="close__X" src={closeButton} alt="Close Button" /></a>
//                     </div>
//                 </Modal>
//             </section>
//     )
// }

// export default WarehouseModal;