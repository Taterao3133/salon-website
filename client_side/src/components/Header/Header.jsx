import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from '../../Images/salon-logo.png';
import { FiMenu, FiX } from "react-icons/fi";

function Header({ isPopupOpen }) {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && !isPopupOpen) {
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
      <div className={`Header h-[70px] pt-1 ${isPopupOpen ? 'overflow-hidden' : ''} bg-white ${isSticky ? 'fixed top-0 left-0 w-full shadow-lg z-50' : ''} transition-all duration-500`}>
        <div className="flex justify-between items-center h-full px-4 md:px-[120px]">
          <div className="leftheader flex items-center">
            <div className="logo cursor-pointer">
              <img src={Logo} alt="Salon Logo" className="w-9 h-9  xl:w-14 xl:h-14" />
            </div>
            <div className="name ml-2 xl:ml-4">
              <p className="cursor-pointer text-lg xl:text-2xl font-playfair">Unique Beauty <br /><span>Salon</span></p>
            </div>
          </div>
          <div className="rightheader hidden md:flex items-center">
            <div className="headerlinks flex space-x-[40px]">
              <Link to='/'><p className="cursor-pointer text-base hover:text-lg font-semibold">Home</p></Link>
              <p className="cursor-pointer text-base hover:text-lg font-semibold">Services</p>
              <Link to='/about'><p className="cursor-pointer text-base hover:text-lg font-semibold">About Us</p></Link>
              <Link to='/contact'><p className="cursor-pointer text-base hover:text-lg font-semibold">Contact Us</p></Link>
            </div>
          </div>
          <div className="md:hidden  flex items-center">
            <button onClick={toggleMenu} className="text-2xl">
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white fixed bg-opacity-80  top-16  h-[25%] ml-48  w-1/2 inset-0 shadow-lg z-50">
            <div className="flex flex-col text-center space-y-2  p-4">
              <Link to='/' onClick={toggleMenu}><p className="cursor-pointer text-base font-semibold">Home</p></Link>
              <p className="cursor-pointer text-base font-semibold">Services</p>
              <Link to='/about' onClick={toggleMenu}><p className="cursor-pointer text-base font-semibold">About Us</p></Link>
              <Link to='/contact' onClick={toggleMenu}><p className="cursor-pointer text-base font-semibold">Contact Us</p></Link>
            </div>
          </div>
        )}
        </div>
      </div>
    </>
  );
}

export default Header;
