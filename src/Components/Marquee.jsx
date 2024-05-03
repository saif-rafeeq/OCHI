import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {

  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.003" className='w-full rounded-tl-3xl rounded-tr-3xl py-10  bg-[#004D43]'>
        <div className='flex whitespace-nowrap overflow-hidden  border-t-2 border-b-2 border-white'>
            <motion.div inital={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear",duration:10}} className='text-[200px] pr-10 text-white leading-none -tracking-[5px] inline-block uppercase font-semibold font-[Founders Grotesk] max-md:text-[80px] max-md:tracking-[0px]'>we are ochi</motion.div>
            <motion.div inital={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear",duration:10}} className='text-[200px] pr-10 text-white leading-none -tracking-[5px]  inline-block uppercase font-semibold font-[Founders Grotesk] max-md:text-[80px] max-md:tracking-[0px]'>we are ochi</motion.div>
            <motion.div inital={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear",duration:10}} className='md:hidden text-[200px] pr-10 text-white leading-none -tracking-[5px]  inline-block uppercase font-semibold font-[Founders Grotesk] max-md:text-[80px] max-md:tracking-[0px]'>we are ochi</motion.div>
        </div>
    </div>
  )
}

export default Marquee