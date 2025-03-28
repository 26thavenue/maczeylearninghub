import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { 
  Clock, 
  MapPin, 
  BookOpen, 
  BarChart, 
  CheckCircle, 
  Info 
} from 'lucide-react';

import egaCourses from "./courses.json";

const coursesData = [
  ...egaCourses.coursesHE,
  ...egaCourses.coursesPD,
  ...egaCourses.coursesWork2LearnDegree,
];

interface Course {
  title: string;
  school: string;
  imgSrc: string;
  description: string;
  start_date?: string;
  location?: string;
  study_pace?: string;
  assessment?: string;
  modules?: string[];
  courseContent?: string[];
}

const CoursePage: React.FC = () => {
  const { partner, courseTitle } = useParams();
  const [course, setCourse] = useState<any | null>(null);
  const [activeSection, setActiveSection] = useState<'overview' | 'content'>('overview');
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
    
    const foundCourse = coursesData?.find(
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
        <p className="text-xl text-[#161A3D]">Loading course details...</p>
      </div>
    );
  }

  // Not found state
  if (!course) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-[#161A3D]">Course not found</p>
      </div>
    );
  }

  const formatKey = (key:any) => {
    return key.replace(/([A-Z])/g, " $1").replace(/^./, (str:any) => str.toUpperCase());
  };

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">{course.description}</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {course.start_date && (
                <div className="bg-[#161A3D]/10 p-4 rounded-lg border border-[#161A3D]/20 flex items-start">
                  <Clock className="w-6 h-6 text-[#161A3D] mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#161A3D] mb-1">Start Date</h4>
                    <p className="text-sm text-gray-700">{course.start_date}</p>
                  </div>
                </div>
              )}
              
              {course.location && (
                <div className="bg-[#161A3D]/10 p-4 rounded-lg border border-[#161A3D]/20 flex items-start">
                  <MapPin className="w-6 h-6 text-[#161A3D] mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#161A3D] mb-1">Location</h4>
                    <p className="text-sm text-gray-700">{course.location}</p>
                  </div>
                </div>
              )}
              
              {course.study_pace && (
                <div className="bg-[#161A3D]/10 p-4 rounded-lg border border-[#161A3D]/20 flex items-start">
                  <BookOpen className="w-6 h-6 text-[#161A3D] mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#161A3D] mb-1">Study Pace</h4>
                    <p className="text-sm text-gray-700">{course.study_pace}</p>
                  </div>
                </div>
              )}
              
              {course.assessment && (
                <div className="bg-[#161A3D]/10 p-4 rounded-lg border border-[#161A3D]/20 flex items-start">
                  <BarChart className="w-6 h-6 text-[#161A3D] mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#161A3D] mb-1">Assessment</h4>
                    <p className="text-sm text-gray-700">{course.assessment}</p>
                  </div>
                </div>
              )}
              {/* {course.duration && (
                  <div className="bg-[#161A3D]/10 p-4 rounded-lg border border-[#161A3D]/20 flex items-start">
                    <BarChart className="w-6 h-6 text-[#161A3D] mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-[#161A3D] mb-1">Duration</h4>
                      {typeof course.duration === "string" ? (
                        <p className="text-sm text-gray-700">{course.duration}</p>
                      ) : (
                        <ul className="text-sm text-gray-700">
                          {Object.entries(course.duration).map(([key, value]) => (
                            <li key={key}>
                              <strong>{formatKey(key)}:</strong> {value}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                )} */}

            </div>
          </div>
        );
      case 'content':
        return (
          <div className="grid md:grid-cols-2 gap-4">
            {(course.modules || course.courseContent)?.map((module:any, index:any) => (
              <div 
                key={index} 
                className="flex items-center bg-[#161A3D]/5 p-3 rounded-lg border border-[#161A3D]/10 hover:bg-[#161A3D]/10 transition-colors"
              >
                <CheckCircle className="w-5 h-5 text-[#161A3D] mr-3" />
                <span className="text-gray-800">{module}</span>
              </div>
            ))}
          </div>
        );
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-8 lg:p-24">
      {/* Course Header */}
      <div className="relative mb-8">
        <img 
          src={course.imgSrc} 
          alt={course.title} 
          className="w-full size-[500px]  object-cover rounded-2xl shadow-lg"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-[#161A3D]/80 text-white p-6 rounded-b-lg">
          <h1 className="text-2xl md:text-4xl font-bold">{course.title}</h1>
          <p className="text-white/80 mt-2">{course.school}</p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b mb-6 ">
        {[
          { key: 'overview', label: 'Overview' },
          { key: 'content', label: 'Course Content' }
        ].map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActiveSection(key as 'overview' | 'content')}
            className={`
              px-4 py-2 -mb-px border-b-2 cursor-pointer
              ${activeSection === key 
                ? 'border-[#161A3D] text-[#161A3D] font-semibold' 
                : 'border-transparent text-gray-500 hover:text-[#161A3D]/80'}
            `}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Dynamic Content Section */}
      <div className="mt-6">
        {renderSectionContent()}
      </div>
    </div>
  );
};

export default CoursePage;