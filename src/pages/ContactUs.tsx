import Banner from "../components/Banner";
import ContactForm from "../components/contact/form"
import { MapPin, Clock, Mail, Phone } from 'lucide-react';


const ContactUs = () => {
  return (
   
    <div className="flex flex-col min-h-screen">
      
      
      <main className="flex-grow p-8 lg:p-24 ">
        
        <section className="bg-white py-16 md:py-24 border-b border-slate-100">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">
                Get in Touch
              </h1>
              <p className="text-lg text-gray-600 animate-slide-up [animation-delay:100ms]">
                Have questions about our programs or want to explore partnership opportunities?
                Our team is here to help you.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Details Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-1">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-6 animate-slide-up">Contact Information</h2>
                    <p className="text-gray-600 mb-8 animate-slide-up [animation-delay:100ms]">
                      Fill out the form or reach out directly using the information below.
                    </p>
                  </div>
                  
                  <div className="space-y-6 animate-slide-up [animation-delay:200ms]">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-primary">
                        <MapPin size={20} />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium mb-1">Visit us</h4>
                        <p className="text-gray-600">50 Mbonu Street, D-Line </p>
                        <p className="text-gray-600">Portharcourt , Nigeria</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-primary">
                        <Phone size={20} />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium mb-1">Call us</h4>
                        <p className="text-gray-600">+2348038411326</p>
                        <p className="text-gray-500 text-sm">Mon-Fri, 9am-6pm</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-primary">
                        <Mail size={20} />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium mb-1">Email us</h4>
                        <p className="text-gray-600">info@maczeylearninghub.com</p>
                        <p className="text-gray-500 text-sm">We'll respond within 24 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-primary">
                        <Clock size={20} />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium mb-1">Working hours</h4>
                        <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* <div className="pt-6 animate-slide-up [animation-delay:300ms]">
                    <h4 className="text-lg font-medium mb-4">Connect with us</h4>
                    <div className="flex space-x-4">
                      <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div> */}
                </div>
              </div>
              
              <div className="lg:col-span-2 animate-scale-in">
                <ContactForm
                  title="Send us a message"
                  subtitle="We'd love to hear from you. Please fill out this form and we'll get back to you as soon as possible."
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 animate-slide-up">Frequently Asked Questions</h2>
              <p className="text-gray-600 animate-slide-up [animation-delay:100ms]">
                Find answers to common questions about our services and programs.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "How do I enroll in a course?",
                  answer: "Browse our programs page, select the course you're interested in, and fill out the contact form on the course page. One of our advisors will reach out to help you complete the enrollment process."
                },
                {
                  question: "Do you offer financial assistance?",
                  answer: "While we don't directly offer financial aid, many of our educational partners have scholarship and financing options. When you contact us about a specific program, we can provide information about available assistance options."
                },
                {
                  question: "Can I become an educational partner?",
                  answer: "Yes! We're always looking for quality educational institutions to partner with. Please reach out using our contact form and select 'Partnership Inquiry' from the dropdown menu."
                },
                {
                  question: "Do you offer corporate training solutions?",
                  answer: "Absolutely. We work with many businesses to create customized training programs for their employees. Contact our corporate solutions team to discuss your specific needs."
                }
              ].map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-slate-50 rounded-xl p-6 animate-slide-up"
                  style={{ animationDelay: `${index * 100 + 200}ms` }}
                >
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Banner/>
    </div>
  )
}

export default ContactUs