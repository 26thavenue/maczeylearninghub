import Banner from "../components/Banner"
import WhatWeDo from "../components/about/WhatWeDo"
import Services from "../components/home/Services"


const AboutUs = () => {
  return (
    <main className="">
      <div className="bg-primary h-[30dvh] lg:h-[50dvh] w-full flex items-center p-12">
          <h1 className="text-4xl lg:text-5xl leading-tight text-white  tracking-[-1px] font-medium text-center lg:text-left  ">About Us </h1>
      </div>

      <div className="my-4 flex-col flex lg:flex-row justify-evenly items-center p-12">
        <div className="flex flex-col gap-4 w-full lg:w-1/2">
          <h3 className="text-2xl lg:text-4xl font-medium">Our Mission</h3>
          <p className="text-lg">Our mission is to democratize education by bridging the gap between aspiring students and reputable academic institutions. We strive to provide a seamless and supportive learning experience that fosters academic excellence, personal growth, and career advancement.</p>
        </div>

        <div className="h-[200px] w-[200px] bg-blue-100 mt-8 lg:mt-0"></div>
      
      </div>


      <WhatWeDo/>

      <div className="my-4 px-12 py-24 flex flex-col gap-16 items-center ">
        <h3 className="text-2xl lg:text-4xl font-medium">Our Academic partners</h3>

        <div className="flex gap-16 flex-wrap items-center justify-center">
          <div className="h-[200px] w-[200px] bg-blue-100 rounded-full"></div>
          <div className="h-[200px] w-[200px] bg-blue-100 rounded-full"></div>
          <div className="h-[200px] w-[200px] bg-blue-100 rounded-full"></div>
          <div className="h-[200px] w-[200px] bg-blue-100 rounded-full"></div>
        </div>
      </div>

      

      <Services/>
      <Banner/>
      
    </main>
  )
}

export default AboutUs