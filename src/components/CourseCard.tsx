import { useState } from 'react';


import BlurImage from './BlurImage';


export interface CourseType {
  id: number;
  title: string;
  description: string;
  category?: string;
  school?:string
  level: string;
  duration: string;
  imgSrc: string;
  partner: string;
  price?: string;
  rating?: number;
  topics?: string[];
  location?:string
}

interface CourseCardProps {
  course: CourseType;
  featured?: boolean;
  partner:string;
}

const CourseCard = ({ course, featured = false }: CourseCardProps) => {
  const [, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative group bg-white rounded-2xl overflow-hidden transition-all duration-300 ${
        featured ? 'shadow-lg border-blue-100' : 'shadow-sm border border-slate-100'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {featured && (
        <div className="absolute top-4 right-4 z-10 bg-primary text-white text-xs font-medium px-2.5 py-1 rounded-full">
          Featured
        </div>
      )}
      
      <div className="overflow-hidden">
        <BlurImage
          src={course?.imgSrc}
          alt={course.title}
          className="h-48 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 "
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          
          <div className="flex items-center text-sm text-gray-500">
            <span>{course.location}</span>
          </div>
        </div>
        
        <h4 className="text-lg font-semibold mb-2 transition-colors group-hover:text-primary line-clamp-2">
          {course.title}
        </h4>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {course.description}
        </p>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {course.school}
        </p>
        
        
       
      </div>
    </div>
  );
};

export default CourseCard;