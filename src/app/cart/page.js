'use client'
import React from 'react'
import { Usestatevalue } from '../context/FetchContext'
import CartProduct from '../components/CartProduct';
import Link from 'next/link';

const page = () => {

    const {productstate,dispatch}=Usestatevalue();
    const cartproduct=productstate.cart
    //console.log("Cart product",cartproduct)

    const subtotal=cartproduct.reduce((accumulator,currentvalue)=>accumulator+currentvalue.price,0)
    //console.log(subtotal)

  return (
    <>
    {
      (cartproduct?.length===0)? <div className='empty-cart'>
          <img src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" alt="" />
          <h1>Your cart is empty!</h1>
          <h4>Add items to it now.</h4>
          <Link href='/'><button className='shop-now'>Shop Now</button></Link>
      </div> : <div>
        <div className="subtotal">
          <h3 className='items-length'>Items : {cartproduct.length}</h3>
          <h2 className='items-length'>Subtotal : ${subtotal}</h2>
          <button className='buy'>Proceed to Buy</button>
        </div>
    
      <div className="fetch-data-cart" >
      {
        cartproduct?.map((e)=>(
          <div key={e.id} className='fetch-images'>
            <CartProduct image={e.image} title={e.title} description={e.description} price={e.price} rating={e.rating.rate} id={e.id}/>
        </div>
        ))
      }
      </div>
      </div>
}
    </>
  )
}

export default page
