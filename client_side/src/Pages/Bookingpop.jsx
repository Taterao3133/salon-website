import React, { useState } from 'react'
import { BsTelephone } from 'react-icons/bs'
import { FiBookOpen, FiUser } from 'react-icons/fi'
import { MdOutlineMail } from 'react-icons/md'
import { AiOutlineCloseCircle } from "react-icons/ai";

function Bookingpop({ isOpen, closePopup }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90">
      <div className="cd_inner_b bg-[#FBF2E0] rounded-[30%] w-[60%] m-auto p-10 h-5/6 relative">
         <AiOutlineCloseCircle className="absolute h-12 w-12 top-4 right-4 text-white" onClick={closePopup} />
        <p className='text-center text-[#BA7894]'>Schedule for presence</p>
        <p className="text-[#422A3C] text-center pt-3 font-playfair text-3xl font-bold">Your Booking is On the way</p>
        <p className='text-[#555555] text-center pt-3 mb-5'>Please Enter the Details here</p>
        <div className="cdInner_bx shadow-lg m-auto rounded-2xl bg-[#ffff] w-3/5 h-auto p-12 space-y-2">
          {/* <form action=""></form> */}

          <div className="cdInput border-2 border-[#555555] h-12 max-w-full ">
            <FiUser className='absolute w-6 h-6 ml-2 mt-2' />
            <input type="text" className='w-full h-full pl-10 font-sans' placeholder='Name' required />
          </div>
          <div className="cdInput border-2 border-[#555555] h-12 max-w-full">
            <MdOutlineMail className='absolute w-6 h-6 ml-2 mt-3' />
            <input type="email" className='w-full h-full pl-10 font-sans' placeholder='Email' required />
          </div>
          <div className="cdInput border-2 border-[#555555] h-12 max-w-full">
            <BsTelephone className='absolute w-6 h-6 ml-2 mt-2' />
            <input type="number" className='w-full h-full pl-10 font-sans' placeholder='Phone' required />
          </div>
          <div className="cdInput border-2 border-[#555555] h-12 max-w-full">
            <FiBookOpen className='absolute w-6 h-6 ml-2 mt-2' />
            <input type="text" className='w-full h-full pl-10 font-sans' placeholder='Enter your Service Name' />
          </div>
          <div className="btn border-2 border-[#555555] h-12 max-w-full text-center bg-[#422A3C] text-white ">
            <button className='mt-2 font-bold text-lg'>SUBMIT</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bookingpop;
