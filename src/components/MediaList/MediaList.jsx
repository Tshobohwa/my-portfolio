import './MediaList.css'
import {FaLinkedinIn, FaAngellist, FaGithub, FaMediumM} from 'react-icons/fa'

const MediaList = () => {
  return (
      <ul className='media--links__list'>
        <li className='media--link__container'>
          <a href="https://www.linkedin.com/in/tshobohwasalomon/" target='_blank' rel="noreferrer noopener">
            <FaLinkedinIn alt="linkedin" className='media--icon' />
          </a>
        </li>
        <li className='media--link__container'>
          <a href="https://wellfound.com/u/salomon-tshobohwa" target='_blank' rel="noreferrer noopener">
            < FaAngellist alt="wellfound" className='media--icon' />
          </a>
        </li>
        <li className='media--link__container'>
          <a href="https://github.com/Tshobohwa" target='_blank' rel="noreferrer noopener">
            <FaGithub alt="github" className='media--icon' />
          </a>
        </li>
        <li className='media--link__container'>
          <a href='https://medium.com/@stshobohwa' target='_blank' rel="noreferrer noopener">
            <FaMediumM alt="blog" className='media--icon' />
          </a>
        </li>
      </ul>
  )
}

export default MediaList
