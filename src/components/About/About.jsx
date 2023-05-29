import './About.css'
import profilePic from '../../assets/images/profile-pic.png'

const About = () => {
  return (
      <section className='about--section__wrapper' id='about'>
        <div className='about--image__container'>
            <img src={profilePic} alt="SALOMON PIC" className='about--section__profile'/>
        </div>
      </section>
  )
}

export default About
