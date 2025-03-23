import { useState } from 'react';
import Button from '../Buttons';
import { Check } from 'lucide-react';
import { toast } from 'sonner';

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  programId?: string;
  programName?: string;
}

const ContactForm = ({ 
  title = "Get in touch", 
  subtitle = "Fill out the form below and we'll get back to you as soon as possible.",
  programName
}: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: programName ? `I'm interested in the "${programName}" program.` : '',
    company: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Your message has been sent successfully!");
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: programName ? `I'm interested in the "${programName}" program.` : '',
          company: '',
        });
      }, 3000);
    }, 1500);
  };


  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-gray-600 mt-2">{subtitle}</p>
        </div>
        
        {isSubmitted ? (
          <div className="text-center py-8 animate-fade-in">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Thank you!</h4>
            <p className="text-gray-600">
              Your message has been sent successfully. We'll get back to you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="block w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-primary focus:border-primary text-sm"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="block w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-primary focus:border-primary text-sm"
                  placeholder="Your email address"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="block w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-primary focus:border-primary text-sm"
                  placeholder="Your phone number"
                />
              </div>
              
              
            </div>
          
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message*
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="block w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-primary focus:border-primary text-sm"
                placeholder="Your message"
              ></textarea>
            </div>
            
            
            
            <Button
              variant='primary'
              buttonName={isSubmitting ? 'Sending...' : 'Send Message'}
              isDisabled={isSubmitting}
              className=" py-3 rounded-full w-fit"
            />
            
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;