import React from 'react'

const Cards = () => {
    return (
        <div className='w-full py-24 flex items-center px-8 gap-5 max-lg:flex-col '>
            <div className='cardcontainer h-[50vh] w-1/2 max-lg:w-full'>
                <div className='card rounded-3xl relative w-full h-full bg-[#004D43] flex items-center justify-center'>
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className='absolute px-3 py-1 rounded-full border-[1px] border-[#CDEA68] left-10 bottom-7 text-[#CDEA68] font-medium'>&copy;2019-2022</button>
                </div>
            </div>
            <div className='cardcontainer flex gap-5 w-1/2 h-[50vh] max-lg:w-full '>
                <div className='rounded-xl w-1/2 h-full bg-[#212121] relative flex items-center justify-center'>
                    <button className='absolute px-3 py-1 rounded-full border-[1px] left-5 bottom-5 text-white font-medium text-[2.2vmin]'>RATING 5.0 ON CLUCTCH</button>
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                </div>
                <div className='rounded-xl w-1/2 h-full bg-[#212121] relative flex items-center justify-center'>
                    <button className='absolute px-3 py-1 rounded-full border-[1px] left-5 bottom-5 text-white font-medium text-[2.2vmin]'>BUSINESS BOOTCAMP ALUMNI</button>
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Cards