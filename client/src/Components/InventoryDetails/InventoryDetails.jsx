import React from 'react';
import axios from 'axios';
import InventoryDetailsCard from '../InventoryDetailsCard/InventoryDetailsCard';

class InventoryDetails extends React.Component {
    state = {
        item: []
    }

    getItem = () => {
        const itemId = this.props.match.params.id;
        axios.get('/inventory/' + itemId)
            .then(res => {
                console.log(res.data)
                this.setState({
                    item : res.data
                })
            })
    }

    componentDidMount() {
        this.getItem();
    }
    
    render() {
        return (
            <InventoryDetailsCard 
            itemName={this.state.item.itemName}
            id={this.state.item.id}
            description={this.state.item.description}
            category={this.state.item.category}
            status={this.state.item.status}
            quantity={this.state.item.quantity}
            warehouse={this.state.item.warehouse}
            />
        )
    }
}

export default InventoryDetails;