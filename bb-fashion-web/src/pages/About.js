import React from 'react';
import Navbar from '../components/Navbar';

function About() {
  return (
    <div>
      <Navbar />

      {/* HERO / Header */}
      <section className="bg-primary-dark text-white py-32">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 leading-tight">
            About Us
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            At BB Fashion World, we combine creativity, style, and quality to deliver a unique shopping experience. From gifts to stationery, toys, and accessories, every product is carefully curated to bring joy and elegance to your life.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20 flex flex-col lg:flex-row items-center gap-20">
          <div className="w-full lg:w-1/2" data-aos="fade-right">
            <img
              src="assets/about-us-story.webp" // replace with your image
              alt="Our Story"
              className="w-full rounded-3xl shadow-2xl object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-left" data-aos="fade-left">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">Our Journey</h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              BB Fashion World started with a simple vision: to make shopping delightful for everyone. 
              We began as a small team passionate about curating unique, high-quality products and have grown into a trusted brand that customers love.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Every item we offer is selected with care, ensuring it meets our standards for quality, creativity, and style. Our mission is to make every shopping experience memorable and enjoyable.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-20 text-primary-dark">
            Our Mission & Vision
          </h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="bg-neutral-light rounded-3xl shadow-xl p-12 hover:shadow-2xl transition">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-primary-dark">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                To create a joyful, seamless shopping experience by offering high-quality, stylish products that cater to every occasion. We aim to delight every customer with curated selections that inspire and bring happiness.
              </p>
            </div>
            <div className="bg-neutral-light rounded-3xl shadow-xl p-12 hover:shadow-2xl transition">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-primary-dark">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                To become the leading destination for curated gifts, trendy stationery, toys, and accessories. We envision a world where shopping is more than a transaction—it’s an experience that sparks joy, creativity, and connection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-gradient-to-r from-secondary to-secondary-dark text-white text-center">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Join Our BB Family</h2>
          <p className="mb-8 text-lg sm:text-xl leading-relaxed">
            Stay updated with our newest arrivals, exclusive offers, and inspiring stories.
          </p>
          <button className="px-12 py-4 bg-white text-secondary font-semibold rounded-full shadow-xl hover:bg-gray-100 transition text-lg">
            Subscribe Now
          </button>
        </div>
      </section>
    </div>
  );
}

export default About;
