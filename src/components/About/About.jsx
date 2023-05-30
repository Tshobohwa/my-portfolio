import './About.css'
import profilePic from '../../assets/images/profile-pic.png'
import Skills from '../Skills/Skills'

const About = () => {
  return (
      <section className='about--section__wrapper' id='about'>
        <h2 className='about--section__title'>About me</h2>
        <div className='about--section__container'>
            <img src={profilePic} alt="SALOMON PIC" className='about--section__profile'/>
            <p className='about--section__text'>I'm a passionate web developer specialized in various technologies,
             dedicated to building web applications and crafting visually stunning websites for companies. I thrive on
              tackling challenging problems, constantly expanding my knowledge of programming languages and emerging
               technologies.</p>
        </div>
        <button className='about--section__btn'>Get my resume</button>
        <h2 className='about--section__title'>Skills</h2>
        <Skills />
      </section>
  )
}

export default About
