import React from 'react';
import '../Status/Status.scss';

function Status (props) {
    return (
        <>{props.quantity > 0 ? 
            (<button className="statusTrue">IN STOCK</button>):
            (<button className="statusFalse">OUT OF STOCK</button>)}
        </>
        )
}

export default Status;