import React from 'react'

export default function Rightcontent() {
    return (
        <div className="right bg-slate-700 flex flex-col justify-center items-center p-10 h-96">
            <form className='flex flex-col gap-4 w-72'>
                <input id="name" type="text" placeholder='Name' className='bg-slate-900 py-1 px-3 hover:outline hover:outline-3 text-white hover:outline-violet-600' required />

                <input id="email" type="text" placeholder='Email' className='bg-slate-900 py-1 px-3 hover:outline hover:outline-3 text-white hover:outline-violet-600' required />
                
                <input id="phone" type="text" placeholder='Phone' className='bg-slate-900 py-1 px-3 hover:outline hover:outline-3 text-white hover:outline-violet-600' required />

                <textarea id="text" rows="5" name="description" placeholder='Type Message' className='bg-slate-900 py-1 px-3 hover:outline hover:outline-3 text-white hover:outline-violet-600' required />

                <button id="sendmessage" className=' bg-violet-600 lg:text-xl p-2 lg:font-medium hover:bg-purple-400 w-fit text-white'>Send Message</button>
            </form>
        </div>
    )
}
