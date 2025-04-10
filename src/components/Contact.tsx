import { useState } from "react";
import { Send } from "lucide-react";
import Button from "../components/Buttons";


const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation: Ensure required fields are filled
    if (!formData.name || !formData.email || !formData.message) {
      // toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      console.log("Submitted data:", formData);
      // toast.success("Message sent successfully!");

      
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section id="contact" className="p-6 md:p-12 lg:p-24">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-5xl font-bold mb-2">Contact Us</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Have questions or need assistance? Get in touch with our team, and we'll be happy to help.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 max-w-2xl mx-auto bg-white p-6 md:p-8 rounded-lg "
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col w-full">
              <label className="font-medium">Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="py-2 px-4 border border-gray-300 focus:border-gray-500 outline-none rounded-md"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="font-medium">Email <span className="text-red-500">*</span></label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="py-2 px-4 border border-gray-300 focus:border-gray-500 outline-none rounded-md"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="font-medium">Message <span className="text-red-500">*</span></label>
            <textarea
              name="message"
              placeholder="Write your message here..."
              className="py-2 px-4 border border-gray-300 focus:border-gray-500 outline-none rounded-md h-32"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <Button
            variant="primary"
            className="w-full flex justify-center items-center gap-2"
            type="submit"
            isDisabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Send Message"}
            <Send />
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
