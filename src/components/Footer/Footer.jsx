import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='page--footer'>
        <header className='footer--header'>
            <h2></h2>
        </header>
        <form className='footer--form'>
            <h3>Contact me</h3>
            <input type="text" placeholder='Write your name here' className='footer--form__input'/>
            <input type="email" placeholder='Write your email here' className='footer--form__input'/>
            <textarea name="message" cols="30" rows="10" placeholder='Writre your message here' className='footer--form__textarea' ></textarea>
            <button className='footer--form__btn' type='submit'>Get in touch</button>
        </form>
        <footer className='page--footer__footer'>
            <p>All right reserved</p>
        </footer>
    </footer>
  )
}

export default Footer
