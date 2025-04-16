import Banner from "../components/Banner"
import WhatWeOffer from "../components/about/WhatWeOffer"
import Why from "../components/home/Why"
import Partners from "../components/home/Partners"
import mission from '/mission.png'
import aboutUsImg from "/about.png"



const AboutUs = () => {
  return (
    <main className="font-primary">
      <div
        className=" w-full flex flex-col gap-4 items-center justify-center p-8 lg:p-24 mt-16"
      >
        <h1 className="text-2xl cursor-pointer group lg:text-5xl leading-tight font-medium text-black tracking-[-1px] mb-4  text-center lg:text-left">
          Your Partner in Expanding 
          <span className="bg-primary cursor-pointer text-white skew-3 ml-2 py-3 px-6 rounded-3xl  transition ">Education</span>
        </h1>
        <p className="lg:text-xl max-w-5xl text-gray-800  lg:leading-8  text-center mb-16">We're a dynamic team of education enthusiasts dedicated to providing accessible, affordable, and high-quality educational pathways to individuals around the world.</p>
        <img src={aboutUsImg}
        alt="aboutUs" className="object-cover w-[90dvw] h-[90dvh] mx-auto rounded-2xl"/>
      </div>

      <div className="my-4 bg-primary text-white flex-col-reverse  gap-8 flex lg:flex-row justify-evenly items-center p-8 lg:p-24">
        <div className="flex flex-col gap-4 w-full lg:w-1/2">
          <h3 className="text-2xl lg:text-5xl font-medium">Our Mission</h3>
          <p className="text-base lg:text-lg leading-normal lg:leading-10">Our mission is to democratize education by bridging the gap between aspiring students and reputable academic institutions. We strive to provide a seamless and supportive learning experience that fosters academic excellence, personal growth, and career advancement.</p>
        </div>

      <img src={mission} className="h-[200px] rounded-2xl w-[300px] lg:h-[400px] lg:w-[500px]  mt-8 lg:mt-0 object-contain"/>
      
      </div>

      <WhatWeOffer/>
      <Partners/>
      <Why/>
      <Banner/>
      
      
    </main>
  )
}

export default AboutUs