import './Home.css'
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
import HeroSlider from '../components/services/heroslider'
// import { useEffect } from 'react';
import ServicesSlider from '../components/services/servicesslider';
// import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { RiDoubleQuotesR } from 'react-icons/ri';
import { Link } from 'react-router-dom'

// import { Link } from 'react-router-dom'

function Home() {
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

        <HeroSlider/>

     {/* category section  services section---*/}
     <div className="relative  max-sm:pr-2 max-sm:h-36  max-sm:max-w-full md:ml-16 max-sm:mt-14 lg:h-20 lg:ml-40 xl:ml-36 xl:h-40 xl:w-[1300px] m-auto lg:mt-5 xl:mt-10">
      <div className="c_section flex  absolute whitespace-nowrap">
        <ServicesSlider/>
      </div>
     </div>

     {/* exp- section start */}
     <div className="d bg-gray-100 md:mt-32 lg:mt-14  xl:mt-10  xl:pb-16 max-sm:pt-5 max-sm:pb-6 md:pt-10 xl:pt-10 lg:h-auto h-auto lg:flex xl:flex">
        <div className="l-c flex-[50%] lg:ml-24 xl:ml-32 md:ml-48 max-sm:p-5 xl:p-14">
            <div className="-z-1 relative circle-b prev-element transition-transform duration-500 transform rounded-full  -ml-7 w-28 h-28 bg-[#cef1ea]"
              style={{ transform: `translateY(${offsetY * -0.09}px)` }}>

              </div>
            
            <div className="img-f ">
            <img src={home1} alt=""  className='max-sm:w-[80%] max-sm:h-auto absolute -mt-28 w-auto drop-shadow-2xl ' />
            </div>
            <div className="circle-b  rounded-full xl:ml-72 max-sm:ml-64 max-sm:mt-44 md:ml-72 md:mt-64 lg:mt-64 lg:ml-72 xl:mt-56  w-28 h-28 bg-[#cef1ea]"
            style={{ transform: `translateY(${offsetY * 0.09}px)` }}></div>
        </div>
        <div className="r-c xl:flex-[50%] max-sm:mt-8 md:p-8 md:ml-10 md:mt-5 lg:mt-6 lg:pb-36 lg:ml-36  xl:-ml-24 xl:mt-12  xl:p-8 ">
            <div className="h max-sm:text-3xl md:text-4xl xl:text-6xl font-playfair max-sm:ml-9 max-sm:mt-9   xl:mt-5 font-semibold  "><p>Why Our
            Clients <br /></p>
            <hr className='max-sm:hidden border-[2px] w-20 md:mt-4  mt-12 border-[#cef1ea]  '/> 
            <p className='xl:ml-24 md:ml-24 md:-mt-5 xl:-mt-8'>Choose Us</p></div>
            <p className='font-raleway text-gray-800 max-sm:pr-5 md:mt-3 max-sm:pl-9  max-sm:mt-3 font-semibold tracking-wide max-sm:text-sm xl:pt-10 text-left  xl:pr-32'>" We are the leading beauty salon in LA providing high-quality hairdressing,
               makeup, and skin care services to everyone."</p>
            <p className='font-lato xl:text-base max-sm:text-sm md:mt-3 max-sm:pl-9 text-gray-500 max-sm:mt-2 max-md:pr-5 xl:mt-6 xl:pr-36'>Our clients appreciate and value our level of customer service, the skills of our stylists 
              and estheticians as well as our professional approach to everything we do.</p>
              
            <Link to="https://wa.me/+918688664812?text=Hello%20there!%20I%20would%20like%20to%20make%20an%20appointment." target="_blank" rel="noopener noreferrer">
            <button className='bg-[#cef1ea] xl:mt-6 max-sm:mt-3  md:mt-5 max-sm:ml-9 max-sm:text-sm  max-sm:hover:text-xl xl:text-base font-medium hover:text-lg border-[#cef1ea] font-lato p-3 rounded-full'>
              What'sapp Us
              </button>
             </Link>
        </div>
      </div>
      {/* salon details */}
      <div className="s-details bg-[#ffffff] max-sm:mt-5 max-sm:pt-10 xl:pt-5 pb-5 h-auto w-full">
        <div className="in-details  w-[80%]  m-auto md:flex xl:flex h-auto">
          <div className="r-c flex-[0.5] xl:p-10 ">
          <hr className='max-sm:hidden border-[2px] md:hidden w-20 mt-14  :border-[#cef1ea]  '/>
            <h2 className='max-sm:text-3xl md:text-4xl xl:text-5xl font-playfair font-semibold tracking-wider xl:ml-24 md:mt-10 xl:-mt-7 '>Our Beauty Salon</h2>
            <p className='font-raleway max-sm:mt-3 md:mt-3  xl:mt-5 max-sm:text-base xl:text-lg pr-5 font-medium'><span className=' font-bold'>Unique Beauty Salon</span> offers beauty services of an 
            utmost level to all LA residents and guests who are looking for high-quality beauty care.</p>
            <p className='font-lato max-sm:text-sm xl:text-base max-sm:mt-3 xl:mt-5 text-gray-500'>Our Beauty Salon is based on the belief that our customers' needs are of the utmost importance. Our entire team is committed to
               meeting those needs. As a result, a high percentage of our business is from regular customers.</p>
            <img src={home2} alt=""  className= 'md:mt-5 max-sm:mt-5 xl:mt-10'/>
            <RiDoubleQuotesR className="text-right text-[#d5d5d5]  mt-5 max-sm:w-16 max-sm:h-16 xl:h-24 xl:w-24"/>
            <p className='xl:text-3xl max-sm:text-xl font-playfair font-bold  xl:ml-14 max-sm:-mt-12 xl:-mt-16 xl:pr-7 text-right'>We are responsible for the quality of the services you receive!</p>
          </div>
          <div className="l-c flex-[0.5] max-sm:hidden p-10 ">
            <img src={home3} alt="" />
            <p className='font-lato text-base mt-5 text-gray-500'>All our salons in LA are uniquely designed to offer our clients the best beauty, hairstyling, and skin care experience, which we hope you and 
              your body will appreciate. Let yourself relax and be pampered at the best salon in Banswada</p>
            <img src={home4} alt="" className='mt-5' />
          </div>

        </div>

      </div>

     {/* services section*/}
     
     <div className="our-services pb-20 h-auto w-full bg-[#f6f9f9]">
      <h2 className="text-center md:pt-10 max-sm:text-3xl md:text-4xl xl:text-5xl font-playfair font-bold tracking-wide leading-8 max-sm:pt-8 xl:pt-20">
        Our Services
      </h2>
      <hr className="border-[2px] mx-auto max-sm:w-10 md:w-20 md:mt-3 xl:w-20 max-sm:mt-2 xl:mt-6 border-[#cef1ea]" />
      <p className="text-center font-montserrat max-sm:text-base max-sm:p-7 md:mt-4 max-sm:text-[#9b9b9b] xl:mt-6">
        At our salon, we offer top-tier beauty and wellness services <br />
        tailored to enhance your natural elegance and rejuvenate your spirit.
      </p>

      <div className="container w-[75%] h-auto m-auto lg:mt-5 xl:mt-7 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div className="bx1 flex flex-col justify-between h-full p-8 bg-[#f6f9f9] hover:bg-white border hover:shadow-xl transition duration-300 transform hover:scale-105">
          <div className="inbx flex justify-center items-center w-20 h-20 rounded-full bg-[#ccf1ea] mx-auto">
            <img src={Haircut} alt="Haircut & Styling" className="w-20 h-auto" />
          </div>
          <h2 className="text-center font-playfair font-bold mt-5 text-xl md:mt-2 xl:mt-10 hover:text-[#ccf1ea]">
            HairCut & Styling
          </h2>
          <p className="text-center mt-4 text-sm xl:text-base font-raleway">
            Improve your look with our professional haircut & hairstyling services.
          </p>
        </div>

        <div className="bx1 flex flex-col justify-between h-full p-8 bg-[#f6f9f9] hover:bg-white border hover:shadow-xl transition duration-300 transform hover:scale-105">
          <div className="inbx flex justify-center items-center w-20 h-20 rounded-full bg-[#ccf1ea] mx-auto">
            <img src={Makaup} alt="Makeup" className="w-20 h-auto" />
          </div>
          <h2 className="text-center font-playfair font-bold mt-5 text-xl md:mt-2 xl:mt-10 hover:text-[#ccf1ea]">
            Makeup
          </h2>
          <p className="text-center mt-4 text-sm xl:text-base font-raleway">
            Our makeup experts will have you looking your best in less than 30 minutes.
          </p>
        </div>

        <div className="bx1 flex flex-col justify-between h-full p-8 bg-[#f6f9f9] hover:bg-white border hover:shadow-xl transition duration-300 transform hover:scale-105">
          <div className="inbx flex justify-center items-center w-20 h-20 rounded-full bg-[#ccf1ea] mx-auto">
            <img src={Pedicure} alt="Manicure & Pedicure" className="w-20 h-auto" />
          </div>
          <h2 className="text-center font-playfair font-bold mt-5 text-xl md:mt-2 xl:mt-10 hover:text-[#ccf1ea]">
            Manicure & Pedicure
          </h2>
          <p className="text-center mt-4 text-sm xl:text-base font-raleway">
            Pamper yourself with our manicure & pedicure services.
          </p>
        </div>
        <div className="bx1 flex flex-col justify-between h-full p-8 bg-[#f6f9f9] hover:bg-white border hover:shadow-xl transition duration-300 transform hover:scale-105">
          <div className="inbx flex justify-center items-center w-20 h-20 rounded-full bg-[#ccf1ea] mx-auto">
            <img src={Skincare} alt="Manicure & Pedicure" className="w-20 h-auto" />
          </div>
          <h2 className="text-center font-playfair font-bold mt-5 text-xl md:mt-2 xl:mt-10 hover:text-[#ccf1ea]">
           Skin Care
          </h2>
          <p className="text-center mt-4 text-sm xl:text-base font-raleway">
          "We offer a full range of relaxing skin care services, including all types of facials."
          </p>
        </div>
        <div className="bx1 flex flex-col justify-between h-full p-8 bg-[#f6f9f9] hover:bg-white border hover:shadow-xl transition duration-300 transform hover:scale-105">
          <div className="inbx flex justify-center items-center w-20 h-20 rounded-full bg-[#ccf1ea] mx-auto">
            <img src={Waxing} alt="Manicure & Pedicure" className="w-20 h-auto" />
          </div>
          <h2 className="text-center font-playfair font-bold mt-5 text-xl md:mt-2 xl:mt-10 hover:text-[#ccf1ea]">
          Waxing
          </h2>
          <p className="text-center mt-4 text-sm xl:text-base font-raleway">
          "Improve your look with our professional haircut & hairstyling services."
          </p>
        </div>
        <div className="bx1 flex flex-col justify-between h-full p-8 bg-[#f6f9f9] hover:bg-white border hover:shadow-xl transition duration-300 transform hover:scale-105">
          <div className="inbx flex justify-center items-center w-20 h-20 rounded-full bg-[#ccf1ea] mx-auto">
            <img src={Makaup} alt="Manicure & Pedicure" className="w-20 h-auto" />
          </div>
          <h2 className="text-center font-playfair font-bold mt-5 text-xl md:mt-2 xl:mt-10 hover:text-[#ccf1ea]">
          Bridal Services
          </h2>
          <p className="text-center mt-4 text-sm xl:text-base font-raleway">
          "Experience luxurious bridal services tailored to make your special day unforgettable." 
          </p>
        </div>


      </div>
    </div>
      
        {/* User reviews testmonial=============================== */}
      <Testimonial/>
    </div>
      
  
  </>
    
  
}

export default Home