import { useEffect, useState } from "react";
import RefreshButton from "./refreshbutton";

const ShoppingList = (props) => {
    return (
        <div className='shopping-list'>
            <h1>Shopping List for Oliver</h1>
            <ul>
                
            </ul>
            <RefreshButton getData={getData}/>
        </div>
    );
    
    
}

export default ShoppingList;