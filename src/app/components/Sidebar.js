'use client'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

const Sidebar = () => {
    const handleclosenav=()=>{
        document.querySelector('.sidebar').style.display="none"
    }
  return (
    <>
      <div className="sidebar">
            <div className='sidebar-top'>
                <ul>
                    <li>
                    <img src="https://res.cloudinary.com/dvcwh1gaq/image/upload/v1687768510/icon_y0sjwy.jpg" alt="logo image" />
                    </li>
                    <li className='closenav' onClick={handleclosenav}>
                        <CloseIcon/>
                    </li>
                </ul>
            </div>
            <div className='sidebar-down'>
                <div className='filter-category'>
                    <div className='category-title'>
                        <h3>Category</h3>
                    </div>
                    <div className='category'>
                        <ul>
                            <li>
                                <button >Mens Clothing</button>
                            </li>
                            <li>
                                <button >Electronic</button>
                            </li>
                            <li>
                                <button >Womens clothes</button>
                            </li>
                            <li>
                                <button >Jewelery</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='price-filter'>
                <div className='price-title'>
                        <h3>Price</h3>
                    </div>
                    <div className='price'>
                        <ul>
                            <li>
                                <button >$0-&10</button>
                            </li>
                            <li>
                                <button >$10-$50</button>
                            </li>
                            <li>
                                <button >$50-$70</button>
                            </li>
                            <li>
                                <button >$70-$120</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Sidebar
