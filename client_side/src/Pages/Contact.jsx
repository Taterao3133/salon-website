import Photo from '../Images/Photo.jpg'
import { HiOutlineHome } from "react-icons/hi2";
import { FiUser } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { FiBookOpen } from "react-icons/fi";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { VscCallOutgoing } from "react-icons/vsc";
import Testimonial from '../components/testimonial/Testimonial';


function Contact() {
  return (
    <div className="contact_section">
      <div className="tagline bg-[#422A3C] w-full xl:h-80 max-sm:h-52 justify-items-center text-center ">
        <div className="container m-auto xl:pt-32  max-sm:pt-24 xl:w-2/4  ">
          <h5 className="text-[#ECBFD3] max-sm:text-xs xl:text-sm font-montserrat font-semibold ml-3">GET IN TOUCH WITH US</h5>
          <h2 className="max-sm:text-2xl xl:text-5xl font-bold text-[#FFFFFF] pt-2 font-playfair">We Are Ready To <br />Assist You.</h2>
          
        </div>        
      </div>

      <div className="gt_details  w-full max-sm:h-auto xl:h-[600px] max-sm:mb-5 ">
        <div className="dt_box flex max-sm:w-90% xl:w-2/3 h-3/4 max-sm:ml-5 xl:m-auto max-sm:mt-9 xl:mt-16">
          <div className="gt_lbox flex-[0.4] max-sm:mt-9 max-sm:pl-3 ">
            <div className="in_box border-2 bg-[#F7E5C1] max-sm:w-32 max-sm:h-32 xl:w-[370px] xl:h-[400px] xl:ml-12">
            </div>
            <img src={Photo} alt="" className='xl:w-auto max-sm:w-32 max-sm:h-32  max-sm:-mt-28 max-sm:-ml-4 xl:h-[420px] xl:-mt-[375px] xl:ml-4 shadow-2xl '  />
          
          </div>
          <div className="gt_rbox flex-[0.6] max-sm:ml-2 max-sm:pt-4  w-full xl:p-6">
            <p className='font-semibold max-sm:text-xs max-md:text-sm xl:text-sm text-[#422A3C] '>GET IN TOUCH !</p>
            <p className='font-bold max-sm:text-lg xl:text-4xl text-[#141414] font-playfair max-md:mt-2 xl:mt-4'>We are here to Help you always...</p>
            <p className='max-sm:text-xs font-raleway xl:text-sm max-sm:mt-1 max-sm:pr-2 xl:mt-4'>Ready for a fresh look? Our team at <span className='text-[#422A3C] font-playfair font-bold max-sm:sm xl:text-base '> Unique Beauty Salon </span> 
              is here to pamper you! Whether it's a chic haircut,
               a vibrant new color, or a relaxing spa treatment, we've got you covered.</p>

            <div className="max-sm:hidden  gt_adrs flex mt-4">
              <HiOutlineHome className=' border-2 rounded border-[#422A3C]  w-12 h-12 p-2 text-[#422A3C]'/>
              <div className="gt_adrs_details ml-4">
                <p className='font-playfair font-bold text-xl text-[#422A3C]'>
                Visit Us:
              </p>
              <p className='text-xs font-raleway font-semibold'> Unique_Beauty_Salon, Beside HDFC Bank ,<br /> SriRama colony , Banswada , Kamareddy 503187</p>
              </div>
           
            </div>
            <div className="max-sm:hidden flex mt-4">
            <MdOutlineMarkEmailRead className=' border-2 rounded border-[#422A3C] w-12 h-12 p-2 text-[#422A3C]'/>
             <div className="gt_adrs_details ml-4">
              <p className='font-playfair font-bold text-xl text-[#422A3C]'>
              Email Us:
             </p>
             <p className='text-sm font-raleway font-semibold'> Uniquebeautysalon90@gmail.com </p>
             </div>
           
            </div>
            <div className=" max-sm:hidden gt_adrs flex mt-4">
            <VscCallOutgoing className=' border-2 rounded border-[#422A3C] w-12 h-12 p-2 text-[#422A3C]'/>
             <div className="gt_adrs_details ml-4">
              <p className='font-playfair font-bold text-xl text-[#422A3C]'>
              Call Us:
             </p>
             <p className='text-sm font-lato font-semibold'> 8788179986 </p>
             </div>
           
            </div>
            
          </div>
        
        </div>  
        {/* small device */}
            <div className="xl:hidden md:hidden gt_adrs flex ml-20   mt-7">
              <HiOutlineHome className=' border-2 rounded border-[#422A3C]  w-8 h-8 p-1 text-[#422A3C]'/>
              <div className="gt_adrs_details ml-4">
                <p className='font-playfair font-bold text-base text-[#422A3C]'>
                Visit Us:
              </p>
              <p className='text-xs mr-4 font-raleway '> Unique_Beauty_Salon, Beside HDFC Bank ,<br /> SriRama colony , Banswada , Kamareddy 503187</p>
              </div>
           
            </div>
            <div className=" xl:hidden md:hidden flex ml-20 mt-2">
            <MdOutlineMarkEmailRead className=' border-2 rounded border-[#422A3C] w-8 h-8 p-1 text-[#422A3C]'/>
             <div className="gt_adrs_details ml-4">
              <p className='font-playfair font-bold text-base text-[#422A3C]'>
              Email Us:
             </p>
             <p className='text-xs font-raleway'> Uniquebeautysalon90@gmail.com </p>
             </div>
           
            </div>
           
            <div className="xl:hidden md:hidden ml-20 flex mt-2">
            <VscCallOutgoing className=' border-2 rounded border-[#422A3C] w-8 h-8 p-1 text-[#422A3C]'/>
             <div className="gt_adrs_details ml-4">
              <p className='font-playfair font-bold text-base text-[#422A3C]'>
              Call Us:
             </p>
             <p className='text-xs font-lato font-semibold'> 8788179986 </p>
             </div>
           
            </div>

      </div> 
    {/* contact-details section */}
      <div className="cd_details  bg-[#FBF2E0] w-full max-sm:pb-3 xl:h-[670px] ">
        <div className="cd_inner_b w-60% m-auto max-sm:pt-5 xl:pt-10 max-sm:h-auto xl:h-4/5">
         <p className=' text-center max-sm:text-xs text-[#BA7894]'>Schadule for Presence</p>
         <p className="text-[#422A3C] text-center max-sm:pt-2 xl:pt-3 font-playfair max-sm:text-lg xl:text-3xl font-bold">Get In Touch</p>
         <p className='text-[#555555] font-raleway text-center xl:pt-3 max-sm:pt-1 max-sm:mb-3 max-sm:text-xs xl:mb-5'>Feel Free to ask Query</p>

         <div className="cdInner_bx shadow-lg m-auto rounded-2xl bg-[#ffff] max-sm:w-5/6 xl:w-2/5 h-auto max-sm:p-6 xl:p-20 max-sm:space-y-1 xl:space-y-2 ">
           {/* <form action=""></form> */}
           
           <div className="cdInput border-2 border-[#555555] max-sm:h-9 xl:h-12 max-w-full ">
            <FiUser className='absolute max-sm:w-4 max-sm:h-4 xl:w-6 xl:h-6 max-sm:mt-2 ml-2 xl:mt-3' />
            <input type="text " className='w-full h-full max-sm:pl-7 max-sm:text-xs xl:pl-10 font-sans' placeholder='Name' required /> 

           </div>
           <div className="cdInput border-2 border-[#555555]  max-sm:h-9 xl:h-12 max-w-full">
            <MdOutlineMail className='absolute max-sm:w-4 max-sm:h-4 xl:w-6 xl:h-6 max-sm:mt-2 ml-2 xl:mt-3'/>
            <input type="Email " className='w-full h-full max-sm:pl-7 max-sm:text-xs xl:pl-10 font-sans' placeholder='Email' required /> 

           </div>
           <div className="cdInput border-2 border-[#555555] max-sm:h-9 xl:h-12 max-w-full">
            <BsTelephone className='absolute max-sm:w-4 max-sm:h-4 xl:w-6 xl:h-6 max-sm:mt-2 ml-2 xl:mt-3' />
            <input type="number " className='w-full h-full max-sm:pl-7 max-sm:text-xs xl:pl-10 font-sans' placeholder='Phone' required /> 

           </div>
           <div className="cdInput border-2 border-[#555555]  max-sm:h-9 xl:h-12 xl:w-full">
            <FiBookOpen className='absolute max-sm:w-4 max-sm:h-4 xl:w-6 xl:h-6 max-sm:mt-2 ml-2 xl:mt-3' />
            <input type="text" className='w-full h-full max-sm:pl-7 max-sm:text-xs xl:pl-10 font-sans' placeholder='Your Query...?' /> 

           </div>
           <div className="cdInput border-2 border-[#555555] max-sm:h-9 xl:h-12 max-w-full">
            <FiBookOpen className='absolute max-sm:w-4 max-sm:h-4 xl:w-6 xl:h-6 max-sm:mt-2 ml-2 xl:mt-3' />
            <input type="text" className='w-full h-full max-sm:pl-7 max-sm:text-xs xl:pl-10 font-sans' placeholder='Service You Need' /> 

           </div>
           <div className="btn  border-2 border-[#555555] max-sm:h-9 xl:h-12 max-sm:w-4/5 max-sm:m-auto xl:w-full text-center bg-[#422A3C] text-white ">
            <button className='mt-2 font-bold max-sm:text-sm xl:text-lg '>SUBMIT</button>
            
            </div>
          

         </div>

        </div>
      </div>
         {/* User reviews testmonial=============================== */}
         <Testimonial/>
      
      
    </div>
  )
}

export default Contact