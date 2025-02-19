import React, { useState, useEffect } from 'react';
import Homeslide1 from '../../Images/home-slide-1.png';
import Homeslide2 from '../../Images/home-slide-2.png';
import Homeslide3 from '../../Images/home-slide-3.png';
import Homeslide4 from '../../Images/home-slide-3sm.png';
import Homeslide5 from '../../Images/home-slide-2sm.png';
import Homeslide6 from '../../Images/home-slide-1sm.png';
import heroimg2 from '../../Images/course-heroimg2.jpg'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';

const slides = [
  {
    heading: 'Unique Beauty Salon',
    subheading: 'Beauty as a gift,..',
    text: 'Unique Beauty Salon offers the latest and highest quality services for you and - all your family members. We specialize in all beauty treatments and our team is fully professional and innovative, from makeup services to hairstyling.',
    smText:'Unique Beauty Salon offers the latest and highest quality services for you and - all your family members.',
    image: Homeslide1,
    smallImage: Homeslide4
  },
  {
    heading: 'Experience in Beauty',
    subheading: 'Your Beauty Salon ',
    text: 'At Unique Beauty Salon, we provide a personalized experience for each client. Our expert stylists and beauticians are dedicated to enhancing your natural beauty with the latest trends and techniques.',
    smText:'At Unique Beauty Salon, we provide a personalized experience for each client. ',
    image: Homeslide2,
    smallImage: Homeslide5
  },
  {
    heading: 'Professional - Beauty',
    subheading: "Care for Everyone",
    text: "Unique Beauty salon treatments will help you relax after a long and stressful day. At Unique Beauty, you can pamper yourself and enjoy the benefits of professional and affordable beauty care. Enjoy your life with our high-quality beauty services.",
    smText:'Unique Beauty salon treatments will help you relax after a long and stressful day.',
    image: Homeslide3,
    smallImage: Homeslide6
  }
];

function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const [socialLinks, setSocialLinks] = useState({});
  const countryCode='+91'
  const whatsApplink = `https://wa.me/${countryCode}${socialLinks.whatsUpNumber}?text=Hello%20there!%20I%20would%20like%20to%20make%20an%20appointment`
  


  useEffect(() => {
    const fetchSocialLinks = async () => {
      try {
        const socialRef = doc(db, "siteDetails", "socialLinks");
        const socialDoc = await getDoc(socialRef);
        if (socialDoc.exists()) {
          setSocialLinks(socialDoc.data());
        }
      } catch (error) {
        console.error("Error fetching social links:", error);
      }
    
      
    }
    fetchSocialLinks();
  },[])
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 800); 
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='hero-section relative border-b-2  overflow-hidden'>
      <div className="bg-[#fff] md:h-auto xl:h-[650px] max-sm:h-auto max-lg:h-[400px] w-full xl:relative overflow-hidden">
        
            <img src={heroimg2} alt="" className='md:hidden lg:hidden xl:hidden' /> 

        {/* Large Device Background Circles */}
        <div className="bg-rounds max-sm:hidden  sm:block">
          <div className="xl:ml-[750px] md:ml-[360px] md:-mt-20 xl:-mt-44 bg-[#cef1ea] md:w-32 md:h-32 xl:h-60 xl:w-60 rounded-full"></div>
          <div className="bg-[#cef1ea]  md:ml-[450px] md:opacity-60 lg:ml-[630px]  lg:h-[400px] lg:w-[400px] xl:mt-20 2xl:mt-16 2xl:ml-[890px] md:h-[300px] md:w-[300px] 2xl:h-[600px] 2xl:w-[600px] rounded-full"></div>
        </div>

        {/* Large Device Image */}
        <div className="bx2 hidden sm:block xl:hidden  absolute opacity-80">
          <img
            src={slides[currentSlide].image}
            alt=""
            className={`h-[400px] w-full transition-transform duration-500`}
          />
        </div>

        <div className="hero-flex  flex absolute top-0 left-0 w-full h-full  md:overflow-hidden ">
          <div className="bx1 xl:flex-[0.6] md:flex[0.6] lg:flex-[0.6]  h-full xl:mt-5 2xl:mt-10">
            <div className={`heading text-left max-sm:ml-7 md:ml-16 max-sm:h-40  lg:ml-32 2xl:ml-44 md:mt-28 lg:mt-28 max-sm:mt-14 xl:mt-40 2xl:mt-48 transition-transform duration-1000 ${isAnimating ? 'translate-y-[-50px] opacity-0' : 'translate-y-0 opacity-100'}`}>
              <h2 className='text-3xl md:text-3xl xl:text-5xl font-playfair tracking-normal font-bold text-[#151515]'>{slides[currentSlide].heading}</h2>
              <hr className='border-[#b0ebdf] hidden md:block mt-5 xl:mt-10  md:ml-1 md:w-10 xl:w-20 border-[2px]' />
              <h2 className='xl:-mt-8 md:-mt-5 xl:ml-24  md:ml-12 text-2xl md:text-3xl xl:text-5xl font-playfair text-[#151515] font-bold'>{slides[currentSlide].subheading}</h2>
              <p className='font-lato md:hidden max-sm:hidden lg:block lg:-mt-0 text-[#939191] xl:text-xl lg:p-3 p-8 text-left '>{slides[currentSlide].text}</p>
              <p className='font-lato md:hidden lg:hidden x:hidden 2xl:hidden max-sm:pl-0 max-sm:pt-2 max-sm:pb-2  text-[#939191] p-8 text-left '>{slides[currentSlide].smText}</p>
            </div>
            
            <a href={whatsApplink} target="_blank" rel="noopener noreferrer"
            className="relative max-sm:hidden  z-10">
              <button className='bg-[#b0ebdf] max-sm:hidden md:ml-16 ml-10 mt-6  lg:mt-0 lg:ml-32 hover:scale-110 xl:mt-10 xl:ml-44  p-3 xl:p-4 rounded-full text-lg xl:text-xl tracking-wider font-montserrat font-medium'>
                Book Now 
              </button>
            </a>
            <div className="absolute">
            <a href={whatsApplink} target="_blank" rel="noopener noreferrer"
            className="">
              <button className="bg-white md:hidden ml-6 -mt-10 hover:bg-green-600 hover:text-white active:bg-white active:text-gray-500 w-32 xl:text-xl lg:px-1 lg:font-semibold lg:rounded-2xl lg:py-3 xl:w-48 text-black py-2 px-4 rounded-md">
              Book Now
            </button></a>
            </div>
          </div>

          {/* Large Device Image */}
          <div className="bx2 absolute  hidden sm:flex  lg:ml-24 flex-[0.4] h-full ">
            <img
              src={slides[currentSlide].image}
              alt=""
              className={`animated-image md:pb-6 max-lg:mt-2 mt-14 xl:mt-7  md:mt-7 md:ml-[110px] xl:ml-[200px] h-[100%] w-full transition-transform duration-1000 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
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
