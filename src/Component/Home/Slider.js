import React, { useEffect, useState } from 'react'
import SliderApi from './API/SliderAPi'

export default function Slider() {
    const [id, setid] = useState(0)
    const [imgpath, setimgpath] = useState(false)
    useEffect(() => {
        const liindex = document.getElementsByTagName("li");
        // console.log("useeffect")
        if (id > 0) {
            setimgpath(true)
        }
        if (id > (SliderApi.length - 1) || id < 0) {
            setid(0)
        }
        else {
            liindex[id].className = "homecircleactive";
        }
        for (let i = 0; i < SliderApi.length; i++) {
            if (i === id) {
                continue;
            }
            else {
                liindex[i].className = "dot"
            }
        }
    }, [id])
    return (
        <>
            <div>
                <img src={imgpath ? SliderApi[id].path : SliderApi[0].path} alt="Slider1" className='relative' style={{ height: "30rem", width: "100vw" }} />
                <div className='content absolute text-white lg:top-[11rem] lg:left-36 lg:w-[33rem] top-[10rem] left-[4rem] w-80 md:top-[12rem] md:left-28 md:w-96'>
                    <h1 className='lg:text-4xl text-3xl lg:font-bold font-semibold break-words'>Grow your skills to advance your career path</h1>
                    <h2 className='lg:text-xl lg:font-normal mt-5 break-words'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, itaque.</h2>
                    <button className='mt-5 bg-violet-600 lg:text-xl p-2 lg:font-medium hover:bg-purple-400'>Get Started</button>
                </div>
                <div
                    className="left absolute top-[16rem] left-[0%]">
                    <i className="fa-solid fa-chevron-left fa-2x  hover:bg-gray-300 p-3 rounded text-white hover:text-slate-900"
                        onClick={() => {
                            if (id === 0) {
                                setimgpath(false)
                            }
                            setid(id - 1)
                        }}                        
                        id="imageleft">
                    </i>
                </div>
                <div
                    className="right absolute top-[16rem] right-[0%]">
                    <i className="fa-solid fa-chevron-right fa-2x hover:bg-gray-300 p-3 rounded text-white hover:text-slate-900"
                        onClick={() => {
                            if (id === (SliderApi.length - 1)) {
                                setimgpath(false)
                            }
                            setid(id + 1)
                        }}
                        id="imageright"
                    ></i></div>
                <div className="flex flex-wrap mt-4 justify-center">
                    <ol className='flex flex-wrap justify-between gap-2'>
                        <li className="dot"><i className="fa-solid fa-circle"></i></li>
                        <li className="dot"><i className="fa-solid fa-circle"></i></li>
                        <li className="dot"><i className="fa-solid fa-circle"></i></li>
                        <li className="dot"><i className="fa-solid fa-circle"></i></li>
                    </ol>
                </div>
            </div>
        </>
    )
}
