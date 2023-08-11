import React from 'react'
import Employee from './API/Employee'
export default function BestTeam() {
    return (
        <div>
            <h1 className='text-white text-4xl font-bold text-center'>Best Team</h1>
            <div className="map my-10 mx-10 flex flex-wrap justify-around gap-6">
                {
                    Employee.map((val, index) => {
                        return (
                            <div className="box w-80 h-[2staticbg-slate-700 outline outline-slate-500 rounded-md bg-slate-700 shadow-md shadow-white scale-90 hover:scale-100 ease-in duration-500" key={index}>
                                <div className='iamageprofile relative overflow-hidden'>
                                    <img src={val.src} alt="Emplyee" className=' h-[20rem] w-full' />
                                    <ol className='profile flex justify-around mt-10 bg-gray-800 h-fit items-center w-80 text-white py-1 px-10 absolute opacity-80'>
                                        <li><i className="fa-brands fa-facebook-square fa-3x hover:text-gray-400 cursor-pointer "></i></li>
                                        <li><i className="fa-brands fa-instagram-square fa-3x ml-3 hover:text-gray-400 cursor-pointer"></i></li>
                                        <li><i className="fa-brands fa-twitter-square fa-3x ml-3 hover:text-gray-400 cursor-pointer"></i></li>
                                        <li><i className="fa-brands fa-linkedin fa-3x ml-3 hover:text-gray-400 cursor-pointer"></i></li>
                                        <li><i className="fa-solid fa-user fa-2x py-[0.33rem] px-[0.34rem] ml-3  text-gray-900 cursor-pointer bg-white rounded hover:bg-gray-400" title='Profile'></i></li>
                                    </ol>
                                </div>
                                <h1 className='text-3xl text-center font-semibold text-slate-300 p-2'>{val.name}</h1>
                            </div>
                        )
                    })

                }
            </div>
        </div>
    )
}
