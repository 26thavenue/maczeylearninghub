import imG from '/egaImg.png'
import Button from '../../../components/Buttons'
import { Link } from 'react-router-dom'
import ega from '/ega.png'
const index = () => {

  const cards=[
    {
        text:"High-quality education and academic standards",
        imgSrc:"",
    },
    {
        text:"Diverse range of degree programmes across disciplines",
        imgSrc:"",
    },
    {
        text:"Multicultural environment alongside cultural immersion",
        imgSrc:"",
    },
    {
        text:"Travel opportunities, benefitting from the central location in Europe",
        imgSrc:"",
    },
    {
        text:"A strong emphasis on work-life balance",
        imgSrc:"",
    },
    {
        text:"Supportive student services",
        imgSrc:"",
    },
]
  return (
    <main className="p-8 lg:p-24">
        <div className="flex gap-16 items-center">
            <div className='flex flex-col gap-4 my-16 w-1/2 '>
                <h1 className="text-2xl lg:text-5xl leading-tight tracking-[-1px] font-medium text-center lg:text-left">E-graduate College</h1>
                <img src={imG} className='object-contain w-[200px] h-[200px]'/>
                <p className='text-base lg:text-lg leading-8 mb-4'>Find Your Future,transform yourself. Experience a world of possibilities with Egraduate College. At Egraduate College, we are dedicated to making higher education more accessible and affordable for students worldwide. Our purpose is to provide high-quality, online and blended courses that offer significant cost savings in comparison to traditional college pathways. </p>

                <Link to ="courses">
                    <Button variant="tertiary" buttonName="Explore Courses" className=" w-fit rounded-md"/>
                </Link>
            </div>
        <img src={ega} className='object-cover h-[450px] w-[450px] rounded-2xl'/>
        </div>
        
        
        <section className='flex flex-col gap-16 my-24'>
            <div className='my-24 '>
                <h3 className='text-2xl lg:text-3xl leading-tight tracking-[-1px] font-medium text-center mb-16'>Take the Smart Route</h3>

                <div className='flex gap-8 justify-center'>
                    <div className='bg-gray-100 p-4 h-[300px] w-[300px] flex flex-col text-center items-center justify-center'>
                        <h5 className='text-lg font-medium mb-2'>Find Your Future</h5>
                        <p>Choose a qualification that matched your career aspiration. All courses are taught by qualified tutors with many years of industry experience.</p>
                    </div>

                    <div className='bg-gray-100 p-4 h-[300px] w-[300px] flex flex-col text-center items-center justify-center'>
                        <h5 className='text-lg font-medium mb-2'>Decide how and where to study</h5>
                        <p>Complete your courses 100% online or combine with short term studies at our college in Reading, UK.</p>
                    </div>

                    <div className='bg-gray-100 p-4 h-[300px] w-[300px] flex flex-col text-center items-center justify-center'>
                        <h5 className='text-lg font-medium mb-2'>Degree Progression</h5>
                        <p>Your Diploma provides multiple pathways to Bachelor's Degree in more than 50 universities in the UK and abroad.</p>
                    </div>
                </div>

                

              
            </div>

             <div className='flex flex-col gap-8 '>
                <h3 className='text-2xl lg:text-3xl leading-tight tracking-[-1px] font-medium text-center '>Course Categories</h3>
                 <div className='grid grid-cols-3 mx-auto gap-16 text-center'>
                    <div className='bg-blue-100 w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] flex items-center justify-center '>
                        <p className='text-base lg:text-lg font-medium'>Higher Education</p>
                    </div>
                    <div className='bg-blue-100 w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] flex items-center justify-center '>
                        <p className='text-base lg:text-xl font-medium'>Partnership Programmes</p>
                    </div>
                    <div className='bg-blue-100 w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] flex items-center justify-center '>
                        <p className='text-base lg:text-xl font-medium'>Professional Diploma</p>
                    </div>
                    <div className='bg-blue-100 w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] flex items-center justify-center '>
                        <p className='text-base lg:text-xl font-medium'>Degree Pathways</p>
                    </div>
                    <div className='bg-blue-100 w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] flex items-center justify-center '>
                        <p className='text-base lg:text-xl font-medium'>Pre -Access Courses</p>
                    </div>
                  
                </div>
            </div>
        </section>
        
    </main> 
  )
}

export default index