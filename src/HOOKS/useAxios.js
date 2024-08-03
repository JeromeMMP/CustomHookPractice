import { useEffect, useState } from "react";
import { v1 as uuid } from "uuid";
import axios from "axios";

const useAxios = (key, url) => {
  const [responses, setResponses] = useLocalStorage(key);
  const [error, setError] = useState(null);
  console.log(responses);
  const addCardToResponses = async (restOfUrl = "" ) => {
    try {
      const RESPONSE = await axios.get(`${url}${restOfUrl}`);
      console.log(RESPONSE);
      setResponses(prevResponses => [
        ...prevResponses,
        { ...RESPONSE.data, id: uuid() }
      ]);
    } catch (ERROR) {
      setError(ERROR);
      console.error(`error on axios call ${error}`);
    }
  };

  const clearResponses = () => {
    setResponses([]);
  };

  return [responses, addCardToResponses, error, clearResponses];
};

const useLocalStorage = (key, initialValue = []) => {
  if (localStorage.getItem(key)) {
    initialValue = JSON.parse(localStorage.getItem(key));
    
  }
  const [value, setValue] = useState(initialValue);


  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);
  return [value, setValue];
};

export default useLocalStorage;

export { useAxios, useLocalStorage };
