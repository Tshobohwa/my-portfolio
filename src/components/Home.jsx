import React from 'react'
import halfProfile from '../assets/half-profile.png'

const Home = () => {
  return (
    <section className="
        bg-gray-200
          grid grid-cols-2
          bg-[url('https://image.freepik.com/photos-gratuite/resume-modele-pierre-naturelle-texture-fond-marbre-blanc-pour-design-art_24076-334.jpg')]
          bg-no-repeat
          bg-cover
          h-[90vh]" id="section-1">
        <div className="flex flex-col justify-center p-40">
            <h2 className="text-[2rem] text-gray-500 font-semibold">Hi</h2>
            <h2 className="text-[3rem] text-black font-bold">I'm SALOMON</h2>
            <p className="w-[40rem] text-gray-700 text-2xl">An enthusiast, passionate, skilled, innovative, and detail-oriented full stack web developer.</p>
        </div>
        <div className="bg-black overflow-hidden flex justify-end" style={{
            clipPath: "polygon(70% 0%, 100% 0%, 100% 100%, 0% 100%)"
        }}>
            <img src={halfProfile} alt="my profile" className="" />
        </div>
    </section>
  )
}

export default Home
