import Photo from '../Images/Photo.jpg'
import { HiOutlineHome } from "react-icons/hi2";
import { FiUser } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { FiBookOpen } from "react-icons/fi";


function Contact() {
  return (
    <div className="contact_section">
      <div className="tagline bg-[#422A3C] w-full h-80 justify-items-center text-center ">
        <div className="container m-auto pt-20 w-2/4  ">
          <h5 className="text-[#ECBFD3] text-sm font-semibold ml-3">GET IN TOUCH WITH US</h5>
          <h2 className="text-5xl font-bold text-[#FFFFFF] pt-2 font-playfair">We Are Ready To <br />Assist You.</h2>
          
        </div>        
      </div>

      <div className="gt_details  w-full h-[600px] ">
        <div className="dt_box flex  w-2/3 h-3/4 m-auto mt-16">
          <div className="gt_lbox flex-[0.5]  ">
            <div className="in_box border-2 bg-[#F7E5C1] w-[370px] h-[400px] ml-12">
            
            </div>
            <img src={Photo} alt="" className='w-auto h-[420px] -mt-[375px] ml-4 shadow-2xl '  />
          
          </div>
          <div className="gt_rbox flex-[0.5] p-6">
            <p className='font-semibold text-sm text-[#422A3C] '>GET IN TOUCH !</p>
            <p className='font-bold text-4xl text-[#141414] font-playfair mt-4'>We are here to Help you always...</p>
            <p className='text-sm mt-4'>Ready for a fresh look? Our team at <span className='text-text-[#422A3C] font-playfair font-bold  text-base '> Unique Beauty Salon </span> 
              is here to pamper you! Whether it's a chic haircut,
               a vibrant new color, or a relaxing spa treatment, we've got you covered.</p>
            <div className="gt_adrs flex mt-4">
            <HiOutlineHome className=' border-2 rounded border-[#422A3C] w-12 h-12 p-2 text-[#422A3C]'/>
             <div className="gt_adrs_details ml-4">
              <p className='font-playfair font-bold text-xl text-[#422A3C]'>
              Visit Us:
             </p>
             <p className='text-sm font-semibold'> Unique_Beauty_Salon, Beside HDFC Bank ,<br /> SriRama colony , Banswada , Kamareddy 503187</p>
             </div>
           
            </div>
            <div className="gt_adrs flex mt-4">
            <HiOutlineHome className=' border-2 rounded border-[#422A3C] w-12 h-12 p-2 text-[#422A3C]'/>
             <div className="gt_adrs_details ml-4">
              <p className='font-playfair font-bold text-xl text-[#422A3C]'>
              Email Us:
             </p>
             <p className='text-sm font-semibold'> Uniquebeautysalon90@gmail.com </p>
             </div>
           
            </div>
            <div className="gt_adrs flex mt-4">
            <HiOutlineHome className=' border-2 rounded border-[#422A3C] w-12 h-12 p-2 text-[#422A3C]'/>
             <div className="gt_adrs_details ml-4">
              <p className='font-playfair font-bold text-xl text-[#422A3C]'>
              Visit Us:
             </p>
             <p className='text-sm font-semibold'> Unique_Beauty_Salon, Beside HDFC Bank </p>
             </div>
           
            </div>
            
          </div>
        
        </div>

      </div> 
    {/* contact-details section */}
      <div className="cd_details  bg-[#FBF2E0] w-full h-[670px] ">
        <div className="cd_inner_b w-[60%] m-auto pt-10 h-5/6">
         <p className=' text-center text-[#BA7894]'>Schadule for presence</p>
         <p className="text-[#422A3C] text-center pt-3 font-playfair text-3xl font-bold">Get In Touch</p>
         <p className='text-[#555555] text-center pt-3 mb-5'>Feel Free to ask Query</p>

         <div className="cdInner_bx shadow-lg m-auto rounded-2xl bg-[#ffff] w-3/5 h-auto p-12 space-y-2 ">
           <form action=""></form>
           
           <div className="cdInput border-2 border-[#555555] h-12 max-w-full ">
            <FiUser className='absolute w-6 h-6 ml-2 mt-2' />
            <input type="text " className='w-full h-full pl-10 font-sans' placeholder='Name' required /> 

           </div>
           <div className="cdInput border-2 border-[#555555] h-12 max-w-full">
            <MdOutlineMail className='absolute w-6 h-6 ml-2 mt-3'/>
            <input type="Email " className='w-full h-full pl-10 font-sans' placeholder='Email' required /> 

           </div>
           <div className="cdInput border-2 border-[#555555] h-12 max-w-full">
            <BsTelephone className='absolute w-6 h-6 ml-2 mt-2' />
            <input type="number " className='w-full h-full pl-10 font-sans' placeholder='Phone' required /> 

           </div>
           <div className="cdInput border-2 border-[#555555] h-12 max-w-full">
            <FiBookOpen className='absolute w-6 h-6 ml-2 mt-2' />
            <input type="text" className='w-full h-full pl-10 font-sans' placeholder='Your Query...?' /> 

           </div>
           <div className="cdInput border-2 border-[#555555] h-12 max-w-full">
            <FiBookOpen className='absolute w-6 h-6 ml-2 mt-2' />
            <input type="text" className='w-full h-full pl-10 font-sans' placeholder='Service You Need' /> 

           </div>
           <div className="btn  border-2 border-[#555555] h-12 max-w-full text-center bg-[#422A3C] text-white ">
            <button className='mt-2 font-bold text-lg '>SUBMIT</button>
            
            </div>
          

         </div>

        </div>
      </div>
      
      
    </div>
  )
}

export default Contact