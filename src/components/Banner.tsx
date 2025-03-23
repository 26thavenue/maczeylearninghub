import Button from "./Buttons"
import BannerImg from  "/home/banner.png"

const Banner = () => {
  return (
    <div className=" bg-primary lg:mb-24 lg:w-[90dvw] lg:rounded-xl mx-auto text-white p-8 lg:p-12  flex items-center justify-center ">
      <div className="w-full  lg:w-[90%] flex-col-reverse lg:flex-row mx-auto flex items-center justify-between py-12">
        <div className="flex flex-col  gap-4 text-lg w-full lg:w-1/2">
          <h3 className="text-2xl lg:text-5xl font-medium leading-tight tracking-[-1px] mt-4 lg:mt-0 w-full   lg:w-3/4">Join Our Community</h3>
          <p className="text-lg mb-4">Take the first step towards achieving your academic goals with Maczeylearninghub. Browse our website to learn more about our programs and services, and get in touch with us to discuss your academic aspirations.</p>
          <div className="flex gap-4">
            <Button variant="secondary" buttonName="View Our Courses" className="w-fit rounded-md"/>
          </div>
          
        </div>
        
        <img src={BannerImg} className=" w-[300px] h-[300px] object-contain"/>

        
        
      </div>
      
        
    </div>
  )
}

export default Banner