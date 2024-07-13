import { Link } from "react-router-dom"
import Logo from '../../Images/salon-logo.png'

function Header() {
  return (
    <div className="Header  h-[50px] mb-3 bg-[white] ">
        <div className="flex flex-nowrap gap-x-[660px]  h-[52px] ml-[120px] mt-[25px]">
            <div className="leftheader flex flex-nowrap">
                <div className="logo cursor-pointer">
                  <img src={Logo} alt="" className="w-14 h-14"/>
                </div>
                <div className="name">
                    <p className="cursor-pointer text-2xl font-playfair">Unique Beauty <br /><span> Salon</span></p>
                </div>
            </div>
            <div className="rightheader flex flex-nowrap ">
                <div className="headerlinks flex flex-nowrap space-x-[40px] mt-2">
                  <Link to='/' ><p className=" cursor-pointer  text-[16px]">Home</p></Link>
                   <Link to='/about' ><p className=" cursor-pointer text-[16px]">AboutUs</p></Link>
                   <p className=" cursor-pointer text-[16px]">Contact Us</p>
                   
                </div>
                <div className="AuthButtons flex flex-nowrap space-x-[20px] ml-[36px]">
                <Link to='/about' > <p className="bt rounded-md cursor-pointer border-[black] border-solid border-[2px] text-center p-[8px] text-[16px] font-bold mb-2">Loggin  </p></Link>
                    <p className="bt rounded-md cursor-pointer border-[black] border-solid border-[2px] text-center p-[8px] text-[16px] font-bold mb-2">Sign-Up</p>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header