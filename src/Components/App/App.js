import React, { useEffect, useState } from "react";
import ComA from "../ComA/ComA";
export const MyContext = React.createContext()
const App = () => {
    let [products,setProducts]=useState(null);
    let[error,setError]=useState(null);
let [loading,setLoading]=useState(true)
const fetchProducts = async ()=>{
    try {
        let data = await fetch("http://localhost:3030/products");
        let res =await data.json();
        setProducts(res)
        setError(null)
        setLoading(false)
    } catch (error) {
        setError(error.message)
        setLoading(true)
    }
};
useEffect(()=>{
    fetchProducts()
},[])
    return (
        <>
            <MyContext.Provider value={{products,error,loading}}>

                <ComA />

            </MyContext.Provider>
        </>

    );
}

export default App;