'use client'
import Link from 'next/link'
import React from 'react'
import Sidebar from './Sidebar'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    const handlesidenav=()=>{
      document.querySelector('.sidebar').style.display="flex"
      
    }
  return (
    <>
      <div className="main-nav">
        <div className='logo'>
            <ul>
                <li onClick={handlesidenav}>
                  <MenuIcon color="primary" />
                </li>
                <li>
                    <img src="https://res.cloudinary.com/dvcwh1gaq/image/upload/v1687768510/icon_y0sjwy.jpg" alt="logo image" />
                </li>
            </ul>
        </div>
        <div className="navbar">
            <nav>
                <ul>
                    <li>
                        <input type="search" placeholder='Search'/>
                    </li>
                    <li>
                        <Link href="/"><ShoppingCartIcon color="primary"/></Link>
                    </li>
                </ul>
            </nav>
        </div>
      </div>
      <Sidebar/>
    </>
  )
}

export default Header
