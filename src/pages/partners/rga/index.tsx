import imG from '/rga.png'
import Button from '../../../components/Buttons'

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
        <img src={imG} className='object-contain '/>
        <div className='flex flex-col gap-4 mt-8 mb-16 w-1/2 '>
            <h1 className="text-2xl lg:text-5xl leading-tight tracking-[-1px] font-medium text-center lg:text-left">Ready Global Academy</h1>
            
            <p className='text-base lg:text-lg leading-8 mb-4'>Ready Global Academy is a private school designed to bring American education to students around the world, no matter where they live. As an RGA student, you can choose from an expansive and rigorous curriculum of standard, honors, and AP courses, or enroll in our dual enrollment program to earn college credit. </p>

            <Button variant="tertiary" buttonName="Explore Courses" className=" w-fit rounded-md"/>
        </div>
        
        <section className='flex flex-col gap-16 my-24'>
            <div className='flex flex-col gap-8 '>
                <h3 className='text-2xl lg:text-3xl leading-tight tracking-[-1px] font-medium text-center '>School Features</h3>
                 <div className='grid grid-cols-2 mx-auto gap-16 text-center'>
                    <div className='bg-blue-100 w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] flex items-center justify-center '>
                        <p className='text-base lg:text-lg'>92% acceptance to Top 50 US Universities</p>
                    </div>
                    <div className='bg-blue-100 w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] flex items-center justify-center '>
                        <p className='text-base lg:text-xl font-medium'>Over 50+ Course Options</p>
                    </div>
                    <div className='bg-blue-100 w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] flex items-center justify-center '>
                        <p className='text-base lg:text-xl font-medium'>Certified Teachers</p>
                    </div>
                    <div className='bg-blue-100 w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] flex items-center justify-center '>
                        <p className='text-base lg:text-xl font-medium'>100% Acceptance to Top Schools</p>
                    </div>
                  
                </div>
            </div>

            <div className='my-24'>
                <h3 className='text-2xl lg:text-3xl leading-tight tracking-[-1px] font-medium text-center mb-16'>Our Programs</h3>

                <div className='flex gap-16 items-center mb-2'>
                    <div className='bg-blue-100 lg:w-[300px] lg:h-[300px]'></div>
                    <div className='text-lg flex flex-col gap-4'>
                        <h5 className='font-medium text-xl'>High School</h5>
                        <p className='mb-2'>Take courses to earn a US high school diploma from anywhere in the world.</p>
                        <Button variant="tertiary" buttonName="Learn More" className=" w-fit rounded-md"/>
                    </div>
                </div>

                <div className='flex gap-16 items-center mb-2'>
                    <div className='bg-blue-100 lg:w-[300px] lg:h-[300px]'></div>
                    <div className='text-lg flex flex-col gap-4'>
                        <h5 className='font-medium text-xl'>College Credit Course</h5>
                        <p className='mb-2'>Get a jump start on your college education by enrolling in the ACCP Program partnered with Marquette University.</p>
                        <Button variant="tertiary" buttonName="Learn More" className=" w-fit rounded-md"/>
                    </div>
                </div>

                <div className='flex gap-16 items-center space-y-4 mb-2'>
                    <div className='bg-blue-100 lg:w-[300px] lg:h-[300px]'></div>
                    <div className='text-lg flex flex-col gap-4'>
                        <h5 className='font-medium text-xl'>Accreditation</h5>
                        <p className='mb-2'>Take courses to earn a US high school diploma from anywhere in the world.</p>
                        <Button variant="tertiary" buttonName="Learn More" className=" w-fit rounded-md"/>
                    </div>
                </div>

                <div className='flex gap-16 items-center mb-2'>
                    <div className='bg-blue-100 lg:w-[300px] lg:h-[300px]'></div>
                    <div className='text-lg flex flex-col gap-4'>
                        <h5 className='font-medium text-xl'>Current Students</h5>
                        <p className='mb-2'>Learn what being an RGA student is all about.</p>
                        <Button variant="tertiary" buttonName="Learn More" className=" w-fit rounded-md"/>
                    </div>
                </div>
            </div>
        </section>

        
    </main> 
  )
}

export default index