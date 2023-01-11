import { useEffect, useState } from "react";


export default function useFetch() {
    const [characterArray, setCharacterArray] = useState([]);

    useEffect(() => {
        const domain="https://imaginerium-qpii.onrender.com";
        async function getData() {
        const response = await fetch(`${domain}/characters`);
            const data = await response.json();
            setCharacterArray(data.payload);
            console.log(data.payload)
        }
        getData();
    }, []);

   
    return [ characterArray, setCharacterArray ];
}