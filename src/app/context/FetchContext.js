'use client'
import React, {createContext, useContext, useEffect, useReducer } from 'react'
import reducer from './reducer'

export const statecontext=createContext();

export const FetchContext = ({children}) => {

    const [productstate,dispatch]=useReducer(reducer,{
        product:[],
        cart:[],
        productDetail:[]
    })

    useEffect(()=>{
        const product_data=async()=>{
            const res=await fetch("https://fakestoreapi.com/products")
            const fetchData=await res.json()
            dispatch({
                type:"All_Product",
                payload:fetchData
            })
            console.log(fetchData)
        }
        product_data()
    },[])

  return (
    <>
     <statecontext.Provider value={{productstate,dispatch}}>
        {children}
     </statecontext.Provider>
    </>
  )
}

export const usestatevalue=()=>useContext(statecontext)
