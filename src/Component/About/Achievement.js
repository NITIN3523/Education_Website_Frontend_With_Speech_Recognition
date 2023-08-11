import React from 'react'
import Joy from '../../Images/Joy.png'

export default function Achievement() {
    return (
        <div>
            <div className="achivement text-white my-10 flex justify-center">
                <div className="innercontent lg:flex sm:flex flex-wrap justify-between w-fit lg:h-[30rem] h-fit p-2">
                    <img src={Joy} alt="Achievement " className='lg:w-[50%] h-full sm:w-[50%] sm:h-[34rem] lg:h-full' />
                    <div className="left lg:w-[50%] sm:w-[50%] break-words h-full sm:h-[34rem] lg:h-full p-2">
                        <h1 className='text-4xl font-bold'>We Provide Best Learning Experience</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident sunt culpa quaerat placeat officia deserunt a alias rerum expedita, enim praesentium, facilis omnis asperiores laudantium!
                        </p>
                        <div className="box flex flex-wrap justify-around mt-10 gap-3">
                            <div className='h-[10rem] bg-gray-700 w-[9rem] flex flex-col justify-center items-center gap-y-3 outline outline-2 outline-white'>
                                <i className="fa-solid fa-book-open fa-2xl text-violet-600"></i>
                                <h1 className='text-xl mt-1 font-semibold'>300+</h1>
                                <h2 className='text-gray-200'>Courses</h2>
                            </div>
                            <div className='h-[10rem] bg-gray-700 w-[9rem] flex flex-col justify-center items-center gap-y-3 outline outline-2 outline-white'>
                                <i className="fa-solid fa-user-group fa-2xl text-violet-600"></i>
                                <h1 className='text-xl mt-1 font-semibold'>500+</h1>
                                <h2 className='text-gray-200'>Students</h2>
                            </div>
                            <div className='h-[10rem] bg-gray-700 w-[9rem] flex flex-col justify-center items-center gap-y-3 outline outline-2 outline-white'>
                                <i className="fa-solid fa-trophy fa-2xl text-violet-600"></i>
                                <h1 className='text-xl mt-1 font-semibold'>200+</h1>
                                <h2 className='text-gray-200'>Awards</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
