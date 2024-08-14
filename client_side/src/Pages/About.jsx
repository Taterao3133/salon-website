
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Testimonial from "../components/testimonial/Testimonial";


import home2 from '../Images/home-2.jpg'
import home3 from '../Images/home-3.jpg'
import home4 from '../Images/home-4.jpg'
import Aboutservice from '../Images/about-service.svg'
import abt_img from '../Images/exp-pic3.jpg'
import { Link } from "react-router-dom";
import { RiDoubleQuotesR } from "react-icons/ri";

function About() {
  return (
    <div className="about_section overflow-hidden">
    <div className="tagline bg-[#422A3C] w-full xl:h-80 max-sm:h-52 justify-items-center  text-center ">
      <div className="container max-sm:m-auto xl:ml-96 pt-11  xl:pt-24 xl:w-2/4  ">
        <h5 className="text-[#ECBFD3] max-sm:text-xs max-sm:pt-8 font-raleway font-semibold xl:ml-6 ">Short Story About Us</h5>
        <h2 className="xl:text-5xl max-sm:text-sm font-bold text-[#F7E5C1] pt-2 font-playfair">The Big Story Behind, Our <br />Beautyness Center</h2>
        <div className="btn_c max-sm:w-28 max-sm:9  max-sm:mt-4 xl:w-36 xl:h-12 bg-[#BA7894] max-sm:text-center xl:pt-3 rounded-md max-sm:m-auto xl:m-auto xl:mt-7">
         <Link to='/contact'><p className="text-[#FFFFFF] max-sm:text-xs font-semibold max-sm:p-2">Contact Us</p></Link>
        </div>
      </div>
    </div>
    {/* values section */}
    <div className="values_content pb-10 text-center max-sm:mt-4 xl:mt-14">
        <p className="V_heading text-[#BA7894] font-semibold max-sm:text-xs xl:text-lg ">Our Values...</p>
        <p className="v_h2 font-playfair font-bold max-sm:text-base xl:text-5xl max-sm:pt-2 xl:pt-4"> The Works values we thrive for</p>
        <div className="container xl:w-2/4 max-sm:p-3 xl:ml-80 xl:space-y-6 ">
          <div className="box flex max-sm:ml-14 xl:ml-28 xl:mt-8 ">
            <div className="v_innner_content flex-[0.2] text-center  xl:border-2 xl: border-[#BA7894] xl:bg-[#F7E5C1] max-sm:w-16 max-sm:h-auto xl:w-24 xl:h-24 xl:rounded-lg  ">
              <img src={Aboutservice} alt="img" className='fill-current text-[#BA7894] w-20 h-20 max-sm:border-2 max-sm:border-[#BA7894] max-sm:p-2 max-sm:mt-2 max-sm:rounded-lg max-sm:bg-[#F7E5C1] xl:pt-3 xl:ml-5'/>
            </div>
            <div className="v_innner_content flex-[0.8] max-sm:ml-5 text-left xl:ml-10 ">
              <p className='font-playfair font-bold max-sm:text-base xl:text-xl'>Beauty Experts</p>
              <p className='font-montserrat text-[#555555] max-sm:text-xs max-sm:pr-3 xl:text-base'>"Our team of beauty experts is dedicated to transforming your look with professional expertise and a touch of elegance."</p>
              
            </div>
          </div>

          <hr className="border-t border-[#D3D3D3] max-sm:mt-3 xl:mt-2 max-sm:w-5/6 max-sm:ml-12 xl:w-6/7 xl:ml-28" />

          <div className="box flex max-sm:ml-14 xl:ml-28 max-sm:mt-2 xl:mt-8 ">
            <div className="v_innner_content flex-[0.2] text-center  xl:border-2 xl:border-[#BA7894] xl:bg-[#F7E5C1] max-sm:w-16 max-sm:h-auto xl:w-24 xl:h-24 xl:rounded-lg   ">
              <img src={Aboutservice} alt="img" className='fill-current text-[#BA7894] w-20 h-20 xl:pt-3 xl:ml-5 max-sm:border-2 max-sm:border-[#BA7894] max-sm:p-2 max-sm:mt-2 max-sm:rounded-lg '/>
            </div>
            <div className="v_innner_content flex-[0.8] max-sm:ml-5 text-left xl:ml-10 ">
              <p className='font-playfair font-bold max-sm:text-base xl:text-xl'>Great Service</p>
              <p className='font-montserrat text-[#555555] max-sm:text-xs max-sm:pr-3 xl:text-base'>"Our salon offers a comprehensive range of services designed to cater to all your beauty needs. From precision haircuts and 
                vibrant coloring to relaxing spa treatments and professional makeup application, 
                our skilled team ensures you receive the highest level of care and expertise."</p>
              
            </div>
          </div>
          
          <hr className="border-t border-[#D3D3D3] max-sm:mt-3 xl:mt-2 max-sm:w-5/6 max-sm: max-sm:ml-12 xl:w-6/7 xl:ml-28" />

          <div className="box flex max-sm:ml-14 xl:ml-28 max-sm:mt-2 xl:mt-8">
            <div className="v_innner_content flex-[0.2] text-center xl:border-2 border-[#BA7894] xl:bg-[#F7E5C1] max-sm:w-16 max-sm:h-auto xl:w-24 xl:h-24 xl:rounded-lg">
                <img src={Aboutservice} alt="img" className='fill-current text-[#BA7894] w-20 h-20 xl:pt-3 xl:ml-5 max-sm:border-2 max-sm:border-[#BA7894] max-sm:p-2 max-sm:mt-2 max-sm:rounded-lg'/>
            </div>
            <div className="v_innner_content flex-[0.8] max-sm:ml-5 text-left xl:ml-10">
                <p className='font-playfair font-bold max-sm:text-base xl:text-xl'>100% Genuine</p>
                <p className='font-montserrat text-[#555555] max-sm:text-xs max-sm:pr-3 xl:text-base'>"We pride ourselves on offering 100% genuine services and products. 
                  Using only top-quality, authentic items, our professional team ensures every treatment is safe and effective. 
                  Trust us to provide you with an exceptional beauty experience that prioritizes your well-being and satisfaction."</p>
            </div>
        </div>
        </div>

    </div> 
    {/* salon details */}
    <div className="s-details bg-[#ffffff] max-sm:mt-5 max-sm:pt-10 xl:pt-5 pb-5 h-auto w-full">
        <div className="in-details  w-[80%]  m-auto xl:flex h-auto">
          <div className="r-c flex-[0.5] xl:p-10 ">
          <hr className='max-sm:hidden border-[2px] w-20 mt-14  :border-[#cef1ea]  '/>
            <h2 className='max-sm:text-3xl xl:text-5xl font-playfair font-semibold tracking-wider xl:ml-24 xl:-mt-7 '>Our Beauty Salon</h2>
            <p className='font-raleway max-sm:mt-3  xl:mt-5 max-sm:text-base xl:text-lg pr-5 font-medium'><span className=' font-bold'>Unique Beauty Salon</span> offers beauty services of an 
            utmost level to all LA residents and guests who are looking for high-quality beauty care.</p>
            <p className='font-lato max-sm:text-sm xl:text-base max-sm:mt-3 xl:mt-5 text-gray-500'>Our Beauty Salon is based on the belief that our customers' needs are of the utmost importance. Our entire team is committed to
               meeting those needs. As a result, a high percentage of our business is from regular customers.</p>
            <img src={home2} alt=""  className= ' max-sm:mt-5 xl:mt-10'/>
            <RiDoubleQuotesR className="text-right text-[#d5d5d5]  mt-5 max-sm:w-16 max-sm:h-16 xl:h-24 xl:w-24"/>
            <p className='xl:text-3xl max-sm:text-xl font-playfair font-bold  xl:ml-14 max-sm:-mt-12 xl:-mt-16 xl:pr-7 text-right'>We are responsible for the quality of the services you receive!</p>


          </div>
          <div className="l-c flex-[0.5] xl:p-10 max-sm:mt-3 ">
            <img src={home3} alt="" />
            <p className='font-lato max-sm:text-sm xl:text-base max-sm:mt-3 xl:mt-5 text-gray-500'>All our salons in LA are uniquely designed to offer our clients the best beauty, hairstyling, and skin care experience, which we hope you and 
              your body will appreciate. Let yourself relax and be pampered at the best salon in California!</p>
            <img src={home4} alt="" className='max-sm:mt-3 xl:mt-5' />
          </div>

        </div>

      </div>
     {/* journey section... */}
    <div className="journey_section w-full max-sm:h-auto xl:h-auto max-sm:pb-3  xl:pb-8 xl:flex">
      <div className="jl_box flex-[0.4] max-sm:p-6 xl:pr-16 xl:pl-24 xl:pt-24  ">
        <p className='font-playfair text-[#422A3C] max-sm:text-lg xl:text-3xl font-bold'>The start of the journey</p>
        <p className=' max-sm:text-xs font-raleway xl:text-base text-[#555555]  mt-2 '> Akhila Suri embarked on her journey to create a unique beauty salon in December 2023, 
          bringing with her two years of hands-on experience in the beauty care industry. With a passion for helping clients feel their best, she combined her expertise with a vision for 
          a salon that offers personalized and innovative services. Her dedication to quality and customer satisfaction has quickly set her salon apart, making it a trusted 
          destination for those seeking exceptional beauty care.
           Akhila's journey reflects her commitment to creating a welcoming space where every client feels valued and beautiful.</p>

      {/* big screen */}
          <p className=' max-sm:hidden font-playfair text-xl mt-3 text-[#141414]'>Our Methodology :</p>

          <div className=" max-sm:hidden OM flex mt-3">
            <div className="jicon"><IoMdCheckmarkCircleOutline className="w-8 h-8" /></div>
            <div className="jcontent ml-3">
              <p className="font-bold font-lato text-lg">The Assessment Stage</p>
              <p className="font-raleway text-base">In this stage, we take the time to understand your unique beauty needs. We assess your skin type, hair texture,
                 and personal preferences to craft a personalized beauty plan that suits you best.</p>
            </div>
          </div>
         
          <div className=" max-sm:hidden OM flex mt-3">
            <div className="jicon"><IoMdCheckmarkCircleOutline className="w-8 h-8" /></div>
            <div className="jcontent ml-3">
              <p className="font-bold font-mono text-lg">The Treatment Stage</p>
              <p className="font-raleway text-base">During this stage, our experienced team of beauty experts applies the tailored treatments, using top-quality products and techniques 
                to enhance your natural beauty. Our focus is on delivering results that leave you feeling confident and radiant.</p>
            </div>
          </div> 
      </div>

      <div className="jr_box flex-[0.6]   overflow-hidden xl:mt-10 ">
        <img src={abt_img} alt="" className=" max-sm:m-auto w-[80%] max-sm:mt-2 xl:mt-10 "/>
      </div>

    </div>
    {/* small screen */}
    <p className='max-sm:ml-6 xl:hidden md:hidden font-playfair max-sm:text-lg max-sm:mt-1 text-[#141414] '>Our Methodology :</p>

          <div className="max-sm:ml-6 max-sm:pr-5 xl:hidden md:hidden OM flex max-sm:mt-2">
            <div className="jicon"><IoMdCheckmarkCircleOutline className="w-8 h-8" /></div>
            <div className="jcontent ml-3">
              <p className="font-bold font-lato text-base">The Assessment Stage</p>
              <p className="font-raleway mt-1 max-sm:text-xs">In this stage, we take the time to understand your unique beauty needs. We assess your skin type, hair texture,
              and personal preferences to craft a personalized beauty plan that suits you best.</p>
            </div>
          </div>
         
          <div className="max-sm:ml-6 max-sm:pr-5 xl:hidden md:hidden OM flex max-sm:mt-2">
            <div className="jicon"><IoMdCheckmarkCircleOutline className="w-8 h-8" /></div>
            <div className="jcontent ml-3">
              <p className="font-bold font-lato  text-base">The Treatment Stage</p>
              <p className=" text-xs font-raleway mt-1 pb-5">During this stage, our experienced team of beauty experts applies the tailored treatments, using top-quality products and techniques 
              to enhance your natural beauty. Our focus is on delivering results that leave you feeling confident and radiant.</p>
            </div>
          </div> 
   {/* testimonial */}
   <Testimonial/>
         
  </div>
  )
}

export default About