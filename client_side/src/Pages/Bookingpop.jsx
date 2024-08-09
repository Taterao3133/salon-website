// import  useState  from 'react'
import { BsTelephone } from 'react-icons/bs'
import { FiBookOpen, FiUser } from 'react-icons/fi'
import { MdOutlineMail } from 'react-icons/md'
import { AiOutlineCloseCircle } from "react-icons/ai";

function Bookingpop({ isOpen, closePopup }) {
  if (!isOpen) return null;

  return (
    <div className="fixed  inset-0 flex items-center justify-center bg-black bg-opacity-75">
      <div className="cd_inner_b bg-[#FBF2E0] bg-opacity-100 max-sm:pb-5 rounded-[10%] max-sm:w-[80%] xl:w-[50%] xl:mt-20 xl:p-10 xl:h-5/6 relative">
         <AiOutlineCloseCircle className="absolute  max-sm:h-8 max-sm:w-8 xl:h-12 xl:w-12 max-sm:top-3 max-sm:right-3 xl:top-4 xl:right-4 text-red cursor-pointer"  onClick={closePopup} />
    
        <p className='text-center max-sm:text-xs max-sm:pt-4 text-[#BA7894]'>Schedule for presence</p>
        <p className="text-[#422A3C] text-center xl:pt-3 font-playfair max-sm:text-base xl:text-3xl font-bold">Your Booking is On the way</p>
        <p className='text-[#555555] text-center max-sm:text-xs max-sm:mb-2  xl:pt-3 xl:mb-5'>Please Enter the Details here</p>
        <div className="cdInner_bx shadow-lg m-auto rounded-2xl bg-[#ffff] w-4/5 h-auto max-sm:p-5  xl:p-12 space-y-2">
          <div className="cdInput border-2 border-[#555555] max-sm:h-9 xl:h-12 max-w-full ">
            <FiUser className='absolute max-sm:w-5 max-sm:h-5 xl:w-6 xl:h-6 xl:ml-2 max-sm:m-2 xl:mt-2' />
            <input type="text" className='w-full h-full max-sm:text-xs pl-10 font-sans' placeholder='Name' required />
          </div>
          <div className="cdInput border-2 border-[#555555] max-sm:h-9 xl:h-12 max-w-full">
            <MdOutlineMail className='absolute max-sm:w-5 max-sm:h-5 xl:w-6 xl:h-6 xl:ml-2 max-sm:m-2 xl:mt-2' />
            <input type="email" className='w-full h-full  max-sm:text-xs pl-10 font-sans' placeholder='Email'  />
          </div>
          <div className="cdInput border-2 border-[#555555] max-sm:h-9 xl:h-12 max-w-full">
            <BsTelephone className='absolute max-sm:w-5 max-sm:h-5 xl:w-6 xl:h-6 xl:ml-2 max-sm:m-2 xl:mt-2' />
            <input type="number" className='w-full h-full max-sm:text-xs pl-10 font-sans' placeholder='Phone' required />
          </div>
          <div className="cdInput border-2 border-[#555555] max-sm:h-9 xl:h-12 max-w-full">
            <FiBookOpen className='absolute max-sm:w-5 max-sm:h-5 xl:w-6 xl:h-6 xl:ml-2 max-sm:m-2 xl:mt-2' />
            <input type="text" className='w-full h-full max-sm:text-xs pl-10 font-sans' placeholder='Enter your Service Name' required />
          </div>
          <div className="btn border-2 border-[#555555] max-sm:h-8 xl:h-12 max-w-full text-center bg-[#422A3C] text-white ">
            <button className='xl:mt-2 max-sm:mt-1 font-bold max-sm:text-sm xl:text-lg'>SUBMIT</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Bookingpop;
