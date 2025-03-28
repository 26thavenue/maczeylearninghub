import { Link } from 'react-router-dom';
import logo from '/logov2.png';
import Button from '../components/Buttons';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


const Navbar = () => {
  const [open, setOpen] = useState(false);
   const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <nav className="lg:py-2 py-2 px-6 lg:px-24 flex justify-between items-center border border-[#f1eeee] font-primary">
      <div className="flex gap-48 items-center">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-[121px] h-[70px] object-contain m-0 p-0" />
        </Link>

        <div className="lg:flex gap-8 text-lg hidden">
          <Link to="/about" className=" transition-all ease-in">About Us</Link>
          <Link to="/contact" className=" transition-all ease-in">Contact</Link>
          
            <div className="relative group">
              <button className="transition-all cursor-pointer ease-in flex gap-2 items-center">
                Our Partners <MdOutlineKeyboardArrowDown />
              </button>

              {/* Dropdown Menu (Appears on Hover) */}
              <div className="absolute left-0 mt-2 w-84 bg-white border border-gray-300 shadow-lg rounded-md p-4 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link to="/partners" className="block px-4 py-2 hover:bg-gray-100">All Partners</Link>
                <Link to="/partners/obs" className="block px-4 py-2 hover:bg-gray-100">Online Business School</Link>
                <Link to="/partners/egraduate" className="block px-4 py-2 hover:bg-gray-100">E-Graduate College</Link>
                <Link to="/partners/rga" className="block px-4 py-2 hover:bg-gray-100">Ready Global Academy</Link>
                <Link to="/partners/srh" className="block px-4 py-2 hover:bg-gray-100">SRH University</Link>
              </div>
            </div>

          
          <Link to="/courses" className="hover:underline transition-all ease-in">Programs</Link>
        </div>
      </div>

     

      <Link to="/contact">
        <Button variant="primary" buttonName="Get in Touch" className="rounded-md hidden lg:block" />
      </Link>

      
      <button onClick={() => setOpen(!open)} className="block lg:hidden w-10 h-10">
         <IoMdMenu className="w-8 h-8" />
      </button>

      
      <div
        className={`fixed top-0 right-0 h-full w-[75%] bg-white shadow-md transform ${
          open ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.3,1)]`}
      >
        
        {open && (
          <div className="flex flex-col gap-6 text-lg text-black p-8 pt-20 ">
            <button onClick={() => setOpen(!open)} className="block lg:hidden w-10 h-10 self-end">
               <IoMdClose className="w-8 h-8 justify-self-end place-self-end  " /> 
            </button>
            <Link to="/about" className="hover:underline transition-all ease-in" onClick={() => setOpen(false)}>About Us</Link>
            <Link to="/contact" className="hover:underline transition-all ease-in" onClick={() => setOpen(false)}>Contact</Link>
            <Link to="/partners" className="hover:underline transition-all ease-in" onClick={() => setOpen(false)}>Our Partners</Link>
            <Link to="/courses" className="hover:underline transition-all ease-in" onClick={() => setOpen(false)}>Programs</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
