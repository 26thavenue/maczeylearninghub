import ContactForm from "../components/contact/form"
import contact from "/contact_us.png"
import { GrLocationPin } from "react-icons/gr";
import { MdOutlinePhone } from "react-icons/md";


const ContactUs = () => {
  return (
    <main>
        <div className="bg-primary h-[30dvh] lg:h-[50dvh] w-full flex items-center p-8 lg:p-24">
          <h1 className="text-4xl lg:text-5xl leading-tight text-white  tracking-[-1px] font-medium text-center lg:text-left  ">Contact Us </h1>
        </div>

        <div className="mt-4 flex-col flex lg:flex-row justify-evenly items-center p-8 lg:p-24">
            <div className="w-full lg:w-1/2 flex flex-col gap-8">
                <h3 className="text-2xl lg:text-5xl font-medium">Let’s Get in Touch</h3>
                <p className="text-lg ">Feel free to send us n emil on any concerning issues you have by reaching out to the number above or sending us an email</p>
                <p className="text-lg flex items-center gap-4 "> <span> <GrLocationPin/></span> 50 Mbonu Street, D-Line Portharcourt </p>
                <p className="text-lg flex items-center gap-4 "> <span> <MdOutlinePhone/></span>+2348038411326</p>
            </div>
           
            <img src={contact} className="h-[200px] w-[300px] lg:h-[400px] lg:w-[500px]  mt-8 lg:mt-0"></img>
        </div>

      <div className="p-8 lg:p-24">
        <ContactForm/>
      </div>

        

    </main>
  )
}

export default ContactUs