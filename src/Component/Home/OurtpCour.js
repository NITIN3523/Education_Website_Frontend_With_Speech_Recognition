import React from 'react'
import Ortpcour from './API/Ortpcour'
export default function OurtpCour() {
    return (
        <>
            <div className='text-white mt-20 bg-slate-800 h-fit'>
                <div className="leftside" >
                    <div className="leftsidecon p-3">
                        <h1 className='text-4xl font-bold text-center'>Our Top Courses   </h1>
                        <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, magni! Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className="rightside">
                    <div className="rightsidecon flex flex-wrap gap-8 lg:gap-4 justify-around mb-3 lg:p-8 pt-5">
                        {
                            Ortpcour.map((val, index) => {
                                return (
                                    <div className="box  bg-slate-700  overflow-hidden h-fit w-full md:w-96 sm:w-[22rem] lg:w-96" key={index}>
                                        <img src={val.src} className='h-2/3 w-full' />
                                        <div className='p-3'>
                                            <h1 className='text-2xl font-semibold'>{val.title}</h1>
                                            <p>{val.descr}</p>
                                            <button className='mt-1 bg-violet-600 lg:text-xl p-2 lg:font-medium'>Learn More</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
