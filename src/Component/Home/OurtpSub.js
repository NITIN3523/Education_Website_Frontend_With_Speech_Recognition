import React from 'react'
import Ortpsub from './API/Ortpsub'
export default function OurtpSub() {
    return (
        <>
            <div className='text-white mt-10 bg-slate-800 px-8 lg:py-56 lg:h-96 h-fit justify-between lg:flex'>
                <div className="leftside flex items-center lg:w-1/2 justify-center text-center lg:pt-0 pt-5" >
                    <div className="leftsidecon">
                        <h1 className='text-4xl font-bold lg:text-left'>Our Top Subjects</h1>
                        <p className='lg:text-left'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, magni! Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className="rightside flex items-center lg:mt-0 mt-5">
                    <div className="rightsidecon flex flex-wrap gap-2 justify-around p-2 mb-3">
                        {
                            Ortpsub.map((val, index) => {
                                return (
                                    <div className="box lg:w-56 lg:mt-0 mt-3 md:w-56 sm:w-44 bg-slate-700 p-2 rounded-2xl overflow-hidden h-fit" key={index}>
                                        <img src={val.src} className='h-16 w-16' />
                                        <h1 className='text-xl font-medium'>{val.title}</h1>
                                        <p>{val.descr}</p>
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
