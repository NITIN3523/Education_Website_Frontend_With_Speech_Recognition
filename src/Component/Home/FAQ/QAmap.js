import React from 'react'
import QA from './QandA'
import Card from './Card'

export default function QAmap() {
    return (
        <div className='main mt-10 text-white h-fit'>
            <div className='my-10'>
                <h1 className='text-4xl text-white font-bold text-center'>Frequently Asked Question</h1>
            </div>
            <div className="innercontent flex flex-wrap justify-around gap-3 pb-10 md:gap-8" >
                {
                    QA.map((value, index) => {
                        return (
                            <Card
                                key={index}
                                question={value.Question}
                                answer={value.Answer}
                                id={value.id}
                            />
                        )
                    })
                }
            </div >
        </div >
    )
}
