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
     <div className="herosection  flex flex-nowrap">
        <div className="b_c bg-[#BA7894] w-[635px]">
            <div className=" bg_gradient  ">
              <div className="herocontent ml-[218px] pt-[207px]">
                  <p className='text-[#FFFFFF]'>HAIR SALON, BEAUTY SALON , WOMENS SALON  </p>
                  <h1 className='text-[#F7E5C1] font-playfair text-5xl font-semibold mb-6'>Find Your Service &<br/> Book Here</h1>
                  <p className='text-[#FFFFFF]'>
                  We aim to become the trendsetters in hair & make-up by offering you the best products and
                   services that will ensure your needs are taken care of at our center. 
                   We offer the latest trends, products and services at our salon</p>
                   <div className="search-box bg-[#F8F8F8] h-[80px] w-[730px] rounded-full mt-[52px]">
                    <div className="search-bc flex flex-nowrap space-x-[50px]" >
                      <div className="input-1 ml-11">
                        <p className='text-[#BA7894] font-semibold text-lg mt-3 '>Service Name</p>
                        <div className="search-icon flex flex-nowrap">
                        <input type="text" className='border-b-2 focus:outline-none border-[#786666] bg-[#F8F8F8] ' placeholder='Book Your Service' />
                          <IoIosSearch  className='ml-[-18px] mt-1 h-5 w-5 cursor-pointer'/>
                        </div>
                      </div>
                      <div className="input-2">
                         <p className='text-[#BA7894] font-semibold text-lg mt-3'>Time & Date</p>
                          <div className="search-icon flex flex-nowrap">
                            <input type="text" className='border-b-2 focus:outline-none border-[#786666] bg-[#F8F8F8] ' placeholder='Enter Your date' />
                            <BsCalendar2Date className='ml-[-18px] mt-1 h-4 w-4 cursor-pointer' />
                          </div>
                      </div>
                      <div className="s_btn w-52 h-16 bg-[#BA7894] rounded-full mt-2 flex flex-nowrap cursor-pointer "onClick={openPopup}>
                        <p className='text-white text-2xl font-medium ml-10 mt-4' onClick={openPopup}>Book Now</p>
                        {/* <IoIosSearch className='text-white mt-[18px]  h-7 w-7 ml-2 '/> */}
                        <Bookingpop isOpen={isPopupOpen} closePopup={closePopup} />

                      </div>

                    </div>
                   </div>
              </div>
            </div>
        </div>
        {/* background -image */}
        <div className="bg-image  "> </div> 
     </div>

     {/* category section  services section---*/}
     <div className="relative overflow-hidden h-40 w-[1300px] m-auto mt-10">
      <div className="c_section flex space-x-12 absolute whitespace-nowrap">
        <ServicesSlider/>
      </div>
     </div>

     {/* exp- section start */}
     <div className="exp_section  ">
      <div className="inner_heading text-center pt-16">
        <h2 className='i_text text-[#422A3C] font-playfair font-bold text-[45px]'>We are Experienced making you <br />
            Very Beautiful
        </h2>
        <h4 className='text-[20px] text-[#555555]'> We always hear to Happy and Serve You</h4>
      </div>          
      <div className="pics_section overflow-hidden container h-[400px] w-[1250px]  ml-36 mt-7 columns-3">
        <div className="img_boxes ">
          <div className="main_img">
            <img src={exp1} alt="" className='g rounded-l-[50px] h-[398px] w-auto' />
          </div>
          <div className="img_boxes    columns-1   overflow-hidden">
            <img src={exp3} alt="" className='g h-[190px] w-96 mb-4' />
            <img src={exp2} alt="" className='g h-[198px] w-96 ' />
          </div>
          <div className="img_boxes   columns-1  overflow-hidden">
           <img src={exp1} alt="" className='g h-[190px] w-96 mb-4 rounded-tr-[50px]' />
            <img src={exp2} alt="" className='g h-[198px] w-96 rounded-br-[50px]' />
          </div>
        </div>
      </div>
     </div>
     {/* services section*/}
     <div className="container1 ">
        <div className="txt_heading text-center ">
          <h3 className='s_inner font-playfair text-[#BA7894] pt-16'>Our Services</h3>
          <h2 className='b_inner font-playfair text-[#422A3C] text-5xl'> Recommended</h2>
          <p className='inner_text text-lg pt-[16px]'>The CSS and web font files to easily self-host the “Manrope” font. ... JS. body </p>
        </div>


        {/* images cards section================= */}
        <div className="inner_container  w-10/12  columns-4 gap-6 ml-28  mt-12 ">

          <div className="max-w-[290px]  overflow-hidden border-2 rounded-2xl shadow-sm border-[#e1d9d9]">
            <img src={exp1} className="w-full h-[190px]"  alt="Sunset in the mountains"/>
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

      <div className="about_us_section w-full h-[600px] bg-[#F7E5C1] mt-10 ">
      <div className="ab_box h-3/4 w-3/4  ml-48 pt-28 flex" >
        <div className="abt_img flex-[0.5] bg-[#422A3C]">
          <img src={Abt_img} alt=""  className='w-3/4 h-100% ml-16 -mt-14' />
        </div>
        <div className="abt_content flex-[0.5]  bg-[#422A3C]">
          <p className='font-semibold font-mono text-white text-sm mt-6'>About Us</p>

          <p className='text-white text-3xl font-playfair mt-4'> It’s the bridge between <br />
           service  companies and consumers.</p>
           <p className='text-lg font-mono text-[#FFFFFF] mt-6 pr-4'>ServiceMarket.dk is a Copenhagen-based technology company known for our overview platform.
             Our aim is to simplify and improve everyday life for citizens in Denmark. 
             One platform that brings together all services in an easy and controlled environment.</p>
        </div>
      </div>
      </div>
        {/* User reviews testmonial=============================== */}
      <Testimonial/>
  
    
  
  </>
    
  
}

export default Home