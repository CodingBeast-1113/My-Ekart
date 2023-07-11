'use client'
import React from 'react'
import { Usestatevalue } from '../context/FetchContext'
import CartProduct from '../components/CartProduct';

const page = () => {

    const {productstate,dispatch}=Usestatevalue();
    const cartproduct=productstate.cart
    console.log("Cart product",cartproduct)

  return (
    <>
      <div className="fetch-data-cart" >
      {
        cartproduct?.map((e)=>(
          <div key={e.id} className='fetch-images'>
            <CartProduct image={e.image} title={e.title} description={e.description} price={e.price} rating={e.rating.rate} id={e.id}/>
        </div>
        ))
      }
      </div>
    </>
  )
}

export default page
