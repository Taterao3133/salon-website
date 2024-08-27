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
    text: 'Unique Beauty Salon offers the latest and highest quality services for you and - all your family members. We specialize in all beauty treatments and our team is fully professional and innovative, from makeup services to hairstyling.',
    image: Homeslide1,
    smallImage: Homeslide4
  },
  {
    heading: 'Experience in Beauty',
    subheading: 'Your Beauty Salon ',
    text: 'At Unique Beauty Salon, we provide a personalized experience for each client. Our expert stylists and beauticians are dedicated to enhancing your natural beauty with the latest trends and techniques.',
    image: Homeslide2,
    smallImage: Homeslide5
  },
  {
    heading: 'Professional - Beauty',
    subheading: "Care for Everyone",
    text: "Unique Beauty salon treatments will help you relax after a long and stressful day. At Unique Beauty, you can pamper yourself and enjoy the benefits of professional and affordable beauty care. Enjoy your life with our high-quality beauty services.",
    image: Homeslide3,
    smallImage: Homeslide6
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
    <div className='hero-section relative border-b-2 overflow-hidden'>
      <div className="bg-[#fff] md:h-auto xl:h-[700px] w-full xl:relative overflow-hidden">
        
        {/* Small Device Image */}
        <div className="bx2 sm:hidden relative pt-16 opacity-40">
          <img
            src={slides[currentSlide].smallImage}
            alt=""
            className={`h-[400px] w-full transition-transform duration-500`}
          />
        </div>

        {/* Large Device Background Circles */}
        <div className="bg-rounds hidden sm:block">
          <div className="xl:ml-[750px] md:ml-[360px] xl:-mt-20 bg-[#cef1ea] md:w-32 md:h-32 xl:h-60 xl:w-60 rounded-full"></div>
          <div className="bg-[#cef1ea]  md:ml-[450px] md:opacity-60 xl:mt-14 xl:ml-[870px] md:h-[300px] md:w-[300px] xl:h-[600px] xl:w-[600px] rounded-full"></div>
        </div>

        {/* Large Device Image */}
        <div className="bx2 hidden sm:block absolute opacity-80">
          <img
            src={slides[currentSlide].image}
            alt=""
            className={`h-[400px] w-full transition-transform duration-500`}
          />
        </div>

        <div className="hero-flex flex absolute top-0 left-0 w-full h-full md:overflow-hidden ">
          <div className="bx1 xl:flex-[0.6] md:flex[0.6] lg:flex-[0.6]  h-full  mt-10">
            <div className={`heading text-left max-sm:ml-10 md:ml-16 lg:ml-32 xl:ml-44 md:mt-40 lg:mt-20 max-sm:mt-48 xl:mt-48 transition-transform duration-1000 ${isAnimating ? 'translate-y-[-50px] opacity-0' : 'translate-y-0 opacity-100'}`}>
              <h2 className='text-2xl md:text-3xl xl:text-5xl font-playfair tracking-normal font-bold text-[#151515]'>{slides[currentSlide].heading}</h2>
              <hr className='border-[#b0ebdf] hidden md:block mt-5 xl:mt-10  md:ml-1 md:w-10 xl:w-20 border-[2px]' />
              <h2 className='xl:-mt-8 md:-mt-5 xl:ml-24  md:ml-12 text-2xl md:text-3xl xl:text-5xl font-playfair text-[#151515] font-bold'>{slides[currentSlide].subheading}</h2>
              <p className='font-lato hidden lg:block lg:-mt-0 text-[#939191] xl:text-xl lg:p-3 p-8 text-left '>{slides[currentSlide].text}</p>
            </div>
            <a href="https://wa.me/+918331950396?text=Hello%20there!%20I%20would%20like%20to%20make%20an%20appointment." target="_blank" rel="noopener noreferrer"
            className="relative z-10">
              <button className='bg-[#b0ebdf] md:ml-16 ml-10 mt-6  lg:mt-0 lg:ml-32 hover:scale-110 xl:mt-10 xl:ml-44 cursor-pointer p-3 xl:p-4 rounded-full text-lg xl:text-xl tracking-wider font-montserrat font-medium'>
                Book Now
              </button>
            </a>
          </div>

          {/* Large Device Image */}
          <div className="bx2 absolute hidden sm:flex  lg:ml-24 flex-[0.4] h-full ">
            <img
              src={slides[currentSlide].image}
              alt=""
              className={`animated-image md:pb-6 mt-16 md:ml-[110px] xl:ml-[200px] h-[100%] w-full transition-transform duration-1000 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
            />
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
