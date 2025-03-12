
import Button from "../Buttons"
import srh from "/srh.png"
import obs from "/obs.png"
import rga from "/rga.png"
import eg from "/egraduate.png"


const Partners = () => {
  return (
    <div className=" w-full gap-8 p-8 lg:p-24 flex-col-reverse flex lg:flex-row items-center justify-between ">
        <div className="flex flex-col gap-4 w-full lg:w-1/2 items-start">
            <h3 className="text-2xl lg:text-5xl font-medium leading-tight tracking-[-1px] text-left">Learn from the Best - <span className="block">Our Academic Partners</span></h3>
            <p className=" w-full lg:w-3/4  mb-2 text-base  lg:text-lg text-left">We collaborate with top universities and institutions to bring you world-class education and career-focused programs</p>
            <Button
                variant="primary"
                buttonName="View our Partners"
                className="w-fit rounded-full"
            />
        </div>

        <div className="grid grid-cols-2 space-x-4 space-y-4 lg:w-1/2 w-full">
            <img src={obs} className=" w-16 h-16 lg:w-24 lg:h-24 object-contain">

            </img>
            <img src={rga} className="w-16 h-16 lg:w-24 lg:h-24 object-contain">

            </img>
            <img src={srh} className="w-16 h-16 lg:w-24 lg:h-24 object-contain">

            </img>
            <img src={eg} className="w-16 h-16 lg:w-24 lg:h-24 object-contain">

            </img>
        </div>
       
    </div>
  )
}

export default Partners