import './Home.css'

import { IoIosSearch } from "react-icons/io";
import { BsCalendar2Date,  } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";



import "@fontsource/manrope";


import exp1 from '../Images/exp-pic3.jpg'
import exp2 from '../Images/exp-pic2.jpg'
import exp3 from '../Images/exp-pic4.jpg'
import Abt_img from '../Images/exp-pic3.jpg'
import Testimonial from '../components/testimonial/Testimonial';
// import { useEffect } from 'react';
import ServicesSlider from '../components/services/servicesslider';
// import { Link } from 'react-router-dom';
import { useState } from 'react';
import Bookingpop from './Bookingpop';

function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return <>
     <div className={`herosection flex flex-nowrap ${isPopupOpen ? 'overflow-hidden' : ''}`}>
        <div className="b_c bg-[#BA7894]   xl:w-[635px]">
            <div className=" bg_gradient  ">
              <div className="herocontent absolute xl:ml-[218px] xl:pt-[207px]">
                  <p className='hero-text max-sm:mt-28 max-sm:ml-6  text-[#FFFFFF]'>HAIR SALON, BEAUTY SALON , WOMENS SALON  </p>
                  <h1 className='hero-texts max-sm:ml-6 text-[#F7E5C1] font-playfair   xl:text-5xl font-semibold mb-6'>Find Your Service &<br/> Book Here</h1>
                  <p className='hero-text3 text-[#FFFFFF] max-sm:hidden'>
                  We aim to become the trendsetters in hair & make-up by offering you the best products and
                   services that will ensure your needs are taken care of at our center. 
                   We offer the latest trends, products and services at our salon</p>
                  
                   <div className="search-box max-sm:ml-auto max-sm:h-auto max-sm:w-5/6 max-sm:rounded-lg bg-[#faf8f8] md:h-[80px] xl:w-[730px] md:rounded-full xl:mt-[52px]">
                    <div className="search-bc max-sm:text-center max-sm:p-1 flex flex-nowrap xl:space-x-[50px]" >
                      <div className="input-1  xl:ml-11">
                        <p className='text-[#BA7894] max-sm:text-sm font-semibold xl:text-lg xl:mt-3 '>Service Name</p>
                        <div className="search-icon text-center flex flex-nowrap">
                          <input type="text" className='border-b-2 max-sm:h-6 max-sm:w-24 max-sm:text-xs  focus:outline-none border-[#786666] bg-[#F8F8F8] ' placeholder='Enter Service' />
                            <IoIosSearch  className='ml-[-18px] mt-1 h-5 w-5 cursor-pointer'/>
                        </div>
                      </div>
                      <div className="input-2  max-sm:ml-3">
                         <p className='text-[#BA7894] max-sm:text-sm font-semibold text-lg xl:mt-3'>Time & Date</p>
                          <div className="search-icon flex flex-nowrap">
                            <input type="text" className='border-b-2 max-sm:h-6 max-sm:w-24 max-sm:text-[12px] max-sm:text-xs focus:outline-none border-[#786666] bg-[#F8F8F8] ' placeholder='Enter date' />
                            <BsCalendar2Date className='ml-[-18px] mt-1 h-4 w-4 cursor-pointer' />
                          </div>
                      </div>
                      <div className="s_btn xl:w-52 xl:h-16 sm:h-auto  bg-[#BA7894] rounded-full max-sm:ml-3 xl:mt-2 flex flex-nowrap cursor-pointer "onClick={openPopup}>
                        <p className='text-white max-sm:w-24 max-sm:text-base  xl:text-2xl font-medium xl:ml-10 max-sm:m-auto xl:mt-4' onClick={openPopup}>Book Now</p>
                        {/* <IoIosSearch className='text-white mt-[18px]  h-7 w-7 ml-2 '/> */}
                        

                      </div>

                    </div>
                   
                         {isPopupOpen && <Bookingpop isOpen={isPopupOpen} closePopup={closePopup} />}
                   </div>
                  
              </div>
            </div>
        </div>
        {/* background -image */}
        <div className="bg-image  "> </div> 
     </div>

     {/* category section  services section---*/}
     <div className="relative  max-sm:h-36 max-sm:max-w-full max-sm:mt-14 xl:h-40 xl:w-[1300px] m-auto xl:mt-10">
      <div className="c_section flex  xl:space-x-12 absolute whitespace-nowrap">
        <ServicesSlider/>
      </div>
     </div>

     {/* exp- section start */}
     <div className="exp_section  ">
      <div className="inner_heading text-center max-sm:pt-6 xl:pt-16">
        <h2 className='i_text text-[#422A3C] font-playfair font-bold max-sm:text-xl xl:text-[45px]'>We are Experienced making you <br />
            Very Beautiful
        </h2>
        <h4 className='xl:text-[20px] max-sm:text-sm text-[#555555]'> We always hear to Happy and Serve You</h4>
      </div>          
      <div className="pics_section overflow-hidden container max-sm:h-auto max-sm:-mt-3 max-sm:p-10  xl:h-[400px] xl:w-[1250px]  xl:ml-36 xl:mt-7 max-sm:columns-2 xl:columns-3">
        <div className="img_boxes max-sm:space-y-4 ">
          <div className="main_img max-sm:space-y-4">
            <img src={exp1} alt="" className='g max-sm:rounded-lg xl:rounded-l-[50px] max-sm:h-32 xl:h-[398px] max-sm:w-40 xl:w-auto' />
          </div>
          <div className="img_boxes  max-sm:space-y-4  columns-1   overflow-hidden">
            <img src={exp3} alt="" className='g max-sm:h-32 max-sm:w-40 xl:h-[190px] w-96 xl:mb-4 max-sm:rounded-lg' />
            <img src={exp2} alt="" className='g max-sm:hidden max-sm:h-32 max-sm:w-52 xl:h-[198px] w-96 max-sm:rounded-lg ' />
            {/* <img src={exp2} alt=""  className='g absolute max-sm:visible md:hidden xl:hidden  max-sm:h-28 max-sm:w-80  xl:h-[198px] w-96 max-sm:rounded-lg  overflow-hidden' /> */}
          </div>
          <div className="img_boxes max-sm:space-y-4  columns-1  overflow-hidden ">
           <img src={exp1} alt="" className='g max-sm:h-32 max-sm:w-40 xl:h-[190px] xl:w-96 xl:mb-4 max-sm:rounded-lg xl:round-tr[50px]' />
            <img src={exp2} alt="" className='g  max-sm:h-32 max-sm:w-40 xl:h-[198px] xl:w-96 max-sm:rounded-lg' />
            
          </div>
        </div>
      </div>
      
     </div>
     {/* services section*/}
     <div className="container1 max-sm:hidden ">
        <div className="txt_heading text-center ">
          <h3 className='s_inner font-playfair text-[#BA7894] max-sm:text-sm max-sm:pt-8 xl:pt-16'>Our Services</h3>
          <h2 className='b_inner font-playfair text-[#422A3C] max-sm:text-xl xl:text-5xl'> Recommended</h2>
          <p className='inner_text max-xm:text-sm md:text-lg xl:text-lg max-sm:pt-2 xl:pt-4'>The CSS and web font files to easily self-host the “Manrope” font. ... JS. body </p>
        </div>


        {/* images cards section================= */}
        <div className="inner_container max-sm:hidden max-sm:p-5 max-sm:overflow-hidden  md:w-10/12 xl:w-10/12 max-sm:columns-2 md:columns-3 xl:columns-4 gap-6  md:ml-28 xl:ml-28 md:mt-12 xl:mt-12 ">

          <div className="max-w-[290px]  max-sm:h-80 overflow-hidden border-2 rounded-2xl shadow-sm border-[#e1d9d9]">
            <img src={exp1} className="w-full  xl:h-48 md:h-48"  alt="Sunset in the mountains"/>
            <div className="px-6 py-4">
              <div className="rating_review flex justify-between ">
                <div className="rating flex flex-w-nowrap gap-2">
                  <FaRegStar className='fa w-6 h-6' />
                  <p>4.5</p>
                </div>
                <p className='font-bold font-playfair text-lg'> <span>105</span> Reviews</p>
              </div>
              <div className="img_dt mt-4">
                <h2 className='h2  font-playfair text-2xl font-bold'>Beauty Salon</h2>
                <div className="address flex flex-nowrap mt-2">
                  <SlLocationPin  className='sl w-4 h-4 mt-1'/>
                  < p className='ml-2 text-base'>kphb hyderabad telangana</p>
                </div>
              </div>
            </div>
            <div className=" bg-[#BA7894] text-white h-11 w-60 text-center pt-2 rounded-lg ml-6 mb-6">
              <p className='bk '>Book Now</p>
            </div>
          </div>
          <div className="max-w-[290px]  overflow-hidden border-2 rounded-2xl shadow-sm border-[#e1d9d9]">
            <img src={exp2} className="w-full h-[190px]"  alt="Sunset in the mountains"/>
            <div className="px-6 py-4">
              <div className="rating_review flex justify-between ">
                <div className="rating flex flex-w-nowrap gap-2">
                  <FaRegStar className='fa w-6 h-6' />
                  <p>4.5</p>
                </div>
                <p className='font-bold font-playfair text-lg'> <span>105</span> Reviews</p>
              </div>
              <div className="img_dt mt-4">
                <h2 className='h2  font-playfair text-2xl font-bold'>Beauty Salon</h2>
                <div className="address flex flex-nowrap mt-2">
                  <SlLocationPin  className='sl w-4 h-4 mt-1'/>
                  < p className='ml-2 text-base'>kphb hyderabad telangana</p>
                </div>
              </div>
            </div>
            <div className=" bg-[#BA7894] text-white h-11 w-60 text-center pt-2 rounded-lg ml-6 mb-6">
              <p className='bk '>Book Now</p>
            </div>
          </div>
          <div className="max-w-[290px]  overflow-hidden border-2 rounded-2xl shadow-sm border-[#e1d9d9]">
            <img src={exp3} className="w-full h-[190px]"  alt="Sunset in the mountains"/>
            <div className="px-6 py-4">
              <div className="rating_review flex justify-between ">
                <div className="rating flex flex-w-nowrap gap-2">
                  <FaRegStar className='fa w-6 h-6' />
                  <p>4.5</p>
                </div>
                <p className='font-bold font-playfair text-lg'> <span>105</span> Reviews</p>
              </div>
              <div className="img_dt mt-4">
                <h2 className='h2  font-playfair text-2xl font-bold'>Beauty Salon</h2>
                <div className="address flex flex-nowrap mt-2">
                  <SlLocationPin  className='sl w-4 h-4 mt-1'/>
                  < p className='ml-2 text-base'>kphb hyderabad telangana</p>
                </div>
              </div>
            </div>
            <div className=" bg-[#BA7894] text-white h-11 w-60 text-center pt-2 rounded-lg ml-6 mb-6">
              <p className='bk '>Book Now</p>
            </div>
          </div>
          <div className="max-w-[290px]  overflow-hidden border-2 rounded-2xl shadow-sm border-[#e1d9d9]">
            <img src={exp3} className="w-full h-[190px]"  alt="Sunset in the mountains"/>
            <div className="px-6 py-4">
              <div className="rating_review flex justify-between ">
                <div className="rating flex flex-w-nowrap gap-2">
                  <FaRegStar className='fa w-6 h-6' />
                  <p>4.5</p>
                </div>
                <p className='font-bold font-playfair text-lg'> <span>105</span> Reviews</p>
              </div>
              <div className="img_dt mt-4">
                <h2 className='h2  font-playfair text-2xl font-bold'>Beauty Salon</h2>
                <div className="address flex flex-nowrap mt-2">
                  <SlLocationPin  className='sl w-4 h-4 mt-1'/>
                  < p className='ml-2 text-base'>kphb hyderabad telangana</p>
                </div>
              </div>
            </div>
            <div className=" bg-[#BA7894] text-white h-11 w-60 text-center pt-2 rounded-lg ml-6 mb-6">
              <p className='bk '>Book Now</p>
            </div>
          </div>

        </div>
      </div>
                {/* about section */}
      <div className="about_us_section max-sm:w-100% max-sm:overflow-hidden xl:w-full md:h-[600px] xl:h-[600px] bg-[#f7ad17] md:mt-10 xl:mt-10 ">
        <div className="ab_box md:h-3/4 xl:h-3/4 md:w-3/4 xl:w-3/4 md:ml-44 xl:ml-48 xl:pt-28 flex" >
      
          <div className="abt_img max-sm:flex-[0.7]  xl:flex-[0.5] bg-[#422A3C]">
            <img src={Abt_img} alt=""  className='xl:w-3/4 h-100% xl:ml-16 xl-mt-14 max-sm:p-5' />
          </div>
          <div className="abt_content max-sm:flex-[0.3] xl:flex-[0.5]  bg-[#422A3C]">
            <p className='font-semibold font-mono text-white text-sm max-sm:mt-8 xl:mt-6'>About Us</p>

            <p className='text-white max-sm:text-base xl:text-3xl font-playfair max-sm:mt-8 xl:mt-4'> It’s the bridge between <br />
            service  companies and consumers.</p>
            <p className='max-sm:hidden xl:text-lg max-sm:text-xs font-mono text-[#FFFFFF] xl:mt-6 max-sm:pt-2 max-sm:pr-2 xl:pr-4'>ServiceMarket.dk is 
              a Copenhagen-based technology company known for our overview platform.
              Our aim is to simplify and improve everyday life for citizens in Denmark. 
              One platform that brings together all services in an easy and controlled environment.</p>
          </div>

        </div>
          <div className="ab-c2 xl:hidden md:hidden p-5">A Copenhagen-based technology company known for our overview platform.
              Our aim is to simplify and improve everyday life for citizens in Denmark. 
              One platform that brings together all services in an easy and controlled environment.</div>
          
      </div>
        {/* User reviews testmonial=============================== */}
      <Testimonial/>
  
      
  
  </>
    
  
}

export default Home