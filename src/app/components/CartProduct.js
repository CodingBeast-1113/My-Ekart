import React from 'react'
import Rating from '@mui/material/Rating'
import toast, { Toaster } from 'react-hot-toast';
import { Usestatevalue } from '../context/FetchContext';

const CartProduct = ({id,image,title,price,description,rating}) => {

  const {productstate,dispatch}=Usestatevalue()

  const remove=()=>{
    toast.success("Removed from Cart")
    dispatch({type:"Remove_Item",
    payload:id
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
          <button onClick={remove} className='add-button'>Remove Item</button>
       
    </>
  )
}

export default CartProduct
