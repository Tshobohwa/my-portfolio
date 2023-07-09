import React from 'react'
import stacks from '../data.js/stacks'
import Stack from './Stack'

const About = () => {
  return (
    <section className="bg-gray-100 p-20" id="section-2">
        <h2 className='text-2xl font-semibold text-gray-500'>INTRODUCTION</h2>
        <h3 className='text-4xl font-bold py-5' >Overview</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officia doloremque laborum quisquam modi temporibus ad autem, ab ratione. Temporibus, praesentium in eveniet molestiae voluptatibus ducimus repellat quam porro aliquid beatae repellendus labore quis perferendis minima magni amet omnis dolor aperiam sunt quod nemo eos quidem doloremque! Natus, hic? Reprehenderit, ea magni illum recusandae fugit pariatur enim maxime vel iste ipsum possimus nihil dignissimos nobis consequatur laboriosam voluptatem eligendi numquam ullam accusantium voluptates iure suscipit! Recusandae architecto natus repellat ducimus aliquid fuga et delectus, culpa cupiditate velit modi, molestiae perspiciatis repellendus dolor animi atque consequatur temporibus quibusdam? Exercitationem, iure sint.</p>
        <div className='flex flex-col sm:flex-row gap-5 items-center justify-center py-10'>
          {
            stacks.map((stack, index)=> <Stack stack={stack} key={index} />)
          }
        </div>
    </section>
  )
}

export default About
