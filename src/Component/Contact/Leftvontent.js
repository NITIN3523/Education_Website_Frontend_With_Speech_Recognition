import React from 'react'

export default function Leftvontent() {
    return (
        <div className="leftcontact text-white h-96 flex flex-col justify-center items-center p-10 text-center w-96 ">
            <h1 className='text-4xl font-semibold'>Contact Us</h1>
            <p className='mt-5 break-words'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non corporis suscipit ducimus autem vel illo consectetur aspernatur eum nam a!</p>
            <div className='mt-5'>
                <div><i className="fa-solid fa-phone mr-3"></i>+91 9874561235</div>
                <div><i className="fa-solid fa-envelope mr-3"></i>nitin@gmail.com</div>
                <div><i className="fa-solid fa-location-dot mr-3"></i>Kashipur Nanital</div>
            </div>
            <div className='flex justify-between mt-10 w-44'>
                <i className="fa-brands fa-facebook-square fa-2xl hover:text-gray-400 cursor-pointer"></i>
                <i className="fa-brands fa-instagram-square fa-2xl hover:text-gray-400 cursor-pointer"></i>
                <i className="fa-brands fa-twitter-square fa-2xl hover:text-gray-400 cursor-pointer"></i>
                <i className="fa-brands fa-linkedin fa-2xl hover:text-gray-400 cursor-pointer"></i>
            </div>
        </div>
    )
}
