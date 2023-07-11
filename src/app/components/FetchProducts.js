'use client'
import React from 'react'
import { Usestatevalue } from '../context/FetchContext'

import SingleProduct from './SingleProduct'

const FetchProducts = () => {
    const {productstate,dispatch} =Usestatevalue()
    const [myproduct]=productstate.product
    console.log("My product",myproduct)

  

  return (
    <>
    <div className="fetch-data" >
      {
        myproduct?.map((e)=>(
          <div key={e.id} className='fetch-images'>
            <SingleProduct image={e.image} title={e.title} description={e.description} price={e.price} rating={e.rating.rate} id={e.id}/>
        </div>
        ))
      }
      </div>
    </>
  )
}

export default FetchProducts
