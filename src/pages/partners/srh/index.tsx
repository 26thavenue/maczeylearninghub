import srh from '/srhImg.png'
import Button from '../../../components/Buttons'

import { 
  GraduationCap,   
  BookOpen,        
  Globe,           
  Plane,          
  Scale,    
  HandHelping      
} from 'lucide-react';
import Banner from '../../../components/Banner';

const index = () => {

  const cards = [
  {
    text: "High-quality education and academic standards",
    imgSrc: <GraduationCap size={40} className='text-primary'/>,
  },
  {
    text: "Diverse range of degree programmes across disciplines",
    imgSrc: <BookOpen size={40} className='text-primary'/>,
  },
  {
    text: "Multicultural environment alongside cultural immersion",
    imgSrc: <Globe size={40} className='text-primary'/>,
  },
  {
    text: "Travel opportunities, benefitting from the central location in Europe",
    imgSrc: <Plane size={40} className='text-primary'/>,
  },
  {
    text: "A strong emphasis on work-life balance",
    imgSrc: <Scale size={40} className='text-primary'/>,
  },
  {
    text: "Supportive student services",
    imgSrc: <HandHelping size={40} className='text-primary'/>,
  },
]
  return (
    <main className="">
        
        <div className='flex items-center justify-between mb-16 bg-primary text-white p-8 lg:p-24'>
            <div className='flex flex-col gap-4 my-16 w-1/2 '>
                <img src={srh} alt="SRH University" className='object-contain w-[100px] h-[100px] rounded-full bg-white p-3'/>
                <h1 className="text-2xl lg:text-5xl leading-tight tracking-[-1px] font-medium text-center lg:text-left">SRH University</h1>
                
                <p className='text-base lg:text-lg leading-8 mb-4'>Thinking about studying overseas? Find out what international study in Germany can offer you at SRH International College, where our multicultural and diverse population welcomes people from all over the world.</p>

                <Button variant="secondary" buttonName="Explore Courses" className=" w-fit rounded-md"/>
            
            </div>
            <img className="w-[500px] h-[500px] object-cover rounded-2xl" src="https://www.srh-international-college.de/wp-content/uploads/2023/07/srh-hero-1920x1080-1.jpg" alt="SRH University"/>
        </div>
        
        
        <section className='flex flex-col gap-16 p-8 lg:p-24'>
            <div className='flex flex-col gap-8 '>
                <h3 className='text-2xl lg:text-3xl leading-tight tracking-[-1px] font-medium text-center lg:text-left'>Why Choose SRH International College</h3>
                <p className='leading-8 text-base  lg:text-lg'>SRH International College is an Associate College of SRH Universities Germany, one of the leading providers of Higher Education in Europe with over 16,000 students in total. 
                SRH is a non-profit foundation that operates independently of capital interests. As a leading private provider of educational and healthcare services, SRH opens up perspectives for everyone. Our SRH universities are one pillar of the group, embedded in a large national and international network.
                When you join us, you will study in a large network and learn in practice-oriented in small groups.
                We currently offer a choice of university pathways, including:
                Three Foundation programmes in Business and Engineering & IT.
                Three Pre-master’s in Business, Computing and Engineering & IT Management.
                By studying with us, you benefit from being in Europe’s strongest economy, and the world’s 4th largest economy with strong job prospects.</p>
            </div>


            <div className='flex flex-col gap-8'>
                <h3 className='text-2xl lg:text-3xl leading-tight tracking-[-1px] font-medium text-center lg:text-left'>What We Offer</h3>
                <div className='grid grid-cols-2 lg:grid-cols-3 space-x-4 space-y-4'>
                {
                    cards.map((card,k) =>(
                    <div tabIndex={k} className='flex flex-col gap-4 items-center'>
                        <div className=" bg-blue-100 p-4 items-center justify-center rounded-full">
                            {card.imgSrc}
                        </div>
                        <p className='text-center text-base lg:text-lg'>{card.text}</p>
                    </div>
                ))
                }
                
                </div>
            </div>

            <div className='flex flex-col gap-8 bg-blue-100 p-16 rounded-xl'>
                <h3 className='text-2xl lg:text-3xl leading-tight tracking-[-1px] font-medium text-center lg:text-left'>Our Programs</h3>

                <div className='flex flex-col gap-16 '>
                    <div className=''>
                        <p className='text-base lg:text-xl font-medium  my-4 '>Foundation Program</p>
                        <p className='text-lg leading-10'>A Foundation is a period of study which bridges the gap between your High School studies and the Year 1 entry point of your chosen degree at SRH University. Foundations are perfect if you need an extra layer of study and support.
                        All the international Foundation programmes covered in this section lead onto one of SRH University’s degrees and progression is automatic if you have passed all required modules. You will select your progression degree at the point of application.
                        SRH International College offers three foundation programmes:</p>
                        <div className='text-base'>
                           <li className="">Business</li>
                            <li className="">Creative Studies</li>
                            <li className="">Engineering and IT</li>
                        </div>
                    </div>

                    <div className=''>
                        <p className='text-base lg:text-xl font-medium mt-8 mb-4 '>Pre-Master's Program</p>
                        <p className='text-lg leading-10'>A Pre-master’s is your first step to a SRH University Master’s if you do not meet the academic requirements to join directly. It will provide you with both the academic and study skills required for you to be ready to study a Master’s in Germany.
                            Your Pre-master’s programme will lead seamlessly onto your chosen SRH University Master’s provided you have passed all modules and your visa will cover both levels of study.

                            SRH International College offers three Pre-master’s programmes:</p>
                        <div className='text-base'>
                            <li className="">Business</li>
                            <li className="">Computing</li>
                            <li className="">Engineering and IT Management</li>
                        </div>
                    </div>
                    
                  
                </div>
            </div>

            <Banner/>
            
        </section>

        
    </main> 
  )
}

export default index