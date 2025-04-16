

const highSchool = () => {

    const requirements = [
            { subject: "English", details: "4 Credits" },
            { subject: "Mathematics", details: "4 Credits" },
            { subject: "Science", details: "3 credits, two of which must have a laboratory component." },
            {
            subject: "Social Studies",
            details:
                "3 credits: 1 credit from US History or World History and 2 credits from other course options.",
            },
            {
            subject: "Foreign Language",
            details: "Not required for graduation but may be required for college admissions.",
            },
            { subject: "Art", details: "1 credit in Fine Arts or Performing Arts" },
            { subject: "Electives", details: "9 credits" },
        ];
  return (
    <div className='p-8 lg:p-24 space-y-4'>

        <img 
            src="https://images.unsplash.com/photo-1670924786856-9ae9882ca224?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGlnaHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Highschool Image"
            className="w-[800px] h-[500px] object-cover rounded-md mb-16"
        />
        <h1 className="text-4xl font-medium mb-4">High School Diploma Program</h1>

        <p className="text-xl leading-10">
        High School Diploma Program
        Earn a US High School Diploma... 
        ...From Anywhere in the World
        All RGA courses are designed to prepare students for higher education and help them develop 21st-century skills valued in universities around the world. To meet the needs of every student, we offer regular college preparatory and honors-level courses. For students who would like to get even more out of their education and have a particularly challenging online high school experience, we offer AP courses that are specifically targeted to prepare students for college coursework at America’s top-rated schools.
        </p>

        <h3 className="font-medium text-2xl mt-6 mb-2">Course Requirements</h3>

        <p className="text-xl leading-10">
            The recommendations shown below provide a foundation from which students may begin planning for college applications. College admissions policies and academic requirements vary widely. These sample course requirements and recommendations are not specific to any particular college or university. Your College Counselor and Home Advisor will work together to help tailor the course list to match your specific goals and ensure that all graduation requirements are met.
        </p>


        <div className="flex flex-col gap-4 ">
            <h3 className="font-medium text-2xl mt-6 mb-2">Graduation Requirements of 24-Credit Program</h3>

             <ul className="space-y-3 list-disc pl-5 text-gray-800">
                {requirements.map((item, index) => (
                <li key={index}>
                    <span className="font-medium">{item.subject}</span> – {item.details}
                </li>
                ))}
            </ul>
        </div>

        <div className="bg-blue-100 flex flex-col justify-center w-full p-8 space-y-4  my-8">

            <h3 className="font-medium text-2xl mt-6 mb-2">Graduation Requirements of 24-Credit Program</h3>
            <p >
Summer and Part-Time Enrollement
In addition to the core courses, Ready Global Academy offers an extensive selection of electives that are both interesting and challenging. Students may also elect to take dual enrollment courses that are approved for college credit.</p>
            <p>
Because Ready Global Academy offers rolling admission, students can select individual start dates for their courses, providing the ultimate flexibility to schedule coursework around busy summer schedules that may include travel, work, and other activities. Whether students are interested in taking courses that are not offered at their high school or simply want to work ahead over the summer, Ready Global Academy provides individualized instruction that meets their specific needs.</p>


        <p className="underline">How it Works: Summer and Part-Time Enrollments</p>
        <p>Prior to gaining access to a course, students must meet prerequisite requirements and obtain their main school’s approval to receive Ready Global Academy credits on their transcripts. Please download the Ready Global Academy Concurrent Enrollment Form and contact your school counselor regarding the transfer of Ready Global Academy course credits. You can also call or email our Admissions Office to speak with an Admissions Coordinator. Our admissions team provides guidance for obtaining approval and ensuring the reciprocity of credits.</p>

        <p>
            
Summer and Part-Time Enrollement
In addition to the core courses, Ready Global Academy offers an extensive selection of electives that are both interesting and challenging. Students may also elect to take dual enrollment courses that are approved for college credit.

​

Because Ready Global Academy offers rolling admission, students can select individual start dates for their courses, providing the ultimate flexibility to schedule coursework around busy summer schedules that may include travel, work, and other activities. Whether students are interested in taking courses that are not offered at their high school or simply want to work ahead over the summer, Ready Global Academy provides individualized instruction that meets their specific needs.

​

How it Works: Summer and Part-Time Enrollments

Prior to gaining access to a course, students must meet prerequisite requirements and obtain their main school’s approval to receive Ready Global Academy credits on their transcripts. Please download the Ready Global Academy Concurrent Enrollment Form and contact your school counselor regarding the transfer of Ready Global Academy course credits. You can also call or email our Admissions Office to speak with an Admissions Coordinator. Our admissions team provides guidance for obtaining approval and ensuring the reciprocity of credits.

​

The student’s main school is responsible for maintaining student records and updating transcripts to reflect courses completed through Ready Global Academy. Upon request, Ready Global Academy will forward an official transcript of all courses completed through our program.
        </p>
        </div>


        <h3 className="font-medium text-3xl mt-6 mb-2">Credit Recovery</h3>
        <p>
            Ready Global Academy’s Credit Recovery Program allows full-time students enrolled in accredited high schools to take the credits they require to meet their school’s graduation requirements.
        </p>
        <p> Students may qualify for Credit Recovery in the following scenarios:</p>
        <ul className="list-disc pl-5 space-y-3 text-gray-800">
        <li>Missed work due to participation in athletics</li>
        <li>Behind in credits due to unavoidable circumstances</li>
        <li>Academic performance hindered by bullying or peer pressure</li>
        <li>Their desired course is not offered at their high school</li>
        <li>Expulsion/suspension meant they did not complete some required courses</li>
        <li>Extracurricular activities limited their ability to successfully complete required courses</li>
        <li>Failing grades need to be raised by retaking courses</li>
        <li>Illness/health led them to drop out of school for a time</li>
        <li>Scheduling conflicts limited their ability to take required courses on time</li>
      </ul>


        <h6 className=" text-xl font-medium">Credit Recovery Online</h6>
        <p>
            Ready Global Academy’s Credit Recovery Program helps high school students earn credit in courses that they did not pass the first time around. Our Credit Recovery courses are taught in real time with individualized instructor attention and designed to supplement your school’s existing curriculum.  Students can enroll year-round and design a course schedule that meets their needs and availability.

​
        </p>


        <p>Any of our courses can be taken for credit recovery. See our catalog for further details about our courses.</p>


    </div>
  )
}

export default highSchool