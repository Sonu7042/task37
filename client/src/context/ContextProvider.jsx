import React from 'react'
import Context from './Context'
import { useState } from 'react';
import axios from 'axios'

const ContextProvider = ({children}) => {

    const [showData, setShowData] = useState([]);
    const [totalAvg, setTotalAvg] = useState("");
  
    const fetchData = async () => {
      const response = await axios.get("https://task37-rho.vercel.app/");
      setShowData(response.data.data[0]);
      setTotalAvg(response.data.data[1]);
      console.log(response.data.data);
    };



  return (
    <Context.Provider value={{fetchData, showData, totalAvg}}>
        {children}
    </Context.Provider>
  )
}

export default ContextProvider
