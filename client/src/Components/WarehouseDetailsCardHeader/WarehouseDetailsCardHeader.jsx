import React, {useState} from 'react';
import '../WarehouseDetailsCard/WarehouseDetailsCard.scss';
import Sort from '../../assets/Icons/sort-24px.svg';
import WarehouseDetailsCard from '../WarehouseDetailsCard/WarehouseDetailsCard';


function WarehouseDetailsCardHearder (props) {
    const [itemList, setItemList] = useState();
    
    const [sorted, setSorted] = useState();
    
    const sortItems = (event) => {
        if (props.InventoryList.length > 0) {
            let newItemList = props.InventoryList.sort((a,b) => a.itemName > b.itemName ? 1 : -1 );
            setItemList(newItemList);
            setSorted('items');
        } 
    }
    const [categoryList, setCategoryList] = useState();
    const sortItemsCategory = (event) => {
        if (props.InventoryList.length > 0) {
            let newItemList = props.InventoryList.sort((a,b) => a.category > b.category ? 1 : -1 );
            setCategoryList(newItemList);
            setSorted('category');
        } 
    }
    const [stockList, setStockList] = useState();
    const sortItemsStock = (event) => {
        if (props.InventoryList.length > 0) {
            let newItemList = props.InventoryList.sort((a,b) => a.quantity < b.quantity ? 1 : -1 );
            setStockList(newItemList);
            setSorted('stock');
        }
    }
    
    return (
        <>
        <div className="warehouseInventoryTabletDesk">
            <div className="warehouseInventoryTabletDesk__headers">
                <div className="warehouseInventoryTabletDesk__startGroup">
                    <h4 className="warehouseInventoryTabletDesk__label">INVENTORY ITEM<img className="warehouseInventoryTabletDesk__sort" onClick={sortItems} src={Sort} alt="sort" /></h4>
                    <h4 className="warehouseInventoryTabletDesk__label">CATEGORY<img className="warehouseInventoryTabletDesk__sort" onClick={sortItemsCategory} src={Sort} alt="sort"/></h4>
                    <h4 className="warehouseInventoryTabletDesk__label">STATUS<img className="warehouseInventoryTabletDesk__sort" onClick={sortItemsStock} src={Sort} alt="sort"/></h4>
                </div>  
                <div className="warehouseInventoryTabletDesk__endGroup">
                    <h4 className="warehouseInventoryTabletDesk__label">QUANTITY<img className="warehouseInventoryTabletDesk__sort" onClick={sortItemsStock} src={Sort} alt="sort"/></h4>
                    <h4 className="warehouseInventoryTabletDesk__labelActions">ACTIONS</h4>
                </div>
            </div>
        </div>
        {sorted === 'items' ? itemList.map(item => 
         <WarehouseDetailsCard 
            id={item.id}
            item={item.itemName}
            description={item.description}
            category={item.category}
            quantity={item.quantity}
            status={item.status}
            />): sorted ==='category' ? categoryList.map(item =>
            <WarehouseDetailsCard 
            id={item.id}
            item={item.itemName}
            description={item.description}
            category={item.category}
            quantity={item.quantity}
            status={item.status}
            />) : sorted ==='stock' ? stockList.map(item =>
            <WarehouseDetailsCard 
            id={item.id}
            item={item.itemName}
            description={item.description}
            category={item.category}
            quantity={item.quantity}
            status={item.status} />) : props.InventoryList.map(item => 
            <WarehouseDetailsCard 
            id={item.id}
            item={item.itemName}
            description={item.description}
            category={item.category}
            quantity={item.quantity}
            status={item.status} />)
         }
        </>    
        
    )
}

export default WarehouseDetailsCardHearder;

