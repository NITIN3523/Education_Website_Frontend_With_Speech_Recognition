import React, { useEffect, useState } from 'react'
import Sturev from './API/Studentsre'


export default function Review() {
    const [id, setid] = useState(0)
    const [imgreview, setimgreview] = useState(false)
    useEffect(() => {
        if (id > 0) {
            setimgreview(true)
        }
        if (id > (Sturev.length - 1) || id < 0) {
            setid(0)
        }
    }, [id])
    return (
        <div className='mx-3 my-20'>
            <h1 className='text-center text-white text-4xl font-bold'>Students Review</h1>
            <div className='flex gap-8 justify-around mt-10'>
                <div className='text-white flex items-center'><i className="fa-solid fa-chevron-left fa-4x hover:bg-gray-300 p-3 rounded text-white hover:text-slate-900"
                    onClick={() => {
                        if (id == 0) {
                            setimgreview(false)
                        }
                        setid(id - 1)
                    }}>
                </i></div>

                <div className='w-96'>
                    <p className='text-white break-words outline outline-gray-500 p-5 rounded-md text-center shadow-lg shadow-white'>
                        {imgreview ? Sturev[id].desc : Sturev[0].desc}
                    </p>
                    <div className='flex flex-col items-center mt-3'>
                        <img src={imgreview ? Sturev[id].src : Sturev[0].src} alt="Students" className='h-20 w-20 rounded-full outline outline-slate-600 outline-[0.5rem] mt-5' />
                        <h1 className='text-xl font-medium text-slate-400 mt-2 text-center'>{imgreview ? Sturev[id].name : Sturev[0].name}</h1>
                    </div>
                </div>
                <div className='text-white flex items-center'><i className="fa-solid fa-chevron-right fa-4x hover:bg-gray-300 p-3 rounded text-white hover:text-slate-900"
                    onClick={() => {
                        if (id == (Sturev.length - 1)) {
                            setimgreview(false)
                        }
                        setid(id + 1)
                    }}>
                </i></div>
            </div>
        </div>
    )
}
