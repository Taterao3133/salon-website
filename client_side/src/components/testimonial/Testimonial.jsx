import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiDoubleQuotesR } from "react-icons/ri";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

function Testimonial() {
  const [UserReviewsData, setUserReviewsData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchReviewsData = async () => {
      try {
        const portfolioDoc = await getDoc(doc(db, "siteDetails", "Reviews"));
        if (portfolioDoc.exists()) {
          const data = portfolioDoc.data();
          if (Array.isArray(data.items)) {
            setUserReviewsData(data.items);
          } else {
            console.warn("Items field is not an array:", data.items);
            setUserReviewsData([]);
          }
        } else {
          console.log("Reviews data not found");
        }
      } catch (error) {
        console.error("Error fetching Reviews data:", error);
      }
    };

    fetchReviewsData();
  }, []);

  useEffect(() => {
    console.log(UserReviewsData);
  }, [UserReviewsData]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  useEffect(() => {
    if (UserReviewsData.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % UserReviewsData.length);
      }, 3000);
      return () => clearInterval(interval); 
    }
  }, [UserReviewsData]);

  return (
    <div className="container min-w-full h-auto pb-16 text-center bg-[#ffffff] xl:mt-6 xl:mb-6">
      <div className="inner-c w-[80%] xl:mt-10 h-auto  m-auto lg:flex  xl:flex">
        <div className="header-c h-auto flex-[0.5] max-sm:pt-5 xl:p-5">
          <div className="h max-sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-wider font-playfair text-left max-sm:mt-9 md:pt-8 xl:ml-7 xl:mt-5 font-semibold">
            <p>Testimonials</p>
            <hr className="max-sm:hidden border-[2px] w-24 md:mt-5 mt-12 border-[#cef1ea]" />
            <p className="xl:ml-28 md:ml-28 md:-mt-5 xl:-mt-7">Of Our Clients</p>
          </div>
          <p className="font-raleway tracking-wide max-sm:text-base xl:text-lg text-gray-800 max-sm:mt-3 xl:p-5 text-left font-medium">
            Thanks to our clients’ regular reviews, testimonials, and comments we are able to improve our salon.
          </p>
          <p className="font-lato -mt-2 max-sm:text-sm xl:text-base text-gray-500 max-sm:mt-3 xl:p-5 text-left">
            Unlike other salons, we prefer to maintain a constant connection with our customers and receive feedback on
            every service, whether it’s a simple haircut or complex wedding makeup.
          </p>
        </div>
        <div className="header-test  overflow-hidden pb-5 xl:mt-11 md:mt-7 flex-[0.5]">
         <Slider {...settings}>

          {Array.isArray(UserReviewsData) &&
             UserReviewsData.map((review, index) => (
              <div
                key={index}
                className="review-bx  w-[90%] max-sm:h-auto p-0 m-auto lg:h-auto xl:mb-5 mt-1 h-80 border-b-[10px] border-b-[#cef1ea] drop-shadow-xl"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                
                <div className="clientname flex items-center mt-5 p-0">
                  <div className="flex-[0.8] lg:flex-[0.6]">
                    <h2 className="font-lato font-normal text-xl tracking-wider">{review.UserName || "Anonymous"}</h2>
                    <h3 className="font-lato text-lg text-[#d5d5d5]">{review.role || "Client"}</h3>
                  </div>
                  <div className="clientImg flex-[0.2] lg:flex-[0.4]">
                    {review.imageUrl && (
                      <img
                        src={review.imageUrl}
                        alt={review.name || "Client"}
                        className="w-16 h-16 md:w-24 md:h-24 xl:w-20 xl:h-20 rounded-full border-2 object-cover"
                      />
                    )}
                  </div>
                </div>
                <p className="r-client font-lato xl:p-8 pt-1 text-left max-sm:text-sm max-sm:px-3 md:px-4 lg:text-sm xl:text-base">
                  {review.UserReview || "No review provided."}
                </p>
                <RiDoubleQuotesR className="text-right text-[#d5d5d5] xl:ml-96 lg:ml-72 lg:w-14 lg:-mt-0 xl:-mt-8 md:w-20 md:h-20 md:ml-[450px] max-sm:h-14 max-sm:w-14 xl:h-20 xl:w-20" />
              </div>
            ))}
            <div className="progression-btn flex ml-11 gap-2">
              {UserReviewsData.map((_, i) => (
                <div
                  key={i}
                  style={{ width: currentIndex === i ? '40px' : '16px' }}
                  className={`${
                    currentIndex === i ? 'bg-[#FD4755]' : 'border-2 border-black'
                  } h-3 rounded-[5px]`}
                ></div>
              ))}
            </div>
          </Slider>
        </div>
        
      </div>
    </div>
  );
}

export default Testimonial;
