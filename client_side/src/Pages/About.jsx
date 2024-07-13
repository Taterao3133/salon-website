
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import Aboutservice from '../Images/about-service.svg'
import abt_img from '../Images/exp-pic3.jpg'

function About() {
  return (
    <div className="about_section">
    <div className="tagline bg-[#422A3C] w-full h-96 justify-items-center text-center ">
      <div className="container ml-96  pt-24 w-2/4  ">
        <h5 className="text-[#ECBFD3] font-semibold ml-3">Short Story About Us</h5>
        <h2 className="text-5xl font-bold text-[#F7E5C1] pt-2 font-playfair">The Big Story Behind, Our <br />Beautyness Center</h2>
        <div className="btn_c w-36 h-12 bg-[#BA7894] pt-3 rounded-md ml-80 mt-7">
          <p className="text-[#FFFFFF]">Contact Us</p>
        </div>
      </div>
    </div>
    <div className="values_content text-center mt-14">
        <p className="V_heading text-[#BA7894] font-semibold text-lg ">Our Values...</p>
        <p className="v_h2 font-playfair font-bold text-5xl pt-4"> The Works values we thrive for</p>
        <div className="container w-2/4 ml-80 space-y-6 ">
          <div className="box flex ml-28 mt-8 ">
            <div className="v_innner_content flex-[0.2] text-center  border-2 border-[#BA7894] bg-[#F7E5C1]  w-24 h-24 rounded-lg  ">
              <img src={Aboutservice} alt="img" className='fill-current text-[#BA7894] w-20 h-20   pt-3 ml-5'/>
            </div>
            <div className="v_innner_content flex-[0.8] text-left ml-10 ">
              <p className='font-playfair font-bold text-xl'>Beauty Experts</p>
              <p className='font-manrope text-[#555555] text-base'>"Our team of beauty experts is dedicated to transforming your look with professional expertise and a touch of elegance."</p>
              
            </div>
          </div>

          <hr className="border-t border-[#D3D3D3]  mt-2 w-6/7 ml-28" />

          <div className="box flex ml-28 ">
            <div className="v_innner_content flex-[0.2] text-center  border-2 border-[#BA7894] bg-[#F7E5C1]  w-24 h-24 rounded-lg  ">
              <img src={Aboutservice} alt="img" className='fill-current text-[#BA7894] w-20 h-20   pt-3 ml-5'/>
            </div>
            <div className="v_innner_content flex-[0.8] text-left ml-10 ">
              <p className='font-playfair font-bold text-xl'>Great Service</p>
              <p className='font-manrope text-[#555555] text-base'>"Our salon offers a comprehensive range of services designed to cater to all your beauty needs. From precision haircuts and 
                vibrant coloring to relaxing spa treatments and professional makeup application, 
                our skilled team ensures you receive the highest level of care and expertise."</p>
              
            </div>
          </div>
          <hr className="border-t border-[#D3D3D3]  mt-2 w-6/7 ml-28" />
          <div className="box flex ml-28 ">
            <div className="v_innner_content flex-[0.2] text-center  border-2 border-[#BA7894] bg-[#F7E5C1]  w-24 h-24 rounded-lg  ">
              <img src={Aboutservice} alt="img" className='fill-current text-[#BA7894] w-20 h-20   pt-3 ml-5'/>
            </div>
            <div className="v_innner_content flex-[0.8] text-left ml-10 ">
              <p className='font-playfair font-bold text-xl'>100% Genuine</p>
              <p className='font-manrope text-[#555555] text-base'>
              "We pride ourselves on offering 100% genuine services and products. Using only top-quality, authentic items, our professional
               team ensures every treatment is safe and effective. Trust us to provide you with an exceptional beauty 
               experience that prioritizes your well-being and satisfaction."</p>
              
            </div>
          </div>
        </div>

    </div>
    <div className="about_us_section w-full h-[600px] bg-[#F7E5C1] mt-10 ">
      <div className="ab_box h-3/4 w-3/4  ml-48 pt-28 flex" >
        <div className="abt_img flex-[0.5] bg-[#422A3C]">
          <img src={abt_img} alt=""  className='w-3/4 h-100% ml-16 -mt-14' />
        </div>
        <div className="abt_content flex-[0.5]  bg-[#422A3C]">
          <p className='font-semibold font-mono text-white text-sm mt-6'>About Us</p>

          <p className='text-white text-3xl font-playfair mt-4'> It’s the bridge between <br />
           service  companies and consumers.</p>
           <p className='text-lg font-mono text-[#FFFFFF] mt-6 pr-4'>ServiceMarket.dk is a Copenhagen-based technology company known for our overview platform.
             Our aim is to simplify and improve everyday life for citizens in Denmark. 
             One platform that brings together all services in an easy and controlled environment.</p>
        </div>
      </div>

    </div>
    <div className="journey_section w-full h-[600px] flex">
      <div className="jl_box flex-[0.5] border-2 border-black pr-24 pl-24 pt-11 ">
        <p className='font-playfair text-[#422A3C] text-3xl font-bold'>The start of the journey</p>
        <p className='font-mono text-base text-[#555555] '> ServiceMarket.dk was founded in 2021 by two young entrepreneurs who saw a problem with the fragmented service industry in Denmark.
           There were thousands of small businesses offering services, but it was difficult for consumers to find them and know which ones to choose. 
           They developed the idea of creating a platform that would bring all these service providers together in one place, 
           making it easier for consumers to find what they need and get their issues resolved quickly and easily. 
          Without having to go to many different websites, each with their own booking system.</p>

          <p className='font-playfair text-xl text-[#141414]'>Our Methodology</p>

          <div className="OM flex">
            <div className="jicon"><IoMdCheckmarkCircleOutline /></div>
            <div className="jcontent">
              <p>tftftf</p>
              <p>tftftf</p>
            </div>
          </div>
          <div className="OM flex">
            <div className="jicon"><IoMdCheckmarkCircleOutline /></div>
            <div className="jcontent">
              <p>tftftf</p>
              <p>tftftf</p>
            </div>
          </div>
          <div className="OM flex">
            <div className="jicon"><IoMdCheckmarkCircleOutline /></div>
            <div className="jcontent">
              <p>tftftf</p>
              <p>tftftf</p>
            </div>
          </div>
          <div className="OM flex">
            <div className="jicon"><IoMdCheckmarkCircleOutline /></div>
            <div className="jcontent">
              <p>tftftf</p>
              <p>tftftf</p>
            </div>
          </div>
      </div>

      <div className="jr_box flex-[0.5] border-2 border-black"></div>

    </div>
  </div>
  )
}

export default About