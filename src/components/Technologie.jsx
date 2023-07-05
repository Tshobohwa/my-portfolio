import React from 'react'

const Technologie = (props) => {
    const {image, text} = props.technology
  return (
    <div className='h-[160px] w-[100px] flex flex-col items-center gap-3'>
        <div className='h-[80px] w-[80px] rounded-full "bg-gradient-to-r from-transparent to-black flex items-center justify-center'>
            <img src={image} alt={text} className=' h-[50px] w-[50px]' />
        </div>
        <h3 className='text-2xl text-white'>{text}</h3>
    </div>
  )
}

export default Technologie
