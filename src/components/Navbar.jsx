import React from 'react'
import salomonlogo from '../assets/salomonlogo.png'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav className="h-20 bg-gray-50 flex text-xl items-center justify-between sticky top-0 px-20 z-50">
        <Link to='section-1'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >
            <img src={salomonlogo} alt="Salomon" className="h-[4.5rem]" />
        </Link>

        <ul className="flex gap-2 text-gray-950">
            <li>
                <Link to='section-2'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >                
                    ABOUT
                </Link>
            </li>
            <li>
                <Link to='section-3'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >                
                    PROJECTS
                </Link>
            </li>
            <li>
                <Link to='section-4'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >                
                    CONTACTS
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
