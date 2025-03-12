import logo from "/logo.png"

const Footer = () => {
  return (
    <div className="bg-[#f1eeee] p-24 flex-col flex items-start lg:items-center lg:flex-row justify-between gap-4">
        <img src={logo} className=" h-[100px] w-[100px] lg:h-[200px] lg:w-[200px] object-contain"></img>

        <div className="gap-2 flex flex-col mt-4 lg:mt-0 text-lg">
            <p className="font-medium mb-1">Quick Links</p>
            <p className="hover:underline transition-all ease-in ">About Us</p>
            <p className="hover:underline transition-all ease-in ">Contact Us</p>
            
        </div>

        <div className="gap-2 flex flex-col mt-4 lg:mt-0 text-lg">
            <p className="font-medium mb-2">Connect With Us</p>
            <p className="hover:underline transition-all ease-in ">Instagram</p>
            <p className="hover:underline transition-all ease-in ">Facebook</p>
            <p className="hover:underline transition-all ease-in ">Twitter</p>
        </div>

    </div>
  )
}

export default Footer