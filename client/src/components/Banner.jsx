import React from 'react'
import {motion} from 'framer-motion'
import {fadeIn} from './variants'
import {AiOutlineArrowRight} from 'react-icons/ai'


const Banner = () => {

    return (
    <div className='px-0 py-0'>
        <img src="https://lh3.googleusercontent.com/p/AF1QipOLrqUUenW5lc8Hb46Lupvp_pjZGrEdnY1HPHEy=s1360-w1360-h1020" className='w-full rounded-lg h-[490px]'/>
           <div className='relative bottom-10 px-16 flex' >
          <motion.span className='text-4xl text-purple-800 font-bold w-1/3 relative bottom-72' variants={fadeIn('up', 0.2)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.7}}>A HOME AWAY FROM HOME</motion.span>
          <motion.span className='pr-4 relative right-32 mt-2 text-purple-800 underline cursor-pointer bottom-56' variants={fadeIn('up', 0.2)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.7}}>Explore</motion.span>  <motion.span className='text-purple-600 mt-4 relative bottom-56 right-32' variants={fadeIn('up', 0.2)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.7}}><AiOutlineArrowRight /></motion.span>
          </div>
    </div>
  )
}

export default Banner

