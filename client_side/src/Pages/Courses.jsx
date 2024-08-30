import courseimg1 from '../Images/course-heroimg.jpg'
import haircut1 from '../Images/haircut1.jpg'
import makaup1 from '../Images/makaup1.jpg'
import pedicure1 from '../Images/pedicure1.jpg'

function Courses() {
  return (
    <div className="ntg  overflow-hidden">
      <div className="h-auto w-full relative">
        <img src={courseimg1} alt="" />
        <div className="absolute inset-0 flex flex-col lg:mt-40  lg:ml-28 max-xl:ml-40 max-xl:mt-44    p-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-[#21203b]  font-bold mb-4">
            Start Your Career <br /> In the Beauty Industry
          </h2>
          <p className="text-base text-[#5c7a6c] font-raleway  md:text-lg mb-6">
            The Beauty Academy specializes in providing students with quality education 
            and <br /> individualized training to maintain the high standards required by the Beauty Industry.
          </p>
          
          <button className="bg-green-500 hover:bg-green-600 active:bg-white active:text-green-400 w-32 text-white py-2 px-4 rounded-md">
            Register Now
          </button>
        </div>
      </div>
      {/* choose section */}
      <div className="cors-d items-center justify-center text-center bg-[#f6f9f9] xl:pt-24 h-auto">
        <h1 className='text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-playfair font-medium m-auto'>Why Choose Us</h1>
        <p className='font-raleway text-base lg:mt-4 text-gray-800'> Join our academy to gain hands-on training and expertise in the beauty industry. Our personalized courses, <br /> led by experienced professionals, will equip you with the skills to excel. Start your journey with us and build a successful career in beauty.</p>
        <div className="container w-[75%] pb-10  h-auto md:mt-5 m-auto xl:mt-7 grid grid-cols-2 max-sm:grid-cols-1 gap-6">
          <div className="bx1 h-56 w-[100%] bg-white text-left pl-9 pt-9 hover:drop-shadow-xl shadow-lg rounded-lg">
            <h3 className='font-montserrat font-bold text-2xl'>Classroom Courses</h3>
            <p className='font-raleway text-base mt-3 text-gray-700 pr-5'>Experience in-person learning with our classroom courses, where expert instructors guide you through practical, hands-on training. Gain the skills you need to excel in the beauty industry with personalized attention and real-world practice.</p>
          </div>
          <div className="bx1 h-56 w-[100%] bg-white text-left pl-9 pt-9 hover:drop-shadow-xl  shadow-lg rounded-lg">
            <h3 className='font-montserrat font-bold text-2xl'>Best Beauty Expert</h3>
            <p className='font-raleway text-base mt-3 text-gray-700 pr-5'>Learn from the best in the industry with our top beauty experts who bring years of experience and cutting-edge techniques. Achieve excellence with personalized guidance from professionals dedicated to your success.</p>
          </div>
          <div className="bx1 h-56 w-[100%] bg-white text-left pl-9 pt-9 hover:drop-shadow-xl shadow-lg rounded-lg">
            <h3 className='font-montserrat font-bold text-2xl'>Quality & Standard </h3>
            <p className='font-raleway text-base mt-3 text-gray-700 pr-5'>Our courses are designed to uphold the highest standards of excellence, ensuring you receive a top-tier education in beauty. With a focus on quality, we prepare you to meet and exceed industry expectations.</p>
          </div>
          <div className="bx1 h-56 w-[100%] bg-white text-left pl-9 pt-9 hover:drop-shadow-xl shadow-lg rounded-lg">
            <h3 className='font-montserrat font-bold text-2xl'>ISO Certified</h3>
            <p className='font-raleway text-base mt-3 text-gray-700 pr-5'>As an ISO-certified institution, we are committed to maintaining the highest standards of quality and excellence. Our certification ensures that you receive a globally recognized education that meets rigorous industry benchmarks.</p>
          </div>
        
          
          
        </div>
      </div>

      {/* course section */}
      <div className="cors-d items-center justify-center text-center bg-[#fbfcfc] lg:pt-20 xl:pt-24 h-auto">
        <h1 className='text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-playfair font-medium m-auto'>Our Courses</h1>
        <p className='font-raleway text-base lg:px-24 lg:mt-4 text-gray-800'> Join our academy to gain hands-on training and expertise in the beauty industry. Our personalized courses, <br /> led by experienced professionals, will equip you with the skills to excel. Start your journey with us and build a successful career in beauty.</p>
        <div className="container w-[75%] lg:w-[80%] pb-10  h-auto md:mt-5 m-auto xl:mt-7 max-md:grid-cols-1 grid lg:grid-cols-3 max-sm:grid-cols-1 lg:gap-2 md:gap-4 xl:gap-6">
          <div className="bx1 h-[435px] md:h-auto md:pb-5 w-[100%] bg-white text-left p-2  hover:drop-shadow-xl shadow-lg rounded-xl">
            <img src={pedicure1} alt="" className='lg:h-56 lg:w-96 md:w-full md:h-72 object-cover rounded-xl ' />
            <h3 className='text-2xl font-bold font-playfair tracking-tight mt-5 ml-5 text-[#442e46]'>Pedicure</h3>
            <p className='text-gray-600 text-base font-lato tracking-wide mt-3 ml-5'>Pampering your feet with precision and care for a flawless finish.</p>
            <div className="flex xl:mt-7 2xl:mt-7 lg:mt-3 justify-between lg:px-2 xl:px-5 md:mt-7 px-5">
            <button className='bg-blue-600 text-lg max-lg:text-[16px]   font-playfair tracking-wide font-semibold text-white rounded-xl 2xl:px-3 xl:px-3 lg:px-2 p-2  px-3 hover:text-black hover:bg-white active:drop-shadow-lg hover:drop-shadow-2xl active:text-purple-400'>Register Now</button>
            <h4 className='text-lg font-playfair font-bold rounded-xl text-white bg-pink-400 p-2 px-3'>Don't miss</h4>

            </div>
             
          </div>

          <div className="bx1 h-[435px] md:h-auto md:pb-5 w-[100%] bg-white text-left p-2  hover:drop-shadow-xl shadow-lg rounded-xl">
            <img src={haircut1} alt="" className='lg:h-56 lg:w-96 md:w-full md:h-72 object-cover rounded-xl ' />
            <h3 className='text-2xl font-bold font-playfair tracking-tight mt-5 ml-5 text-[#442e46]'>Haircut</h3>
            <p className='text-gray-600 text-base font-lato tracking-wide mt-3 ml-5'>Transforming your look with expert cuts tailored to your style.</p>
            <div className="flex md:mt-7 xl:mt-7 2xl:mt-7 lg:mt-3 justify-between lg:px-2 xl:px-5 px-5">
            <button className='bg-blue-600 text-lg   font-playfair tracking-wide font-semibold text-white rounded-xl p-2 px-3 2xl:px-3 xl:px-3 lg:px-2 hover:text-black hover:bg-white active:drop-shadow-lg hover:drop-shadow-2xl active:text-purple-400'>Register Now</button>
            <h4 className='text-lg font-playfair font-bold rounded-xl text-white bg-pink-400 p-2 px-3'>Don't miss </h4>

            </div>
             
          </div>

          <div className="bx1 h-[435px] md:h-auto md:pb-5 w-[100%] bg-white text-left p-2  hover:drop-shadow-xl shadow-lg rounded-xl">
            <img src={makaup1} alt="" className='lg:h-56 lg:w-96 md:w-full md:h-72 object-cover rounded-xl ' />
            <h3 className='text-2xl font-bold font-playfair tracking-tight mt-5 ml-5 text-[#442e46]'>Makaup</h3>
            <p className='text-gray-600 text-base font-lato tracking-wide mt-3 ml-5'>Empowering students with engaging, interactive learning experiences.</p>
            <div className="flex md:mt-7 xl:mt-7 2xl:mt-7 lg:mt-3 justify-between lg:px-2 xl:px-5 px-5">
            <button className='bg-blue-600 text-lg   font-playfair tracking-wide font-semibold text-white rounded-xl xl:p-2 2xl:p-2  px-3 2xl:px-3 xl:px-3 lg:px-2  hover:text-black hover:bg-white active:drop-shadow-lg hover:drop-shadow-2xl active:text-purple-400'>Register Now</button>
            <h4 className='text-lg font-playfair font-bold rounded-xl text-white bg-pink-400 p-2 px-3'>Don't miss</h4>

            </div>
             
          </div>
{/* 

          <div className="bx1 h-56 w-[100%] bg-white text-left pl-9 pt-9 hover:drop-shadow-xl  shadow-lg rounded-lg">
            <h3 className='font-montserrat font-bold text-2xl'>Best Beauty Expert</h3>
            <p className='font-raleway text-base mt-3 text-gray-700 pr-5'>Learn from the best in the industry with our top beauty experts who bring years of experience and cutting-edge techniques. Achieve excellence with personalized guidance from professionals dedicated to your success.</p>
          </div>
          <div className="bx1 h-56 w-[100%] bg-white text-left pl-9 pt-9 hover:drop-shadow-xl shadow-lg rounded-lg">
            <h3 className='font-montserrat font-bold text-2xl'>Quality & Standard </h3>
            <p className='font-raleway text-base mt-3 text-gray-700 pr-5'>Our courses are designed to uphold the highest standards of excellence, ensuring you receive a top-tier education in beauty. With a focus on quality, we prepare you to meet and exceed industry expectations.</p>
          </div> */}
          {/* <div className="bx1 h-56 w-[100%] bg-white text-left pl-9 pt-9 hover:drop-shadow-xl shadow-lg rounded-lg">
            <h3 className='font-montserrat font-bold text-2xl'>ISO Certified</h3>
            <p className='font-raleway text-base mt-3 text-gray-700 pr-5'>As an ISO-certified institution, we are committed to maintaining the highest standards of quality and excellence. Our certification ensures that you receive a globally recognized education that meets rigorous industry benchmarks.</p>
          </div> */}
        
          
          
        </div>
      </div>
    </div>
  )
}

export default Courses