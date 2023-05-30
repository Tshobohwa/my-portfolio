import { useState } from 'react';
import myLogo from "../../assets/icons/mylogo.png"
import './NavBar.css'

const NavBar = () => {
  const [displayedMenu, setDisplayedMenu] = useState(false)
  const handleSetDisplayedMenu = () => {
    setDisplayedMenu(!displayedMenu)
  }
  return (
    <nav className="nav--bar">
      <div className='header--logo__container'>
        <img src={myLogo} alt="my logo" className='header--logo' />
      </div>
      <ul className={`nav--ul ${displayedMenu ? 'displayed--menu':''}`}>
        <li className="nav--list__item">
          <a href="#home">Home</a>
        </li>
        <li className="nav--list__item">
          <a href="#about">About</a>  
        </li>
        <li className="nav--list__item">
          <a href="#portfolio">Portfolio</a>  
        </li>
        <li className="nav--list__item">
          <a href="#resume">Resume</a>
        </li>
        <li className="nav--list__item">
          <a href="#contact-me">Contact me</a>  
        </li>
      </ul>
      <div>
        <div className={`hambuger--menu ${displayedMenu? "opened--menu" :''}`} onClick={handleSetDisplayedMenu}>
          <div>
            <span className="line-1"></span>
            <span className="line-2"></span>
            <span className="line-3"></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
