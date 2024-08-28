
 import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiDoubleQuotesR } from "react-icons/ri";
import kuser from '../../Images/k-user.png'
import tuser from '../../Images/t-user.png'
import kauser from '../../Images/kauser.png'
import auser from "../../Images/a-user.png"
import vauser from "../../Images/Va-user.png"
import mauser from "../../Images/ma-user.png"

function Testimonial() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,

  };

  return (
    <div className="container min-w-full h-auto pb-16 text-center bg-[#ffffff] xl:mt-6 xl:mb-6">
      <div className="inner-c w-[80%] xl:mt-10 h-auto  m-auto lg:flex  xl:flex">
        <div className="header-c  h-auto  flex-[0.5] max-sm:pt-5 xl:p-5">
          <div className="h max-sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-wider font-playfair text-left max-sm: max-sm:mt-9 md:pt-8 xl:ml-7 xl:mt-5 font-semibold  "><p>Testimonials
            </p>
            <hr className='max-sm:hidden border-[2px] w-24 md:mt-5 mt-12 border-[#cef1ea]  '/> 
            <p className='xl:ml-28 md:ml-28 md:-mt-5 xl:-mt-7'>Of Our Clients</p>
          </div>
          <p className="font-raleway tracking-wide max-sm:text-base xl:text-lg text-gray-800 max-sm:mt-3 xl:p-5 text-left font-medium">Thanks to our clients’ regular reviews, testimonials, and comments we are able to improve our salon.</p>
          <p className="font-lato -mt-2 max-sm:text-sm xl:text-base text-gray-500 max-sm:mt-3 xl:p-5 text-left">Unlike other salons, we prefer to maintain a constant connection with our customers and receive feedback on every service, whether
             it’s a simple haircut or complex wedding makeup. If you’ve already visited Unique Beauty Salon, feel free to contact us and send your testimonial.</p>
        </div>
        <div className="header-test overflow-hidden pb-5 flex-[0.5]">
          <Slider {...settings}>
            <div className="review-bx w-[90%] max-sm:h-auto p-0 m-auto lg:h-auto xl:mb-5 mt-1 h-80 border-l-2 border-r-2 border-b-[10px] border-b-[#cef1ea] drop-shadow-xl">
              <div className="clientname flex items-center mt-5 p-0">
                <div className="flex-[0.8] lg:flex-[0.6] ">
                  <h2 className="font-lato font-normal text-xl tracking-wider">Kalpana</h2>
                  <h3 className="font-lato text-lg text-[#d5d5d5]">Client</h3>
                </div>
                <div className="clientImg flex-[0.2] lg:flex-[0.4]">
                  <img src={kauser} alt="" className='w-16 h-16 md:w-24 md:h-24 xl:w-20 xl:h-20 rounded-full border-2 object-cover' />
                </div>
              </div>
              <p className="r-client font-lato xl:p-8 pt-1 text-left max-sm:text-sm lg:text-sm lg:pr-2 lg:pl-2 xl:text-base">
                Hi I'm Kalpana and I am sharing my experience here. Recently I went to this salon and it was awesome.
                Her talk is so polite and friendly, and she looks like she has experience. She did a good job yaar.
              </p>
              <RiDoubleQuotesR className="text-right text-[#d5d5d5] xl:ml-96  lg:ml-72 lg:w-14   lg:-mt-0 xl:-mt-8 md:w-20 md:h-20 md:ml-[450px] md:opacity-70 max-sm:h-14 max-sm:w-14 xl:h-20 xl:w-20" />
            </div>

            <div className="review-bx w-[90%] max-sm:h-auto p-0 m-auto lg:h-auto xl:mb-5 mt-1 h-80 border-l-2 border-r-2 border-b-[10px] border-b-[#cef1ea] drop-shadow-xl">
              <div className="clientname flex items-center mt-5 p-0">
                <div className="flex-[0.8] lg:flex-[0.6] ">
                  <h2 className="font-lato font-normal text-xl tracking-wider">Akshaya Padigela</h2>
                  <h3 className="font-lato text-lg text-[#d5d5d5]">Client</h3>
                </div>
                <div className="clientImg flex-[0.2] lg:flex-[0.4]">
                  <img src={auser} alt="" className='w-16 h-16 md:w-24 md:h-24 xl:w-20 xl:h-20 rounded-full border-2 object-cover' />
                </div>
              </div>
              <p className="r-client font-lato xl:p-8 pt-1 text-left max-sm:text-sm lg:text-sm lg:pr-2 lg:pl-2 xl:text-base">
              I don’t usually write hair salon reviews, but I can’t even begin how impressed I am with this salon. When it comes to haircutting and styling, 
              this hairdresser is the ultimate. She inquired as to how I needed it cut. She did so with perfection and the attitude that everyone who leaves her chair
               symbolizes her identity. She can handle all kinds of hair as she have done with my very silk hair.I’ve finally found my go-to place. You will not be disappointed.I strongly suggest it!!!
              </p>
              <RiDoubleQuotesR className="text-right text-[#d5d5d5] xl:ml-96  lg:ml-72 lg:w-14   lg:-mt-0 xl:-mt-8 md:w-20 md:h-20 md:ml-[450px] md:opacity-70 max-sm:h-14 max-sm:w-14 xl:h-20 xl:w-20" />
            </div>

            <div className="review-bx w-[90%] max-sm:h-auto p-0 m-auto lg:h-auto xl:mb-5 mt-1 h-80 border-l-2 border-r-2 border-b-[10px] border-b-[#cef1ea] drop-shadow-xl">
              <div className="clientname flex items-center mt-5 p-0">
                <div className="flex-[0.8] lg:flex-[0.6] ">
                  <h2 className="font-lato font-normal text-xl tracking-wider">TanwveerWaheed</h2>
                  <h3 className="font-lato text-lg text-[#d5d5d5]">Client</h3>
                </div>
                <div className="clientImg flex-[0.2] lg:flex-[0.4]">
                  <img src={tuser} alt="" className='w-16 h-16 md:w-24 md:h-24 xl:w-20 xl:h-20 rounded-full border-2 object-cover' />
                </div>
              </div>
              <p className="r-client font-lato xl:p-8 pt-1 text-left max-sm:text-sm lg:text-sm lg:pr-2 lg:pl-2 xl:text-base">
              Not every salon is professional and worthful. Got the facial with amazing result which is worthful. Glad with the 
              service and hoping to be the best in upcoming days.... I recommend to visit....
                You won't regret on spending.... <br />
                <span className='font-bold'>Services</span> <br />
                Skin care, Facials
              </p>
              <RiDoubleQuotesR className="text-right text-[#d5d5d5] xl:ml-96  lg:ml-72 lg:w-14   lg:-mt-0 xl:-mt-8 md:w-20 md:h-20 md:ml-[450px] md:opacity-70 max-sm:h-14 max-sm:w-14 xl:h-20 xl:w-20" />
            </div>

            <div className="review-bx w-[90%] max-sm:h-auto p-0 m-auto lg:h-auto xl:mb-5 mt-1 h-80 border-l-2 border-r-2 border-b-[10px] border-b-[#cef1ea] drop-shadow-xl">
              <div className="clientname flex items-center mt-5 p-0">
                <div className="flex-[0.8] lg:flex-[0.6] ">
                  <h2 className="font-lato font-normal text-xl tracking-wider">Vaishu Kummu </h2>
                  <h3 className="font-lato text-lg text-[#d5d5d5]">Client</h3>
                </div>
                <div className="clientImg flex-[0.2] lg:flex-[0.4]">
                  <img src={vauser} alt="" className='w-16 h-16 md:w-24 md:h-24 xl:w-20 xl:h-20 rounded-full border-2 object-cover' />
                </div>
              </div>
              <p className="r-client font-lato xl:p-8 pt-1 text-left max-sm:text-sm lg:text-sm lg:pr-2 lg:pl-2 xl:text-base">
              Really beautiful salon and beautiful service also. Definitely you will also like the service of unique beautysalon. 
              Trust me please visit it first... Truly it's unique as it's name ... 😊 …
              </p>
              <RiDoubleQuotesR className="text-right text-[#d5d5d5] xl:ml-96  lg:ml-72 lg:w-14   lg:-mt-0 xl:-mt-8 md:w-20 md:h-20 md:ml-[450px] md:opacity-70 max-sm:h-14 max-sm:w-14 xl:h-20 xl:w-20" />
            </div>

            <div className="review-bx w-[90%] max-sm:h-auto p-0 m-auto lg:h-auto xl:mb-5 mt-1 h-80 border-l-2 border-r-2 border-b-[10px] border-b-[#cef1ea] drop-shadow-xl">
              <div className="clientname flex items-center mt-5 p-0">
                <div className="flex-[0.8] lg:flex-[0.6] ">
                  <h2 className="font-lato font-normal text-xl tracking-wider">Kanugula Srija</h2>
                  <h3 className="font-lato text-lg text-[#d5d5d5]">Client</h3>
                </div>
                <div className="clientImg flex-[0.2] lg:flex-[0.4]">
                  <img src={kuser} alt="" className='w-16 h-16 md:w-24 md:h-24 xl:w-20 xl:h-20 rounded-full border-2 object-cover' />
                </div>
              </div>
              <p className="r-client font-lato xl:p-8 pt-1 text-left max-sm:text-sm lg:text-sm lg:pr-2 lg:pl-2 xl:text-base">
                 The salon wos super hygienic and the service also to good 👍 I love this and also they wos full friendly ❣️ <br />
                 <span className='font-bold'> Services</span> <br />
                  Bridal services, Eyebrow beautification, Eyebrow shaping, Makeup, Waxing, Skin care, Manicure, Facials
              </p>
              <RiDoubleQuotesR className="text-right text-[#d5d5d5] xl:ml-96  lg:ml-72 lg:w-14   lg:-mt-0 xl:-mt-8 md:w-20 md:h-20 md:ml-[450px] md:opacity-70 max-sm:h-14 max-sm:w-14 xl:h-20 xl:w-20" />
            </div>

            <div className="review-bx w-[90%] max-sm:h-auto p-0 m-auto lg:h-auto xl:mb-5 mt-1 h-80 border-l-2 border-r-2 border-b-[10px] border-b-[#cef1ea] drop-shadow-xl">
              <div className="clientname flex items-center mt-5 p-0">
                <div className="flex-[0.8] lg:flex-[0.6] ">
                  <h2 className="font-lato font-normal text-xl tracking-wider">Meghana Gourishetty</h2>
                  <h3 className="font-lato text-lg text-[#d5d5d5]">Client</h3>
                </div>
                <div className="clientImg flex-[0.2] lg:flex-[0.4]">
                  <img src={mauser} alt="" className='w-16 h-16 md:w-24 md:h-24 xl:w-20 xl:h-20 rounded-full border-2 object-cover' />
                </div>
              </div>
              <p className="r-client font-lato xl:p-8 pt-1 text-left max-sm:text-sm lg:text-sm lg:pr-2 lg:pl-2 xl:text-base">
              <span className='font-bold'>Services </span> <br />
              Spa services <br />
               <span className='font-bold'>Hair type</span> <br />
              Iam very happy with the hair spa experience I never feel any rough service from them.thank you so much akka..
              </p>
              <RiDoubleQuotesR className="text-right text-[#d5d5d5] xl:ml-96  lg:ml-72 lg:w-14   lg:-mt-0 xl:-mt-8 md:w-20 md:h-20 md:ml-[450px] md:opacity-70 max-sm:h-14 max-sm:w-14 xl:h-20 xl:w-20" />
            </div>
            
           {/* Repeat for other testimonials */}
            {/* ... */}
          </Slider>
        </div>
          </div>
    </div>
  );
}

export default Testimonial;
