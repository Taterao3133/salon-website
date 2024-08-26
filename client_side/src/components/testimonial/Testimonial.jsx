// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
 import exp3 from '../../Images/s-1.jpg';
// import { useEffect, useState } from "react";
 import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiDoubleQuotesR } from "react-icons/ri";

function Testimonial() {

  // const [reviews, setReviews] = useState([]);

  // useEffect(() => {
  //   const fetchReviews = async () => {
  //     const apiKey = 'YOUR_GOOGLE_PLACES_API_KEY';
  //     const placeId = 'YOUR_PLACE_ID';
  //     const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=review&key=${apiKey}`;

  //     try {
  //       const response = await fetch(url);
  //       const data = await response.json();
  //       setReviews(data.result.reviews);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchReviews();
  // }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // nextArrow: <FaChevronRight />,
    // prevArrow: <FaChevronLeft />,
  };



  return (
    <div className="container min-w-full h-auto pb-16 text-center bg-[#ffffff] xl:mt-6 xl:mb-6">
      <div className="inner-c w-[80%] xl:mt-16 h-auto  m-auto  xl:flex">
        <div className="header-c  h-auto  flex-[0.5] max-sm:pt-5 xl:p-5">
          <div className="h max-sm:text-3xl md:text-4xl xl:text-5xl tracking-wider font-playfair text-left max-sm: max-sm:mt-9 md:pt-8 xl:ml-7 xl:mt-5 font-semibold  "><p>Testimonials
            </p>
            <hr className='max-sm:hidden border-[2px] w-24 md:mt-5 mt-12 border-[#cef1ea]  '/> 
            <p className='xl:ml-28 md:ml-28 md:-mt-5 xl:-mt-7'>Of Our Clients</p>
          </div>
          <p className="font-raleway tracking-wide max-sm:text-base xl:text-lg text-gray-800 max-sm:mt-3 xl:p-5 text-left font-medium">Thanks to our clients’ regular reviews, testimonials, and comments we are able to improve our salon.</p>
          <p className="font-lato -mt-2 max-sm:text-sm xl:text-base text-gray-500 max-sm:mt-3 xl:p-5 text-left">Unlike other salons, we prefer to maintain a constant connection with our customers and receive feedback on every service, whether
             it’s a simple haircut or complex wedding makeup. If you’ve already visited Unique Beauty Salon, feel free to contact us and send your testimonial.</p>
        </div>
        <div className="header-test overflow-hidden pb-5   flex-[0.5] row">
        <Slider {...settings} >
          {/* original */}
          <div className="review-bx w-[90%] max-sm:h-auto pl-6 pr-6 m-auto max-sm:mb-14 xl:mb-5 mt-9 h-80 border-l-2  border-r-2 border-b-[10px] border-b-[#cef1ea] drop-shadow-xl ">
            <div className="clientname  mt-5 space-x-2 flex p-8">
              <h2 className="font-lato font-normal  text-xl tracking-wider">Akhila Suri</h2>
              <p>|</p>
              <h3 className="font-lato text-lg text-[#d5d5d5]">Client</h3>
              <div className="clientImg justify-end-mt-5  max-sm:h-20 max-sm:w-20 md:h-24 md:w-24  xl:w-20  ml-5  rounded-full xl:h-20">
                <img src={exp3} alt="" className='cover-fill md:ml-56 md:-mt-8 border-2 md:h-24 md:w-24 xl:w-20 xl:h-20 max-sm:w-16 max-sm:h-16 rounded-full' />

              </div>
            </div> 
            <p className="r-client font-lato xl:p-8 md:-mt-12 md:pr-14 md:pl-4 -mt-5 text-left max-sm:text-sm xl:text-base">Janette cut my hair and did partial highlights and my experience was excellent! She took her time doing my hair and I
               am very pleased with the results. If you are still looking where to have your hair cut the best way, head for Glory!</p>
             
            <RiDoubleQuotesR className="text-right text-[#d5d5d5] max-sm:ml-52 xl:ml-96 xl:-mt-8 md:w-20 md:h-20 md:ml-[450px] md:opacity-70 m max-sm:h-14 max-sm:w-14 xl:h-20  xl:w-20"/>

          </div>

          {/* dummis */}
          
          {/* <div className="review-bx w-[90%] max-sm:h-auto pl-6 pr-6 m-auto mb-5 mt-9 h-80 border-l-2  border-r-2 border-b-[10px] border-b-[#cef1ea] drop-shadow-xl ">
            <div className="clientname  mt-5 space-x-2 flex p-8">
              <h2 className="font-lato font-normal  text-xl tracking-wider">Akhila Suri</h2>
              <p>|</p>
              <h3 className="font-lato text-lg text-[#d5d5d5]">Client</h3>
            </div> 
            <p className="r-client font-lato xl:p-8 -mt-5 text-left max-sm:text-sm xl:text-base">Janette cut my hair and did partial highlights 
              and my experience was excellent! She took her time doing my hair and I
               am very pleased with the results. If you are still looking where to have your hair cut the best way, head for unique Beauty Salon!</p>
             
            <RiDoubleQuotesR className="text-right text-[#d5d5d5] max-sm:ml-52 xl:ml-96 xl:-mt-8  max-sm:h-14 max-sm:w-14 xl:h-20  xl:w-20"/>

            <div className="clientImg absolute max-sm:h-20 max-sm:w-20 max-sm:-mt-10 xl:w-24 xl:-mt-14 ml-5 border-2 rounded-full xl:h-24">
              <img src={exp3} alt="" className='cover-fill xl:w-24 xl:h-24 max-sm:w-20 max-sm:h-20 rounded-full' />

            </div>
          </div>

          <div className="review-bx w-[90%] max-sm:h-auto pl-6 pr-6 m-auto mb-5 mt-9 h-80 border-l-2  border-r-2 border-b-[10px] border-b-[#cef1ea] drop-shadow-xl ">
            <div className="clientname  mt-5 space-x-2 flex p-8">
              <h2 className="font-lato font-normal  text-xl tracking-wider">Akhila Suri</h2>
              <p>|</p>
              <h3 className="font-lato text-lg text-[#d5d5d5]">Client</h3>
            </div> 
            <p className="r-client font-lato xl:p-8 -mt-5 text-left max-sm:text-sm xl:text-base">Janette cut my hair and did partial highlights and my experience was excellent! She took her time doing my hair and I
               am very pleased with the results. If you are still looking where to have your hair cut the best way, head for Glory!</p>
             
            <RiDoubleQuotesR className="text-right text-[#d5d5d5] max-sm:ml-52 xl:ml-96 xl:-mt-8  max-sm:h-14 max-sm:w-14 xl:h-20  xl:w-20"/>

            <div className="clientImg absolute max-sm:h-20 max-sm:w-20 max-sm:-mt-10 xl:w-24 xl:-mt-14 ml-5 border-2 rounded-full xl:h-24">
              <img src={exp3} alt="" className='cover-fill xl:w-24 xl:h-24 max-sm:w-20 max-sm:h-20 rounded-full' />

            </div>
          </div>

          <div className="review-bx w-[90%] max-sm:h-auto pl-6 pr-6 m-auto mb-5 mt-9 h-80 border-l-2  border-r-2 border-b-[10px] border-b-[#cef1ea] drop-shadow-xl ">
            <div className="clientname  mt-5 space-x-2 flex p-8">
              <h2 className="font-lato font-normal  text-xl tracking-wider">Akhila Suri</h2>
              <p>|</p>
              <h3 className="font-lato text-lg text-[#d5d5d5]">Client</h3>
            </div> 
            <p className="r-client font-lato xl:p-8 -mt-5 text-left max-sm:text-sm xl:text-base">Janette cut my hair and did partial highlights and my experience was excellent! She took her time doing my hair and I
               am very pleased with the results. If you are still looking where to have your hair cut the best way, head for Glory!</p>
             
            <RiDoubleQuotesR className="text-right text-[#d5d5d5] max-sm:ml-52 xl:ml-96 xl:-mt-8  max-sm:h-14 max-sm:w-14 xl:h-20  xl:w-20"/>

            <div className="clientImg absolute max-sm:h-20 max-sm:w-20 max-sm:-mt-10 xl:w-24 xl:-mt-14 ml-5 border-2 rounded-full xl:h-24">
              <img src={exp3} alt="" className='cover-fill xl:w-24 xl:h-24 max-sm:w-20 max-sm:h-20 rounded-full' />

            </div>
          </div>

          <div className="review-bx w-[90%] max-sm:h-auto pl-6 pr-6 m-auto mb-5 mt-9 h-80 border-l-2  border-r-2 border-b-[10px] border-b-[#cef1ea] drop-shadow-xl ">
            <div className="clientname  mt-5 space-x-2 flex p-8">
              <h2 className="font-lato font-normal  text-xl tracking-wider">Akhila Suri</h2>
              <p>|</p>
              <h3 className="font-lato text-lg text-[#d5d5d5]">Client</h3>
              <div className="clientImg  max-sm:h-20 max-sm:w-20 xl:w-24  ml-5 border-2 rounded-full xl:h-24">
                <img src={exp3} alt="" className='cover-fill xl:w-24 xl:h-24 max-sm:w-20 max-sm:h-20 rounded-full' />


              </div>

            </div> 
            <p className="r-client font-lato xl:p-8 -mt-5 text-left max-sm:text-sm xl:text-base">Janette cut my hair and did partial highlights and my experience was excellent! She took her time doing my hair and I
               am very pleased with the results. If you are still looking where to have your hair cut the best way, head for Glory!</p>
             
            <RiDoubleQuotesR className="text-right text-[#d5d5d5] max-sm:ml-52 xl:ml-96 xl:-mt-8  max-sm:h-14 max-sm:w-14 xl:h-20  xl:w-20"/>
          </div>
 */}
          {/* testing1 */}
          
          </Slider>
          
        </div>

      </div>

     
     
    </div>
  );
}

export default Testimonial;
