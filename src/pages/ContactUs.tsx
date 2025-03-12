import ContactForm from "../components/contact/form"


const ContactUs = () => {
  return (
    <main>
        <div className="bg-primary h-[30dvh] lg:h-[50dvh] w-full flex items-center p-12">
          <h1 className="text-4xl lg:text-5xl leading-tight text-white  tracking-[-1px] font-medium text-center lg:text-left  ">Contact Us </h1>
        </div>

        <div className="my-4 flex-col flex lg:flex-row justify-evenly items-center p-12">
            <div className="w-1/2 flex flex-col gap-8">
                <h3 className="text-2xl lg:text-4xl font-medium">Let’s Get in Touch</h3>
                <p className="text-lg ">Feel free to send us n emil on any concerning issues you have by reaching out to the number above or sending us an email</p>
                <p className="text-lg ">50 Mbonu Street, D- Line Portharcourt </p>
                <p className="text-lg ">+2348038411326</p>
            </div>
           
            <div className="h-[200px] w-[200px] bg-blue-100 mt-8 lg:mt-0"></div>
        </div>


        <ContactForm/>
    </main>
  )
}

export default ContactUs