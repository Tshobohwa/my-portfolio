import { GoLocation, GoMail } from 'react-icons/go';
import { BsTelephone, BsWhatsapp, BsLinkedin } from 'react-icons/bs';
import { FaAngellist, FaGithub, FaMediumM } from 'react-icons/fa';

const Contacts = () => {
  return (
    <section className="py-5 px-2 bg-neutral-800" id="section-4">
      <h2 className='text-gray-100 font-bold text-5xl'>Contact me</h2>
      <div className='w-full grid grid-col-1 md:grid-cols-2 gap-4'>
        <form className=' flex flex-col gap-3 p-6 rounded-3xl'>
          <input type="text" className='w-full px-3 h-[3rem] border-2 border-gray-500 bg-neutral-600 rounded-lg' placeholder='Your name' />
          <input type="email" className='w-full  px-3 h-[3rem] border-2 border-gray-500 bg-neutral-600 rounded-lg' placeholder='Your email' />
          <textarea name="" id="" cols="30" rows="10" className='w-full border-2 border-gray-500 bg-neutral-600 rounded-lg p-3' placeholder='Your message'></textarea>
          <button className='border-2 border-gray-200 p-3 text-white w-[8rem] m-auto'>Get in touch</button>
        </form>
        <div className='flex flex-col justify-center md:ml-6'>
          <div className='flex flex-col gap-4'>
            <a href="https://www.google.com/maps/@-1.933312,30.0548096,15z?entry=ttu" target='_blank' className='flex gap-4 items-center'>
              <div className='bg-neutral-900 rounded-lg flex justify-center items-center w-[3rem] h-[3rem]'>
                <GoLocation className='text-lg text-gray-200' />
              </div>
              <p className='text-gray-200 underline'>Rwanda - Kigali - KG 790 st</p> 
            </a>
            <a href="mailto:stshobohwa@gmail.com" target='_blank' className='flex gap-3 items-center'>
              <div className='bg-neutral-900 rounded-lg flex justify-center items-center w-[3rem] h-[3rem]'>
                <GoMail className='text-lg text-gray-200' />
              </div>
              <p className='text-gray-200 underline'>stshobohwa@gmail.com</p> 
            </a> 
            <a href="https://wa.me/243973458714" target='_blank' className='flex gap-3 items-center'> 
              <div className='bg-neutral-900 rounded-lg flex justify-center items-center w-[3rem] h-[3rem]'>
                <BsWhatsapp className='text-lg text-gray-200' /> 
              </div>
              <p className='text-gray-200 underline'>+243(0)-973-458-714</p>
            </a>
            <a href="tel:+250791434502" target='_blank' className='flex gap-3 items-center'>
              <div className='bg-neutral-900 rounded-lg flex justify-center items-center w-[3rem] h-[3rem]'>
                <BsTelephone className='text-lg text-gray-200' />
              </div>
              <p className='text-gray-200 underline'>+250(0)-791-434-502 </p></a>
          </div>
          <div className='flex gap-3 m-4'>
            <a href="https://www.linkedin.com/in/tshobohwasalomon/" target='_blank' className='text-white text-4xl p-2' ><BsLinkedin/></a>
            <a href="https://wellfound.com/u/salomon-tshobohwa" target='_blank' className='text-white text-4xl p-2'><FaAngellist/></a>
            <a href="https://github.com/Tshobohwa" target='_blank' className='text-white text-4xl p-2'><FaGithub/></a>
            <a href="https://medium.com/@stshobohwa" target='_blank' className='text-white text-4xl p-2'><FaMediumM/></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts
