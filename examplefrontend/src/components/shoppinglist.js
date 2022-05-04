import { useEffect, useState } from "react";
import RefreshButton from "./refreshbutton";

const ShoppingList = (props) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    const getData = () => {
        fetch("http://localhost:5000/data/")
            .then((res) => {
                if (!res.ok) {
                    setError("ERROR");
                }
                return res
            })
            .then((res) => res.json())
            .then((res) => {
                setData(res)
            })
    }

    useEffect(() => {
        getData()
    }, [])

    if (error !== null) {
        return (
            <h1>ERROR</h1>
        );
    }
    if (data === null) {
        return (
            <h1>Loading...</h1>
        );
    } else {
        return (
            <div className='shopping-list'>
                <h1>Shopping List for {data.name}</h1>
                <ul>
                    {data.items.map((listitem, index) => (
                        <li key={index}>{listitem}</li>
                    ))}
                </ul>
                <RefreshButton getData={getData}/>
            </div>
        );
    }
    
}

export default ShoppingList;