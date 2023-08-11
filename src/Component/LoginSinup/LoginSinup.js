import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import LeftRight from './LeftRight'


export default function LoginSinup() {
  return (
    <div className='flex flex-col justify-between h-screen '>
      <div className='mb-auto'>
        <Navbar />
      </div>
      <div className='flex justify-center mb-auto'>
        <LeftRight />
      </div>
      <Footer />
    </div >
  )
}
