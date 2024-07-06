import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";



function Footer() {
  return (
   <>
   {/* <style jsx>{`
      p:hover {
        cursor: pointer;
      }
    `}</style> */}


    <div className="footer">
      <div className="box w-full h-96 border-2 bg-[#241520]">
        <div className="inner_Container h-80 w-3/4  ml-48 mt-10 ">
          <div className="ls_icons h-24 flex">
            <div className="f_logo flex-1">
              <div className="logo_bx flex items-center text-[#FFFFFF] gap-2">
                logo
                <p>Unique_Beauty_Salon</p>
              </div>
            </div>
            <div className="f_sIcons text-white mb-8 flex items-end gap-4">
              <div className="i_bxs w-16 h-16 pl-4 pt-3  border-2 cursor-pointer rounded-md"><FaInstagram className="w-8 h-8 "/></div>
              <div className="i_bxs w-16 h-16 pl-3 pt-3 border-2 cursor-pointer rounded-md"><FaWhatsapp className="w-8 h-8" /></div>
              <div className="i_bxs w-16 h-16 pl-3 pt-3 border-2 cursor-pointer rounded-md"><FaFacebookF className="w-8 h-8" /></div>
            </div>
          </div>
          <hr className="border-t border-white  mt-2 w-full" />
          <div className="f_services text-white justify-between flex mt-5">
            <div className="s_explore">
              <p className="font-playfair font-bold text-xl">Expore Pages</p>
              <div className="s_pages mt-4 space-y-2">
                <p className="cursor-pointer" >Home</p>
                <p className="cursor-pointer">About services</p>
                <p className="cursor-pointer">Contact Us</p>
                <p className="cursor-pointer">Home</p>
              </div>
            </div>
            <div className="s_utility">
              <p className="font-playfair font-bold text-xl"> Utility Pages </p>
              <div className="s_Upages mt-4 space-y-2">
                <p className="cursor-pointer">Privacy Policy</p>
                <p className="cursor-pointer">Terms Of Uses</p>
              </div>
            </div>
            <div className="s_addrs pr-10 ">
              <p className="font-playfair font-bold text-xl"> Keep In Touch</p>
              <div className="s_address mt-4 space-y-2">
                <p >Address :  Unique_Beauty_Salon, Beside HDFC Bank ,
                <br />        SriRama colony , Banswada , Kamareddy 503187 </p>
                <p>Email :    UniqueSalon@gmail.com</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}

export default Footer