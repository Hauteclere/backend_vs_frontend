import { useEffect, useState } from "react";
import RefreshButton from "./refreshbutton";

const ShoppingList = (props) => {
    
    const toggleDarkMode = () => {
        document.body.style.backgroundColor = "#2f4f4f";
        const heading = document.getElementById("heading");
        heading.style.color = "aqua";
        const list = document.getElementById("list");
        list.style.color = "white";
    }

    const toggleLightMode = () => {
        document.body.style.backgroundColor = "white";
        const heading = document.getElementById("heading");
        heading.style.color = "blue";
        const list = document.getElementById("list");
        list.style.color = "black";
    }
    
    return (
        <div className='shopping-list'>
            <h1 id="heading">Shopping List for Oliver</h1>
            <ul id="list">
                <li>Onions</li>
                <li>Garlic</li>
                <li>Celery</li>
                <li>Balsamic Vinegar</li>
            </ul>
            <RefreshButton text={"Toggle Dark Mode"} changeMode={toggleDarkMode}/>
            <RefreshButton text={"Toggle Light Mode"} changeMode={toggleLightMode}/>
        </div>
    );
    
    
}

export default ShoppingList;