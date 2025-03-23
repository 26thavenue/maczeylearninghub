import { useState, useEffect } from 'react';
import CourseCard, { CourseType } from '../components/CourseCard';
import CourseFilters, { FilterOptions } from '../components/programs/CourseFilter';
import { Search } from 'lucide-react';

// Sample courses data
const coursesData: CourseType[] = [
  {
    id: 1,
    title: "Introduction to UX Design",
    description: "Learn the fundamentals of user experience design and create intuitive digital products.",
    category: "Design",
    level: "Beginner",
    duration: "8 weeks",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80",
    partner: "Design Academy",
    rating: 4.8,
    price: "$499",
    topics: ["UX Principles", "Wireframing", "Prototyping", "User Testing"]
  },
  {
    id: 2,
    title: "Advanced JavaScript Development",
    description: "Master modern JavaScript techniques and frameworks for building dynamic web applications.",
    category: "Development",
    level: "Advanced",
    duration: "10 weeks",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    partner: "Tech Institute",
    rating: 4.9,
    price: "$699",
    topics: ["ES6+", "React", "Node.js", "API Development"]
  },
  {
    id: 3,
    title: "Data Science Essentials",
    description: "Explore data analysis, visualization, and machine learning fundamentals.",
    category: "Data",
    level: "Intermediate",
    duration: "12 weeks",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    partner: "Data Analytics Pro",
    rating: 4.7,
    price: "$899",
    topics: ["Python", "Data Visualization", "Machine Learning", "Statistical Analysis"]
  },
  {
    id: 4,
    title: "Digital Marketing Strategy",
    description: "Develop comprehensive digital marketing strategies to grow your business online.",
    category: "Marketing",
    level: "Beginner",
    duration: "6 weeks",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    partner: "Marketing Experts",
    rating: 4.6,
    price: "$399",
    topics: ["SEO", "Social Media", "Content Marketing", "Analytics"]
  },
  {
    id: 5,
    title: "Mobile App Development with Swift",
    description: "Build iOS applications using Swift and the latest Apple development tools.",
    category: "Development",
    level: "Intermediate",
    duration: "10 weeks",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    partner: "Apple Certified Trainers",
    rating: 4.9,
    price: "$799",
    topics: ["Swift", "UIKit", "Core Data", "App Store Deployment"]
  },
  {
    id: 6,
    title: "Graphic Design Fundamentals",
    description: "Master the principles of visual communication and design theory.",
    category: "Design",
    level: "Beginner",
    duration: "8 weeks",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
    partner: "Creative Design School",
    rating: 4.7,
    price: "$499",
    topics: ["Typography", "Color Theory", "Layout Design", "Adobe Creative Suite"]
  },
  {
    id: 7,
    title: "Business Analytics for Managers",
    description: "Learn to make data-driven decisions using business intelligence tools.",
    category: "Business",
    level: "Advanced",
    duration: "6 weeks",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    partner: "Business Excellence Institute",
    rating: 4.8,
    price: "$649",
    topics: ["Data Analysis", "Forecasting", "KPI Development", "Business Intelligence"]
  },
  {
    id: 8,
    title: "Cybersecurity Fundamentals",
    description: "Understand core principles of network security and threat prevention.",
    category: "IT",
    level: "Intermediate",
    duration: "12 weeks",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
    partner: "Security Certification Center",
    rating: 4.9,
    price: "$899",
    topics: ["Network Security", "Threat Analysis", "Encryption", "Security Protocols"]
  },
];

// Generate filter options from courses data
const generateFilterOptions = (courses: CourseType[]): FilterOptions => {
  const categories = [...new Set(courses.map(course => course.category))];
  const levels = [...new Set(courses.map(course => course.level))];
  const durations = [...new Set(courses.map(course => course.duration))];
  
  return {
    categories,
    levels,
    duration: durations
  };
};

const Programs = () => {
  const [courses, setCourses] = useState<CourseType[]>(coursesData);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState({
    category: [] as string[],
    level: [] as string[],
    duration: [] as string[]
  });

  const filterOptions = generateFilterOptions(coursesData);

  // Filter courses based on search query and active filters
  useEffect(() => {
    let filteredCourses = [...coursesData];
    
    // Apply search query filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filteredCourses = filteredCourses.filter(course => 
        course.title.toLowerCase().includes(query) || 
        course.description.toLowerCase().includes(query) ||
        course.partner.toLowerCase().includes(query)
      );
    }
    
    // Apply category filter
    if (activeFilters.category.length > 0) {
      filteredCourses = filteredCourses.filter(course => 
        activeFilters.category.includes(course.category)
      );
    }
    
    // Apply level filter
    if (activeFilters.level.length > 0) {
      filteredCourses = filteredCourses.filter(course => 
        activeFilters.level.includes(course.level)
      );
    }
    
    // Apply duration filter
    if (activeFilters.duration.length > 0) {
      filteredCourses = filteredCourses.filter(course => 
        activeFilters.duration.includes(course.duration)
      );
    }
    
    setCourses(filteredCourses);
  }, [searchQuery, activeFilters]);

  return (
    <div className="flex flex-col min-h-screen ">
     
      
      <main className="flex-grow ">
        {/* Header */}
        <section className="bg-slate-50 py-16 border-b border-slate-100">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">
                Explore Our Programs
              </h1>
              <p className="text-lg text-gray-600 animate-slide-up [animation-delay:100ms]">
                Discover courses from leading educational partners designed to help you achieve your goals.
              </p>
              
              {/* Search */}
              <div className="mt-8 max-w-xl mx-auto relative animate-slide-up [animation-delay:200ms]">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="pl-10 pr-4 py-3 w-full rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  placeholder="Search for courses, topics, or skills..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Courses Grid */}
        <section className="p-8 lg:p-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar Filters */}
              <div className="lg:col-span-1">
                <CourseFilters 
                  filters={filterOptions}
                  activeFilters={activeFilters}
                  setActiveFilters={setActiveFilters}
                />
              </div>
              
              {/* Course Listings */}
              <div className="lg:col-span-3">
                {courses.length > 0 ? (
                  <>
                    <div className="mb-6 flex justify-between items-center">
                      <p className="text-gray-600">
                        Showing <span className="font-medium">{courses.length}</span> results
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {courses.map((course, index) => (
                        <CourseCard 
                          key={course.id} 
                          course={course} 
                          featured={index === 0} 
                        />
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="text-center py-20">
                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-50">
                      <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">No courses found</h3>
                    <p className="text-gray-600 mb-6">
                      We couldn't find any courses matching your criteria.
                    </p>
                    <button 
                      onClick={() => {
                        setSearchQuery('');
                        setActiveFilters({
                          category: [],
                          level: [],
                          duration: []
                        });
                      }}
                      className="text-primary font-medium hover:underline"
                    >
                      Clear all filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      
    </div>
  );
};

export default Programs;