import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BlurImage from './BlurImage';
import Button from './Buttons';

export interface CourseType {
  id: number;
  title: string;
  description: string;
  category: string;
  level: string;
  duration: string;
  image: string;
  partner: string;
  price?: string;
  rating?: number;
  topics?: string[];
}

interface CourseCardProps {
  course: CourseType;
  featured?: boolean;
}

const CourseCard = ({ course, featured = false }: CourseCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

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
          src={course.image}
          alt={course.title}
          className="h-48 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-800">
            {course.category}
          </span>
          <div className="flex items-center text-sm text-gray-500">
            <span>{course.duration}</span>
          </div>
        </div>
        
        <h4 className="text-lg font-semibold mb-2 transition-colors group-hover:text-primary line-clamp-2">
          {course.title}
        </h4>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {course.description}
        </p>
        
        {course.topics && (
          <div className="flex flex-wrap gap-1 mb-4">
            {course.topics.slice(0, 3).map((topic, idx) => (
              <span key={idx} className="inline-block px-2 py-1 text-xs bg-slate-50 text-slate-700 rounded-md">
                {topic}
              </span>
            ))}
            {course.topics.length > 3 && (
              <span className="inline-block px-2 py-1 text-xs bg-slate-50 text-slate-700 rounded-md">
                +{course.topics.length - 3} more
              </span>
            )}
          </div>
        )}
        
        <div className="flex items-center justify-between pt-2">
          <span className="text-sm font-medium text-gray-600">By {course.partner}</span>
          
          {course.rating && (
            <div className="flex items-center">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg 
                    key={star} 
                    className={`w-4 h-4 ${star <= course.rating! ? 'text-yellow-400' : 'text-gray-300'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-medium text-gray-600 ml-1">{course.rating.toFixed(1)}</span>
            </div>
          )}
        </div>
        
        {course.price && (
          <div className="mt-4 flex items-center justify-between">
            <div className="text-lg font-bold">{course.price}</div>
            {/* <Button asChild size="sm" className="rounded-full">
              <Link to={`/programs/${course.id}`} className="flex items-center">
                Enroll Now
                <ArrowRight 
                  className={`ml-1 h-4 w-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} 
                />
              </Link>
            </Button> */}
          </div>
        )}
        
       
      </div>
    </div>
  );
};

export default CourseCard;