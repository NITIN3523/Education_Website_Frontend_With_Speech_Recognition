import React from 'react'
import logo from '../Images/Logo.png'

export default function Footer() {
    return (
        <div className='text-white  bg-gray-800'>
            <div className="inner flex h-fit p-8 justify-around gap-x-5 lg:flex-row flex-col text-center items-center gap-y-8 sm:flex-row">
                <ol className='w-80 flex flex-col items-center'>
                    <li><img src={logo} alt="NitEdu" /></li>
                    <li className='break-words'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa repellat voluptate at ducimus, consequatur aliquam suscipit! Velit, ipsa? Commodi, reprehenderit!</li>
                </ol>
                <ol>
                    <li className='text-xl font-bold'>Quick Links</li>
                    <li className='text-base hover:text-gray-400 cursor-pointer'>Home</li>
                    <li className='text-base hover:text-gray-400 cursor-pointer'>About</li>
                    <li className='text-base hover:text-gray-400 cursor-pointer'>Courses</li>
                    <li className='text-base hover:text-gray-400 cursor-pointer'>Contact</li>
                    <li className='text-base hover:text-gray-400 cursor-pointer'>Login</li>
                </ol>
                <ol>
                    <li className='text-xl font-bold'>Useful Links</li>
                    <li className='text-base hover:text-gray-400 cursor-pointer'>Terms and Condition</li>
                    <li className='text-base hover:text-gray-400 cursor-pointer'>Help Center</li>
                    <li className='text-base hover:text-gray-400 cursor-pointer'>Privacy Policy</li>
                    <li className='text-base hover:text-gray-400 cursor-pointer'>Send Feedback</li>
                </ol>
                <ol>
                    <li className='text-xl font-bold'>Contact Us</li>
                    <li className='text-base hover:text-gray-400 cursor-pointer'>+91 1234567899</li>
                    <li className='text-base hover:text-gray-400 cursor-pointer'>Nitin@gmail.com</li>
                    <li className='flex justify-around mt-10'>
                        <i className="fa-brands fa-facebook-square fa-2xl hover:text-gray-400 cursor-pointer"></i>
                        <i className="fa-brands fa-instagram-square fa-2xl ml-3 hover:text-gray-400 cursor-pointer"></i>
                        <i className="fa-brands fa-twitter-square fa-2xl ml-3 hover:text-gray-400 cursor-pointer"></i>
                        <i className="fa-brands fa-linkedin fa-2xl ml-3 hover:text-gray-400 cursor-pointer"></i>
                    </li>
                </ol>
            </div>
            <hr className='mx-10'/>
            <h1 className='text-gray-300 text-base flex justify-center py-2'>Created By <span className='text-white mx-2'>Mr: Nitin Saini </span> | Copyright <i className="fa-solid fa-copyright flex items-center ml-2"></i></h1>
        </div>
    )
}
