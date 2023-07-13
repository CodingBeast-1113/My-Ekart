'use client'
import React, { useState } from 'react'
import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Usestatevalue } from '../context/FetchContext';
import Link from 'next/link';

const Header = () => {

  const {fiterstate,dispatchstate}=Usestatevalue()
  const [input,setInput]=useState(null)
  const [name,setName]=useState(null)
  
  console.log(name)
  const handlefilter=(e)=>{
    setName(e.target.name)
    dispatchstate({type:"FILTER_CATEGORY",
    payload:e.target.name
  }
  )
  }
  const handleinput=(e)=>{
    setInput(e.target.value.toLowerCase())
    dispatchstate({type:"Search_Items",
    payload:input
    
  })
  //console.log(input)
  }

  const clearfilter=()=>{
    dispatchstate({type:"Clear_Filter",
    payload:""
  })
  }

  const {productstate,dispatch}=Usestatevalue();
  return (
    <>
      <nav className="navbar navbar-dark  fixed-top">
  <div className="container-fluid">
    <Link className="navbar-brand d-flex mystore-logo" href="/">MyStore
    <div className='add-cart'>
      <Link href="/cart">
    <Badge badgeContent={productstate.cart.length} color="success">
  <ShoppingCartIcon/>
</Badge>
</Link>
    </div>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark sidebar" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title " id="offcanvasDarkNavbarLabel">MyStore</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <button className="nav-link active" aria-current="page" name='electronics' onClick={clearfilter}>All Products</button>
          </li>
          <li className="nav-item">
            <button className="nav-link active" aria-current="page" name='electronics' onClick={handlefilter}>Electonics</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" name="men's clothing" onClick={handlefilter}>Men's clothing</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" name="women's clothing" onClick={handlefilter}>Women's clothing</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" name='jewelery' onClick={handlefilter}>Jewelery</button>
          </li>
        </ul>
        <form className="d-flex mt-3" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleinput}/>
        </form>
      </div>
    </div>
  </div>
</nav>

    </>
  )
}

export default Header
