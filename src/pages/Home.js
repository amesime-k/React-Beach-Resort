import React from 'react'
import Hero from '../component/Hero'
import Banner from '../component/Banner'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <Hero>
      <Banner title="Luxurious rooms" subtitle='Deluxe rooms starting at $299'>
<Link to={'/rooms'} className="btn-primary">Rooms</Link>
      </Banner>
   </Hero>
  )
}

export default Home