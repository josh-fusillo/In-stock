import React, { Component } from 'react';
import IconSearch from '../Icons/IconSearch';

class SearchBox extends Component {
    render() {
        return (
            <div className="warehouses__search-container input">
                <input type="search"
                placeholder="Search ..."
                className="warehouses__search-input" />
                <IconSearch />
            </div>
        )
    }
}

export default SearchBox;