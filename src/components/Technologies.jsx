import React from 'react'
import technologies from '../data.js/technologies'
import Technologie from './Technologie'

const Technologies = () => {
  return (
    <section className="w-full -z-20 translate-y-[-6rem] bg-no-repeat bg-cover p-20 bg-[url('https://img.freepik.com/photos-gratuite/fond-noir-texture-marbre-marbre-thailande-marbre-naturel-abstrait-noir-blanc-pour-design_1253-917.jpg?w=740&t=st=1688501688~exp=1688502288~hmac=d289c514533596806110f620d3142d6db8acaba24a4b27811ad26accaf45fef9')]">
        <h2 className='text-2xl text-gray-500 font-semibold'>MY SKILLS</h2>
        <h3 className=' text-6xl font-bold text-gray-50'>Technologies</h3>
        <div className='w-full p-5 grid grid-cols-2 sm:grid-col-4 md:grid-cols-6 lg:grid-cols-10'>
          {technologies.map((technology, index) => <Technologie technology={technology} key={index}/>)}
        </div>
    </section>
  )
}

export default Technologies
