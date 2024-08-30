import Serviceimage from '../Images/s-1.jpg'
import Serviceimage2 from '../Images/s-2.jpg'
import Serviceimage3 from '../Images/s-3.jpg'
import Haircut from '../Images/hair-cutting.png'
import { FaArrowRight } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import Makaup from '../Images/clean.png'
import Pedicure from '../Images/hands.png'
import Waxing from '../Images/waxing.png'
import Skincare from '../Images/skincare.png'
import Testimonial from '../components/testimonial/Testimonial';

function Services() {

  const [scaleX, setScaleX] = useState(1);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setOffsetY(window.scrollY);
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = scrollPosition / windowHeight;
      const newScaleX = 1 - scrollPercentage / 5;

      setScaleX(newScaleX);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="services-section max-sm:overflow-hidden overflow-hidden ">
      <div className="tagline bg-[#422A3C] w-full md:h-40 xl:h-auto max-sm:h-28  justify-items-center  text-center ">
        <div className="container md:m-auto max-sm:m-auto xl:m-auto  md:pt-16 pt-3  xl:pt-5 w-2/4  ">
            <h2 className="xl:text-5xl max-sm:text-2xl md:text-4xl font-bold text-[#F7E5C1] max-sm:pt-7 xl:pb-5 font-playfair">Services..</h2>
        </div>
      </div>
      <div className="d bg-[#ffffff] xl:pb-5  max-sm:pt-5 md:pt-10 xl:pt-10 h-auto xl:flex">
        <div className="r-c xl:flex-[50%] md:ml-14  xl:ml-20 xl:p-8 ">
            <div className="h max-sm:text-3xl md:text-4xl xl:text-6xl   font-playfair max-sm:ml-9 max-sm:mt-9 xl:ml-16 xl:mt-5 font-semibold  "><p>Why Our
            Clients <br /></p>
            <hr className='max-sm:hidden border-[2px] w-20 md:mt-6 mt-12 border-[#cef1ea]  '/> 
            <p className='xl:ml-24 md:-mt-5 md:ml-24 xl:-mt-8'>Choose Us</p></div>
            <p className='font-raleway text-gray-800 max-sm:p-9 max-sm:text-sm xl:p-16 md:mt-3 md:pr-10  xl:-mt-5'>"Our clients choose us for our personalized care, expert services, 
                and dedication to making every visit a luxurious and relaxing experience. 
                We take pride in our attention to detail, ensuring that each client leaves feeling confident and rejuvenated.</p>
                <a href="https://wa.me/+918688664812?text=Hello%20there!%20I%20would%20like%20to%20make%20an%20appointment." target="_blank" rel="noopener noreferrer"
            className="r">
            <button className='bg-[#cef1ea] xl:ml-16 max-sm:ml-9  md:mt-5 xl:mt-0 max-sm:text-lg max-sm:hover:text-xl xl:text-xl hover:text-2xl border-[#cef1ea] font-raleway p-3 rounded-full'>Book Now</button>
             </a>
        </div>
        <div className="l-c flex-[50%] max-sm:p-9  md:ml-24 md:mt-7 xl:p-14">
            <div className="img-f flex space-x-9">
            <img src={Serviceimage} alt=""  className='max-sm:h-56 h-[70%] w-auto drop-shadow-2xl -mt-2' style={{ transform: `translateX(${offsetY * -0.05}px)` }} />
            <img src={Serviceimage2} alt="" className=' max-sm:h-56   w-auto drop-shadow-2xl mt-6'style={{ transform: `translateX(${offsetY * 0.05}px)` }}/>
            </div>
           


        </div>

      </div>
      {/* services-detail-section */}
      <div className="our-services pb-20 h-auto w-full bg-[#f6f9f9]">
      <h2 className="text-center md:pt-10 max-sm:text-3xl md:text-4xl xl:text-5xl font-playfair font-bold tracking-wide leading-8 max-sm:pt-8 xl:pt-20">
        Our Services
      </h2>
      <hr className="border-[2px] mx-auto max-sm:w-10 md:w-20 md:mt-3 xl:w-20 max-sm:mt-2 xl:mt-6 border-[#cef1ea]" />
      <p className="text-center font-montserrat max-sm:text-base max-sm:p-7 md:mt-4 max-sm:text-[#9b9b9b] xl:mt-6">
        At our salon, we offer top-tier beauty and wellness services <br />
        tailored to enhance your natural elegance and rejuvenate your spirit.
      </p>

      <div className="container w-[75%] md:mt-5 h-auto m-auto xl:mt-7 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
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
      {/* schedule section */}
      <div className="container w-full md:pb-8 bg-[#ffffff]">
        <div className="pricing-box w-[75%] m-auto max-sm:pt-10 xl:mt-20 xl:mb-16  h-auto  md:flex md:pt-10 xl:flex">
          <div className="schedule  border-2 border-[#ccf1ea] md:w-1/2 xl:w-1/3 max-sm:p-4 xl:p-6">
            <h2 className='max-sm:text-2xl md:text-3xl xl:text-5xl text-[#151515] tracking-wide font-bold text-center font-playfair max-sm:text-left max-sm:ml-5 xl:-ml-9 max-sm:mt-5 xl:mt-14'>Schedule</h2>
            <div className="inn-txt max-sm:mt-2 xl:mt-3 p-5 xl:ml-7">
               <h3 className='max-sm:text-lg xl:text-2xl text-[#151515]  font-playfair tracking-wide font-bold'>Monday - Sunday</h3>
                <p className='text-[#9b9b9b] text-base font-raleway mt-1'>10Am - 8:30PM</p>
                <p className='mt-8 font-raleway text-[#9b9b9b] max-sm:text-sm xl:text-base'>We will be glad to see you anytime at our salon.</p>
                <p className='mt-8 cursor-pointer font-montserrat font-semibold max-sm:text-sm xl:text-base hover:text-[#ccf1ea] hover:scale-x-110 tracking-wider'>Make and Appointment <FaArrowRight className=' max-sm:ml-48 xl:ml-56 max-sm:-mt-4 xl:-mt-6 max-sm:h-4 xl:h-6 w-auto ' /> </p>
            </div>
           
          </div>
          <div className="h-image  md:w-1/2 xl:w-1/3 p-4">
            <img src={Serviceimage3} alt="" className='rounded-lg shadow-2xl scale-125  '/>
          </div>
          <div className="price  max-sm:w-full max-sm:mb-10 max-sm:h-10 xl:w-1/3 shadow-lg transform  bg-[#ccf1ea] p-4" style={{ transform: `scaleX(${scaleX})` }}>
            
          </div>
        </div>
      </div>
         {/* User reviews testmonial=============================== */}
         <Testimonial />
    </div>
  )
}

export default Services