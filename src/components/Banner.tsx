import Button from "./Buttons"
import BannerImg from  "/home/banner.png"

const Banner = () => {
  return (
    <div className=" p-8 lg:p-24  flex items-center justify-center ">
      <div className="w-3/4 flex-col-reverse lg:flex-row mx-auto flex items-center justify-between py-12">
        <div className="flex flex-col  gap-4 text-lg ">
          <h3 className="text-2xl lg:text-5xl font-medium leading-tight tracking-[-1px] mt-4 lg:mt-0 w-full   lg:w-3/4">Unlock your Learning potential</h3>
          <p className="text-lg mb-4">Discover a world of educational opportunities and partner with us for growth.</p>
          <div className="flex gap-4">
            <Button variant="primary" buttonName="View Courses" className="w-fit rounded-md"/>
            <Button variant="outline" buttonName="Contact Us" className="w-fit border-primary/10 hover:bg-primary/10 transition-colors ease-in-out"/>
          </div>
          
        </div>
        
        <img src={BannerImg} className=" w-[300px] h-[300px] object-contain"/>

        
        
      </div>
      
        
    </div>
  )
}

export default Banner