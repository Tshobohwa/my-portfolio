import './About.css'
import profilePic from '../../assets/images/profile-pic.png'

const About = () => {
  return (
      <section className='about--section__wrapper' id='about'>
        <div className='about--image__container'>
            <h2 className='about--section__title'>About me</h2>
            <p className='about--section__text'>I'm a passionate web developer specialized in various technologies,
             dedicated to building web applications and crafting visually stunning websites for companies. I thrive on
              tackling challenging problems, constantly expanding my knowledge of programming languages and emerging
               technologies.</p>
            <img src={profilePic} alt="SALOMON PIC" className='about--section__profile'/>
        </div>
      </section>
  )
}

export default About
