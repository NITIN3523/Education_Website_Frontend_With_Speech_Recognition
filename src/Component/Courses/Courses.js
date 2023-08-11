import React from 'react'
import { useState } from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import course from './APi'

export default function Courses() {
  const [searchval, setsearchval] = useState("");
  return (
    <div>
      <Navbar />
      <div className='my-10'>
        <div className='my-10 flex flex-wrap justify-center gap-3'>
          <input type="search " id="search" className='text-xl p-1 rounded-md ' placeholder='Search Course' 
          onChange={(e)=> setsearchval(e.target.value)}/>
        </div>
        <div className="card flex flex-wrap justify-center gap-8 lg:gap-3">
          {
            course.filter((val)=>{
              if(searchval == ""){
                return val;
              }
              else if(val.title.toLowerCase().includes(searchval.toLowerCase())){
                return val;
              }
            }).map((val, index) => {
              return (
                <div key={index} className='w-80 h-fit bg-slate-800 outline-[0.1rem] outline outline-gray-300 shadow-md shadow-white scale-95 hover:scale-100 ease-in duration-500'>
                  <img src={val.src} className='w-full h-[15rem]' />
                  <div>
                    <div className='text-white flex flex-col items-center mt-3 p-2'>
                      <h1 className='text-center text-3xl font font-semibold break-words'>{val.title}</h1>
                      <h2 className='text-center text-gray-200 mt-2 break-words'>{val.desc}
                      </h2>
                      <button className='bg-violet-600 text-xl p-2 font-medium my-2 hover:bg-violet-400'>Learn More</button>
                    </div>
                    <hr className='mx-3' />
                    <div className='flex justify-between px-3 py-2'>
                      <h1 className='text-gray-300'>{val.module} Modules</h1>
                      <h1 className='text-gray-300'>{val.hour} Hours</h1>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}
