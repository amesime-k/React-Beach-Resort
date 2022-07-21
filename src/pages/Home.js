import React from 'react'
import Hero from '../component/Hero'
import Banner from '../component/Banner'
import {Link} from 'react-router-dom'
import Service from '../component/Service'
import FeaturedRooms from '../component/FeaturedRooms'

function Home() {
  return (
    <>
    <Hero>
      <Banner title="Luxurious rooms" subtitle='Deluxe rooms starting at $299'>
<Link to={'/rooms'} className="btn-primary">Our Rooms</Link>
      </Banner>
      </Hero>
      <Service />
      <FeaturedRooms />
    </>
  )
}

export default Home