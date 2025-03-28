import imG from '/rgaImg.png';
import Button from '../../../components/Buttons';
import HighschoolImg from "/rga/highSchool.avif"
import collegeImg from "/rga/College.avif"
import Banner from '../../../components/Banner';
import Img from "/rga/ega.avif"

const Index = () => {
  

  return (
    <main className="">
      <div className="   flex  gap-16  items-center bg-primary text-white p-8 lg:p-24">
        <div className='flex flex-col gap-4 my-4 w-1/2 '>
            <img src={imG} className="object-contain w-[100px] h-[100px]" />
            <h1 className="text-2xl lg:text-5xl leading-tight tracking-[-1px] font-medium text-center lg:text-left">Ready Global Academy</h1>
            
            <p className='text-base lg:text-lg leading-8 mb-4'>Ready Global Academy is a private school designed to bring American education to students around the world, no matter where they live. As an RGA student, you can choose from an expansive and rigorous curriculum of standard, honors, and AP courses, or enroll in our dual enrollment program to earn college credit. </p>

            <Button variant="tertiary" buttonName="Get in Touch" className=" w-fit rounded-md"/>
        </div>

        <img src={Img} className="object-cover h-[500px] w-[500px] rounded-2xl" />
      </div>

      <section className="flex flex-col gap-16 my-24 p-8 lg:p-24">

        {/* <div className="flex flex-col gap-8 bg-primary/10 p-8">
          <h3 className="text-2xl lg:text-4xl leading-tight tracking-[-1px] font-medium text-center">
            School Features
          </h3>
          <div className="grid grid-cols-2 mx-auto gap-16 text-center">
            {[
              '92% acceptance to Top 50 US Universities',
              'Over 50+ Course Options',
              'Certified Teachers',
              '100% Acceptance to Top Schools',
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white  shadow-md w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] flex items-center justify-center p-2"
              >
                <p className="text-base lg:text-xl text-black">{feature}</p>
              </div>
            ))}
          </div>
        </div> */}

        <div className="">
          <h3 className="text-2xl lg:text-4xl leading-tight tracking-[-1px] font-medium text-center mb-16">
            Our Programs
          </h3>

          {/* High School Section with Graduation Requirements */}
          <div className="flex gap-16 items-center my-12 ">
            <img src={HighschoolImg} alt="HighSchool Image" className='h-[400px] w-[400px] object-contain rounded-full'/>
            <div className="text-lg flex flex-col gap-4">
              <h5 className="font-medium text-2xl">High School</h5>
              <p>
                Take courses to earn a US high school diploma from anywhere in
                the world.
              </p>
              <p className="font-semibold">Graduation Requirements:</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>
                  <strong>English:</strong> 4 Credits
                </li>
                <li>
                  <strong>Mathematics:</strong> 4 Credits
                </li>
                <li>
                  <strong>Science:</strong> 3 credits, two with a lab component
                </li>
                <li>
                  <strong>Social Studies:</strong> 3 credits (US/World History
                  + 2 electives)
                </li>
                <li>
                  <strong>Foreign Language:</strong> Not required but may be
                  needed for college admissions
                </li>
                <li>
                  <strong>Art:</strong> 1 credit in Fine/Performing Arts
                </li>
                <li>
                  <strong>Electives:</strong> 9 credits
                </li>
              </ul>
              <Button variant="tertiary" buttonName="Get in Touch" className="w-fit rounded-md" />
            </div>
          </div>

          {/* College Credit Course Section with ACCP Info */}
          <div className="flex gap-16 items-center my-16 ">
            <img src={collegeImg} alt="HighSchool Image" className='h-[400px] w-[400px] object-contain rounded-full'/>
            <div className="text-lg flex flex-col gap-4">
              <h5 className="font-medium text-2xl">College Credit Course</h5>
              <p>
                Get a jump start on your college education by enrolling in the
                ACCP Program partnered with Marquette University.
              </p>
              {/* <p className="font-semibold">About ACCP:</p> */}
              {/* <p>
                The ACCP (Advanced College Credit Program) is a dual enrollment
                program offered to Ready Global Academy students through our
                partnership with the top 100 U.S. universities. This program
                allows high school students to take college-level courses while
                still in high school, earning credits from both RGA and U.S.
                universities.
              </p> */}
              <p className="font-semibold">Eligibility:</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Must be enrolled at RGA as a junior or senior</li>
                <li>Maintain a weighted GPA of 3.0 or above</li>
                <li>Complete any prerequisite courses</li>
              </ul>
              <Button variant="tertiary" buttonName="Get in Touch" className="w-fit rounded-md" />
            </div>
          </div>
        </div>
      </section>

      <Banner/>
    </main>
  );
};

export default Index;
