import { useState, useEffect } from "react";
import CourseCard, { CourseType } from "../components/CourseCard";
import CourseFilters, { FilterOptions } from "../components/programs/CourseFilter";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

import obslevel3CourseData from "./partners/obs/level3_courses.json";
import IGSCECoursesData from "./partners/obs/courses.json";
import obslevel4CourseData from "./partners/obs/level4&5_courses.json";
import obslevel6CourseData from "./partners/obs/level6_courses.json";
import obslevel7CourseData from "./partners/obs/level7_courses.json";
import egaCourses from "./partners/egraduate/courses.json";

const coursesData: any[] = [
  ...obslevel3CourseData,
  ...IGSCECoursesData,
  ...obslevel4CourseData,
  ...obslevel6CourseData,
  ...obslevel7CourseData,
  ...egaCourses.coursesHE,
  ...egaCourses.coursesPD,
  ...egaCourses.coursesWork2LearnDegree,
];

const generateFilterOptions = (courses: CourseType[]): FilterOptions => {
  const schools = [...new Set(courses.map((course) => course.school))];
  const locations = [...new Set(courses.map((course) => course.location))];

  return {
    school: schools as string[],
    location: locations as string[],
  };
};

const Programs = () => {
  const [courses, setCourses] = useState<CourseType[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState({
    school: [] as string[],
    location: [] as string[],
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const filterOptions = generateFilterOptions(coursesData);


  const generateCourseLink = (coursePartner: string | undefined, courseTitle: string | undefined ) => {
    const formattedPartner = coursePartner ? coursePartner?.toLowerCase().replace(/\s+/g, '-').trim(): "default"
    const formattedTitle = courseTitle ? courseTitle?.toLowerCase().replace(/\s+/g, '-').trim(): "default"
    return `/partners/${formattedPartner}/${formattedTitle}`;
  };

  // Apply filters
  useEffect(() => {
    let filteredCourses = [...coursesData];

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filteredCourses = filteredCourses.filter(
        (course) =>
          course.title?.toLowerCase().includes(query) ||
          course?.description?.toLowerCase().includes(query) ||
          course?.partner?.toLowerCase().includes(query)
      );
    }

    if (activeFilters.school.length > 0) {
      filteredCourses = filteredCourses.filter((course) =>
        activeFilters.school.includes(course.school)
      );
    }

    if (activeFilters.location.length > 0) {
      filteredCourses = filteredCourses.filter((course) =>
        activeFilters.location.includes(course.location)
      );
    }

    setCourses(filteredCourses);
    setCurrentPage(1); // Reset to page 1 when filters change
  }, [searchQuery, activeFilters]);

  // Pagination logic
  const totalPages = Math.ceil(courses.length / itemsPerPage);
  const paginatedCourses = courses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="bg-slate-50 py-16 border-b border-slate-100">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Our Programs</h1>
              <p className="text-lg text-gray-600">
                Discover courses from leading educational partners designed to help you achieve your goals.
              </p>

              {/* Search */}
              <div className="mt-8 max-w-xl mx-auto relative">
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
                <CourseFilters filters={filterOptions} activeFilters={activeFilters} setActiveFilters={setActiveFilters} />
              </div>

              {/* Course Listings */}
              <div className="lg:col-span-3">
                {paginatedCourses.length > 0 ? (
                  <>
                    <div className="mb-6 flex justify-between items-center">
                      <p className="text-gray-600">
                        Showing <span className="font-medium">{courses.length}</span> results
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {paginatedCourses.map((course, index) => (
                        
                        <Link to ={generateCourseLink(course.school , course?.title)}>
                          <CourseCard key={course.id} course={course} featured={index === 0} partner={"Online Business School"} />
                        </Link>
                        
                      ))}
                    </div>

                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                      <div className="mt-8 flex justify-center space-x-2">
                        <button
                          className={`px-4 py-2 border rounded ${currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "text-primary"}`}
                          disabled={currentPage === 1}
                          onClick={() => setCurrentPage(currentPage - 1)}
                        >
                          Previous
                        </button>

                        <span className="px-4 py-2">{currentPage} / {totalPages}</span>

                        <button
                          className={`px-4 py-2 border rounded ${currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "text-primary"}`}
                          disabled={currentPage === totalPages}
                          onClick={() => setCurrentPage(currentPage + 1)}
                        >
                          Next
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-20">
                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-50">
                      <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">No courses found</h3>
                    <p className="text-gray-600 mb-6">We couldn't find any courses matching your criteria.</p>
                    <button
                      onClick={() => {
                        setSearchQuery("");
                        setActiveFilters({ school: [], location: [] });
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
