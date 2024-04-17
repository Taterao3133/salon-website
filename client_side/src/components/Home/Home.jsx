import '../Home/Home.css'

import { IoIosSearch } from "react-icons/io";
import { BsCalendar2Date } from "react-icons/bs";
import Makeupicon from '../../Images/makeup1.svg'

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
            <img src={exp3} alt="" className='g h-[198px] w-96 mb-4' />
            <img src={exp2} alt="" className='g h-[198px] w-96 ' />
          </div>
          <div className="img_boxes   columns-1  overflow-hidden">
           <img src={exp1} alt="" className='g h-[198px] w-96 mb-4 rounded-tr-[50px]' />
            <img src={exp2} alt="" className='g h-[198px] w-96 rounded-br-[50px]' />
          </div>
        </div>
      </div>
     </div>
     dkffndknfsnf
     df;dsfmsdf
     fsd;<fieldset>dkfsf</fieldset>
  
  </>
    
  
}

export default Home