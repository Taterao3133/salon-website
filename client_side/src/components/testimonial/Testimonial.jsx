// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
 import exp3 from '../../Images/s-1.jpg';
// import { useEffect, useState } from "react";
 import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiDoubleQuotesR } from "react-icons/ri";
import kuser from '../../Images/k-user.png'
import tuser from '../../Images/t-user.png'
import user1 from '../../Images/user1.png'

function Testimonial() {

  // const [reviews, setReviews] = useState([]);

  // useEffect(() => {
  //   const fetchReviews = async () => {
  //     const apiKey = 'AIzaSyAMqjcSawQCHa8oOF_Z6Un6Wh2FI-ieGRc';
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
        <div className="header-test overflow-hidden pb-5    flex-[0.5] row">
        <Slider {...settings} >
          {/* original */}
          <div className="review-bx w-[90%] max-sm:h-auto pl-6 pr-6 m-auto max-sm:mb-2 xl:mb-5 mt-9 h-80 border-l-2  border-r-2 border-b-[10px] border-b-[#cef1ea] drop-shadow-xl ">
            <div className="clientname  mt-5 space-x-2 flex p-8 max-sm:p-2">
              <h2 className="font-lato font-normal  text-xl tracking-wider">Kalpana </h2>
              <p>|</p>
              <h3 className="font-lato text-lg text-[#d5d5d5]">Client</h3>
              <div className="clientImg justify-end-mt-5   md:h-24 md:w-24  xl:w-20  ml-5  rounded-full xl:h-20">
                <img src={exp3} alt="" className='cover-fill md:ml-56 md:-mt-8 border-2 md:h-24 md:w-24 xl:w-20 xl:h-20 max-sm:w-16 max-sm:h-16 rounded-full' />

              </div>
            </div> 
            <p className="r-client font-lato xl:p-8 max-sm:mt-5 md:-mt-12 md:pr-14 md:pl-4 -mt-5 text-left max-sm:text-sm xl:text-base">Hi I'm kalpana  and I am sharing my experience here.
            Recently I went to this salon  and It was awesome. Her talk is so polite and friendly and she looks like experience she done good job yaar.</p>
             
            <RiDoubleQuotesR className="text-right text-[#d5d5d5] max-sm:ml-52 xl:ml-96 xl:-mt-8 md:w-20 md:h-20 md:ml-[450px] md:opacity-70 m max-sm:h-14 max-sm:w-14 xl:h-20  xl:w-20"/>

          </div>
          {/* 2nd */}
          <div className="review-bx w-[90%] max-sm:h-auto pl-6 pr-6 m-auto max-sm:mb-14 xl:mb-5 mt-9 h-80 border-l-2  border-r-2 border-b-[10px] border-b-[#cef1ea] drop-shadow-xl ">
            <div className="clientname  mt-5 space-x-2 flex p-8 ">
              <h2 className="font-lato font-normal  text-xl tracking-wider">Akshaya Padigela</h2>
              <p>|</p>
              <h3 className="font-lato text-lg text-[#d5d5d5]">Client</h3>
              <div className="clientImg justify-end    max-sm:h-20 max-sm:w-28 md:h-24 md:w-24  xl:w-20  ml-5  rounded-full xl:h-20">
                <img src={user1} alt="" className='cover-fill md:ml-56 md:-mt-8 border-2 md:h-24 xl:justify-items-end xl:ml-36 md:w-24 xl:w-20 xl:h-20 max-sm:w-28 max-sm:h-auto rounded-full' />

              </div>
            </div> 
            <p className="r-client font-lato xl:p-4 md:-mt-12 md:pr-14 md:pl-4 xl:-mt- -mt-5 text-left max-sm:text-sm xl:text-base">I don’t usually write hair salon reviews, but I can’t even begin how impressed I am with this salon.
               When it comes to haircutting and styling, this hairdresser is the ultimate. She inquired as to how I needed it cut. She did so with perfection and the attitude that everyone who leaves her chair symbolizes her 
               identity. She can handle all kinds of hair as she have done with my very silk hair.I’ve finally found my go-to place. You will not be disappointed.I strongly suggest it!!!</p>
             
            <RiDoubleQuotesR className="text-right text-[#d5d5d5] max-sm:ml-52 xl:ml-96 xl:-mt-8 md:w-20 md:h-20 md:ml-[450px] md:opacity-70 m max-sm:h-14 max-sm:w-14 xl:h-20  xl:w-20"/>

          </div>
          <div className="review-bx w-[90%] max-sm:h-auto pl-6 pr-6 m-auto max-sm:mb-14 xl:mb-5 mt-9 h-80 border-l-2  border-r-2 border-b-[10px] border-b-[#cef1ea] drop-shadow-xl ">
            <div className="clientname  mt-5 space-x-2 flex p-8 max-sm:p-2">
              <h2 className="font-lato font-normal  text-xl tracking-wider">Kanugula Srija</h2>
              <p>|</p>
              <h3 className="font-lato text-lg text-[#d5d5d5]">Client</h3>
              <div className="clientImg justify-end-mt-5  max-sm:h-20 max-sm:w-20 md:h-24 md:w-24  xl:w-20  ml-5  rounded-full xl:h-20">
                <img src={tuser} alt="" className='cover-fill md:ml-56 md:-mt-8 border-2 md:h-24 md:w-24 xl:w-20 xl:h-20 max-sm:w-16 max-sm:h-16 rounded-full' />

              </div>
            </div> 
            <p className="r-client font-lato xl:p-8 md:-mt-12 md:pr-14 md:pl-4 -mt-5 text-left max-sm:text-sm xl:text-base">The salon wos super hygienic and the service also to good 👍 
              I love this and also they wos full friendly ❣️<br/>
             <span className='font-bold'>Services </span><br />
              Bridal services, Eyebrow beautification, Eyebrow shaping, Makeup, Waxing, Skin care, Manicure, Facials</p>
             
            <RiDoubleQuotesR className="text-right text-[#d5d5d5] max-sm:ml-52 xl:ml-96 xl:-mt-8 md:w-20 md:h-20 md:ml-[450px] md:opacity-70 m max-sm:h-14 max-sm:w-14 xl:h-20  xl:w-20"/>

          </div>
          <div className="review-bx w-[90%] max-sm:h-auto pl-6 pr-6 m-auto max-sm:mb-14 xl:mb-5 mt-9 h-80 border-l-2  border-r-2 border-b-[10px] border-b-[#cef1ea] drop-shadow-xl ">
            <div className="clientname  mt-5 space-x-2 flex p-8 max-sm:p-2">
              <h2 className="font-lato font-normal  text-xl tracking-wider">Tanveer Waheed</h2>
              <p>|</p>
              <h3 className="font-lato text-lg text-[#d5d5d5]">Client</h3>
              <div className="clientImg justify-end  max-sm:h-20 max-sm:w-20 md:h-24 md:w-24  xl:w-20  ml-5  rounded-full xl:h-20">
                <img src={kuser} alt="" className='cover-fill md:ml-56 md:-mt-8 border-2 md:h-24 xl:ml-32 md:w-24 xl:w-20 xl:h-20 max-sm:w-16 max-sm:h-16 rounded-full' />

              </div>
            </div> 
            <p className="r-client font-lato xl:p-8 md:-mt-12 md:pr-14 md:pl-4 -mt-5 text-left max-sm:text-sm xl:text-base">Not every salon is professional and worthful. 
              Got the facial with amazing result which is worthful. Glad with the service and hoping to be the best in upcoming days.... I recommend to visit....
              You won't regret on spending.... <br />
              <span className='font-bold'>Services</span><br />
              Skin care, Facials</p>
             
            <RiDoubleQuotesR className="text-right text-[#d5d5d5] max-sm:ml-52 xl:ml-96 xl:-mt-8 md:w-20 md:h-20 md:ml-[450px] md:opacity-70 m max-sm:h-14 max-sm:w-14 xl:h-20  xl:w-20"/>

          </div>
          <div className="review-bx w-[90%] max-sm:h-auto pl-6 pr-6 m-auto max-sm:mb-14 xl:mb-5 mt-9 h-80 border-l-2  border-r-2 border-b-[10px] border-b-[#cef1ea] drop-shadow-xl ">
            <div className="clientname  mt-5 space-x-2 flex p-8 max-sm:p-2">
              <h2 className="font-lato font-normal  text-xl tracking-wider">Vennela Reddy</h2>
              <p>|</p>
              <h3 className="font-lato text-lg text-[#d5d5d5]">Client</h3>
              <div className="clientImg justify-end-mt-5  max-sm:h-20 max-sm:w-20 md:h-24 md:w-24  xl:w-20  ml-5  rounded-full xl:h-20">
                <img src={user1} alt="" className='cover-fill md:ml-56 md:-mt-8 border-2 md:h-24 md:w-24 xl:w-20 xl:h-20 max-sm:w-16 max-sm:h-16 rounded-full' />

              </div>
            </div> 
            <p className="r-client font-lato xl:p-8 md:-mt-12 md:pr-14 md:pl-4 -mt-5 text-left max-sm:text-sm xl:text-base">One to one communication is good
              Service also better done
              If you want unique services Then go and visit UNIQUE Parlour <br />
              <span className='font-bold'>Services</span> <br />
              Waxing</p>
             
            <RiDoubleQuotesR className="text-right text-[#d5d5d5] max-sm:ml-52 xl:ml-96 xl:-mt-8 md:w-20 md:h-20 md:ml-[450px] md:opacity-70 m max-sm:h-14 max-sm:w-14 xl:h-20  xl:w-20"/>

          </div>
          <div className="review-bx w-[90%] max-sm:h-auto pl-6 pr-6 m-auto max-sm:mb-14 xl:mb-5 mt-9 h-80 border-l-2  border-r-2 border-b-[10px] border-b-[#cef1ea] drop-shadow-xl ">
            <div className="clientname  mt-5 space-x-2 flex p-8">
              <h2 className="font-lato font-normal  text-xl tracking-wider">Sonali Patil</h2>
              <p>|</p>
              <h3 className="font-lato text-lg text-[#d5d5d5]">Client</h3>
              <div className="clientImg justify-end-mt-5  max-sm:h-20 max-sm:w-20 md:h-24 md:w-24  xl:w-20  ml-5  rounded-full xl:h-20">
                <img src={tuser} alt="" className='cover-fill md:ml-56 md:-mt-8 border-2 md:h-24 md:w-24 xl:w-20 xl:h-20 max-sm:w-16 max-sm:h-16 rounded-full' />

              </div>
            </div> 
            <p className="r-client font-lato xl:p-8 md:-mt-12 md:pr-14 md:pl-4 -mt-5 text-left max-sm:text-sm xl:text-base"><span className='font-bold'>Services</span> <br />
              Massage, Skin care, Facials <br />
             <span className='font-bold'> Specialties</span> <br />
              MY facial experience was good & I like the massage 🤗 Super work 👌</p>
             
            <RiDoubleQuotesR className="text-right text-[#d5d5d5] max-sm:ml-52 xl:ml-96 xl:-mt-8 md:w-20 md:h-20 md:ml-[450px] md:opacity-70 m max-sm:h-14 max-sm:w-14 xl:h-20  xl:w-20"/>

          </div>

          {/* dummis */}
          
          
          {/* testing1 */}
          
          </Slider>
          
        </div>

      </div>

     
     
    </div>
  );
}

export default Testimonial;
