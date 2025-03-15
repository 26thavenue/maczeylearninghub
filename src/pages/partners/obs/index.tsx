import imG from '/obs.png'
import Button from '../../../components/Buttons'

const index = () => {

  return (
    <main className="p-8 lg:p-24">
        <img src={imG} className='object-contain '/>
        <div className='flex flex-col gap-4 my-16 w-1/2 '>
            <h1 className="text-2xl lg:text-5xl leading-tight tracking-[-1px] font-medium text-center lg:text-left">Online Business School</h1>
            
            <p className='text-base lg:text-lg leading-8 mb-4'>Online degrees without the high fees
Study for a degree or MBA from UK universities for less than £6,000</p>

            <Button variant="tertiary" buttonName="Explore Courses" className=" w-fit rounded-md"/>
        </div>
        
        <section className='flex flex-col gap-16 my-24'>
            <div className='my-24'>
                <h3 className='text-2xl lg:text-3xl leading-tight tracking-[-1px] font-medium text-center mb-16'>Our Programs</h3>

                <div className='flex gap-16 items-center mb-2'>
                    <div className='bg-blue-100 lg:w-[300px] lg:h-[300px]'></div>
                    <div className='text-lg flex flex-col gap-4 w-1/2'>
                        <h5 className='font-medium text-lg'>Affordable study programmes with exclusive online modules fast tracking learners to a university qualification</h5>
                        <p className='mb-2 '>Whether you are looking to enhance your skills, improve your team or pursue a professional education, the Online Business School’s learning pathways can provide you with all you</p>
                    </div>
                </div>

                <div className='flex gap-16 items-center mb-2'>
                    <div className='bg-blue-100 lg:w-[300px] lg:h-[300px]'></div>
                    <div className='text-lg flex flex-col gap-4 w-1/2'>
                        <h5 className='font-medium text-xl'>A social learning experience like no other</h5>
                        <p className='mb-2'>Online... Anytime... On any device...
                        The 100% online undergraduate and postgraduate diploma courses at Online Business School provide students an affordable pathway to earning an undergraduate or postgraduate degree from a choice of respected UK universities.</p>
                        
                    </div>
                </div>

                <div className='flex gap-16 items-center space-y-4 mb-2'>
                    <div className='bg-blue-100 lg:w-[300px] lg:h-[300px]'></div>
                    <div className='text-lg flex flex-col gap-4 w-1/2'>
                        <h5 className='font-medium text-xl'>Support beyond your learning</h5>
                        <p className='mb-2'>Discover a wealth of invaluable resources to nurture your learning and overall well-being. With our 8 free support hubs, we are dedicated to empowering you in various aspects of your life.</p>
                        
                    </div>
                </div>

                <div className='flex gap-16 items-center mb-2'>
                    <div className='bg-blue-100 lg:w-[300px] lg:h-[300px]'></div>
                    <div className='text-lg flex flex-col gap-4 w-1/2'>
                        <h5 className='font-medium text-xl'>Professional body membership included</h5>
                        <p className='mb-2'>Select courses also include free membership of professional bodies appropriate to the course students are enrolled on to. Professional bodies offer numerous benefits to individuals in terms of professional development, networking, advocacy, recognition, and access to resources. Engaging with a professional body can contribute to the growth and success of professionals in their respective fields.</p>
                        
                    </div>
                </div>
            </div>

             <div className='flex flex-col gap-8 '>
                <h3 className='text-2xl lg:text-3xl leading-tight tracking-[-1px] font-medium text-center '>Course Categories</h3>
                 <div className='grid grid-cols-2 mx-auto gap-16 text-center'>
                    <div className='bg-blue-100 w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] flex items-center justify-center '>
                        <p className='text-base lg:text-lg'>IGSCE and Short Courses</p>
                    </div>
                    <div className='bg-blue-100 w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] flex items-center justify-center '>
                        <p className='text-base lg:text-xl font-medium'>A Level University Entry</p>
                    </div>
                    <div className='bg-blue-100 w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] flex items-center justify-center '>
                        <p className='text-base lg:text-xl font-medium'>University first and second year</p>
                    </div>
                    <div className='bg-blue-100 w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] flex items-center justify-center '>
                        <p className='text-base lg:text-xl font-medium'>Graduate Level</p>
                    </div>
                    <div className='bg-blue-100 w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] flex items-center justify-center '>
                        <p className='text-base lg:text-xl font-medium'>Masters & MBA</p>
                    </div>
                  
                </div>
            </div>
        </section>
        
    </main> 
  )
}

export default index