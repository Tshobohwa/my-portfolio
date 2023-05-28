import React from 'react'
import './Home.css'
import background from '../../assets/images/wood-background.jpg'

const Home = () => {
  return (
    <section id='home-section' className='home--section__wrapper'>
      <img src={background} alt="background" className='home--background__image' />
      <div className='home--section__container'>
        <div className='brand--container'>
          <h1 className='brand--title'> <span>S</span> <span>A</span> <span>L</span> <span>O</span> <span>M</span> <span>O</span> <span>N</span> </h1>
          <hr className='brand--horizontal__line' />
          <small className='brand--small' ><span>TSHOBOHWA</span><span>SULEMANI</span></small>
        </div>
      </div>
    </section>
  )
}

export default Home
