const SectionOne = () => {
  const cards = [
    {
      heading: "High School Diplomas",
      description:
        "Earn accredited high school diplomas from top institutions in the UK, US, and Canada",
      imageSrc: "/home/highschool.png",
      bg:"#2157A1",
    },
    {
      heading: "College & University Diplomas",
      description:
        "Gain recognized diplomas from leading universities in the UK, US, Canada, and Germany.",
      imageSrc: " /home/college.png",
      bg:"#D94E75",
    },
    {
      heading: "Online Certification Courses",
      description:
        "Upskill with industry-recognized certifications in business, technology, healthcare, and more.",
      imageSrc: " /home/online.png",
      bg:"#EBBB39",
    },
    {
      heading: "Corporate Training Programs",
      description:
        "Customized training solutions to enhance workforce skills and professional growth.",
      imageSrc: "/home/corporate.png ",
      bg:"#56AB52",
    },
  ];

  return (
    <div className=" w-full lg:w-[95dvw] rounded-md mx-auto  p-8 lg:p-24 bg-primary/10 py-24">
      <h1 className="text-2xl mb-2 lg:text-5xl leading-tight tracking-[-1px] font-medium items-start lg:items-center ">
        Unlock Your Future with World-Class{" "}
        <span className="inline lg:block">Online Learning!</span>
      </h1>
      <p className="text-sm lg:text-lg mb-12 leading-[1.7] ">
        Flexible, affordable, and high-quality education from top institutions
        worldwide. <span className="block">Start your journey today!</span>
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        {cards.map((card, index) => (
          <div
            key={index}
            style={{backgroundColor:card.bg}}
            className="flex flex-col-reverse text-white lg:flex-row  min-h-[250px] p-8 lg:items-center items-start gap-4 justify-center lg:justify-between hover:rounded-2xl transition ease-in-out w-full"
          >
            {/* Text Section */}
            <div className="flex flex-col w-full lg:w-1/2 break-words">
              <p className="mb-2 font-bold text-base lg:text-lg">
                {card.heading}
              </p>
              <p className="text-sm lg:text-base break-words">
                {card.description}
              </p>
            </div>

            {/* Image Placeholder */}
            <img src={card.imageSrc} className="w-16 h-16 object-contain lg:w-48 lg:h-48 "></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionOne;
