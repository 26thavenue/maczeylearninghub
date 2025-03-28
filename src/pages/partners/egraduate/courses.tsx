import { Link } from "react-router-dom";
import arr from "./courses.json"; 

const CoursesPage = () => {
  return (
    <main className="p-24">
      <h1 className="text-2xl lg:text-5xl leading-tight tracking-[-1px] font-medium text-center lg:text-left "> E-Graduate Courses</h1>
      <div className=" my-24 p-3">
        <h1 className="font-bold text-3xl mb-4">Access to Higher Education Courses</h1>
        <div className="grid grid-cols-4 gap-3 w-full ">
             {arr.coursesHE.map((course, index) => (
                <div key={index} className="p-3 flex flex-col gap-4">
                    
                    {course.imgSrc ? (
                    <div style={{ width: "200px", height: "200px", background: "#eee" }}></div>
                    ) : (
                    <div style={{ width: "200px", height: "200px", background: "#eee" }}></div>
                    )}
                    <div className="flex flex-col">
                        <h3 className="font-bold max-w-[250px]">{course.title}</h3>
                        <p className="mb-4">{course.level}</p>
                        
                        <Link className="hover:underline" to={`/courses/${encodeURIComponent(course.title)}` }>View Course</Link>
                    </div>     
                </div>
                ))}
        </div>
       
      </div>

      <div className=" my-24 p-3">
        <h1 className="font-bold text-3xl mb-4">Professional Diploma Courses</h1>
        <div className="grid grid-cols-4 gap-3 w-full ">
             {arr.coursesPD.map((course, index) => (
                <div key={index} className="p-3 flex flex-col gap-4">
                    
                    {course.imageUrl ? (
                    <div style={{ width: "200px", height: "200px", background: "#eee" }}></div>
                    ) : (
                    <div style={{ width: "200px", height: "200px", background: "#eee" }}></div>
                    )}

                    <div className="flex flex-col">
                        <h3 className="font-bold mb-4">{course.title}</h3>
                        <Link className="hover:underline" to={`/courses/${encodeURIComponent(course.title)}` }>View Course</Link>
                    </div>     
                </div>
                ))}
        </div>
       
      </div>

      <div className=" my-24 p-3">
        <h1 className="font-bold text-3xl mb-4">Work to Learn Degree</h1>
        <div className="grid grid-cols-4 gap-3 w-full ">
             {arr.coursesWork2LearnDegree.map((course, index) => (
                <div key={index} className="p-3 flex flex-col gap-4">
                    
                    {course?.imageUrl ? (
                    <div style={{ width: "200px", height: "200px", background: "#eee" }}></div>
                    ) : (
                    <div style={{ width: "200px", height: "200px", background: "#eee" }}></div>
                    )}

                    <div className="flex flex-col ">
                        <h3 className="font-bold mb-4">{course.title}</h3>
                        
                        
                        <Link className="hover:underline" to={`/courses/${encodeURIComponent(course.title)}` }>View Course</Link>
                    </div>     
                </div>
                ))}
        </div>
       
      </div>
    </main>
  );
};

export default CoursesPage;
