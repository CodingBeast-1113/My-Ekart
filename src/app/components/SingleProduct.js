'use client'
import React from 'react'
import Rating from '@mui/material/Rating'
import { Usestatevalue } from '../context/FetchContext'
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link'

const SingleProduct = ({image,title,description,price,rating,id}) => {

    const {productstate,dispatch}=Usestatevalue();

    const cart=()=>{
      toast.success("Added to cart")
        dispatch({
            type:"ADD_TO_CART",
            payload:{id,image,title,price,description,rating}
        })
    }

  return (
    <>
      <div className='images'>
          <img src={image} alt="" />
          </div>
          <div className='title'>
          <h3>{title}</h3>
          </div>
          <div className='description'>
          <h3>{description}</h3>
          </div>
          <div className='rating'>
          <h4><Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly/></h4>
          </div>
          <div className='price'>
          <h3>${price}</h3>
          </div>
          
          {(productstate.cart.findIndex(i=>i.id===id)===-1)? <button onClick={cart} className='add-button'>Add to Cart</button> : <Link href='/cart' className='cart-add'><button className='cart-button'>Go to cart</button></Link>}
          <Toaster />
    </>
  )
}

export default SingleProduct
