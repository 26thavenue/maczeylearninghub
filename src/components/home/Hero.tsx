import Button from "../Buttons"
import heroImg from "/hero.png"
import { Link } from "react-router-dom"
const Hero = () => {
  return (
    <main className=' p-8 lg:py-12 lg:px-24 gap-4 lg:gap-8 flex-col-reverse text-black flex lg:flex-row items-center justify-center lg:justify-between   h-full lg:h-[100dvh] w-[100dvw]  font-primary'>
      <div className="w-full lg:w-1/2  flex flex-col gap-4 items-center lg:items-start ">
        <h1 className="text-2xl lg:text-5xl leading-tight tracking-[-0.5px] font-medium text-center lg:text-left  ">Empower Your Learning with MaczeyLearningHub</h1>
        <h4 className=" text-sm lg:text-lg mb-4 leading-[1.7] text-center lg:text-left">Welcome to Maczey Learning Hub, your premier online learning platform for  quality educational pathways to individuals around the world.</h4>
        <div className="flex gap-4 items-center ">
          <Link to="/programs">
              <Button
                variant="primary"
                buttonName="Check Our Programs"
                className="cursor-pointer rounded-[5px] w-fit"
              />
          </Link>
        
        <Link to="/contact">
                  <Button
                    variant="tertiary"
                    buttonName="Get In Touch"
                    className="cursor-pointer rounded-[5px] w-fit"
                  />
        </Link>

        </div>
        
      </div>
     
      <img src = {heroImg} className=" h-[400px] w-[500px] lg:h-[500px] lg:w-[800px] object-contain ">

      </img>
    </main>
  )
}

export default Hero