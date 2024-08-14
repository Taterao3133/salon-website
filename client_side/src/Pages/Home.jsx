import './Home.css'

import { IoIosSearch } from "react-icons/io";
import { BsCalendar2Date,  } from "react-icons/bs";
// import { FaRegStar } from "react-icons/fa";
// import { SlLocationPin } from "react-icons/sl";
import Haircut from '../Images/hair-cutting.png'
import home1 from '../Images/home-1.jpg'
import home2 from '../Images/home-2.jpg'
import home3 from '../Images/home-3.jpg'
import home4 from '../Images/home-4.jpg'
import Makaup from '../Images/clean.png'
import Pedicure from '../Images/hands.png'
import Waxing from '../Images/waxing.png'
import Skincare from '../Images/skincare.png'



import "@fontsource/manrope";

import Testimonial from '../components/testimonial/Testimonial';
// import { useEffect } from 'react';
import ServicesSlider from '../components/services/servicesslider';
// import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Bookingpop from './Bookingpop';
import { RiDoubleQuotesR } from 'react-icons/ri';

function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);
    const [offsetY, setOffsetY] = useState(0);
  
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return <>
  <div className="home-section  overflow-hidden">
     <div className={`herosection  flex flex-nowrap ${isPopupOpen ? 'overflow-hidden' : ''}`}>
        <div className="b_c bg-[#BA7894]   xl:w-[635px]">
            <div className=" bg_gradient  ">
              <div className="herocontent absolute xl:ml-[218px] xl:pt-[207px]">
                  <p className='hero-text max-sm:mt-28 max-sm:ml-6 font-lato  text-[#FFFFFF]'>HAIR SALON, BEAUTY SALON , WOMENS SALON  </p>
                  <h1 className='hero-texts max-sm:ml-6 text-[#F7E5C1] font-playfair   xl:text-5xl font-semibold mb-6'>Find Your Service &<br/> Book Here</h1>
                  <p className='hero-text3 font-raleway text-[#FFFFFF] max-sm:hidden'>
                  We aim to become the trendsetters in hair & make-up by offering you the best products and
                   services that will ensure your needs are taken care of at our center. 
                   We offer the latest trends, products and services at our salon</p>
                  
                   <div className="search-box max-sm:m-auto max-sm:h-auto max-sm:w-5/6 max-sm:rounded-lg bg-[#faf8f8] md:h-[80px] xl:w-[730px] md:rounded-full xl:mt-[52px]">
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
     <div className="relative  max-sm:pr-2 max-sm:h-36 max-sm:max-w-full max-sm:mt-14 xl:h-40 xl:w-[1300px] m-auto xl:mt-10">
      <div className="c_section flex  absolute whitespace-nowrap">
        <ServicesSlider/>
      </div>
     </div>

     {/* exp- section start */}
     <div className="d bg-gray-100 xl:pb-16 max-sm:pt-5 max-sm:pb-6 md:pt-10 xl:pt-10 h-auto xl:flex">
        <div className="l-c flex-[50%] xl:ml-32 max-sm:p-5 xl:p-14">
            <div className="-z-1 relative circle-b prev-element transition-transform duration-500 transform rounded-full  -ml-7 w-28 h-28 bg-[#cef1ea]"
              style={{ transform: `translateY(${offsetY * -0.09}px)` }}>

              </div>
            
            <div className="img-f ">
            <img src={home1} alt=""  className='max-sm:w-[80%] max-sm:h-auto absolute -mt-28 w-auto drop-shadow-2xl ' />
            </div>
            <div className="circle-b  rounded-full xl:ml-72 max-sm:ml-64 max-sm:mt-44 xl:mt-56  w-28 h-28 bg-[#cef1ea]"
            style={{ transform: `translateY(${offsetY * 0.09}px)` }}></div>
        </div>
        <div className="r-c xl:flex-[50%] max-sm:mt-8 xl:-ml-24 xl:mt-12  xl:p-8 ">
            <div className="h max-sm:text-3xl md:text-4xl xl:text-6xl font-playfair max-sm:ml-9 max-sm:mt-9   xl:mt-5 font-semibold  "><p>Why Our
            Clients <br /></p>
            <hr className='max-sm:hidden border-[2px] w-20 mt-12 border-[#cef1ea]  '/> 
            <p className='xl:ml-24 xl:-mt-8'>Choose Us</p></div>
            <p className='font-raleway text-gray-800 max-sm:pr-5 max-sm:pl-9  max-sm:mt-3 font-semibold tracking-wide max-sm:text-sm xl:pt-10 text-left  xl:pr-32'>" We are the leading beauty salon in LA providing high-quality hairdressing,
               makeup, and skin care services to everyone."</p>
            <p className='font-lato xl:text-base max-sm:text-sm max-sm:pl-9 text-gray-500 max-sm:mt-2 max-md:pr-5 xl:mt-6 xl:pr-36'>Our clients appreciate and value our level of customer service, the skills of our stylists 
              and estheticians as well as our professional approach to everything we do.</p>
            <button className='bg-[#cef1ea] xl:mt-6 max-sm:mt-3 max-sm:ml-9 max-sm:text-sm  max-sm:hover:text-xl xl:text-base font-medium hover:text-lg border-[#cef1ea] font-lato p-3 rounded-full'>LEARN MORE</button>

        </div>
      </div>
      {/* salon details */}
      <div className="s-details bg-[#ffffff] max-sm:mt-5 max-sm:pt-10 xl:pt-5 pb-5 h-auto w-full">
        <div className="in-details  w-[80%]  m-auto xl:flex h-auto">
          <div className="r-c flex-[0.5] xl:p-10 ">
          <hr className='max-sm:hidden border-[2px] w-20 mt-14  :border-[#cef1ea]  '/>
            <h2 className='max-sm:text-3xl xl:text-5xl font-playfair font-semibold tracking-wider xl:ml-24 xl:-mt-7 '>Our Beauty Salon</h2>
            <p className='font-raleway max-sm:mt-3  xl:mt-5 max-sm:text-base xl:text-lg pr-5 font-medium'><span className=' font-bold'>Unique Beauty Salon</span> offers beauty services of an 
            utmost level to all LA residents and guests who are looking for high-quality beauty care.</p>
            <p className='font-lato max-sm:text-sm xl:text-base max-sm:mt-3 xl:mt-5 text-gray-500'>Our Beauty Salon is based on the belief that our customers' needs are of the utmost importance. Our entire team is committed to
               meeting those needs. As a result, a high percentage of our business is from regular customers.</p>
            <img src={home2} alt=""  className= ' max-sm:mt-5 xl:mt-10'/>
            <RiDoubleQuotesR className="text-right text-[#d5d5d5]  mt-5 max-sm:w-16 max-sm:h-16 xl:h-24 xl:w-24"/>
            <p className='xl:text-3xl max-sm:text-xl font-playfair font-bold  xl:ml-14 max-sm:-mt-12 xl:-mt-16 xl:pr-7 text-right'>We are responsible for the quality of the services you receive!</p>


          </div>
          <div className="l-c flex-[0.5] max-sm:hidden p-10 ">
            <img src={home3} alt="" />
            <p className='font-lato text-base mt-5 text-gray-500'>All our salons in LA are uniquely designed to offer our clients the best beauty, hairstyling, and skin care experience, which we hope you and 
              your body will appreciate. Let yourself relax and be pampered at the best salon in California!</p>
            <img src={home4} alt="" className='mt-5' />
          </div>

        </div>

      </div>

     {/* services section*/}
     
     <div className="our-services pb-20  h-auto w-full bg-[#f6f9f9]">
        <h2 className='text-center max-sm:text-3xl xl:text-5xl font-playfair font-bold tracking-wide leading-8 max-sm:pt-8 xl:pt-20'>Our Services</h2>
        <hr className='border-[2px] mx-auto max-sm:w-10  xl:w-20 max-sm:mt-2 xl:mt-6 border-[#cef1ea] ' />
        <p className='text-center font-montserrat max-sm:text-base max-sm:p-7 max-sm:text-[#9b9b9b] xl:mt-6'>At our salon, we offer top-tier beauty and wellness services <br />
        tailored to enhance your natural elegance and rejuvenate your spirit.</p>

        <div className="container w-[75%]  h-auto  m-auto xl:mt-7 max-sm:row xl:columns-3 ">
          <div className="bx1  xl:pt-10  hover:bg-[#ffffff] border-[1px]  hover:drop-shadow-xl hover:transition hover:duration-300 hover:scale-105">
            <div className="inbx max-sm:m-auto max-sm:mt-6 xl:ml-36 h-20 w-20 rounded-full bg-[#ccf1ea] ">
              <img src={Haircut} alt=""  className='absolute w-20 h-auto '/>
            </div>
            <h2 className='font-playfair text-center font-bold max-sm:text-xl xl:text-2xl max-sm:mt-5 xl:mt-10 hover:text-[#ccf1ea]'>HairCut & Styling</h2>
            <p className=' p-8 max-sm:text-sm xl:text-base -mt-5 text-center font-raleway'>Improve your look with our professional haircut & hairstyling services.</p>
          </div>
          <div className="bx1  xl:pt-10  hover:bg-[#ffffff] border-[1px]  hover:drop-shadow-xl hover:transition hover:duration-300 hover:scale-105">
            <div className="inbx max-sm:m-auto max-sm:mt-6 xl:ml-36 h-20 w-20 rounded-full bg-[#ccf1ea] ">
              <img src={Makaup} alt=""  className='absolute w-20 h-auto '/>
            </div>
            <h2 className='font-playfair text-center font-bold max-sm:text-xl xl:text-2xl max-sm:mt-5 xl:mt-10 hover:text-[#ccf1ea]'>Makeup</h2>
            <p className=' p-8 max-sm:text-sm xl:text-base -mt-5 text-center font-raleway'>"Our makeup experts will have you looking your best in less than 30 minutes."</p>
          </div>
          <div className="bx1  xl:pt-10  hover:bg-[#ffffff] border-[1px]  hover:drop-shadow-xl hover:transition hover:duration-300 hover:scale-105">
            <div className="inbx max-sm:m-auto max-sm:mt-6 xl:ml-36 h-20 w-20 rounded-full bg-[#ccf1ea] ">
              <img src={Pedicure} alt=""  className='absolute w-20 h-auto '/>
            </div>
            <h2 className='font-playfair text-center font-bold max-sm:text-xl xl:text-2xl max-sm:mt-5 xl:mt-10 hover:text-[#ccf1ea]'>Manicure & Pedicure</h2>
            <p className=' p-8 max-sm:text-sm xl:text-base -mt-5 text-center font-raleway'>"Pamper yourself with our manicure & pedicure services ."</p>
          </div>
          <div className="bx1  xl:pt-10  hover:bg-[#ffffff] border-[1px]  hover:drop-shadow-xl hover:transition hover:duration-300 hover:scale-105">
            <div className="inbx max-sm:m-auto max-sm:mt-6 xl:ml-36 h-20 w-20 rounded-full bg-[#ccf1ea] ">
              <img src={Skincare} alt=""  className='absolute w-20 h-auto '/>
            </div>
            <h2 className='font-playfair text-center font-bold max-sm:text-xl xl:text-2xl max-sm:mt-5 xl:mt-10 hover:text-[#ccf1ea]'>Skin Care</h2>
            <p className=' p-8 max-sm:text-sm xl:text-base -mt-5 text-center font-raleway'>"We offer a full range of relaxing skin care services, including all types of facials."</p>
          </div>
          <div className="bx1  xl:pt-10  hover:bg-[#ffffff] border-[1px]  hover:drop-shadow-xl hover:transition hover:duration-300 hover:scale-105">
            <div className="inbx max-sm:m-auto max-sm:mt-6 xl:ml-36 h-20 w-20 rounded-full bg-[#ccf1ea] ">
              <img src={Waxing} alt=""  className='absolute w-20 h-auto '/>
            </div>
            <h2 className='font-playfair text-center font-bold max-sm:text-xl xl:text-2xl max-sm:mt-5 xl:mt-10 hover:text-[#ccf1ea]'>Waxination</h2>
            <p className=' p-8 max-sm:text-sm xl:text-base -mt-5 text-center font-raleway'>Improve your look with our professional haircut & hairstyling services.</p>
          </div>
          <div className="bx1  xl:pt-10  hover:bg-[#ffffff] border-[1px]  hover:drop-shadow-xl hover:transition hover:duration-300 hover:scale-105">
            <div className="inbx max-sm:m-auto max-sm:mt-6 xl:ml-36 h-20 w-20 rounded-full bg-[#ccf1ea] ">
              <img src={Makaup} alt=""  className='absolute w-20 h-auto '/>
            </div>
            <h2 className='font-playfair text-center font-bold max-sm:text-xl xl:text-2xl max-sm:mt-5 xl:mt-10 hover:text-[#ccf1ea]'>Brider Services</h2>
            <p className=' p-8 max-sm:text-sm xl:text-base -mt-5 text-center font-raleway'>"Experience luxurious bridal services tailored to make your special day unforgettable."</p>
          </div>

          
        </div>

      </div>
      
        {/* User reviews testmonial=============================== */}
      <Testimonial/>
    </div>
      
  
  </>
    
  
}

export default Home