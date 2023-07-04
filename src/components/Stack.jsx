import React from 'react'

const Stack = (props) => {
    const {image, text} = props.stack
    
  return (
    <div className='rounded-2xl bg-gray-700 shadow-xl shadow-gray-700 flex flex-col gap-3 items-center justify-evenly h-[260px] w-[260px]'>
        <img src={image} alt="frontend" className='w-[80px] h-[80px]' />
        <p className='text-white text-xl font-semibold flex justify-center items-center w-10 text-center'>{text}</p>
    </div>
  )
}

export default Stack
