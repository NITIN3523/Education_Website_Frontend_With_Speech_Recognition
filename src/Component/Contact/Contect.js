import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import Leftvontent from './Leftvontent'
import Rightcontent from './Rightcontent'

export default function Contect() {
  return (
    <div className='flex flex-col justify-between h-screen '>
      <div className='mb-auto'>
        <Navbar />
      </div>
      <div className='flex justify-center mb-auto'>
        <div className='flex my-20 h-fit w-fit shadow-lg shadow-gray-600 lg:flex-row flex-col md:flex-row'>
          <Leftvontent />
          <Rightcontent />
        </div>
      </div>
      <Footer />
    </div>
  )
}
