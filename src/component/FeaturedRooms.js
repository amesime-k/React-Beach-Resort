import React, { useContext } from 'react'
import { RoomContext } from '../context'
import Loading from './Loading'
import Title from './Title'
import Room from './Room'

const FeaturedRooms = () => {
    const roomCtx = useContext(RoomContext)
  let { loading, featuredRooms: rooms } = roomCtx
  rooms = rooms.map(room => (
    <Room  key={room.id} room={room} />
  ))
  return (
      <section className='featured-rooms'>
      <Title title='featured Rooms' />
      <div className='featured-rooms-center'>
{loading ? <Loading /> : rooms }
      </div>
      
    </section>
  )
}

export default FeaturedRooms