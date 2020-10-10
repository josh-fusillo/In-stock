import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import WarehousesCard from './WarehousesCard';
import WarehousesTitle from './WarehousesTitle';
import IconSearch from '../Icons/IconSearch';
import './WarehousesList.scss';
import FilterResults from 'react-filter-search';

class WarehousesList extends Component {
    state = {
        warehousesInfo: [],
        value: '',
        currentId: null,
        visible: false
    }

    getWarehousesList = () => {
        axios
            .get(`http://localhost:8080/warehouses/`)
            .then(res => {
                this.setState({
                    warehousesInfo: res.data
                    
                })
                console.log(this.state.warehousesInfo)

            })
    };

    handleDelete = async () => {
        console.log("Click handleDetele");
        try{
            const id = this.state.currentId;
            await axios.delete(`http://localhost:8080/warehouses/${id}`);
            this.getWarehousesList();
            this.closeDeleteModel();
        } 
        catch(error) {
            console.log(error);
        }
    };

    // openDeleteModel = (id) => {
    //     this.setState({
    //         currentId: id,
    //         visible: true
    //     })
    // };

    // closeDeleteModel = () => {
    //     this.setState({
    //         currentId: null,
    //         visible: false
    //     })
    // };

    componentDidMount() {
        this.getWarehousesList();
        console.log(this.state.warehousesInfo)
    };

    handleChange = event => {
        const { value } = event.target;
        this.setState({ value });
    };


    render() {
        const { warehousesInfo, value } = this.state;
        return (
            <div className="container">
                <div className="warehouses">
                    <div className="warehouses__card-wrapper wrapper">
                        <div className="warehouses__card-content">
                            <div className="warehouses__header-container">
                                <div className="warehouses__header-left">Warehouses</div>

                                <div className="warehouses__header-right">
                                    <div className="warehouses__search-container input">
                                        <input type="text"
                                            value={value}
                                            onChange={this.handleChange}
                                            placeholder="Search ..."
                                            className="warehouses__search-input" />
                                        <IconSearch />
                                    </div>

                                    <Link to="/warehouse/warehouseAdd">
                                        <div className="warehouses__add-btn btn-large">
                                            + Add New Warehouse
                                        </div>
                                    </Link>

                                </div>
                            </div>

                            <WarehousesTitle />

                            <FilterResults
                                value={value}
                                data={warehousesInfo}
                                renderResults={results => (
                                    <div>
                                        {results.map(data => (
                                            <WarehousesCard
                                                key={data.id}
                                                id={data.id}
                                                warehouseId={data.id}
                                                name={data.name}
                                                address={data.address}
                                                city={data.city}
                                                country={data.country}
                                                contactname={data.contact.name}
                                                phone={data.contact.phone}
                                                email={data.contact.email}
                                                whData={data}
                                                // openDeleteModel={this.openDeleteModel}
                                                // closeDeleteModel={this.closeDeleteModel}
                                                handleDelete={this.handleDelete}
                                            />
                                        ))}
                                    </div>
                                )} />
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}

export default WarehousesList;

// import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
// import axios from 'axios';
// import WarehousesCard from './WarehousesCard';
// import WarehousesTitle from './WarehousesTitle';
// import IconSearch from '../Icons/IconSearch';
// import './WarehousesList.scss';
// import FilterResults from 'react-filter-search';

// class WarehousesList extends Component {
//     state = {
//         warehousesInfo: [],
//         value: '',
//         currentId: null
//     }

//     getWarehousesList = () => {
//         axios
//             .get(`http://localhost:8080/warehouses/`)
//             .then(res => {
//                         this.setState({                        
//                         warehousesInfo: res.data
//                     })   
//                     console.log(this.state.warehousesInfo)

//             })                  
//     }   
    
//     onRemoveModel = () => {
//         this.setState({
//             currentId: null
//         })
//     }
    
//     // handleRemove = () => {
//     //     const id = this.state.currentId;
//     //     axios
//     //         .delete(`http://localhost:8080/warehouses/${id}`)
//     //         .then(res => {
//     //             console.log(res);
//     //             this.onRemoveModel();
//     //     })
//     // }

//     handleRemove = async () => {
//         try{
//             const id = this.state.currentId;
//             await axios.delete(`http://localhost:8080/warehouses/${id}`);
//             this.getWarehousesList();
//             this.onRemoveModel();
//         } catch (err) {
//             console.log(err);
//         }
//     }

//     componentDidMount() {
//         this.getWarehousesList();    
//         console.log(this.state.warehousesInfo)           
//     }

//     componentDidUpdate() {
//         this.handleRemove();
//     }


//     handleChange = event => {
//         const { value } = event.target;
//         this.setState({ value });
//     };


//     render() {
//         const { warehousesInfo, value } = this.state;
//         return (
//             <div className="container">
//                 <div className="warehouses">
//                     <div className="warehouses__card-wrapper wrapper">
//                         <div className="warehouses__card-content">
//                             <div className="warehouses__header-container">
//                                 <div className="warehouses__header-left">Warehouses</div>

//                                 <div className="warehouses__header-right">
//                                     <div className="warehouses__search-container input">
//                                         <input type="text"
//                                             value={value}
//                                             onChange={this.handleChange}
//                                             placeholder="Search ..."
//                                             className="warehouses__search-input" />
//                                         <IconSearch />
//                                     </div>

//                                     <Link to="/warehouse/warehouseAdd">
//                                         <div className="warehouses__add-btn btn-large">
//                                             + Add New Warehouse
//                                         </div>
//                                     </Link>

//                                 </div>
//                             </div>

//                             <WarehousesTitle />

//                             <FilterResults
//                                 value={value}
//                                 data={warehousesInfo}
//                                 renderResults={results => (
//                                     <div>
//                                         {results.map(data => (
//                                             <WarehousesCard
//                                                 key={data.id}
//                                                 id={data.id}
//                                                 warehouseId={data.id}
//                                                 name={data.name}
//                                                 address={data.address}
//                                                 city={data.city}
//                                                 country={data.country}
//                                                 contactname={data.contact.name}
//                                                 phone={data.contact.phone}
//                                                 email={data.contact.email}
//                                             />
//                                         ))}
//                                     </div>
//                                 )} />
//                         </div>
//                     </div>

//                     {/* // {this.state.warehousesInfo.map(data => 
//                     // <WarehousesCard 
//                     //     key={data.id} 
//                     //     warehouseId={data.id}
//                     //     name={data.name} 
//                     //     address={data.address} 
//                     //     city={data.city} 
//                     //     country={data.country} 
//                     //     contactname={data.contact.name}
//                     //     phone={data.contact.phone}
//                     //     email={data.contact.email}        
//                     //  />)} */}

//                      {/* {this.state.warehousesInfo.map(data =>  */}
//                      {/* <WarehousesCard 
//                         // key={data.id} 
//                         // warehouseId={data.id}
//                         // name={data.name} 
//                         // address={data.address} 
//                         // city={data.city} 
//                         // country={data.country} 
//                          // contactname={data.contact.name}
//                          // phone={data.contact.phone}
//                          // email={data.contact.email} 
//                          whData = {data}
//                          onRemoveWh = {this.handleRemove} 
//                          onRemoveModel = {this.onRemoveModel}  
//                       />)} */}
//                 </div>
//             </div>
//         )
//     }
// }

// export default WarehousesList;