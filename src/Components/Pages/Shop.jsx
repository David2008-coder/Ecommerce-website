import React from 'react'
import Hero from '../Hero/Hero'
import Popular from '../Popular/Popular.jsx'
import Offers from '../Offers/Offers.jsx'
import NewCollection from '../NewCollection/NewCollection.jsx'
import NewsLetter from '../NewsLetter/NewsLetter.jsx'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollection/>
      <NewsLetter/>
    </div>
  )
}

export default Shop