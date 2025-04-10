import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";

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
  const navigate = useNavigate();
  const [course, setCourse] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedIdx, setSelectedIdx] = useState(0);

  const formatString = (input?: string): string => {
    return input
      ? input
          .replace(/-/g, " ")
          .split(" ")
          .map((word, index) => {
            const lowercaseWords = ['and', 'the', 'in', 'of', 'for'];
            if (index > 0 && lowercaseWords.includes(word.toLowerCase())) {
              return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
          })
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

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-black">Loading course details...</p>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-black">Course not found</p>
      </div>
    );
  }

  return (
    <div className="mx-auto p-4 md:p-8 lg:p-12 max-w-7xl">
      {/* Back Button */}
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-6 text-primary hover:text-primary-dark transition-colors cursor-pointer"
      >
        <IoArrowBack className="text-lg" />
        <span className="font-medium">Back to Courses</span>
      </button>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column (Course Info) */}
        <div className="lg:w-1/2">
          {/* Course Header */}
          <header className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{course.title}</h1> 
            <p className="text-lg text-gray-700 font-medium">{course.school}</p>
            {[course.subtitle, course.subtitle2, course.subtitle3, course.subheading, course.subheading2]
              .filter(Boolean)
              .map((text, index) => (
                <p key={index} className="text-gray-600">{text}</p>
              ))}
          </header>

          {/* Course Image */}
          <div className="mb-6">
            <img
              src={course.imgSrc}
              alt={course.title}
              className="w-full h-auto max-h-[400px] object-cover rounded-xl shadow-md"
            />
          </div>

          {/* Description */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Course Description</h2>
            <p className="text-gray-700">{course.description}</p>
          </section>

          {/* Course Details Grid */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Course Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Start Date", value: course.start_date },
                { label: "Location", value: course.location },
                { label: "Study Pace", value: course.study_pace },
                { label: "Assessment", value: course.assessment }
              ].map(({ label, value }) => (
                <div key={label} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <strong className="text-gray-600 block mb-1">{label}:</strong>
                  <span className="text-gray-800 font-medium">{value || 'N/A'}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column (Modules) */}
        <div className="lg:w-1/2">
          {/* Module Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {course.section?.map((section: any, idx: any) => (
              <button
                key={idx}
                onClick={() => setSelectedIdx(idx)}
                className={`px-4 py-2 rounded-lg text-sm md:text-base font-medium transition-colors ${
                  selectedIdx === idx
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>

          {/* Module Content */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            {course?.section[selectedIdx]?.title && (
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {course?.section[selectedIdx].title}
              </h2>
            )}

            {/* Content Paragraphs */}
            {course?.section[selectedIdx]?.content && 
              Array.isArray(course?.section[selectedIdx]?.content) && (
              <div className="space-y-4 text-gray-700 mb-6">
                {course?.section[selectedIdx]?.content.map((paragraph: any, idx: number) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            )}

            {/* Content Sublist */}
            {course?.section[selectedIdx]?.contentsublist && 
              Array.isArray(course?.section[selectedIdx]?.contentsublist) && (
              <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700">
                {course?.section[selectedIdx]?.contentsublist.map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}

            {/* Single Content */}
            {course?.section[selectedIdx]?.content && 
              !Array.isArray(course?.section[selectedIdx]?.content) && (
              <p className="text-gray-700 mb-6">{course?.section[selectedIdx]?.content}</p>
            )}

            {/* Modules Sections */}
            {[1, 2, 3, 4].map((moduleNum) => {
              const modulesKey = `modules${moduleNum}` as keyof typeof course.section[typeof selectedIdx];
              const moduleSublistKey = `module${moduleNum}sublist` as keyof typeof course.section[typeof selectedIdx];
              
              return (
                <div key={moduleNum}>
                  {/* Module Text */}
                  {course?.section[selectedIdx][modulesKey]?.map((text: string, index: number) => (
                    <p key={index} className="font-medium text-gray-800 mt-6 mb-3">
                      {text}
                    </p>
                  ))}

                  {/* Module Sublist */}
                  {course?.section[selectedIdx][moduleSublistKey]?.sublists && (
                    <ul className="space-y-3 mb-6 pl-5">
                      {course?.section[selectedIdx][moduleSublistKey].sublists.map((item: any, index: number) => (
                        <li key={index} className="text-gray-700">
                          {item?.name && item?.description ? (
                            <div className="mb-2">
                              <strong className="text-gray-800">{item.name}: </strong>
                              <span>{item.description}</span>
                            </div>
                          ) : (
                            <p>{item}</p>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}

            {/* Modules 2 Sublists */}
            {course?.section[selectedIdx].modules2sublists?.sublists && (
              <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700">
                {course?.section[selectedIdx].modules2sublists.sublists.map((item: any, index: number) => (
                  <li key={index}>
                    {item?.name && item?.description ? (
                      <div className="mb-2">
                        <strong className="text-gray-800">{item.name}: </strong>
                        <span>{item.description}</span>
                      </div>
                    ) : (
                      <p>{item}</p>
                    )}
                  </li>
                ))}
              </ul>
            )}

            {/* Module 3 Link */}
            {course?.section[selectedIdx].modules3link && (
              <div className="mt-6">
                <a 
                  href={course?.section[selectedIdx].modules3link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {course?.section[selectedIdx].modules3link}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;