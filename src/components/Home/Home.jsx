import React, { useEffect, useState } from 'react'
import './Home.css'
import background from '../../assets/images/home-background.png'

const Home = () => {
  const homePageComment = "I am an enthusiast, passionate, skilled, innovative, and detail-oriented full stack web developer.";
  const [imageLoaded, setImageLoaded] = useState(false);
  const [displayedHorizontalLine, setDisplayedHorizontalLine] = useState(false)
  const [displayedHomePageComment, setDisplayedHomePageComment] = useState('');
  const [homeBtnDisplayed, setHomeBtnDisplayed] = useState(false);
  const [brandTitleDisplayed, setBrandTitleDisplayed] = useState(false)
  
  const  displayHomePageComment = () => {
    const homePageCommentChars = homePageComment.split("");
    setDisplayedHomePageComment("I'")
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
      };}
  
  const displayBrandText = () => {
    setBrandTitleDisplayed(true);
    setTimeout(displayHomePageComment, 2000);

  }

  const  displayHomePageContent = () => {
    if (!imageLoaded) return
    setDisplayedHorizontalLine(true);
    setTimeout(displayBrandText , 1000)
  }
  const handleImageLoadEvent = () => {
    setImageLoaded(true)
  }

  const handleDisplayHomePageContent = () => {
    if (!imageLoaded) return
      setTimeout(
      displayHomePageContent()
    , 1000)
  
  }
  useEffect(handleDisplayHomePageContent, [imageLoaded])

    return (
    <section id='home-section' className='home--section__wrapper'>
      <img src={background} alt="background" onLoad={handleImageLoadEvent} className={`home--background__image ${imageLoaded? '':'home--bg__hidden'}`} />
      <div className='home--section__container'>
        <div className='brand--container'>
          <h1 className={`brand--title ${brandTitleDisplayed ? "" : "brand--title__hidden"}`}>
             <span>S</span>
             <span>A</span>
             <span>L</span>
             <span>O</span>
             <span>M</span>
             <span>O</span>
             <span>N</span>
           </h1>
          <hr className={`brand--horizontal__line ${displayedHorizontalLine ? '' : 'horizontal--line__hidden'}`} />
          <small className={`brand--small ${brandTitleDisplayed ? "" : "brand--title__hidden"}`} ><span>TSHOBOHWA</span><span>SULEMANI</span></small>
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
