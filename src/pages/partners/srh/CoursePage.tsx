import coursesData from "./courses.json"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { 
  GraduationCap, 
  MapPin,  
  BookOpen, 
  Clock, 
  CheckCircle 
} from 'lucide-react';

const CourseDetailsPage = () => {

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
    <div className="container mx-auto p-8 lg:p-24  max-w-6xl">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row-reverse gap-8 mb-12">
        {/* Course Image */}
        <div className="md:w-1/2">
          <img 
            src={course.imgSrc} 
            alt={course.title} 
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Course Details */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold text-blue-800">{course.title}</h1>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <GraduationCap className="text-blue-600" />
              <span className="font-medium">{course.school}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <MapPin className="text-blue-600" />
              <span>{course.location} | {course.address}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Clock className="text-blue-600" />
              <span>Intakes: {course.intakes}</span>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">{course.overview}</p>
          
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Apply Now
          </button>
        </div>
      </div>

      {/* Course Content Section */}
      <div className="bg-blue-50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-6 text-blue-800 flex items-center gap-2">
          <BookOpen className="text-blue-600" />
          Course Content
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          {course.courseContent.map((content:any, index:any) => (
            <div 
              key={index} 
              className="flex items-center gap-3 bg-white p-4 rounded-md shadow-sm"
            >
              <CheckCircle className="text-green-500" />
              <span className="text-gray-700">{content}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;