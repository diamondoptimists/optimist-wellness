import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
      <div className="bg-blue-900 flex flex-col gap-10 items-center px=[50px] py-[60px] lg:px-[150px] lg:py-[100px]">
      <h1 className="text-white text- 2xl md:text-[40px] text-center w-
      [300px] lg:w-[500px]">Tell us your Symptoms, Let's Diagnose Your Condition</h1>
      
      <p className='text-white text-[20px] text-center w-[350px] lg:w-[670px] leading-10'>
        Share your Symptoms and recieve instant prescription from Ai that will improve your health better, Your Journey to Sound Health start here.
      </p>
      <Link to="/register" className= "text-white border-2 border-white p-3">Get Started</Link>
    </div>
  )
}

export default Hero