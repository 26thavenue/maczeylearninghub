import Banner from "../components/Banner"
import WhatWeDo from "../components/about/WhatWeDo"
import Services from "../components/home/Services"

import srh from "/srh.png"
import obs from "/obs.png"
import rga from "/rga.png"
import eg from "/egraduate.png"
import mission from '/mission.png'
import { Link } from "react-router-dom"

import { FaArrowRightLong } from "react-icons/fa6";


const AboutUs = () => {
  return (
    <main className="">
      <div className="bg-primary h-[30dvh] lg:h-[50dvh] w-full flex items-center p-8 lg:p-24 ">
          <h1 className="text-4xl lg:text-5xl leading-tight text-white  tracking-[-1px] font-medium text-center lg:text-left  ">About Us </h1>
      </div>

      <div className="my-4 flex-col flex lg:flex-row justify-evenly items-center p-8 lg:p-24">
        <div className="flex flex-col gap-4 w-full lg:w-1/2">
          <h3 className="text-2xl lg:text-5xl font-medium">Our Mission</h3>
          <p className="text-lg leading-normal lg:leading-10">Our mission is to democratize education by bridging the gap between aspiring students and reputable academic institutions. We strive to provide a seamless and supportive learning experience that fosters academic excellence, personal growth, and career advancement.</p>
        </div>

      <img src={mission} className="h-[200px] w-[300px] lg:h-[400px] lg:w-[500px]  mt-8 lg:mt-0 object-contain"></img>
      
      </div>


      <WhatWeDo/>

      <Services/>

      <div className=" bg-primary/10 my-4 px-12 py-24 flex flex-col gap-16 items-center ">
        <h3 className="text-2xl lg:text-5xl font-medium">Our Academic partners</h3>

        <div className="flex gap-16 items-center ">
          
            <img src={obs} className=" w-16 h-16 lg:w-24 lg:h-24 object-contain">

            </img>
            <img src={rga} className="w-16 h-16 lg:w-24 lg:h-24 object-contain">

            </img>
            <img src={srh} className="w-16 h-16 lg:w-24 lg:h-24 object-contain">

            </img>
            <img src={eg} className="w-16 h-16 lg:w-24 lg:h-24 object-contain">

            </img>
        
        </div>
        <Link to ="/partners" className="underline  text-lg flex gap-2 items-center group">View Our Partners <span className="hidden group-hover:block transition ease-in-out"><FaArrowRightLong /></span></Link>
      </div>

      

      
      <Banner/>
      
    </main>
  )
}

export default AboutUs