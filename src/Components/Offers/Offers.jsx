import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div>
      <div className="offers">
        <div className="offers-left">
          <h1>Exclusive</h1>
          <h1>ONLY ON BEST SELLERS PRODUCT</h1>
          <p>ONLY FOR BEST PRODUCT SELLERS</p>
          <button>Check Now</button>
        </div>
        <div className="offers-right">
          <img src={exclusive_image} alt="" />
        </div>
      </div>


    </div>    
  )
}

export default Offers