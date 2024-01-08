import React, { useState } from "react"
import { Link } from "react-router-dom"

import { IoSettingsOutline } from "react-icons/io5"
import { BsBagCheck } from "react-icons/bs"
// import { AiOutlineHeart } from "react-icons/ai"
// import { GrHelp } from "react-icons/gr"
import { BiLogOut } from "react-icons/bi"
import { RiImageAddLine } from "react-icons/ri"
import Cookies from "js-cookie"


export const User = (props) => {

  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const user = true
  const [profileOpen, setProfileOpen] = useState(false)
  const close = () => {
    setProfileOpen(false)
  }
  return (
    <>
      <div className='profile'>
        {user ? (
          <>
            <button className='img' onClick={() => setProfileOpen(!profileOpen)}>
              <img src='https://res-console.cloudinary.com/djiwd38yz/media_explorer_thumbnails/7432c29b1deb09cae527dfb649c606e2/detailed' alt='' />
            </button>
            {profileOpen && (
              <div className='openProfile boxItems' onClick={close}>
                <Link to='/account'>
                  <div className='image'>
                    <div className='img'>
                      <img src='https://res-console.cloudinary.com/djiwd38yz/media_explorer_thumbnails/7432c29b1deb09cae527dfb649c606e2/detailed' alt='' />
                    </div>
                    <div className='text'>
                      <h4>REDDI RAMBABU</h4>
                      <label>AndhraPradesh , INDIA</label>
                    </div>
                  </div>
                </Link>
                <Link to='/create'>
                  <button className='box'>
                    <RiImageAddLine className='icon' />
                    <h4>Create Blog</h4>
                  </button>
                </Link>
                <Link to='/'>
                  <button className='box'>
                    <IoSettingsOutline className='icon' />
                    <h4>My Account</h4>
                  </button>
                </Link>
                <Link to='/register'>
                  <button className='box'>
                  <BsBagCheck className='icon' />
                    <h4>Register </h4>
                  </button>
                </Link>
                
                {/* <button className='box'>
                  <AiOutlineHeart className='icon' />
                  <h4>Wishlist</h4>
                </button>
                <button className='box'>
                  <GrHelp className='icon' />
                  <h4>Help</h4>
                </button> */}
                
                <Link to='/login'>
                  <button className='box' onClick={onClickLogout}>
                    <BiLogOut className='icon' />
                    <h4>Log Out</h4>
                  </button>
                </Link>
                
              </div>
            )}
          </>
        ) : (
          <button>My Account</button>
        )}
      </div>
    </>
  )
}
