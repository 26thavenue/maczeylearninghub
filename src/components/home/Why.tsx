import bannerImg from "/banner.png";
import { TiTickOutline } from "react-icons/ti";

const Why = () => {
  return (
    <div className="  mx-auto p-8 lg:p-24  text-black">
      <h1 className="text-2xl lg:text-5xl font-medium leading-tight tracking-[-1px] text-center">
        Why Users Love MaczeyLearning Hub?
      </h1>

      <div className="w-full lg:w-4/5 mx-auto flex flex-col-reverse lg:flex-row items-center justify-between py-1 lg:py-6">
        {/* Benefits List */}
        <div className="flex flex-col gap-4 text-sm lg:text-lg mt-6 lg:mt-0">
          <ul className="space-y-3">
            <li className="flex items-center gap-4">
              <TiTickOutline className="text-primary text-2xl" />
              Affordable tuition fees without compromising on quality
            </li>
            <li className="flex items-center gap-4">
              <TiTickOutline className="text-primary text-2xl" />
              Flexible learning options to suit your lifestyle
            </li>
            <li className="flex items-center gap-4">
              <TiTickOutline className="text-primary text-2xl" />
              Dedicated tutor support and mentorship
            </li>
            <li className="flex items-center gap-4">
              <TiTickOutline className="text-primary text-2xl" />
              Access to a global community of learners and professionals
            </li>
            <li className="flex items-center gap-4">
              <TiTickOutline className="text-primary text-2xl" />
              Opportunities for career advancement and networking
            </li>
          </ul>
        </div>

        {/* Image */}
        <img src={bannerImg} alt="Why Us" className="object-contain w-[300px] h-[250px] lg:w-[500px] lg:h-[400px]" />
      </div>
    </div>
  );
};

export default Why;
