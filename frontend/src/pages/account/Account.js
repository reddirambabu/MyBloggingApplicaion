import React from "react"
import image from "../../assets/images/input.png"
import "./account.css"

export const Account = () => {
  return (
    <>
      <section className='accountInfo'>
        <div className='container boxItems'>
          <h1>Account Information</h1>
          <div className='content'>
            <div className='left'>
              <div className='img flexCenter'>
                <input type='file' accept='image/*' src="https://res-console.cloudinary.com/djiwd38yz/media_explorer_thumbnails/7432c29b1deb09cae527dfb649c606e2/detailed" alt='img' />
                <img src= "https://res-console.cloudinary.com/djiwd38yz/media_explorer_thumbnails/7432c29b1deb09cae527dfb649c606e2/detailed" alt='image' class='image-preview' />
              </div>
              <div className='text'>
                      <h4>REDDI RAMBABU</h4>
                      <label>AndhraPradesh , INDIA</label>
                    </div>
            </div>
            <div className='right'>
              <label htmlFor=''>Username</label>
              <input type='text' />
              <label htmlFor=''>Email</label>
              <input type='email' />
              <label htmlFor=''>Password</label>
              <input type='password' />
              <button className='button'>Update</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
