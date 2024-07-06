import { useState, useEffect } from "react";
import {v1 as uuid} from "uuid";
import axios from "axios";


const useAxios = (url, options = {}) => {
    const [cards, setCards] = useState([]);
    const [response, setResponse] = useState(null);
    useEffect(() => {
        try{
        const RESPONSE = await axios({
            url: url,
            method: "Get"
            }
        );
        setCards(cards => [...cards, { ...RESPONSE.data, id: uuid() }])
        }
        catch(error){
            console.error(`error on axios call ${error}`)
        } 
    }, [url, response])
}


