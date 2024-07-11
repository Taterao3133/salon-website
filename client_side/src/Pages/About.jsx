import Aboutservice from '../Images/about-service.svg'

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
      <div className="ab_box h-3/4 w-3/4 border-2 border-red-400 ml-48 pt-28 flex" >
        <div className="abt_img flex-[0.5]">
          ima
        </div>
        <div className="abt_content flex-[0.5] border-2 border-red-700">
          dkdfkd
        </div>
      </div>

    </div>
  </div>
  )
}

export default About