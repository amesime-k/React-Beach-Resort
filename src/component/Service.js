import React, { useState } from 'react'
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan, FaBeer} from 'react-icons/fa'



const Service = () => {
    const [services, setServices] = useState([
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, rerum.",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, rerum.",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free shuttle van",
        info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, rerum.",
      },
      {
        icon: <FaBeer />,
        title: "Strongest beer",
        info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, rerum.",
      },
    ]);
  return (
      <section className='services'>
          <Title title="Services" />
          <div className="services-center">
              {services.map((service, index) => {
                  return <article key={index} className='service'>
                      <span>{service.icon}</span>
                      <h6>{service.title}</h6>
                      <p>{ service.info}</p>
                  </article>
              })}
        </div>
          
    </section>
  )
}

export default Service