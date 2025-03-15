import { useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "../Buttons"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formData,
        "YOUR_PUBLIC_KEY"
      );

      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch (error) {
      setStatus("Failed to send message. Try again.");
    }
  };

  return (
    <div className=" w-full lg:max-w-1/2   rounded-lg p-8 mb-12">
      <h2 className="text-2xl font-bold  mb-4">Send us a mail</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
          rows= {4}
        ></textarea>
        <Button
            variant="primary"
            buttonName="Submit Message"
            className="w-fit"
        />
        {status && <p className="text-center mt-2 text-sm">{status}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
