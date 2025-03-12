const Courses = () => {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 ">
      {/* Page Heading */}
      <h1 className="text-5xl font-bold text-center  mb-4">
        Our Courses
      </h1>
      <h2 className="text-xl font-semibold text-center text-gray-600 mb-6">
        Empower Your Future with World-Class Education
      </h2>
      <p className="text-center text-gray-500 max-w-2xl mx-auto mb-12">
        Learn from top institutions, gain in-demand skills, and achieve your academic and career goals—all in one place.
      </p>

      
      <div className="space-y-16">
        
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Courses For Pre-Schoolers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Array(4).fill("").map((_, i) => (
              <div 
                key={i} 
                className="bg-gray-100 cursor-pointer h-40 flex items-center justify-center rounded-lg shadow-md hover:bg-blue-100 transition"
              >
                <p className="text-gray-600 font-medium">Course {i + 1}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Masters Students Courses */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Courses For Masters Students
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Array(4).fill("").map((_, i) => (
              <div 
                key={i} 
                className="bg-gray-100 h-40 flex items-center justify-center rounded-lg shadow-md hover:bg-blue-100 transition"
              >
                <p className="text-gray-600 font-medium">Course {i + 1}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bachelor Degree Courses */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Bachelor Degree Courses
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Array(4).fill("").map((_, i) => (
              <div 
                key={i} 
                className="bg-gray-100 h-40 flex items-center justify-center rounded-lg shadow-md hover:bg-blue-100 transition"
              >
                <p className="text-gray-600 font-medium">Course {i + 1}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Courses;
