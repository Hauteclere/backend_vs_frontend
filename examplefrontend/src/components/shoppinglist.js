import { useEffect, useState } from "react";
import RefreshButton from "./refreshbutton";

const ShoppingList = (props) => {
    
    
    return (
        <div className='shopping-list'>
            <h1>Shopping List for Oliver</h1>
            <ul>
                <li>Onions</li>
                <li>Garlic</li>
                <li>Celery</li>
                <li>Balsamic Vinegar</li>
            </ul>
            <RefreshButton toggleDarkMode={toggleDarkMode}/>
        </div>
    );
    
    
}

export default ShoppingList;