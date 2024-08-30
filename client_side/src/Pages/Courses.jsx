import courseimg1 from '../Images/course-heroimg.jpg'
import courseimg2 from '../Images/course-heroimg2.jpg'
import haircut1 from '../Images/haircut1.jpg'
import makaup1 from '../Images/makaup1.jpg'
import pedicure1 from '../Images/pedicure1.jpg'

function Courses() {
  return (
    <div className="ntg  overflow-hidden">
      <div className="h-auto w-full relative">
        <img src={courseimg1} alt="" className='opacity-100 max-sm:hidden'  />
        <img src={courseimg2} alt="" className='opacity-100 md:hidden lg:hidden xl:hidden'  />
        {/* <div className="absolute lg:hidden xl:hidden 2xl:hidden inset-0 flex flex-col max-sm:mt-10 max-sm:ml-7 md:mt-8 md:ml-14 lg:mt-20 xl:mt-28  lg:ml-24 max-xl:ml-32 2xl:mt-40    p-4">
          <h2 className="text-3xl md:text-3xl lg:text-5xl font-playfair text-[#1f2c32]  font-bold mb-4">
              Start Your Career <br /> <span className='text-2xl md:text-2xl lg:text-4xl'> In the Beauty Industry</span>
            </h2>
            <p className="text-base text-[#576c57]  font-raleway md:pr-72  max-2xl:pr-[600px] md:text-lg md:mb-3 mb-6">
              The Beauty Academy specializes in providing students with quality education 
               <span className=''> and individualized training to maintain the high standards required by the Beauty Industry.</span>
            </p>
               
            <a href="https://wa.me/+918688664812?text=Hello%20there!%20I%20I%20want%20to%20to%20join%20a%20course%20Send%20me%20details." target="_blank" rel="noopener noreferrer"
            className="">
            <button className="bg-white hover:bg-blue-600 hover:text-white active:bg-white active:text-gray-500 w-32 xl:text-xl lg:px-1 lg:font-semibold lg:rounded-2xl lg:py-3 xl:w-48 text-black py-2 px-4 rounded-md">
              Register Now
            </button></a>
        </div> */}
        {/* large scree */}
        <div className="absolute  h-86 w-1/2  max-sm:w-full max-sm:h-auto max-sm:pr-10   inset-0 flex flex-col max-sm:mt-16 max-sm:ml-7 md:mt-8 md:ml-14  lg:mt-20 xl:mt-28  lg:ml-24 max-xl:ml-32 2xl:mt-40 ">
          <h2 className="text-3xl md:text-3xl lg:text-5xl font-playfair text-[#1f2c32]  font-bold mb-4">
              Start Your Career <br /> <span className='text-2xl md:text-2xl lg:text-4xl'> In the Beauty Industry</span>
            </h2>
            <p className="text-base text-[#576c57]  font-raleway  md:text-lg md:mb-3 mb-6">
              The Beauty Academy specializes in providing students with quality education 
               <span className=''> and individualized training to maintain the high standards required by the Beauty Industry.</span>
            </p>
               
            <a href="https://wa.me/+918688664812?text=Hello%20there!%20I%20I%20want%20to%20to%20join%20a%20course%20Send%20me%20details." target="_blank" rel="noopener noreferrer"
            className="">
            <button className="bg-white hover:bg-blue-600 hover:text-white active:bg-white active:text-gray-500 w-32 xl:text-xl lg:px-1 lg:font-semibold lg:rounded-2xl lg:py-3 xl:w-48 text-black py-2 px-4 rounded-md">
              Register Now
            </button></a>
        </div>
      </div>
      {/* choose section */}
      <div className="cors-d items-center justify-center text-center bg-[#f6f9f9] max-sm:pt-7 md:pt-7 xl:pt-24 h-auto">
        <h1 className='text-3xl md:text-4xl md:py-3 lg:text-4xl xl:text-5xl font-playfair font-medium m-auto'>Why Choose Us</h1>
        <p className='font-raleway text-base max-sm:px-7 max-sm:py-3 max-sm:text-sm  md:px-20 lg:mt-4 text-gray-800'> Our courses offer comprehensive training in the latest beauty techniques, taught by industry professionals. Whether you're a beginner or looking to enhance your skills, our curriculum is designed to help you succeed in the beauty industry.</p>
        <div className="container w-[75%] pb-10  h-auto md:mt-5 m-auto xl:mt-7 grid grid-cols-2 max-sm:grid-cols-1 gap-6">
          <div className="bx1 h-56 md:h-auto w-[100%] bg-white text-left max-sm:px-4 max-sm:py-4 md:py-4 md:pt-4 pl-9 pt-9 hover:drop-shadow-xl shadow-lg rounded-lg">
            <h3 className='font-montserrat font-bold max-sm:text-lg md:text-xl max-sm:text-center text-2xl'>Classroom Courses</h3>
            <p className='font-raleway max-sm:text-sm md:text-base max-sm:px-2 max-sm:text-center text-base mt-3 text-gray-700 pr-5'>Experience in-person learning with our classroom courses, where expert instructors guide you through practical, hands-on training. Gain the skills you need to excel in the beauty industry with personalized attention and real-world practice.</p>
          </div>
          <div className="bx1 h-56 md:h-auto w-[100%] bg-white text-left max-sm:px-4 max-sm:py-4 md:py-4 pl-9 pt-9 hover:drop-shadow-xl  shadow-lg rounded-lg">
            <h3 className='font-montserrat font-bold max-sm:text-lg md:text-xl max-sm:text-center text-2xl'>Best Beauty Expert</h3>
            <p className='font-raleway max-sm:text-sm max-sm:px-2 max-sm:text-center md:text-base text-base mt-3 text-gray-700 pr-5'>Learn from the best in the industry with our top beauty experts who bring years of experience and cutting-edge techniques. Achieve excellence with personalized guidance from professionals dedicated to your success.</p>
          </div>
          <div className="bx1 h-56 md:h-auto w-[100%] bg-white text-left max-sm:px-4 max-sm:py-4 md:py-4 pl-9 pt-9 hover:drop-shadow-xl shadow-lg rounded-lg">
            <h3 className='font-montserrat font-bold max-sm:text-lg md:text-xl max-sm:text-center text-2xl'>Quality & Standard </h3>
            <p className='font-raleway max-sm:text-sm md:text-base max-sm:px-2 max-sm:text-center text-base mt-3 text-gray-700 pr-5'>Our courses are designed to uphold the highest standards of excellence, ensuring you receive a top-tier education in beauty. With a focus on quality, we prepare you to meet and exceed industry expectations.</p>
          </div>
          <div className="bx1 h-56 md:h-auto w-[100%] bg-white text-left max-sm:px-4 max-sm:py-4 md:py-4 pl-9 pt-9 hover:drop-shadow-xl shadow-lg rounded-lg">
            <h3 className='font-montserrat font-bold max-sm:text-lg md:text-xl max-sm:text-center text-2xl'>ISO Certified</h3>
            <p className='font-raleway max-sm:text-sm md:text-base max-sm:px-2 max-sm:text-center text-base mt-3 text-gray-700 pr-5'>As an ISO-certified institution, we are committed to maintaining the highest standards of quality and excellence. Our certification ensures that you receive a globally recognized education that meets rigorous industry benchmarks.</p>
          </div>
        
          
          
        </div>
      </div>

      {/* course section */}
      <div className="cors-d items-center justify-center text-center bg-[#fbfcfc] max-sm:pt-7 md:pt-7 lg:pt-20 xl:pt-24 h-auto">
        <h1 className='text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-playfair font-medium m-auto'>Our Courses</h1>
        <p className='font-raleway text-base max-sm:px-7 max-sm:py-3 md:py-3 md:px-20 lg:px-24 lg:mt-4 text-gray-800'> Join our academy to gain hands-on training and expertise in the beauty industry. Our personalized courses, led by experienced professionals, will equip you with the skills to excel. Start your journey with us and build a successful career in beauty.</p>
        <div className="container w-[75%] lg:w-[80%] max-sm:gap-y-3 pb-10  h-auto md:mt-5 m-auto xl:mt-7 max-md:grid-cols-1 grid lg:grid-cols-3 max-sm:grid-cols-1 lg:gap-2 md:gap-4 xl:gap-6">
          <div className="bx1 h-[435px] md:h-auto md:pb-5 max-sm:h-auto max-sm:pb-3 w-[100%] bg-white text-left p-2  hover:drop-shadow-xl shadow-lg rounded-xl">
            <img src={pedicure1} alt="" className='lg:h-56 lg:w-96 md:w-full md:h-72 object-cover rounded-xl ' />
            <h3 className='text-2xl font-bold font-playfair tracking-tight mt-5 ml-5 text-[#442e46]'>Pedicure</h3>
            <p className='text-gray-600 text-base font-lato tracking-wide max-sm:mt-2 max-sm:text-sm mt-3 ml-5'>Pampering your feet with precision and care for a flawless finish.</p>
            <div className="flex xl:mt-7 max-sm:mt-3 2xl:mt-7 lg:mt-3 justify-between lg:px-2 xl:px-5 md:mt-7 px-5">
              <a href="https://wa.me/+918688664812?text=Hello%20there!%20I%20I%20want%20to%20to%20join%20a%20course%20Send%20me%20details." target="_blank" rel="noopener noreferrer"
              className="">
              <button className='bg-blue-600 text-lg max-lg:text-[16px] max-sm:text-base  font-playfair tracking-wide font-semibold text-white rounded-xl 2xl:px-3 xl:px-3 lg:px-2 p-2  px-3 hover:text-black hover:bg-white active:drop-shadow-lg hover:drop-shadow-2xl active:text-purple-400'>Register Now</button>
              </a>
              <h4 className='text-lg font-playfair font-bold rounded-xl text-white bg-pink-400 max-sm:px-2 max-sm:text-base p-2 px-3'>Don't miss</h4>
            </div>
             
          </div>

          <div className="bx1 h-[435px]  max-sm:h-auto max-sm:pb-3 md:h-auto md:pb-5 w-[100%] bg-white text-left p-2  hover:drop-shadow-xl shadow-lg rounded-xl">
            <img src={haircut1} alt="" className='lg:h-56 lg:w-96 md:w-full md:h-72 object-cover rounded-xl ' />
            <h3 className='text-2xl font-bold font-playfair tracking-tight mt-5 ml-5 text-[#442e46]'>Haircut</h3>
            <p className='text-gray-600 text-base max-sm:mt-2 max-sm:text-sm font-lato tracking-wide mt-3 ml-5'>Transforming your look with expert cuts tailored to your style.</p>
            <div className="flex md:mt-7 max-sm:mt-3 xl:mt-7 2xl:mt-7 lg:mt-3 justify-between lg:px-2 xl:px-5 px-5">
              <a href="https://wa.me/+918688664812?text=Hello%20there!%20I%20I%20want%20to%20to%20join%20a%20course%20Send%20me%20details." target="_blank" rel="noopener noreferrer"
              className="">
              <button className='bg-blue-600 text-lg max-sm:text-base  font-playfair tracking-wide font-semibold text-white rounded-xl p-2 px-3 2xl:px-3 xl:px-3 lg:px-2 hover:text-black hover:bg-white active:drop-shadow-lg hover:drop-shadow-2xl active:text-purple-400'>Register Now</button>
              </a>
              <h4 className='text-lg font-playfair font-bold rounded-xl text-white bg-pink-400 max-sm:px-2 max-sm:text-base p-2 px-3'>Don't miss </h4>

            </div>
             
          </div>

          <div className="bx1 h-[435px] md:h-auto max-sm:h-auto max-sm:pb-3 md:pb-5 w-[100%] bg-white text-left p-2  hover:drop-shadow-xl shadow-lg rounded-xl">
            <img src={makaup1} alt="" className='lg:h-56 lg:w-96 md:w-full md:h-72 object-cover rounded-xl ' />
            <h3 className='text-2xl font-bold font-playfair tracking-tight mt-5 ml-5 text-[#442e46]'>Makaup</h3>
            <p className='text-gray-600 text-base font-lato tracking-wide max-sm:mt-2 max-sm:text-sm mt-3 ml-5'>Empowering students with engaging, interactive learning experiences.</p>
            <div className="flex md:mt-7 max-sm:mt-3 xl:mt-7 2xl:mt-7 lg:mt-3 justify-between lg:px-2 xl:px-5 px-5">
              <a href="https://wa.me/+918688664812?text=Hello%20there!%20I%20I%20want%20to%20to%20join%20a%20course%20Send%20me%20details." target="_blank" rel="noopener noreferrer"
              className="">
              <button className='bg-blue-600 text-lg max-sm:text-base  font-playfair tracking-wide font-semibold text-white rounded-xl p-2 px-3 2xl:px-3 xl:px-3 lg:px-2 hover:text-black hover:bg-white active:drop-shadow-lg hover:drop-shadow-2xl active:text-purple-400'>Register Now</button>
              </a>
              <h4 className='text-lg font-playfair font-bold rounded-xl text-white bg-pink-400 max-sm:px-2 max-sm:text-base p-2 px-3'>Don't miss</h4>

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