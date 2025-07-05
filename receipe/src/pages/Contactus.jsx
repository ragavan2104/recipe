import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaUtensils, FaPaperPlane } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-lg">
              <FaUtensils className="text-white text-3xl" />
            </div>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have a question about our recipes? Want to share your cooking experience? 
            We'd love to hear from you! Reach out to the CookBook team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <FaEnvelope className="text-blue-500 mr-3" />
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <FaEnvelope className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email Us</h3>
                    <p className="text-gray-600">hello@cookbook.com</p>
                    <p className="text-gray-600">support@cookbook.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <FaPhone className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Call Us</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <FaMapMarkerAlt className="text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Visit Us</h3>
                    <p className="text-gray-600">123 Recipe Street</p>
                    <p className="text-gray-600">Culinary City, CC 12345</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-orange-100 rounded-lg">
                    <FaClock className="text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday - Sunday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Tips */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Recipe Tips & Updates</h3>
              <p className="mb-4">
                Subscribe to our newsletter for weekly recipe tips, cooking techniques, and the latest culinary trends!
              </p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe Now
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <FaPaperPlane className="text-purple-500 mr-3" />
              Send us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="recipe-question">Recipe Question</option>
                  <option value="technical-issue">Technical Issue</option>
                  <option value="feedback">Feedback</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your cooking journey, ask questions, or share feedback..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <FaPaperPlane />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 border border-gray-100 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">How do I save recipes?</h3>
              <p className="text-gray-600 text-sm">Click the heart icon on any recipe card to save it to your favorites for easy access later.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Can I submit my own recipes?</h3>
              <p className="text-gray-600 text-sm">Yes! We'd love to feature your recipes. Contact us with your recipe details and we'll review it.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">How do I search for specific ingredients?</h3>
              <p className="text-gray-600 text-sm">Use our search bar on the home page to find recipes by ingredient, cuisine type, or dietary preferences.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Is the app free to use?</h3>
              <p className="text-gray-600 text-sm">Yes! CookBook is completely free to use. Enjoy unlimited access to all our recipes and features.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ContactUs;
