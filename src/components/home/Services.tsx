const cards = [
  {
    title: "Online Courses",
    description: "Access diverse courses from top institutions with flexible, self-paced learning.",
    imageSrc: "/home/service1.png",
  },
  {
    title: "Degree Programs",
    description: "Earn recognized undergraduate and graduate degrees with expert mentorship.",
    imageSrc: "/home/service8.png",
  },
  {
    title: "Career Services",
    description: "Resume building, job placement, and career counseling to boost your success.",
    imageSrc: "/home/service9.png",
  },
  {
    title: "Personalized Learning",
    description: "Customized learning plans with one-on-one mentorship and progress tracking.",
    imageSrc: "/home/service5.png",
  },
  {
    title: "Certification & Accreditation",
    description: "Earn industry-recognized certifications and accredited credentials.",
    imageSrc: "/home/service4.png",
  },
  {
    title: "Corporate Training",
    description: "Tailored training solutions to upskill employees and enhance business growth.",
    imageSrc: "/home/service6.png",
  },
  {
    title: "Support Services",
    description: "Technical, academic, and mental health support for a smooth learning experience.",
    imageSrc: "/home/service7.png",
  },
  {
    title: "Alumni Network",
    description: "Connect with a global network of alumni for career growth and mentorship.",
    imageSrc: "/home/service2.png",
  },
];


const Services = () => {
  return (
    <div className=" p-8 lg:p-24">
      <div className="flex flex-col items-start lg:items-center gap-4 mb-8">
        <h3 className="text-2xl lg:text-5xl font-medium leading-tight tracking-[-1px]">Our Services</h3>
        <h6 className="mb-2 text-base lg:text-lg text-leftlg:text-center">
          These are the range of services we offer at MaczeyLearning Hub
        </h6>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full lg:w-3/4 mx-auto">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col items-center bg-[#f1eeee]  p-4 rounded-lg shadow-md">
            <img src={card.imageSrc} loading="lazy" className="w-16 h-16 lg:w-24 lg:h-24 object-contain mb-4"></img>
            <h4 className="text-base lg:text-lg font-semibold text-center">{card.title}</h4>
            <p className="text-xs lg:text-sm text-center">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
