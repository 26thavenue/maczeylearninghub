import { useState, useEffect } from "react";
import Button from "../Buttons";
import { Link } from "react-router-dom";

const Hero = () => {
  // Slider content with background images and text content
  const slides = [
    {
      backgroundImg: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      heading: "Empower Your Learning with MaczeyLearningHub",
      subheading: "Welcome to Maczey Learning Hub, your premier online learning platform for quality educational pathways to individuals around the world."
    },
    {
      backgroundImg: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      heading: "Personalized Learning Experiences",
      subheading: "Discover tailored courses designed to help you achieve your educational goals at your own pace."
    },
    {
      backgroundImg: "https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      heading: "Learn from Industry Experts",
      subheading: "Our courses are taught by professionals with years of experience in their respective fields."
    },
    {
      backgroundImg: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      heading: "Join Our Global Community",
      subheading: "Connect with learners from around the world and expand your professional network."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = 5000; 

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, slideInterval);

    return () => clearInterval(interval);
  }, [slides.length]);

 
  const goToSlide = (index:number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <main className="relative h-[100dvh] w-[100dvw] overflow-hidden font-primary">

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
        
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: `url(${slide.backgroundImg})` }}
          >
            
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          {/* Content overlay */}
          <div className="relative z-20 flex h-full w-full items-center justify-center p-8 lg:p-24">
            <div className="w-full lg:w-3/4 flex flex-col gap-6 items-center text-center text-white">
              <h1 className="text-3xl lg:text-6xl font-medium leading-tight">
                {slide.heading}
              </h1>
              <h4 className="text-lg lg:text-xl mb-6 max-w-3xl">
                {slide.subheading}
              </h4>
              <div className="flex gap-4 items-center">
                <Link to="/courses">
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
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 p-3 rounded-full shadow hover:bg-white/40 transition-colors"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 p-3 rounded-full shadow hover:bg-white/40 transition-colors"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Indicator dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </main>
  );
};

export default Hero;