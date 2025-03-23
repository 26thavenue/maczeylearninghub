import { Link } from "react-router-dom"
import Button from "../Buttons"
import srh from "/srhImg.png"
import obs from "/obsImg.png"
import rga from "/rgaImg.png"
import eg from "/egaImg.png"


const Partners = () => {
  return (
    <div className="  mx-auto bg-primary my-4 text-white w-full gap-8 p-8 lg:p-24 flex-col-reverse flex lg:flex-row items-center justify-between ">
        <div className="flex flex-col gap-4 w-full lg:w-1/2 items-start">
            <h3 className="text-2xl lg:text-5xl font-medium leading-tight tracking-[-1px] text-left">Learn from the Best - <span className="block">Our Academic Partners</span></h3>
            <p className=" w-full lg:w-3/4  mb-2 text-base  lg:text-lg text-left">We collaborate with top universities and institutions to bring you world-class education and career-focused programs</p>
            <Link to='/partners'>
               <Button
                variant="secondary"
                buttonName="View our Partners"
                className="w-fit rounded-full"
            />
            </Link>
           
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