import React, { useContext, useState } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../component/Hero";
import Banner from "../component/Banner";
import { Link, useParams } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../component/StyledHero";

function SingleRoom() {
  const params = useParams();
  const [data, setData] = useState({
    slug: params.slug,
    defaultBcg,
  });

  const roomCtx = useContext(RoomContext)
  const { getRoom } = roomCtx
 const room = getRoom(data.slug)
  if (!room) {
    return <div className="error">
      <h3>no such room could be found</h3>
      <Link to={'/rooms'} className='btn-primary'>back to rooms</Link>
    </div>
  }

  const { name, description, pets, breakfast, price, size, capacity, extras, images } = room
  
  const[mainImg, ...defaultImg] = images
  return (
    <>
      <StyledHero img={mainImg}>
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
          {defaultImg.map((img, index) => {
            return <img key={index} src={img} alt={name} />;
          })}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>Details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>Info</h3>
            <h6>Price : $ {price}</h6>
            <h6>Size : {size} SQFT</h6>
            <h6>max capacity : {capacity > 1 ? `${capacity} people` : `${capacity} person`}</h6>
            <h6>{pets ? 'pets are allowed' : 'pets are not allowed'}</h6>
            <h6>{breakfast && 'free breakfast' }</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>Extras</h6>
        <ul className="extras">
          {extras.map((extra,index) => {
            return <li key={index}> - { extra}</li>
          })}
      </ul>
      </section>
    </>
  );
}

export default SingleRoom;
