import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Logo from '../../Images/salon-logo.png';
import { Link } from "react-router-dom";



function Footer() {
  return (
   <>
    <div className="footer ">
      <div className="box w-full max-sm:h-auto xl:h-96 border-2 bg-[#241520]">
        <div className="inner_Container max-sm:h-80   xl:h-80 xl:w-3/4 max-sm:ml-5 max-sm:m-5  xl:ml-48 xl:mt-10 ">
          <div className="ls_icons md:h-24  xl:h-24 max-sm:mb-5 flex">
            <div className="f_logo flex-1  md:mt-5 md:ml-5">
              <div className="logo_bx flex items-center text-[#FFFFFF] gap-2">
               <Link to="/"> <img src={Logo} alt="" className="max-sm:w-auto max-sm:h-9 md:h-14 xl:h-16 xl:w-auto" /></Link>
               <Link to="/"> <p className="max-sm:text-sm font-playfair">Unique_Beauty_Salon</p> </Link>
              </div>
            </div>
            <div className="f_sIcons text-white md:mb-6 md:gap-3 md:mr-5 xl:mb-8 flex items-end max-sm:gap-2 xl:gap-4">
              <Link to='https://www.instagram.com/unique_beauty_salon90/'><FaInstagram className="max-sm:h-8 w-auto p-1 xl:p-2 md:h-10 md:p-1 xl:h-12 border-2 cursor-pointer rounded-md"/></Link>
              <a href="https://wa.me/918331950396?text=Hello%20there!%20I%20would%20like%20to%20make%20an%20appointment." target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="max-sm:h-8 w-auto xl:h-12 max-sm:p-1 md:h-10 md:p-1 xl:p-2 border-2 cursor-pointer rounded-md" /></a>
              <FaFacebookF className="max-sm:h-8 w-auto  xl:h-12 max-sm:p-1 md:h-10 md:p-1 xl:p-2 border-2 cursor-pointer rounded-md" />
            </div>
          </div>
          <hr className="border-t border-white md:ml-5 md:w-[95%]  mt-2 w-full" />
          <div className="f_services text-white justify-between max-sm:columns-2 md:mb-5 md:flex md:mr-5 xl:flex md:ml-5 md:mt-3 max-sm:mt-5 xl:mt-5">
            <div className="s_explore">
              <p className="font-playfair font-bold max-sm:text-base md:text-lg xl:text-xl">Expore Pages</p>
              <div className="s_pages max-sm:text-xs md:text-base max-sm:mt-2 xl:mt-4 max-sm:space-y-1 ">
               <Link to='/home'> <p className="cursor-pointer hover:text-[#dbafd7]" >Home</p></Link>
                <p className="cursor-pointer hover:text-[#dbafd7]"><Link to='/about'>About services</Link></p>
                <Link to='/contact'><p className="cursor-pointer hover:text-[#dbafd7]">Contact Us</p></Link>
              </div>
            </div>
            <div className="s_utility">
              <p className="font-playfair font-bold max-sm:text-base max-sm:mt-2 md:text-lg xl:text-xl"> Utility Pages </p>
              <div className="s_Upages max-sm:text-xs  md:text-base xl:mt-4 max-sm:space-y-1 xl:space-y-3">
                <Link to="/privacy" ><p className="cursor-pointer hover:text-[#dbafd7]">Privacy Policy</p></Link>
                <Link to='/privacy'><p className="cursor-pointer hover:text-[#dbafd7]">Terms Of Uses</p></Link>
              </div>
            </div>
            <div className="s_addrs max-sm:-ml-5 xl:pr-8 ">
              <p className="font-playfair font-bold max-sm:ml-2 max-sm:text-base md:text-lg xl:text-xl"> Keep In Touch</p>
              <div className="s_address max-sm:text-xs md:text-base max-sm:mt-2 xl:mt-4 max-sm:space-y-1 xl:space-y-2 flex flex-nowrap">
                <p className="font-bold max-sm:text-sm mt-2 max-sm:hidden">Address:</p>
                <p className="ml-2 max-sm:text-xs max-sm:pr-2">Unique_Beauty_Salon, Beside HDFC Bank ,<br /> SriRama colony , Banswada ,<br /> Kamareddy 503187</p>
              
              </div>
              <div className="s_address max-sm:mt-4  xl:mt-4 space-y-2 flex flex-nowrap ">
                <p className="font-bold max-sm:hidden max-sm:mt-2 xl:mt-2 md:mt-2 max-sm:text-sm xl:ml-5">Email:</p>
                <p className="ml-2 max-sm:text-xs md:text-base ">Unique_Beauty_Salon90@gmail.com</p>
              
              </div>

            </div>
          </div>

        </div>
        <div className="f-credit bg-slate-50 max-sm:h-6 max-sm:-mt-12 md:h-11 xl:h-11 xl:text-center   text-center max-sm:w-full">
          <p className="max-sm:text-sm xl:text-lg xl:pt-2">&copy; {new Date().getFullYear()} TechnoNxtgen. All rights reserved.</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer 