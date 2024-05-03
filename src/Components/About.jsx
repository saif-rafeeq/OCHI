import React, { useRef } from 'react'
import { FaArrowUp } from "react-icons/fa6";

const About = () => {
    const first = useRef()
    const second = useRef()
    let enterhandler = (e) => {
        first.current.style.scale = .95
        second.current.style.scale = 1.1
        
    }
    let leavehandler = (e) => {
        first.current.style.scale = 1
        second.current.style.scale = 1
    }
    return (
        <div className='w-full py-20 pb-10 bg-[#CDEA68] font-["Neue Montreal"] rounded-tl-3xl rounded-tr-3xl text-black'>
            <div className='px-8 pr-28'>
                <h1 className='text-[4vw] font-["Neue Montreal"] tracking-tighter text-[#262723] leading-none relative'>Ochi is a strategic partner for fast-growing tech businesses that need to <span className='in '>raise funds</span>, <span className='in '>sell products</span>, <span className='in '>explain complex ideas</span>, and <span className='in '>hire great people</span>.</h1>
            </div>
            <div className='w-full flex border-t-[1px] py-5 pb-20 px-8 border-b-[1px] mt-[5vw] border-[#717170] max-md:flex-col'>
                <div className='w-1/2 text-md text-[#262723] max-md:mb-5 '>
                    <h1>What you can expect</h1>
                </div>
                <div className='w-1/2 text-md text-[#262723] flex max-md:flex-col max-md:w-full '>
                    <div className='w-1/2 text-md text-[#262723]  pr-5 max-md:w-full'>
                        <h1>
                            We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it's live or digital, delivered for one or a hundred people.
                        </h1> <br />
                        <h1>
                            We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
                        </h1>
                    </div>
                    <div className='w-1/2 text-md text-[#262723]  pt-20 max-md:w-full max-md:pt-5'>
                        <h1 className='text-center max-md:text-start'>
                            S: <br /> <br />
                            <p > <span className='im'>Instagram</span></p>
                            <p> <span className='im'>Behance</span></p>
                            <p> <span className='im'>Facebook</span></p>
                            <p> <span className='im'>Linkedin</span></p>
                        </h1>
                    </div>

                </div>
            </div>
            <div className='w-full flex py-5 px-8 pb-0  max-md:flex-col'>
                <div className='w-1/2 text-md text-[#262723] max-md:w-full max-md:text-center  '>
                    <h1 className='text-[3.5vw] font-normal'>Our approach:</h1>
                    <button className='btn w-44 h-12 uppercase text-md font-medium gap-3 flex items-center  bg-black text-[#cccaca] rounded-full max-md:m-auto max-md:my-4' onMouseEnter={enterhandler} onMouseLeave={leavehandler}><p className='ml-5'>read more</p>
                        <div className=' w-10 h-10 flex items-center justify-center'>
                            <div className='smbtn w-2 h-2 rounded-full  bg-white text-black flex items-center justify-center rotate-[45deg]'>
                                <FaArrowUp className='smbtnarrow hidden' size={'1rem'} />
                            </div>
                        </div>
                    </button>
                </div>
                <div ref={first} className='img-div w-1/2 h-[70vh] bg-slate-300 max-md:w-full rounded-3xl overflow-hidden '>
                    <img ref={second} className=' img-div-img w-full h-full object-cover object-center' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="Image" />
                </div>
            </div>

        </div>
    )
}

export default About