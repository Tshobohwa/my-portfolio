import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <header className='footer--header'>
            <h2></h2>
        </header>
        <form>
            <h3>Contact me</h3>
            <input type="text" placeholder='Write your name here' className='footer--form__input'/>
            <input type="email" placeholder='Write your email here' className='footer--form__input'/>
            <textarea name="message" id="" cols="30" rows="10" placeholder='Writre your message here'></textarea>
        </form>
    </footer>
  )
}

export default Footer
