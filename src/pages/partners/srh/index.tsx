import srh from '/srh.png'
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
        <img src={srh} className='object-contain '/>
        <div className='flex flex-col gap-4 my-16 w-1/2 '>
            <h1 className="text-2xl lg:text-5xl leading-tight tracking-[-1px] font-medium text-center lg:text-left">SRH University</h1>
            
            <p className='text-base lg:text-lg leading-8 mb-4'>Thinking about studying overseas? Find out what international study in Germany can offer you at SRH International College, where our multicultural and diverse population welcomes people from all over the world.</p>

            <Button variant="tertiary" buttonName="Explore Courses" className=" w-fit rounded-md"/>
        </div>
        
        <section className='flex flex-col gap-16 '>
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
                    <div className='flex flex-col gap-4 items-center'>
                        <div className="bg-blue-100 h-24 w-24"></div>
                        <p className='text-center text-base lg:text-lg'>{card.text}</p>
                    </div>
                ))
                }
                
                </div>
            </div>

            <div className='flex flex-col gap-8'>
                <h3 className='text-2xl lg:text-3xl leading-tight tracking-[-1px] font-medium text-center lg:text-left'>Our Programs</h3>

                <div className='flex gap-16'>
                    <div className='bg-blue-100 w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] flex items-center justify-center '>
                        <p className='text-base lg:text-lg'>Foundation Program</p>
                    </div>
                    <div className='bg-blue-100 w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] flex items-center justify-center '>
                        <p className='text-base lg:text-xl font-medium'>Pre-Masters</p>
                    </div>
                  
                </div>
            </div>
            
        </section>

        
    </main> 
  )
}

export default index