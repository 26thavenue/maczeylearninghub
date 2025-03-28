import { Link } from "react-router-dom";
import Button from "../components/Buttons";

import srh from "/srhImg.png";
import obs from "/obsImg.png";
import rga from "/rgaImg.png";
import eg from "/egaImg.png";

import partner from "/partners.avif"


import ukFlag from "/uk.png";
import canadaFlag from "/canada.png";
import germanyFlag from "/germany.png";
import Banner from "../components/Banner";

const Partners = () => {
  const partnerSections = [
    {
      country: "United Kingdom",
      flag: ukFlag,
      institutions: [
        {
          name: "Online Business School",
          imgSrc: obs,
          pathName: "/partners/obs",
          description:
            "Provides flexible online business programs tailored for aspiring entrepreneurs and professionals.",
        },
        {
          name: "E-Graduate College",
          imgSrc: eg,
          pathName: "/partners/egraduate",
          description:
            "A cutting-edge online education platform designed for modern learners seeking global opportunities.",
        },
      ],
    },
    {
      country: "Canada",
      flag: canadaFlag,
      institutions: [
        {
          name: "Ready Global Academy",
          imgSrc: rga,
          pathName: "/partners/rga",
          description:
            "An international school providing American-style education with college prep courses.",
        },
      ],
    },
    {
      country: "Germany",
      flag: germanyFlag,
      institutions: [
        {
          name: "SRH University",
          imgSrc: srh,
          pathName: "/partners/srh",
          description:
            "A prestigious German university offering innovative and hands-on academic programs.",
        },
      ],
    },
  ];

  return (
    <section className="mx-auto p-8 lg:p-24 font-primary">
      <div className="flex container  items-center justify-between">
        <div className="flex flex-col gap-6 w-1/2">
           <h2 className="text-sm font-medium text-primary uppercase tracking-wider animate-slide-down">
                  Our Partners
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight animate-slide-up">
              Connecting students with world-class education
          </h1>
          <p className=" text-lg text-gray-600 animate-slide-up [animation-delay:100ms]">
                      We partner with top educational providers to help them connect with motivated students 
                      while simplifying their enrollment and marketing processes.
          </p>
          <Button variant="primary" buttonName="Explore Our Programs" className="w-fit rounded-full"/>
        </div>
        

        <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-blue-400/5 rounded-3xl transform -rotate-1"></div>
                <div className=" rounded-3xl p-1 transform rotate-1 shadow-xl">
                  <div className="rounded-2xl overflow-hidden">
                    <img 
                      src={partner}
                      alt="Collaboration" 
                      className="w-[600px] h-[500px] object-cover"
                    />
                  </div>
                </div>
        </div>
          

      </div>
      <section className="py-24 bg-slate-50 my-16">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-3 animate-slide-up">
                Featured Partners
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up [animation-delay:100ms]">
                Meet the institutions that trust us
              </h3>
              <p className="text-lg text-gray-600 animate-slide-up [animation-delay:200ms]">
                We collaborate with diverse educational providers who share our commitment 
                to quality learning and student success.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  space-y-4">
              {partnerSections.map((partner, index) => (
                <div>
                  {partner.institutions.map((schools,_) =>(
                   <div 
                      key={schools.name} 
                      className="bg-white rounded-xl overflow-hidden shadow-sm border my-4 border-slate-100 transition-transform hover:scale-[1.02] animate-scale-in"
                      style={{ animationDelay: `${index * 100 + 300}ms` }}
                    >
                      <div className="h-32 bg-gray-50 flex items-center justify-center p-4">
                    <img 
                      src={schools.imgSrc} 
                      alt={schools.name} 
                      className="max-h-16"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2">{schools.name}</h4>
                    <p className="text-gray-600 mb-4 min-h-[80px]">{schools.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    </div>
                  </div>

                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
        

      <Banner/>
    </section>
  );
};

export default Partners;
