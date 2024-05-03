// import { motion } from 'framer';
import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUp } from "react-icons/fa6";

const Landingpage = () => {

    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.2" className='w-full min-h-fit py-1 bg-[#F1F1F1]'>
            <div className='text w-fit mt-40 px-8 max-md:px-3'>
                {['we create', 'eye opening', 'presentations'].map((item, index) => (
                    <div key={index} className='masker'>
                        <div className='w-fit  flex items-end overflow-hidden'>
                            {index === 1 && (<motion.div initial={{ width: 0 }} animate={{ width: "9vw" }} transition={{ ease: [0.76, 0, 0.24, 1],duration:1 }} className='w-[9vw] rounded-md ml-[1vw] h-[6.3vw] bg-slate-950 bg-[url("https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg")] bg-cover bg-center'></motion.div>)}
                            <h1 className='uppercase font-[Founders Grotesk] text-[9vw] tracking-tighter leading-[7.5vw]'>{item}</h1>
                        </div>
                    </div>
                ))}
            </div>
            <div className='border-t-[1px] font-["Neue Montreal"] border-[#dadada] mt-16 flex items-center justify-between px-8 py-4 max-md:px-3'>
                {['For public and private companies', 'From the first pitch to IPO'].map((item, index) => (
                    <p key={index} className={`text-md  font-normal tracking-tight leading-none max-md:text-xs ${index === 1 && 'max-md:hidden'}`}>{item}</p>
                ))}
                <div className='start flex items-center gap-4'>
                    <div className='start1 px-4 py-2 border-[2px] border-[#504f4f] rounded-full font-normal text-sm text-center cursor-pointer max-md:text-xs max-md:py-1 max-md:px-2 '>
                        START THE PROJET
                    </div>
                    <div className='start2 cursor-pointer px-3 py-3 rotate-[45deg] border-[2px] border-[#504f4f] rounded-full max-md:text-xs max-md:py-1 max-md:px-1'>
                        <FaArrowUp size={'1.3rem'} />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Landingpage