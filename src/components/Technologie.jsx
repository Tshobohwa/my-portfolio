import React from 'react'

const Technologie = (props) => {
    const {image, text} = props.Technologie
  return (
    <div className='h-[50px] w-[50px] bg-gradient-to-br'>
      <img src={image} alt={text} />
      <h3 className=''>{text}</h3>
    </div>
  )
}

export default Technologie
