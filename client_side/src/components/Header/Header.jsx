import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from '../../Images/salon-logo.png';
import { FiMenu, FiX } from "react-icons/fi";



function Header({ isPopupOpen }) {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > -1 && !isPopupOpen) {

        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isPopupOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  



  return (
    <>
      <div className={`Header max-sm:h-16  xl:h-[70px] pt-1 ${isPopupOpen  ? 'overflow-hidden ' : ''} bg-white ${isSticky ? 'fixed top-0 left-0 w-full shadow-lg z-50' : ''} transition-all duration-500`}>
        <div className="flex justify-between items-center  border-b-2 w-full h-full px-4 md:px-[120px]">
          <div className="leftheader flex items-center">
            <div className="logo cursor-pointer">
              <img src={Logo} alt="Salon Logo" className="w-9 h-9  xl:w-14 xl:h-14" />
            </div>
            <div className="name ml-2 xl:ml-4">
              <p className="cursor-pointer text-lg xl:text-2xl font-playfair">Unique Beauty <br /><span>Salon</span></p>
            </div>
          </div>
          <div className="rightheader md:hidden hidden lg:flex items-center">
            <div className="headerlinks flex space-x-[40px]  ">
            <Link to='/' className={`cursor-pointer text-base font-semibold ${location.pathname === '/' ? ' scale-110 text-[#cef1ea] rounded-lg' : ''} hover:scale-110`}>Home</Link>
            <Link to='/service' className={`cursor-pointer text-base font-semibold ${location.pathname === '/service' ? ' scale-110 text-[#cef1ea]  rounded-lg' : ''} hover:scale-110`}>Services</Link>
            <Link to='/about' className={`cursor-pointer text-base font-semibold ${location.pathname === '/about' ? 'scale-110 text-[#cef1ea]  rounded-lg' : ''} hover:scale-110`}>About Us</Link>
            <Link to='/contact' className={`cursor-pointer text-base font-semibold ${location.pathname === '/contact' ? 'scale-110 text-[#cef1ea]  rounded-lg' : ''} hover:scale-110`}>Contact Us</Link>
          </div>
          </div>
          <div className="lg:hidden  flex items-center">
            <button onClick={toggleMenu} className="text-2xl">
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        {isMenuOpen && (
          <div className="lg:hidden bg-[#fffefe] fixed top-16 border-[1px] right-0 h-full w-3/4 z-50 flex flex-col items-end transition-transform duration-300">
            <Link to='/' onClick={toggleMenu} className={`${location.pathname === '/' ? 'bg-[#cef1ea]' : ''} text-lg font-medium font-raleway hover:text-white hover:bg-[#cef1ea] p-2 mt-2 rounded-lg w-full text-center`}>Home</Link>
            <Link to='/service' onClick={toggleMenu} className={`${location.pathname === '/service' ? 'bg-[#cef1ea]' : ''} text-lg font-medium font-raleway hover:text-white hover:bg-[#cef1ea] p-2 rounded-lg w-full text-center`}>Services</Link>
            <Link to='/about' onClick={toggleMenu} className={`${location.pathname === '/about' ? 'bg-[#cef1ea]' : ''} text-lg font-medium font-raleway hover:text-white hover:bg-[#cef1ea] p-2 rounded-lg w-full text-center`}>About Us</Link>
            <Link to='/contact' onClick={toggleMenu} className={`${location.pathname === '/contact' ? 'bg-[#cef1ea] text-white' : ''} text-lg font-medium font-raleway hover:text-white hover:bg-[#cef1ea] p-2 rounded-lg w-full text-center`}>Contact Us</Link>
        </div>
        )}
        </div>
      </div>
    </>
  );
}

export default Header;
