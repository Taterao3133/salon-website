import Serviceimage from '../Images/s-1.jpg'
import Serviceimage2 from '../Images/s-2.jpg'

function Services() {
  return (
    <div className="services-section ">
      <div className="tagline bg-[#422A3C] w-full xl:h-48 max-sm:h-52 justify-items-center  text-center ">
        <div className="container max-sm:m-auto xl:ml-96 pt-3  xl:pt-16 w-2/4  ">
            <h2 className="xl:text-5xl max-sm:text-sm font-bold text-[#F7E5C1] pt-2 font-playfair">Services..</h2>
        </div>
      </div>
      <div className="d bg-[#ffffff] pb-3 mt-5 h-auto flex">
        <div className="r-c flex-[50%] text-center p-8 ">
            <div className="h  text-5xl font-playfair mt-5  ">Why Our <br />
            Clients <br />
            ---- Choose Us</div>
            <p className='font-raleway text-gray-800  p-16  -mt-5'>"Our clients choose us for our personalized care, expert services, 
                and dedication to making every visit a luxurious and relaxing experience. 
                We take pride in our attention to detail, ensuring that each client leaves feeling confident and rejuvenated.</p>
            <button className='bg-[#cef1ea] text-xl hover:text-2xl border-[#cef1ea] font-raleway p-3 rounded-full'>Book Now</button>

        </div>
        <div className="l-c flex-[50%] p-8">
            <div className="img-f flex space-x-9">
            <img src={Serviceimage} alt=""  className=' h-96 w-auto hover:drop-shadow-2xl ' />
            <img src={Serviceimage2} alt="" className=' h-96 w-auto hover:drop-shadow-2xl mt-6'/>
            </div>
           


        </div>

      </div>
    </div>
  )
}

export default Services