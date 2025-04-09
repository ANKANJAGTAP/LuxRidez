import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${backendUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message || 'Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error(result.message || 'Something went wrong. Try again!');
      }
    } catch (error) {
      toast.error('Server error. Please try again later.');
    }
  };

  return (
    <section className="py-20 px-4 md:px-8  text-white">
      <ToastContainer position="top-center" autoClose={3000} theme="dark" />
      
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-5xl font-extrabold mb-4 animate-fade-in-up">Contact Me</h2>
        <p className="text-gray-400 text-lg">
          Got questions or feedback? Reach out to us and we’ll get back to you shortly!
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left side - Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <Phone className="w-6 h-6 text-indigo-400" />
            <p className="text-gray-300 text-lg">+91 7058526196</p>
          </div>
          <div className="flex items-center space-x-4">
            <Mail className="w-6 h-6 text-indigo-400" />
            <p className="text-gray-300 text-lg">ankanjagtap.2005@gmail.com</p>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="w-6 h-6 text-indigo-400" />
            <p className="text-gray-300 text-lg">LuxRidez, Sangli, Maharashtra</p>
          </div>
        </div>

        {/* Right side - Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 p-10 rounded-3xl shadow-2xl space-y-6 w-full border border-white/10"
        >
          <div className="space-y-1">
            <label className="block text-gray-400 text-sm">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-800 rounded-xl border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none text-white"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="block text-gray-400 text-sm">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-800 rounded-xl border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none text-white"
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="block text-gray-400 text-sm">Message</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-800 rounded-xl border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none text-white"
              placeholder="Type your message here..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 transition-all py-3 rounded-xl text-white font-semibold shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
