import '../Home/Home.css'

import { IoIosSearch } from "react-icons/io";
import { BsCalendar2Date } from "react-icons/bs";

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
     {/* category section */}
  
  </>
    
  
}

export default Home