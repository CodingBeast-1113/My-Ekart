'use client'
import React from 'react'
import { Usestatevalue } from '../context/FetchContext'

import SingleProduct from './SingleProduct'

const FetchProducts = () => {
    const {productstate,dispatch,filterstate,dispatchstate} =Usestatevalue()
    const [myproduct]=productstate.product
    //console.log("My product",myproduct)
    //console.log('Filter state', filterstate.filter);


    const array=()=>{
      if (filterstate.srchquery!==""){
        return myproduct?.filter(items=>items.title.toLowerCase().includes(filterstate.srchquery))
      }
      else if (filterstate.filter!==''){
        return myproduct?.filter(item=>item.category===filterstate.filter)
      }
      else{
        return myproduct
      }
    }

  

  return (
    <>
    <div className="fetch-data" >
      {
        array()?.map((e)=>(
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
