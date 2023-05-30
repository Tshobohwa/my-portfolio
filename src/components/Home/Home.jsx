import React from 'react'
import './Home.css'
import background from '../../assets/images/home-background.png'

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
        <div className='comments--btn__container'>
          <p className='home--page__comment'>I'm an enthusiast, passionate, skilled, innovative, and detail-oriented <br/> full stack web developer.</p>
          <div className='actions--buttons__container'>
            <button className='home--btn'>Let's connect</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
