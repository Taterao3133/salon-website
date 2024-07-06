import '../Home/Home.css'

import { IoIosSearch } from "react-icons/io";
import { BsCalendar2Date,  } from "react-icons/bs";
import Makeupicon from '../../Images/makeup1.svg'
import { FaRegStar } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";


import "@fontsource/manrope";

import exp1 from '../../Images/exp-pic3.jpg'
import exp2 from '../../Images/exp-pic2.jpg'
import exp3 from '../../Images/exp-pic4.jpg'


function Home() {
  return <>
     <div className="herosection  flex flex-nowrap">
        <div className="b_c bg-[#BA7894] w-[635px]">
            <div className=" bg_gradient  ">
              <div className="herocontent ml-[218px] pt-[207px]">
                  <p className='text-[#FFFFFF]'>HAIR SALON, BEAUTY SALON , WOMENS SALON  </p>
                  <h1 className='text-[#F7E5C1] font-playfair text-5xl font-semibold mb-6'>Find Your Service &<br/> Book Here</h1>
                  <p className='text-[#FFFFFF]'>The italic utility can be used to make text italic.
                   Likewise, the not-italic utility can be used to display text 
                   normally — typically to reset italic text at different breakpoints.</p>
                   <div className="search-box bg-[#F8F8F8] h-[80px] w-[730px] rounded-full mt-[52px]">
                    <div className="search-bc flex flex-nowrap space-x-[50px]" >
                      <div className="input-1 ml-11">
                        <p className='text-[#BA7894] font-semibold text-lg mt-3 '>Service Name</p>
                        <div className="search-icon flex flex-nowrap">
                        <input type="text" className='border-b-2 focus:outline-none border-[#786666] bg-[#F8F8F8] ' placeholder='Book Your Service' />
                          <IoIosSearch  className='ml-[-18px] mt-1 h-5 w-5 cursor-pointer'/>
                        </div>
                      </div>
                      <div className="input-2">
                         <p className='text-[#BA7894] font-semibold text-lg mt-3'>Time & Date</p>
                          <div className="search-icon flex flex-nowrap">
                            <input type="text" className='border-b-2 focus:outline-none border-[#786666] bg-[#F8F8F8] ' placeholder='Enter Your date' />
                            <BsCalendar2Date className='ml-[-18px] mt-1 h-4 w-4 cursor-pointer' />
                          </div>
                      </div>
                      <div className="s_btn w-52 h-16 bg-[#BA7894] rounded-full mt-2 flex flex-nowrap cursor-pointer">
                        <p className='text-white text-2xl font-medium ml-10 mt-4'>Search</p>
                        <IoIosSearch className='text-white mt-[18px]  h-7 w-7 ml-2 '/>

                      </div>

                    </div>
                   </div>
              </div>
            </div>
        </div>
        {/* background -image */}
        <div className="bg-image  "> </div> 
     </div>


     {/* category section  services section---*/}
     <div className="c_section flex flex-nowrap space-x-[62px] h-40 w-[1300px] ml-28 mt-10">
      <div className="c_content ml-14">
        <div className="round_bg bg-[#BA7894] rounded-full h-24 w-24 ml-4">
          <img src={Makeupicon} alt='' className='ih h-24 w-24 '/>
        </div>
        <div className="h3 mt-3 font-semibold text-lg text-center">Makeup-service</div>
      </div>
      <div className="c_content">
        <div className="round_bg  bg-[#F7E5C1] rounded-full h-24 w-24 ml-4 ">
          <img src={Makeupicon} alt='' className=' h-24 w-24 '/>
        </div>
        <div className="h3 mt-3 font-semibold text-lg">Makeup-service</div>
      </div>
      <div className="c_content">
        <div className="round_bg  bg-[#BA7894] rounded-full h-24 w-24 ml-4 ">
          <img src={Makeupicon} alt='' className=' h-24 w-24 '/>
        </div> 
        <div className="h3 mt-3 font-semibold text-lg">Makeup-service</div>
      </div>
      <div className="c_content">
        <div className="round_bg bg-[#F7E5C1] rounded-full h-24 w-24 ml-4 ">
          <img src={Makeupicon} alt='' className=' h-24 w-24'/>
        </div>
        <div className="h3 mt-3 font-semibold text-lg">Makeup-service</div>
      </div>
      <div className="c_content">
        <div className="round_bg bg-[#F7E5C1] rounded-full h-24 w-24 ml-4">
          <img src={Makeupicon} alt='' className=' h-24 w-24'/>
        </div>
        <div className="h3 mt-3 font-semibold text-lg">Makeup-service</div>
      </div>
      <div className="c_content">
        <div className="round_bg bg-[#F7E5C1] rounded-full h-24 w-24 ml-4 ">
          <img src={Makeupicon} alt='' className=' h-24 w-24'/>
        </div>
        <div className="h3 mt-3 font-semibold text-lg">Makeup-service</div>
      </div>
     </div>
     {/* service section end */}

     {/* exp- section start */}
     <div className="exp_section  ">
      <div className="inner_heading text-center pt-16">
        <h2 className='i_text text-[#422A3C] font-playfair font-bold text-[45px]'>We are Experienced making you <br />
            Very Beautiful
        </h2>
        <h4 className='text-[20px] text-[#555555]'> We always hear to happppyfkdfjdlkfjsdfjsdkjf kjdfjdkhf</h4>
      </div>          
      <div className="pics_section overflow-hidden container h-[400px] w-[1250px]  ml-36 mt-7 columns-3">
        <div className="img_boxes ">
          <div className="main_img">
            <img src={exp1} alt="" className='g rounded-l-[50px] h-[398px] w-auto' />
          </div>
          <div className="img_boxes    columns-1   overflow-hidden">
            <img src={exp3} alt="" className='g h-[190px] w-96 mb-4' />
            <img src={exp2} alt="" className='g h-[198px] w-96 ' />
          </div>
          <div className="img_boxes   columns-1  overflow-hidden">
           <img src={exp1} alt="" className='g h-[190px] w-96 mb-4 rounded-tr-[50px]' />
            <img src={exp2} alt="" className='g h-[198px] w-96 rounded-br-[50px]' />
          </div>
        </div>
      </div>
     </div>
     {/* services section*/}
     <div className="container1 ">
        <div className="txt_heading text-center">
          <h3 className='s_inner font-playfair text-[#BA7894] pt-16'>Our Services</h3>
          <h2 className='b_inner font-playfair text-[#422A3C] text-5xl'> Recommended</h2>
          <p className='inner_text text-lg pt-[16px]'>The CSS and web font files to easily self-host the “Manrope” font. ... JS. body </p>
        </div>


        {/* images cards section================= */}
        <div className="inner_container  w-10/12  columns-4 gap-6 ml-28  mt-12 ">

          <div className="max-w-[290px]  overflow-hidden border-2 rounded-2xl shadow-sm border-[#e1d9d9]">
            <img src={exp1} className="w-full h-[190px]"  alt="Sunset in the mountains"/>
            <div className="px-6 py-4">
              <div className="rating_review flex justify-between ">
                <div className="rating flex flex-w-nowrap gap-2">
                  <FaRegStar className='fa w-6 h-6' />
                  <p>4.5</p>
                </div>
                <p className='font-bold font-playfair text-lg'> <span>105</span> Reviews</p>
              </div>
              <div className="img_dt mt-4">
                <h2 className='h2  font-playfair text-2xl font-bold'>Beauty Salon</h2>
                <div className="address flex flex-nowrap mt-2">
                  <SlLocationPin  className='sl w-4 h-4 mt-1'/>
                  < p className='ml-2 text-base'>kphb hyderabad telangana</p>
                </div>
              </div>
            </div>
            <div class=" bg-[#BA7894] text-white h-11 w-60 text-center pt-2 rounded-lg ml-6 mb-6">
              <p className='bk '>Book Now</p>
            </div>
          </div>
          <div className="max-w-[290px]  overflow-hidden border-2 rounded-2xl shadow-sm border-[#e1d9d9]">
            <img src={exp2} className="w-full h-[190px]"  alt="Sunset in the mountains"/>
            <div className="px-6 py-4">
              <div className="rating_review flex justify-between ">
                <div className="rating flex flex-w-nowrap gap-2">
                  <FaRegStar className='fa w-6 h-6' />
                  <p>4.5</p>
                </div>
                <p className='font-bold font-playfair text-lg'> <span>105</span> Reviews</p>
              </div>
              <div className="img_dt mt-4">
                <h2 className='h2  font-playfair text-2xl font-bold'>Beauty Salon</h2>
                <div className="address flex flex-nowrap mt-2">
                  <SlLocationPin  className='sl w-4 h-4 mt-1'/>
                  < p className='ml-2 text-base'>kphb hyderabad telangana</p>
                </div>
              </div>
            </div>
            <div class=" bg-[#BA7894] text-white h-11 w-60 text-center pt-2 rounded-lg ml-6 mb-6">
              <p className='bk '>Book Now</p>
            </div>
          </div>
          <div className="max-w-[290px]  overflow-hidden border-2 rounded-2xl shadow-sm border-[#e1d9d9]">
            <img src={exp3} className="w-full h-[190px]"  alt="Sunset in the mountains"/>
            <div className="px-6 py-4">
              <div className="rating_review flex justify-between ">
                <div className="rating flex flex-w-nowrap gap-2">
                  <FaRegStar className='fa w-6 h-6' />
                  <p>4.5</p>
                </div>
                <p className='font-bold font-playfair text-lg'> <span>105</span> Reviews</p>
              </div>
              <div className="img_dt mt-4">
                <h2 className='h2  font-playfair text-2xl font-bold'>Beauty Salon</h2>
                <div className="address flex flex-nowrap mt-2">
                  <SlLocationPin  className='sl w-4 h-4 mt-1'/>
                  < p className='ml-2 text-base'>kphb hyderabad telangana</p>
                </div>
              </div>
            </div>
            <div class=" bg-[#BA7894] text-white h-11 w-60 text-center pt-2 rounded-lg ml-6 mb-6">
              <p className='bk '>Book Now</p>
            </div>
          </div>
          <div className="max-w-[290px]  overflow-hidden border-2 rounded-2xl shadow-sm border-[#e1d9d9]">
            <img src={exp3} className="w-full h-[190px]"  alt="Sunset in the mountains"/>
            <div className="px-6 py-4">
              <div className="rating_review flex justify-between ">
                <div className="rating flex flex-w-nowrap gap-2">
                  <FaRegStar className='fa w-6 h-6' />
                  <p>4.5</p>
                </div>
                <p className='font-bold font-playfair text-lg'> <span>105</span> Reviews</p>
              </div>
              <div className="img_dt mt-4">
                <h2 className='h2  font-playfair text-2xl font-bold'>Beauty Salon</h2>
                <div className="address flex flex-nowrap mt-2">
                  <SlLocationPin  className='sl w-4 h-4 mt-1'/>
                  < p className='ml-2 text-base'>kphb hyderabad telangana</p>
                </div>
              </div>
            </div>
            <div class=" bg-[#BA7894] text-white h-11 w-60 text-center pt-2 rounded-lg ml-6 mb-6">
              <p className='bk '>Book Now</p>
            </div>
          </div>

        </div>
      </div>
        {/* User reviews testmonial=============================== */}
       <div class="container min-w-full h-[760px] text-center bg-[#EBF3F5]  -mt-9">
            <p class='font-semibold text-[#BA7894] pt-6'>TESTIMONIALS</p>
            <p class='font-bold text-5xl mt-1 font-playfair text-[#141414]'>
              What our Customers Say
            </p>
            <div class="comment_box bg-[#422A3C] h-[500px] max-w-[1100px] mx-auto mt-14 rounded-3xl grid grid-cols-2 gap-4">
              <div class="l_content mt-28 ml-56 flex flex-nowrap">
                <div class="white_box w-10 h-32 bg-white rounded-3xl"></div>
                <div class="white_box ml-3 w-10 h-60 bg-white rounded-3xl"></div>
                <div class="img_user w-36 h-36  ml-16 mt-14 border-2 border-white rounded-full absolute">
                  <img src={exp3} alt="" className='user_img object-cover h-36 w-36 p-1 rounded-full overflow-hidden'/>
                  </div>
              </div>
              <div class="R_content text-left text-white ">
                <div className="box-c h-80 max-w-lg mt-28 mr-8">
                  <div className="c_section  ml-5">
                    <div className="u_name font-semibold text-[20px]">Taterao</div>

                  </div>
                  <div className="c_section2 mt-10 ml-5 text-lg pr-10">
                    this salon is wonderfull and amazing services here . You should try once here.. gfjfhgf dfjhs sdhghf sdghsfgjh sdgH
                  </div>
                </div>
              </div>
      
            </div>
            <div className="pageChange_buttons justify-center pt-10 gap-2 flex flex-nowrap ">
              <div className="Bbtn  border-2 h-14 w-14 bg-[white] text-[#422A3C] rounded-full pl-3 pt-4 "><FaChevronLeft className=' w-6 h-6'/> </div>
              <div className="Bbtn  border-2 h-14 w-14 bg-[#422A3C] text-white  rounded-full pl-4 pt-4 "><FaChevronRight className=' w-6 h-6'/> </div>
            </div>
          </div>

  
    
  
  </>
    
  
}

export default Home