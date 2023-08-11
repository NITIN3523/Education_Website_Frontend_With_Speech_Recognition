import React, { useState } from 'react'

export default function Card(probs) {
    const [n, setn] = useState(false)
    return (
        <div className="innercard flex justify-center">
            <div>
                <div className="question flex gap-4 bg-[#271260] w-[24rem] md:w-[46rem] sm:w-[40rem] lg:w-[38rem]">
                    <div className="icon border-r-8 border-sky-400 hover:bg-[#431fa4]">
                        <button className='text-2xl font-bold p-2' onClick={() => setn(!n)}
                        id={probs.id}>
                            {n ? "➖" : "➕ "}
                        </button>
                    </div>
                    <div className="ques text-xl font-medium py-2 pr-10">
                        {probs.question}
                    </div>
                </div>
                {
                    n && <div className="ans bg-slate-700 text-xl font-medium w-[24rem] md:w-[46rem] sm:w-[40rem] lg:w-[38rem] break-words px-10">
                        {probs.answer}
                    </div>
                }
            </div>
        </div>
    )
}
