import Banner from "../components/Banner"
import WhatWeOffer from "../components/about/WhatWeOffer"
import Why from "../components/home/Why"
import Partners from "../components/home/Partners"
import mission from '/mission.png'
import aboutUsImg from "/aboutUs.png"


const AboutUs = () => {
  return (
    <main className="">
      <div
        style={{ backgroundImage: `url(${aboutUsImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        className="h-[30dvh] lg:h-[80dvh] w-full flex flex-col gap-4 items-center justify-center p-8 lg:p-24"
      >
        <h1 className="text-4xl lg:text-6xl leading-tight text-white tracking-[-1px] font-medium text-center lg:text-left">
          About Us
        </h1>
        <p className="lg:text-2xl  lg:leading-8 text-white text-center ">Empowering lifelong learning, inspiring personal and professional growth.</p>
      </div>


      <div className="mb-4 flex-col flex lg:flex-row justify-evenly items-center p-8 lg:p-24 text-2xl">
        <p className="leading-7 lg:leading-10 text-sm lg:text-xl">Welcome to Maczeylearninghub, your premier online learning platform for academic excellence. We're a dynamic team of education enthusiasts dedicated to providing accessible, affordable, and high-quality educational pathways to individuals around the world.
        </p>
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