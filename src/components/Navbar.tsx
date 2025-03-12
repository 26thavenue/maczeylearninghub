import { Link } from 'react-router-dom'
import logo from '/logo.png'
import Button from "../components/Buttons"
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className='py-4 p-6 lg:px-24 flex justify-between items-center bg-[#f1eeee] font-primary'>
      <div className='flex gap-48 items-center'>
          <img src={logo} alt="Logo" className='w-10 h-10 object-contain  '/>

          <div className='lg:flex gap-8 text-lg hidden '>
            <Link to="/about" className="hover:underline transition-all ease-in ">About Us</Link>
            <Link to="/about" className="hover:underline transition-all ease-in ">Contact</Link>
            <Link to="/about" className="hover:underline transition-all ease-in ">Our partners</Link>
            <Link to="/about" className="hover:underline transition-all ease-in ">Courses</Link>
          </div>

      </div>
     

      <Button variant="primary" buttonName = " Get in Touch " className="rounded-md hidden lg:block"/>

      <IoMdMenu  className="block lg:hidden w-24  h-8"/>
      
    </nav>
  )
}

export default Navbar