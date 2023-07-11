import React from 'react'
import Rating from '@mui/material/Rating'
import toast, { Toaster } from 'react-hot-toast';

const CartProduct = ({id,image,title,price,description,rating}) => {

  const remove=()=>{
    console.log("removed")
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
          <button onClick={remove} className='add-button'>Remove Item</button>
          <Toaster />
    </>
  )
}

export default CartProduct
