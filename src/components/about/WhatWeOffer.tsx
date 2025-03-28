
const features = [
  "High School Diplomas from accredited institutions in the UK, Canada, and US",
  "College and University Diplomas from recognized institutions in the UK, US, Canada, and Germany",
  "Flexible learning options that allow you to study at your own pace",
  "Affordable tuition fees with flexible payment plans",
  "Dedicated tutor support from enrollment to graduation",
  "Access to a global community of learners and professionals",
  "Opportunities for career advancement and networking",
];

const WhatWeOffer = () => {
  return (
  <section className=' p-8 lg:p-24 text-black'>
        <h1 className="text-4xl lg:text-5xl leading-tight mb-4   tracking-[-1px] font-medium text-center  ">What We Offer</h1>
        <h3 className='text-lg mb-16 text-center w-full lg:w-1/2 mx-auto leading-8'>At Maczey Learning hub, we offer a wide range of academic programs from top-tier institutions in the UK, Canada, US, and Germany.</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[80dvw] mx-auto">
        {features.map((feature, index) => (
            <div key={index} className="p-6 h-[300px] w-[300px] flex items-center justify-center  rounded-lg shadow-md bg-primary">
                <h3 className="text-lg text-center font-semibold text-white/90">{feature}</h3>
            </div>
        ))}
        </div>
    </section>
   
  )
}

export default WhatWeOffer