import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import exp3 from '../../Images/exp-pic4.jpg';
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonial() {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const apiKey = 'YOUR_GOOGLE_PLACES_API_KEY';
      const placeId = 'YOUR_PLACE_ID';
      const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=review&key=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setReviews(data.result.reviews);
      } catch (error) {
        console.error(error);
      }
    };

    fetchReviews();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <FaChevronRight />,
    prevArrow: <FaChevronLeft />,
  };

  return (
    <div className="container min-w-full h-[760px] text-center bg-[#EBF3F5] mt-4">
      <p className='font-semibold text-[#BA7894] pt-6'>TESTIMONIALS</p>
      <p className='font-bold text-5xl mt-1 font-playfair text-[#141414]'>
        What our Customers Say
      </p>
      <div className="comment_box bg-[#422A3C] h-[500px] max-w-[1100px] mx-auto mt-14 rounded-3xl">
        <Slider {...settings}>
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div key={index} className="grid grid-cols-2 gap-4">
                <div className="l_content mt-28 ml-56 flex flex-nowrap">
                  <div className="white_box w-10 h-32 bg-white rounded-3xl"></div>
                  <div className="white_box ml-3 w-10 h-60 bg-white rounded-3xl"></div>
                  <div className="img_user w-36 h-36 ml-16 mt-14 border-2 border-white rounded-full absolute">
                    <img src={exp3} alt="" className='user_img object-cover h-36 w-36 p-1 rounded-full overflow-hidden' />
                  </div>
                </div>
                <div className="R_content text-left text-white">
                  <div className="box-c h-80 max-w-lg mt-28 mr-8">
                    <div className="c_section ml-5">
                      <div className="u_name font-semibold text-[20px]">{review.author_name}</div>
                    </div>
                    <div className="c_section2 mt-10 ml-5 text-lg pr-10">
                      {review.text}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </Slider>
      </div>
      <div className="pageChange_buttons justify-center pt-10 gap-2 flex flex-nowrap">
        <div className="Bbtn border-2 h-14 w-14 bg-[white] text-[#422A3C] rounded-full pl-3 pt-4">
          <FaChevronLeft className='w-6 h-6' />
        </div>
        <div className="Bbtn border-2 h-14 w-14 bg-[#422A3C] text-white rounded-full pl-4 pt-4">
          <FaChevronRight className='w-6 h-6' />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
