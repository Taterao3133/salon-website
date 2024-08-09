
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Testimonial from "../components/testimonial/Testimonial";

import Aboutservice from '../Images/about-service.svg'
import abt_img from '../Images/exp-pic3.jpg'
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about_section overflow-hidden">
    <div className="tagline bg-[#422A3C] w-full xl:h-80 max-sm:h-52 justify-items-center  text-center ">
      <div className="container max-sm:m-auto xl:ml-96 pt-3  xl:pt-16 w-2/4  ">
        <h5 className="text-[#ECBFD3] max-sm:text-xs max-sm:pt-8 font-raleway font-semibold xl:ml-6 ">Short Story About Us</h5>
        <h2 className="xl:text-5xl max-sm:text-sm font-bold text-[#F7E5C1] pt-2 font-playfair">The Big Story Behind, Our <br />Beautyness Center</h2>
        <div className="btn_c max-sm:w-28 max-sm:9  max-sm:mt-7 xl:w-36 xl:h-12 bg-[#BA7894] max-sm:text-center xl:pt-3 rounded-md max-sm:m-auto xl:ml-80 xl:mt-7">
         <Link to='/contact'><p className="text-[#FFFFFF] max-sm:text-xs font-semibold max-sm:p-2">Contact Us</p></Link>
        </div>
      </div>
    </div>
    <div className="values_content text-center max-sm:mt-4 xl:mt-14">
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
    <div className="about_us_section w-full max-sm:h-auto max-sm:pb-6 xl:h-[600px] bg-[#F7E5C1] max-sm:mt-5 xl:mt-10 ">
      <div className="ab_box xl:h-3/4 xl:w-3/4 max-sm:w-5/6  max-sm:ml-8 xl:ml-48 xl:pt-28 flex" >
        <div className="abt_img flex-[0.5] max-sm:rounded-tl-lg max-sm:mt-8 bg-[#422A3C]">
          <img src={abt_img} alt=""  className='w-4/5 h-100% xl:ml-16  max-sm:ml-5 max-sm:mt-16 xl:-mt-14' />
        </div>
        <div className="abt_content flex-[0.5] max-sm:mt-8 max-sm:pb-3  max-sm:rounded-br-lg bg-[#422A3C]">
          <p className='font-semibold font-mono text-white max-sm:text-sm xl:text-sm max-sm:mt-6  xl:mt-6'>About Us</p>

          <p className='text-white max-sm:text-sm  xl:text-3xl  font-playfair max-sm:t-2 xl:mt-4'> It’s the bridge between <br />
           service  companies and consumers.</p>
           <p className='text-lg font-manrope text-[#FFFFFF] max-sm:pr-2 max-sm:text-xs xl:mt-6 xl:pr-4'>At us, we believe that every 
            client deserves a touch of elegance and sophistication. Our dedicated professionals combine their expertise with the latest trends
             to offer a range of beauty services designed to make you shine. Discover a place where your beauty needs are met with precision 
             and care, and where every visit is an experience to remember.</p>
        </div>
      </div>

    </div>
     {/* journey section... */}
    <div className="journey_section w-full max-sm:h-auto xl:h-[600px] flex">
      <div className="jl_box flex-[0.4] max-sm:p-6 xl:pr-16 xl:pl-24 xl:pt-24  ">
        <p className='font-playfair text-[#422A3C] max-sm:text-lg xl:text-3xl font-bold'>The start of the journey</p>
        <p className=' max-sm:text-xs font-raleway xl:text-base text-[#555555]  mt-2 '> ServiceMarket.dk was founded in 2021 by two young entrepreneurs who saw a problem with the fragmented service industry in Denmark.
           There were thousands of small businesses offering services, but it was difficult for consumers to find them and know which ones to choose. 
           They developed the idea of creating a.</p>

          <p className=' max-sm:hidden font-playfair text-xl mt-3 text-[#141414]'>Our Methodology :</p>

          <div className=" max-sm:hidden OM flex mt-3">
            <div className="jicon"><IoMdCheckmarkCircleOutline className="w-8 h-8" /></div>
            <div className="jcontent ml-3">
              <p className="font-bold font-lato text-lg">The Assessment Stage</p>
              <p className="font-raleway text-base">The point of using Lorem Ipsum is that it has a more-or-less normal letters.</p>
            </div>
          </div>
         
          <div className=" max-sm:hidden OM flex mt-3">
            <div className="jicon"><IoMdCheckmarkCircleOutline className="w-8 h-8" /></div>
            <div className="jcontent ml-3">
              <p className="font-bold font-mono text-lg">The Treatment Stage</p>
              <p className="font-raleway text-base">The point of using Lorem Ipsum is that it has a more-or-less normal letters.</p>
            </div>
          </div> 
      </div>

      <div className="jr_box flex-[0.6]   overflow-hidden ">
        <img src={abt_img} alt="" className=" w-4/5 h-/5 mt-10 "/>
      </div>

    </div>
    <p className='max-sm:ml-4 xl:hidden md:hidden font-playfair max-sm:text-lg max-sm:mt-1 text-[#141414]'>Our Methodology :</p>

          <div className="max-sm:ml-4 max-sm:pr-5 xl:hidden md:hidden OM flex max-sm:mt-2">
            <div className="jicon"><IoMdCheckmarkCircleOutline className="w-8 h-8" /></div>
            <div className="jcontent ml-3">
              <p className="font-bold font-lato text-base">The Assessment Stage</p>
              <p className="font-raleway max-sm:text-xs">The point of using Lorem Ipsum is that it has a more-or-less normal letters.</p>
            </div>
          </div>
         
          <div className="max-sm:ml-4 max-sm:pr-5 xl:hidden md:hidden OM flex max-sm:mt-2">
            <div className="jicon"><IoMdCheckmarkCircleOutline className="w-8 h-8" /></div>
            <div className="jcontent ml-3">
              <p className="font-bold font-lato  text-base">The Treatment Stage</p>
              <p className=" text-xs font-raleway">The point of using Lorem Ipsum is that it has a more-or-less normal letters.</p>
            </div>
          </div> 
   {/* testimonial */}
   <Testimonial/>
         
  </div>
  )
}

export default About