import React, { useState, useEffect } from 'react';
import Homeslide1 from '../../Images/home-slide-1.png';
import Homeslide2 from '../../Images/home-slide-2.png';
import Homeslide3 from '../../Images/home-slide-3.png';
import Homeslide4 from '../../Images/home-slide-3sm.png';
import Homeslide5 from '../../Images/home-slide-2sm.png';
import Homeslide6 from '../../Images/home-slide-1sm.png';

const slides = [
  {
    heading: 'Unique Beauty Salon',
    subheading: 'Beauty as a gift,..',
    text: 'Unique Beauty Salon offers the latest and highest quality services for you and - all your family members. We specialize inall beauty treatments and our team is fully professional and innovative, from makeup services to hairstyling.',
    image: Homeslide1,
    smallImage:Homeslide4
  },
  {
    heading: 'Experience in Beauty',
    subheading: 'Your Beauty Salon ',
    text: 'At Unique Beauty Salon, we provide a personalized experience for each client. Our expert stylists and beauticians are dedicated to enhancing your natural beauty with the latest trends and techniques.',
    image: Homeslide2,
    smallImage:Homeslide5
  },{
    heading: 'Professional - Beauty',
    subheading: "Care for Everyone",
    text: "Unique Beauty salon treatments will help you relax after a long and stressful day. At Unique Beauty, you can pamper yourself and enjoy the benefits of professional and affordable beauty care. Enjoy your life with our high-quality beauty services.",
    image: Homeslide3,
    smallImage:Homeslide6
  }
];


function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    
        }, 800); // Set this timeout to match the animation duration
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className='hero-section relative'>
      <div className="bg-[#fff]   xl:h-[700px] w-full  xl:relative xl:overflow-hidden">
      <div className="bx2 max-sm:relative pt-16 xl:hidden opacity-40 md:hidden">
            <img
              src={slides[currentSlide].smallImage}
              alt=""
              className={`h-[400px] w-full transition-transform duration-500 `} />
          </div>
        <div className="bg-rounds max-sm:hidden">
          <div className="xl:ml-[750px] xl:-mt-20 bg-[#cef1ea] h-60 w-60 rounded-full"></div>
          <div className="bg-[#cef1ea] xl:mt-14 xl:ml-[870px] xl:h-[600px] xl:w-[600px] rounded-[100%]"></div>
        </div>
        <div className="hero-flex max-sm:absolute  xl:flex xl:absolute top-0 left-0 w-full h-full">
          <div className="bx1 xl:flex-[0.6]  max-sm:absolute max-sm:opacity-100  xl:h-full max-sm:mt-64 xl:mt-10">
            <div className={`heading max-sm:text-left text-center max-sm:ml-10 xl:mt-48 transition-transform duration-1000 ${isAnimating ? 'translate-y-[-50px] opacity-0' : 'translate-y-0 opacity-100'}`}>
              <h2 className='max-sm:text-3xl xl:text-6xl font-playfair  tracking-normal font-bold text-[#151515]'>{slides[currentSlide].heading}</h2>
              <hr className='border-[#b0ebdf] max-sm:hidden xl:mt-10 xl:ml-48 xl:w-20 border-[2px]' />
              <h2 className='xl:-mt-8 xl:ml-32 max-sm:text-3xl max-sm:opacity-100 xl:text-6xl font-playfair text-[#151515] font-bold'>{slides[currentSlide].subheading}</h2>
              <p className='font-lato max-sm:hidden text-[#9b9b9b] text-xl p-8 text-left ml-36 pl-10'>{slides[currentSlide].text}</p>
            </div>
            <button className='bg-[#b0ebdf] max-sm:ml-10 max-sm:mt-9 max-sm:text-base hover:scale-110 xl:mt-10 xl:ml-44 cursor-pointer max-sm:p-2 xl:p-4 rounded-full text-xl tracking-wider font-montserrat font-medium'>Book Now</button>
          </div>
          <div className="bx2 xl:absolute  max-sm:hidden   xl:flex-[0.4] xl:h-full  ">
            <img src={slides[currentSlide].image} alt="" className={`animated-image xl:mt-16 
               xl:ml-[200px]   xl:h-[100%] xl:w-[1800px]
               transition-transform duration-1000 ${isAnimating ? 'opacity-0' : 'opacity-100'}`} />
             
          </div>
        </div>
         
          

      </div>

      <style jsx>{`
        .animated-image {
          animation: slideImage 2s ease forwards;
           
        }

        @keyframes slideImage {
          from {
            transform: translateX(100%);
            
          }
          to {
            transform: translateX(-10%);
            
          }
        }
      `}</style>
    </div>
  );
}

export default HeroSlider;
