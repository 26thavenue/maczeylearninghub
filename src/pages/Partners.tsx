import { Link } from "react-router-dom"

import srh from "/srh.png"
import obs from "/obs.png"
import rga from "/rga.png"
import eg from "/egraduate.png"

const Partners = () => {
  const partners = [
    { name: "Online Business School", imgSrc:obs, pathName:"/partners/obs"},
    { name: "SRH University",  imgSrc:srh , pathName:"/partners/srh"},
    { name: "Ready Global Academy ",  imgSrc:rga , pathName:"/partners/rga" },
    { name: "E-graduate",  imgSrc:eg  , pathName:"/partners/egraduate"}
  ];

  return (
    <section className="max-w-5xl mx-auto p-8 lg:p-24">
      <h2 className="text-2xl lg:text-5xl font-bold text-center text-gray-800 mb-6">
        Our Trusted Partners
      </h2>
      <p className="text-center text-lg mb-12">
        We collaborate with industry leaders to provide the best learning experience.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {partners.map((partner, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center text-center p-4 transition transform hover:scale-105"
          >
            
            <img src={partner.imgSrc} className="w-28 h-28 bg-gray-200 rounded-lg mb-4 object-contain"></img>
            
            
            <p className="text-lg font-semibold text-gray-700">{partner.name}</p>
            
            
            <Link to={partner.pathName} className="underline"> View Partner</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
