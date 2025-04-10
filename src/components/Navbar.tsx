import { Link } from 'react-router-dom';
import logo from '/logov2.png';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { useState, useRef, useEffect } from 'react';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Spring animation configuration
  const spring = {
    type: "spring",
    damping: 25,
    stiffness: 300,
  };

  return (
    <nav className="py-2 px-6 lg:px-12 max-h-20 flex items-center justify-between bg-black text-white font-primary">
      {/* Empty div for balance */}
      <div className="w-10"></div>

      {/* Centered logo */}
      <div className="flex-1 flex justify-center">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-[121px] h-[70px] object-contain m-0 p-0" />
        </Link>
      </div>

      {/* Menu button (right-aligned) */}
      <button 
        onClick={() => setMenuOpen(!menuOpen)} 
        className="w-10 h-10 flex justify-end"
        aria-label="Toggle menu"
      >
        {menuOpen ? <IoMdClose className="w-8 h-8 cursor-pointer" /> : <IoMdMenu className="w-8 h-8 cursor-pointer" />}
      </button>

      {/* Menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>
      
      {/* Menu sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={spring}
            className="fixed top-0 right-0 h-full w-[50%] bg-white shadow-xl z-50"
          >
            <div className="flex flex-col gap-8 text-black p-6">
              {/* Close button */}
              <button 
                onClick={() => setMenuOpen(false)} 
                className="self-end p-2"
                aria-label="Close menu"
              >
                <IoMdClose className="w-7 h-7" />
              </button>
              
              {/* Menu items with larger, bolder text */}
              <div className="mt-10 flex flex-col gap-8 text-2xl font-bold">
                <Link to="/about" className="hover:text-gray-600 transition-all ease-in" onClick={() => setMenuOpen(false)}>
                  About Us
                </Link>
                
                <Link to="/contact" className="hover:text-gray-600 transition-all ease-in" onClick={() => setMenuOpen(false)}>
                  Contact
                </Link>
                
                {/* Partners dropdown */}
                <div className="flex flex-col gap-4">
                  <button 
                    className="flex items-center gap-4 hover:text-gray-600 transition-all ease-in"
                    onClick={toggleDropdown}
                  >
                    <span>Our Partners</span>
                    {dropdownOpen ? <MdOutlineKeyboardArrowUp className="w-6 h-6 cursor-pointer" /> : <MdOutlineKeyboardArrowDown className="w-6 h-6" />}
                  </button>
                  
                  {/* Dropdown content */}
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: dropdownOpen ? 'auto' : 0 }}
                    transition={spring}
                    className="ml-4 flex flex-col gap-4 overflow-hidden"
                  >
                    {dropdownOpen && (
                      <>
                        <Link to="/partners" className="text-xl font-semibold hover:text-gray-600 transition-all ease-in" onClick={() => setMenuOpen(false)}>
                          All Partners
                        </Link>
                        <Link to="/partners/obs" className="text-xl font-semibold hover:text-gray-600 transition-all ease-in" onClick={() => setMenuOpen(false)}>
                          Online Business School
                        </Link>
                        <Link to="/partners/egraduate" className="text-xl font-semibold hover:text-gray-600 transition-all ease-in" onClick={() => setMenuOpen(false)}>
                          E-Graduate College
                        </Link>
                        <Link to="/partners/rga" className="text-xl font-semibold hover:text-gray-600 transition-all ease-in" onClick={() => setMenuOpen(false)}>
                          Ready Global Academy
                        </Link>
                        <Link to="/partners/srh" className="text-xl font-semibold hover:text-gray-600 transition-all ease-in" onClick={() => setMenuOpen(false)}>
                          SRH University
                        </Link>
                      </>
                    )}
                  </motion.div>
                </div>
                
                <Link to="/courses" className="hover:text-gray-600 transition-all ease-in" onClick={() => setMenuOpen(false)}>
                  Programs
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;