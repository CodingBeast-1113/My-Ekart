'use client'
import React from 'react'
import { Usestatevalue } from '../context/FetchContext'
import Rating from '@mui/material/Rating'

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
            <div className='images'>
          <img src={e.image} alt="" />
          </div>
          <div className='title'>
          <h3>{e.title}</h3>
          </div>
          <div className='description'>
          <h3>{e.description}</h3>
          </div>
          <div className='rating'>
          <h4><Rating name="half-rating-read" defaultValue={e.rating.rate} precision={0.5} readOnly/></h4>
          </div>
          <div className='price'>
          <h3>${e.price}</h3>
          </div>
          <div className='add-button'>
          <a>Add to Cart</a>
          </div>
        </div>
        ))
      }
      </div>
    </>
  )
}

export default FetchProducts
