import { Link } from "react-router-dom";
import Logo from '../../Images/salon-logo.png';
import { useEffect, useState } from "react";

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
        
      } else {
        setIsSticky(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`Header h-[70px] pt-1  bg-white ${
        isSticky ? 'fixed top-0 left-0 w-full shadow-lg z-50 ' : ''} transition-all duration-500`}>
        <div className="flex flex-nowrap justify-between items-center h-full px-[120px]">
          <div className="leftheader flex items-center">
            <div className="logo cursor-pointer">
              <img src={Logo} alt="Salon Logo" className="w-14 h-14" />
            </div>
            <div className="name ml-4">
              <p className="cursor-pointer text-2xl font-playfair">Unique Beauty <br /><span>Salon</span></p>
            </div>
          </div>
          <div className="rightheader flex items-center">
            <div className="headerlinks flex space-x-[40px]">
              <Link to='/'><p className="cursor-pointer text-base hover:text-lg font-semibold">Home</p></Link>
              <p className="cursor-pointer text-base hover:text-lg font-semibold">Services</p>
              <Link to='/about'><p className="cursor-pointer text-base hover:text-lg font-semibold">About Us</p></Link>
              <Link to='/contact'><p className="cursor-pointer text-base hover:text-lg font-semibold">Contact Us</p></Link>
            </div>
            {/* <div className="AuthButtons flex space-x-[20px] ml-[36px]">
              <Link to='/login'><p className="bt rounded-md cursor-pointer border-black border-2 text-center px-4 py-2 text-[16px] font-bold">Login</p></Link>
              <p className="bt rounded-md cursor-pointer border-black border-2 text-center px-4 py-2 text-[16px] font-bold">Sign-Up</p>
            </div> */}
          </div>
        </div>
      </div>
      <div className={`${isSticky ? ' pt-[10px]' : ''}`}>
        
      </div>
    </>
  );
}

export default Header;
