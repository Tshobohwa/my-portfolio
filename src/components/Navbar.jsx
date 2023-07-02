import React from 'react'
import salomonlogo from '../assets/salomonlogo.png'

const Navbar = () => {
  return (
    <nav className="h-20 bg-gray-800 flex text-xl items-center justify-between sticky top-0 px-10">
        <a href="#">
            <img src={salomonlogo} alt="Salomon" className="h-[4.5rem]" />
        </a>
        <ul className="flex gap-2 text-gray-50">
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Portfolio</a>
            </li>
            <li>
                <a href="#">Resume</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
