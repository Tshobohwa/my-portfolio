import React, { useEffect, useState } from 'react'
import './Home.css'
import background from '../../assets/images/home-background.png'

const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const handleImageLoadEvent = () => {
    setImageLoaded(true)
  }
const homePageComment = "I am an enthusiast, passionate, skilled, innovative, and detail-oriented full stack web developer.";
  const [displayedHomePageComment, setDisplayedHomePageComment] = useState('');
  const [homeBtnDisplayed, setHomeBtnDisplayed] = useState(false);

  useEffect(() => {
    setDisplayedHomePageComment("I")
    const homePageCommentChars = homePageComment.split("");
    let currentIndex = 0;
      const timer = setInterval(() => {
        if (currentIndex < homePageCommentChars.length-1) {
          setDisplayedHomePageComment(prevComment => prevComment + homePageCommentChars[currentIndex]);
          currentIndex++;
        } else {
          clearInterval(timer);
          setHomeBtnDisplayed(true);
        }
      }, 100); 
      return () => {
        clearInterval(timer);
      };
    }, []); 
    return (
    <section id='home-section' className='home--section__wrapper'>
      <img src={background} alt="background" onLoad={handleImageLoadEvent} className={`home--background__image ${imageLoaded? '':'home--bg__hidden'}`} />
      <div className='home--section__container'>
        <div className='brand--container'>
          <h1 className='brand--title'>
             <span>S</span>
             <span>A</span>
             <span>L</span>
             <span>O</span>
             <span>M</span>
             <span>O</span>
             <span>N</span>
           </h1>
          <hr className='brand--horizontal__line' />
          <small className='brand--small' ><span>TSHOBOHWA</span><span>SULEMANI</span></small>
        </div>
        <div className='comments--btn__container'>
          <p className='home--page__comment'> {displayedHomePageComment} </p>
          <div className='actions--buttons__container'>
            <button className={`home--btn ${homeBtnDisplayed? '': 'home--btn__hidden'}`}>Let's connect</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
