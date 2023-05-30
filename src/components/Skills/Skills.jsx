import { FaReact,  FaHtml5, FaCss3Alt, FaNodeJs, FaBootstrap, FaSass} from 'react-icons/fa';
import { SiRedux, SiMysql,  SiPostgresql, SiRubyonrails, SiTailwindcss, SiExpress, SiPostman, SiVisualstudiocode} from 'react-icons/si';
import { DiMongodb, DiRuby} from 'react-icons/di';
import { IoLogoJavascript} from 'react-icons/io';
import {BsGit, BsGithub} from 'react-icons/bs';
import './Skills.css'

const Skills = () => {
  return (
    <div className='skills--container'>
        <h3 className='skills--categorie__name'>Front-end</h3>
        <ul className='skills--list'>
            <li className='skill--container'>
                <FaHtml5 className='skill--icon' />
                <p className='skill--name'>HTML5</p>
            </li>
            <li className='skill--container'>
                <FaCss3Alt className='skill--icon' />
                <p className='skill--name'>CSS3</p>
            </li>
            <li className='skill--container'>
                <IoLogoJavascript className='skill--icon' />
                <p className='skill--name'>JavaScript</p>
            </li>
            <li className='skill--container'>
                <FaSass className='skill--icon' />
                <p className='skill--name'>Sass</p>
            </li>
            <li className='skill--container'>
                <FaReact className='skill--icon' />
                <p className='skill--name'>ReactJS</p>
            </li>
            <li className='skill--container'>
                <SiRedux className='skill--icon' />
                <p className='skill--name'>Redux</p>
            </li>
            <li className='skill--container'>
                <FaBootstrap className='skill--icon' />
                <p className='skill--name'>Bootstrap</p>
            </li>
            <li className='skill--container'>
                <SiTailwindcss className='skill--icon' />
                <p className='skill--name'>TailwindCSS</p>
            </li>    
        </ul>
        <h3 className='skills--categorie__name'>Back-end</h3>
        <ul className='skills--list'>
            <li className='skill--container'>
                <DiRuby className='skill--icon' />
                <p className='skill--name'>Ruby</p>
            </li>
            <li className='skill--container'>
                <SiRubyonrails className='skill--icon' />
                <p className='skill--name'>Rails</p>
            </li>
            <li className='skill--container'>
                <FaNodeJs className='skill--icon' />
                <p className='skill--name'>NodeJS</p>
            </li>
            <li className='skill--container'>
                <SiExpress className='skill--icon' />
                <p className='skill--name'>ExpressJS</p>
            </li>
            <li className='skill--container'>
                <DiMongodb className='skill--icon' />
                <p className='skill--name'>MongoDB</p>
            </li>
            <li className='skill--container'>
                <SiMysql className='skill--icon' />
                <p className='skill--name'>mySQL</p>
            </li>
            <li className='skill--container'>
                <SiPostgresql className='skill--icon' />
                <p className='skill--name'>postgresql</p>
            </li>
        </ul>
        <h3 className='skills--categorie__name'>Tools</h3>
        <ul className='skills--list'>
            <li className='skill--container'>
                <BsGit className='skill--icon' />
                <p className='skill--name'>Git</p>
            </li>
            <li className='skill--container'>
                <BsGithub className='skill--icon' />
                <p className='skill--name'>Github</p>
            </li>
            <li className='skill--container'>
                <SiPostman className='skill--icon' />
                <p className='skill--name'>Postman</p>
            </li>
            <li className='skill--container'>
                <SiVisualstudiocode className='skill--icon' />
                <p className='skill--name'>VsCode</p>
            </li>
        </ul>    
    </div>
    )
}

export default Skills
