
const PartialCourseList = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10 bg-white text-gray-800 rounded-lg my-16">
      
      <h2 className="text-2xl font-semibold ">
        College Dual Enrollment Program — Partial Course List
      </h2>
      <p className="text-gray-700">
        Most 1000 and 2000-level courses at U.S. universities are available.
        Please refer to the list below for popular courses.
      </p>

      {/* Business Department */}
      <section>
        <h3 className="text-xl font-medium text-gray-800 mb-2">Business Department</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>COLLEGE CREDIT PLUS MICROECONOMICS (MU – ECON 1103)</li>
          <li>COLLEGE CREDIT PLUS MACROECONOMICS (MU – ECON 1104)</li>
          <li>COLLEGE CREDIT PLUS FINANCIAL ACCOUNTING (MU – ACCO 1030)</li>
          <li>COLLEGE CREDIT PLUS MANAGERIAL ACCOUNTING (MU – ACCO 1031)</li>
        </ul>
      </section>

      {/* Computer Science Department */}
      <section>
        <h3 className="text-xl font-medium text-gray-800 mb-2">Computer Science Department</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>COLLEGE CREDIT PLUS INTRODUCTION TO COMPUTER SCIENCE: PRINCIPLES (MU – CSCI 1000)</li>
          <li>COLLEGE CREDIT PLUS SOFTWARE DEVELOPMENT WITH PYTHON (MU – COSC 1010)</li>
        </ul>
      </section>

      {/* English Department */}
      <section>
        <h3 className="text-xl font-medium text-gray-800 mb-2">English Department</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>COLLEGE CREDIT PLUS COMPOSITION I (MU – ENGL1001)</li>
          <li>COLLEGE CREDIT PLUS COMPOSITION II (MU – ENGL1002)</li>
          <li>COLLEGE CREDIT PLUS PUBLIC SPEAKING AND PROFESSIONAL COMMUNICATIONS (MU – COMM1100)</li>
        </ul>
      </section>

      {/* Mathematics Department */}
      <section>
        <h3 className="text-xl font-medium text-gray-800 mb-2">Mathematics Department</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>COLLEGE CREDIT PLUS CALCULUS 1 (MU – MATH1450)</li>
          <li>COLLEGE CREDIT PLUS ELEMENTARY STATISTICS (MU – MATH1700)</li>
        </ul>
      </section>

      {/* Science Department */}
      <section>
        <h3 className="text-xl font-medium text-gray-800 mb-2">Science Department</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>COLLEGE CREDIT PLUS PRINCIPLES OF BIOLOGY 1 (MU – BIO1001)</li>
          <li>COLLEGE CREDIT PLUS GENERAL CHEMISTRY 1 (MU – CHEM 1110)</li>
          <li>COLLEGE CREDIT PLUS GENERAL PHYSICS 1 (MLU – PHYS1001)</li>
        </ul>
      </section>

      {/* Social Studies Department */}
      <section>
        <h3 className="text-xl font-medium text-gray-800 mb-2">Social Studies Department</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>COLLEGE CREDIT PLUS US HISTORY SINCE 1865 (MU – HIST1121)</li>
          <li>COLLEGE CREDIT PLUS INTRODUCTION TO US GOVERNMENT (MU – POSC2201)</li>
          <li>COLLEGE CREDIT PLUS GENERAL PSYCHOLOGY (MU – PSYC1001)</li>
          <li>COLLEGE CREDIT PLUS HUMAN GEOGRAPHY (MU – ANTH2203)</li>
          <li>COLLEGE CREDIT PLUS HISTORY OF WESTERN ART II (MU – HIST1202)</li>
        </ul>
      </section>

    </div>
  );
};




const college = () => {
  return (
    <div className='p-8 lg:p-24'>
        <h1 className="text-5xl font-medium mb-12 text-center leading-16">College Dual Enrollment Program —  ACCP (Advanced College Credit Program)</h1>
        <div className='flex-col  flex  items-center gap-8 lg:gap-16 '>
            <div className='w-[80dvw] h-[500px] '>
                <img
                 src="https://static.wixstatic.com/media/caee85_6e99b4a227744a3cb603ae98f0b8ce9d~mv2.jpg/v1/crop/x_49,y_0,w_901,h_600/fill/w_523,h_341,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/bachelor-education.jpg"
                 alt="Ready Global Academy College Course"
                 className=" w-[60dvw] h-full object-cover bg-red-100 mx-auto rounded-md"
                 />
            </div>
            <div className='flex flex-col gap-4 w-full text-base lg:text-lg '>
                <p>
                    The  ACCP (Advanced College Credit Program) is a dual enrollment program offered to Ready Global Academy students through our partnership with the top 100 U.S. universities. This program gives qualified high school students the opportunity to begin taking college-level courses while they are still in high school. The RGA courses designated as College Credit Plus fulfill ACCP program requirements and earn credits from both RGA and U.S. universities simultaneously.
                </p>

                <p>
                    RGA students who have shown the dedication, motivation, and ability for advanced study can take College Credit Plus courses in their junior and senior years. Then, as university students, they can transfer the college credits they earn through the ACCP program to the university that they eventually attend. At RGA, College Credit Plus courses are weighted the same as AP courses on transcripts.
                </p>

                <h2 className="text-2xl font-semibold  mb-4">A few advantages of the ACCP Program:</h2>
                    <ul className="list-disc pl-5 space-y-2">
                    <li>Earn college credits while in high school</li>
                    <li>Graduate college early and save on college tuition</li>
                    <li>Transfer credits to other schools easily</li>
                    <li>Explore a diverse and rigorous curriculum</li>
                    <li>Enhance college applications</li>
                    <li>Get guaranteed admission to ACCP partner universities</li>
                    </ul>
                    <p className="mt-4 text-blue-600 underline">
                    <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                        Click here and go to the ACCP website for more information
                    </a>
                   </p>

            </div>

            
           

        h</div>

        <section className="w-full justify-center my-16">
            <h2 className="text-2xl font-semibold  mb-4">
            College Dual Enrollment Program — Student Qualification
            </h2>
            <p className="mb-2">To sign up for College Credit Plus dual enrollment courses at RGA, students must:</p>
            <ul className="list-disc pl-5 space-y-2">
            <li>Be enrolled at RGA as a junior or senior</li>
            <li>Have a weighted GPA of 3.0 or above</li>
            <li>Complete any prerequisite courses</li>
            </ul>
        </section>

        <section>
        <h2 className="text-2xl font-semibold  mb-4">
          College Dual Enrollment Program — Real-time Online Course Schedule
        </h2>

        <div className="flex flex-col lg:flex-row w-full justify-between items-start">
            <div className="flex flex-col gap-4">
                <h3 className="text-xl font-medium mt-4 mb-2 text-gray-700">SPRING 2025</h3>
                <ul className="list-disc pl-5 space-y-1">
                <li>College Composition I</li>
                <li>College Composition II</li>
                <li>Macroeconomics</li>
                <li>Statistics</li>
                <li>U.S. Government</li>
                <li>General Psychology</li>
                <li>Physics</li>
                <li>Calculus 2</li>
                </ul>

            </div>
            <div className="flex flex-col gap-4">
                <h3 className="text-xl font-medium mt-6 mb-2 text-gray-700">SUMMER 2025</h3>
                <ul className="list-disc pl-5 space-y-1">
                <li>Calculus I</li>
                <li>College Composition II</li>
                <li>Macroeconomics</li>
                <li>General Psychology</li>
                </ul>

            </div>
            <div className="flex flex-col gap-4">
                <h3 className="text-xl font-medium mt-6 mb-2 text-gray-700">FALL 2025</h3>
                <ul className="list-disc pl-5 space-y-1">
                <li>General Physics I</li>
                <li>U.S. Government</li>
                <li>General Biology I</li>
                <li>General Psychology</li>
                <li>College Composition I</li>
                <li>General Chemistry I</li>
                <li>Computer Science with Python</li>
                <li>Human Geography</li>
                </ul>
            </div>

        </div>

      </section>

      <PartialCourseList/>
        
    </div>
  )
}

export default college