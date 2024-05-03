import { motion, useAnimation } from 'framer-motion';
import React from 'react'
import { GoDotFill } from "react-icons/go";

const Feature = () => {
    const cards = [useAnimation(), useAnimation()]
    const handlehover = (index)=>{
        cards[index].start({y:"0"})
    }
    const handlehoverEnd = (index)=>{
        cards[index].start({y:"100%"})
    }    
    return (
        <div className='w-full bg-[#F1F1F1]'>
            <div className='text-[4vmax] font-["Neue Montreal"] tracking-tight border-b-2 px-8 py-10 border-zinc-300'>Featured projects</div>
            <div className='cards w-full flex gap-10 px-8 py-16 max-lg:flex-col'>
                <motion.div onHoverStart={()=>handlehover(0)} onHoverEnd={()=>handlehoverEnd(0)}  className="cardscontainer  relative w-1/2 h-[80vh] max-lg:w-full">
                    <div className=' flex items-center mb-3 w-fit gap-1'><GoDotFill />FYDE</div>
                    <h1 className='absolute text-[6vmax] text-[#CDEA68] overflow-hidden flex z-[9] left-full tracking-tighter top-1/2 -translate-x-[40%] -translate-y-[35%] max-lg:top-full max-lg:text-[100px] max-lg:left-[50%] max-lg:-translate-y-[15%] max-lg:-translate-x-[50%]'>{"FYDE".split("").map((item, index) => <motion.span initial={{ y: '100%' }} animate={cards[0]} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .06 }} className='inline-block' key={index}>{item}</motion.span>)}
                    </h1>
                    <div className='w-full h-full rounded-xl overflow-hidden' >
                        <img className='w-full h-full object-cover object-center' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                    </div>
                </motion.div>
                <motion.div onHoverStart={()=>handlehover(1)} onHoverEnd={()=>handlehoverEnd(1)} className="cardscontainer relative w-1/2 h-[80vh] max-lg:w-full">
                    <div className=' flex items-center mb-3 w-fit gap-1 max-md:mt-3'><GoDotFill />VISE</div>
                    <h1 className='absolute text-[6vmax]  text-[#CDEA68] z-[9] right-full flex overflow-hidden tracking-tight top-1/2 translate-x-[35%] -translate-y-[35%] max-lg:top-0 max-lg:text-[100px] max-lg:right-[50%] max-lg:-translate-y-[40%] max-lg:translate-x-[50%]'>
                        {"VISE".split("").map((item, index) => <motion.span initial={{ y: '100%' }} animate={cards[1]} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .06 }}  className='inline-block' key={index}>{item}</motion.span>)}
                    </h1>
                    <div className='w-full h-full bg-green-400 rounded-xl overflow-hidden' >
                        <img className='w-full h-full object-cover object-center' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Feature