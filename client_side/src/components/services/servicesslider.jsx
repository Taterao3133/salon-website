import React from 'react';
import Slider from 'react-slick';
import ServiceCard from './ServiceCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Acne from '../../Images/acne.png'
import Makaup from '../../Images/clean.png'
import Hairstyle from '../../Images/hairstyle.png'
import Nailpolish from '../../Images/nail-polish.png'
import Pedicure from '../../Images/hands.png'
import Tanning from '../../Images/tanning.png'
import Waxing from '../../Images/waxing.png'
import Hairdryer from '../../Images/hairdryer.png'
import Hairstraightner from '../../Images/hair-styling.png'
import Skincare from '../../Images/skincare.png'

const ServicesSlider = () => {
  const services = [
    { id: 1, icon: Makaup, title: 'Makeup' },
    { id: 2, icon: Acne, title: 'Acne treatment' },
    { id: 3, icon: Hairstyle, title: 'Hair stylinh' },
     { id: 4, icon: Nailpolish, title: 'Nail polish' },
     { id: 5, icon: Pedicure, title: 'Pedicure' },
    { id: 6, icon: Tanning, title: 'Tan remove' },
    { id: 7, icon: Waxing, title: 'Waxination' },
    { id: 8, icon: Hairdryer, title: 'Hair-dryer' },
    { id: 9, icon: Hairstraightner, title: 'Hair straightner' },
    { id: 10, icon: Skincare, title: 'skin-Care' },

  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ]
  };

  return (
    <div className="relative overflow-hidden max-sm:h-32 max-sm:text-xs  max-sm:w-96 xl:h-40 xl:w-[1300px] max-sm:m-auto m-auto mt-1">
      <Slider {...settings}>
        {services.map((service) => (
          <ServiceCard key={service.id}
           image={service.icon} 
           title={service.title} 
          />
        ))}
      </Slider>
    </div>
  );
};

export default ServicesSlider;
