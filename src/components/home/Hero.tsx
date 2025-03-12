import Button from "../Buttons"
import heroImg from "/home/heroImg.png"
const Hero = () => {
  return (
    <main className=' p-8 lg:py-12 lg:px-24 gap-4 lg:gap-8 flex-col-reverse  flex lg:flex-row items-center justify-center lg:justify-between  bg-primary h-full lg:h-[100dvh] w-[100dvw] text-white font-primary'>
      <div className="w-full lg:w-1/2  flex flex-col gap-4 items-center lg:items-start ">
        <h1 className="text-2xl lg:text-5xl leading-tight tracking-[-0.5px] font-medium text-center lg:text-left  ">Empower Your Learning with MaczeyLearningHub</h1>
        <h4 className=" text-sm lg:text-lg mb-2 leading-[1.7] text-center lg:text-left">Welcome to Maczey Learning Hub, your premier online learning platform for  quality educational pathways to individuals around the world.</h4>
        <Button
          variant="secondary"
          buttonName="View Our Courses now"
          className="cursor-pointer rounded-[5px] w-fit"
        />
      </div>
     
      <img src = {heroImg} className=" h-[300px] w-[400px] lg:h-[500px] lg:w-[800px] object-contain ">

      </img>
    </main>
  )
}

export default Hero