import React, { Component } from 'react';
import IconDelete from '../Icons/IconDelete';
import IconEdit from '../Icons/IconEdit';

class Control extends Component {
    render() {
        return (
            <div className="card__control">
                <IconDelete />
                <IconEdit />
            </div>
        )
    }
}

export default Control;