import React, { useEffect, useState } from 'react'

const Eyes = () => {

    const [rotate, setrotate] = useState(0)
    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mousex = e.clientX
            let mousey = e.clientY

            let deltax = mousex - window.innerWidth / 2
            let deltay = mousey - window.innerHeight / 2

            let angle = Math.atan2(deltay, deltax) * (180 / Math.PI)
            setrotate(angle - 180)
        })
    })



    return (
        <div className='w-full overflow-hidden h-screen max-lg:h-[80vh] max-md:h-[60vh]'>
            <div data-scroll data-scroll-section data-scroll-speed="-.7" className='w-full relative h-full  bg-slate-500 bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
                <div className='absolute flex items-center gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                    <div className='w-[15vmax] h-[15vmax] rounded-full bg-white flex items-center justify-center'>
                        <div className='w-2/3 h-2/3 bg-black rounded-full overflow-hidden relative'>
                        <div className='absolute text-white top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>PLAY</div>
                            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className="line w-full h-8 p-1 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                                <div className='w-7 h-7 rounded-full bg-white max-md:w-5 max-md:h-5'></div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[15vmax] h-[15vmax] rounded-full bg-white flex items-center justify-center'>
                        <div className='w-2/3 h-2/3 bg-black rounded-full overflow-hidden relative'>
                            <div className='absolute text-white top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>PLAY</div>
                            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className="line w-full h-8 p-1 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                                <div className='w-7 h-7 rounded-full bg-white max-md:w-5 max-md:h-5'></div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Eyes