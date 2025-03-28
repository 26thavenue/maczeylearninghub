import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import obslevel3CourseData from "./level3_courses.json";
import IGSCECoursesData from "./courses.json";
import obslevel4CourseData from "./level4&5_courses.json";
import obslevel6CourseData from "./level6_courses.json";
import obslevel7CourseData from "./level7_courses.json";

const coursesData: any[] = [
  ...obslevel3CourseData,
  ...IGSCECoursesData,
  ...obslevel4CourseData,
  ...obslevel6CourseData,
  ...obslevel7CourseData,
];

const CoursePage: React.FC = () => {
  const { partner, courseTitle } = useParams();
  const [course, setCourse] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  
  const formatString = (input?: string): string => {
    return input
      ? input
          .replace(/-/g, " ")
          .split(" ")
          .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
          .join(" ")
          .trim()
      : "";
  };

  useEffect(() => {
    const formattedTitle = formatString(courseTitle);
    const formattedPartner = formatString(partner);

    setIsLoading(true);
    
    const foundCourse = coursesData.find(
      (c) =>
        c.school.toLowerCase().includes(formattedPartner.toLowerCase()) &&
        c.title.toLowerCase().includes(formattedTitle.toLowerCase())
    );

    setCourse(foundCourse || null);
    setIsLoading(false);
  }, [partner, courseTitle]);

  // Loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-black">Loading course details...</p>
      </div>
    );
  }

  // Not found state
  if (!course) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-black">Course not found</p>
      </div>
    );
  }

  return (
    <div className="mx-auto p-8 lg:p-24 ">
      {/* Course Header */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-black mb-2">{course.title}</h1>
        <p className="text-lg text-black">{course.school}</p>
      </header>

      {/* Course Image */}
      <div className="mb-6 w-fit">
        <img
          src={course.imgSrc}
          alt={course.title}
          className="w-full size-[500px] object-cover rounded-2xl"
        />
      </div>

      {/* Description */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-black mb-2">Course Description</h2>
        <p className="text-gray-700">{course.description}</p>
      </section>

      {/* Course Details Grid */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-black mb-4">Course Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: "Start Date", value: course.start_date },
            { label: "Location", value: course.location },
            { label: "Study Pace", value: course.study_pace },
            { label: "Assessment", value: course.assessment }
          ].map(({ label, value }) => (
            <div key={label} className="bg-gray-50 p-3 rounded-md">
              <strong className="text-gray-600 block mb-1">{label}:</strong>
              <span className="text-gray-800">{value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Modules Section */}
      {(course.modules || course.course_modules) && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-black mb-4">
            {course.modules ? "Modules" : "Course Modules"}
          </h2>
          <ul className="space-y-2 bg-gray-50 p-4 rounded-md">
            {(course.modules || course.course_modules || course.subjects)?.map((module:any, index:any) => (
              <li 
                key={index} 
                className="text-black pl-4 relative before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full"
              >
                {module}
              </li>
            ))}
          </ul>
        </section>
      )}
      {(course.subjects) && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-black mb-4">
            {course.modules ? "Modules" : "Course Modules"}
          </h2>
          <ul className="space-y-2 bg-gray-50 p-4 rounded-md">
            {(course.modules || course.course_modules || course.subjects)?.map((module:any, index:any) => (
              <li 
                key={index} 
                className="text-black pl-4 relative before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full"
              >
                {module}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};


export default CoursePage;
