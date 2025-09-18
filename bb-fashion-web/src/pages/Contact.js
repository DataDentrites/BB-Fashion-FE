import React from 'react';
import Navbar from '../components/Navbar';

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* HERO / Header */}
      <section className="bg-primary-dark text-white py-24">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Contact BB Fashion World
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Have questions or need assistance? Our team is here to help. Reach out via the contact form, email, or phone.
          </p>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold text-primary-dark mb-2">Email Us</h3>
            <p className="text-gray-700">support@bbfashionworld.com</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold text-primary-dark mb-2">Call Us</h3>
            <p className="text-gray-700">+91 98765 43210</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold text-primary-dark mb-2">Visit Us</h3>
            <p className="text-gray-700">123 Fashion Street, Style City, India</p>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-16">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark text-center mb-12">
            Send Us a Message
          </h2>
          <form className="max-w-2xl mx-auto bg-white p-6 sm:p-10 rounded-lg shadow-lg border border-gray-200 space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-secondary text-white py-3 rounded-lg font-semibold hover:bg-secondary-dark transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* OPTIONAL: MAP */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark text-center mb-6">
            Our Location
          </h2>
          <p className="text-center text-gray-700 mb-6">
            Come visit us at our store for an amazing shopping experience!
          </p>
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="BB Fashion World Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.123456789!2d77.123456!3d12.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDA3JzAwLjAiTiA3N8KwMDcnMzcuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA / Newsletter */}
      <section className="py-20 bg-gradient-to-r from-secondary to-secondary-dark text-white text-center">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-6 text-lg sm:text-xl leading-relaxed">
            Subscribe to our newsletter to receive the latest updates, fashion insights, and exclusive offers from BB Fashion World.
          </p>
          <form className="max-w-lg mx-auto flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:flex-1 px-5 py-3 rounded-full text-gray-900 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-white text-secondary font-semibold rounded-full shadow-lg hover:bg-gray-100 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
