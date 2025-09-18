import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="bg-neutral-light w-full min-h-screen">
      <Navbar />

      {/* HERO Section */}
      <section className="relative flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full min-h-screen px-6 sm:px-12 lg:px-32 bg-primary-dark text-white">
        {/* Text */}
        <div
          className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
          data-aos="fade-right"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Welcome to <span className="text-accent">BB Fashion World</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-neutral-light mb-8">
            Your one-stop shop for{" "}
            <span className="font-semibold text-secondary">
              gifts, stationery, kids’ toys, and accessories
            </span>
            . Discover joy in every corner of our store!
          </p>
          <button className="px-6 sm:px-8 py-3 bg-secondary hover:bg-secondary-dark text-white font-semibold rounded-full shadow-lg transition-all">
            Shop Now
          </button>
        </div>

        {/* Image */}
        <div
          className="w-full lg:w-1/2 flex justify-center items-center"
          data-aos="zoom-in"
          data-aos-delay={200}
        >
          <img
            src="assets/fashion.webp"
            alt="Gift Store"
            className="w-full sm:w-11/12 md:w-10/12 lg:w-full max-w-3xl rounded-3xl shadow-2xl object-cover"
          />
        </div>
      </section>

      {/* ABOUT US SECTION */}
<section className="py-24 bg-white w-full">
<div className="container mx-auto px-6 sm:px-12 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
  
  {/* Image / Illustration */}
  <div
    className="w-full lg:w-1/2 flex justify-center"
    data-aos="fade-right"
  >
    <img
      src="assets/about-us.webp" // replace with your image
      alt="About Us"
      className="w-full max-w-md rounded-2xl shadow-lg object-cover"
    />
  </div>

  {/* Text Content */}
  <div className="w-full lg:w-1/2" data-aos="fade-left">
    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
      About <span className="text-accent">BB Fashion World</span>
    </h2>
    <p className="text-gray-700 text-lg mb-6">
      At BB Fashion World, we believe in bringing joy and style to your everyday life. 
      From unique gifts and trendy stationery to fun toys and accessories, every product is 
      handpicked to ensure quality and delight.
    </p>
    <p className="text-gray-700 text-lg mb-6">
      Our mission is simple: to provide an enjoyable shopping experience for our customers, 
      backed by fast delivery, secure payments, and exceptional support. Whether you're shopping 
      for yourself or for someone special, we make it easy to find something extraordinary.
    </p>
    <button className="px-8 py-3 bg-secondary hover:bg-secondary-dark text-white font-semibold rounded-full shadow-lg transition-all">
      Learn More
    </button>
  </div>
</div>
</section>


      {/* SHOP CATEGORIES */}
<section className="py-24 bg-gray-50 w-full">
<div className="container mx-auto px-6 sm:px-12 lg:px-20">
  <h2
    className="text-4xl font-bold text-center text-primary-dark mb-16"
    data-aos="fade-up"
  >
    Explore Our Store
  </h2>

  <div className="flex flex-wrap justify-center gap-8">
    {[
      { title: "Gifts", img: "gift" },
      { title: "Stationery", img: "stationery" },
      { title: "Kids’ Toys", img: "kids" },
      { title: "Accessories", img: "accessories" },
    ].map((cat, i) => (
      <div
        key={i}
        className="relative w-full sm:w-72 h-96 rounded-3xl overflow-hidden shadow-2xl transform transition duration-500 hover:scale-105 hover:-translate-y-2"
        data-aos="fade-up"
        data-aos-delay={i * 200}
      >
        <img
          src={`https://source.unsplash.com/random/600x60${i + 1}?${cat.img}`}
          alt={cat.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
          <h3 className="text-2xl font-bold text-white mb-2">{cat.title}</h3>
          <button className="px-6 py-2 bg-accent text-white font-semibold rounded-full hover:bg-accent-dark shadow-lg">
            Shop Now
          </button>
        </div>
      </div>
    ))}
  </div>
</div>
</section>

      {/* STORE HIGHLIGHTS - PROFESSIONAL STYLE */}
<section className="py-24 bg-gray-50 w-full">
<div className="container mx-auto px-6 sm:px-12 lg:px-20">
  {/* Heading */}
  <h2
    className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-16"
    data-aos="fade-down"
  >
    Why Choose BB Fashion World?
  </h2>

  {/* Cards grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
    {[
      {
        icon: "🎯",
        title: "Curated Selection",
        desc: "Every product is carefully selected to ensure quality, style, and value.",
      },
      {
        icon: "🛡️",
        title: "Trusted Quality",
        desc: "Top-notch materials and trusted brands for a seamless shopping experience.",
      },
      {
        icon: "🚚",
        title: "Fast & Reliable Delivery",
        desc: "Prompt shipping and secure packaging to get your order on time, every time.",
      },
      {
        icon: "💬",
        title: "Exceptional Support",
        desc: "Our customer support team is here to assist you before, during, and after your purchase.",
      },
      {
        icon: "💳",
        title: "Secure Payments",
        desc: "Multiple payment options with advanced encryption for safe transactions.",
      },
      {
        icon: "🎁",
        title: "Gift-Ready Packaging",
        desc: "Beautiful packaging options available to make every gift extra special.",
      },
    ].map((item, i) => (
      <div
        key={i}
        className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition-shadow duration-300"
        data-aos="fade-up"
        data-aos-delay={i * 150}
      >
        <div className="text-5xl mb-4">{item.icon}</div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
        <p className="text-gray-600">{item.desc}</p>
      </div>
    ))}
  </div>
</div>
</section>


      {/* CUSTOMER LOVE */}
      <section className="py-20 bg-white w-full">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <h2
            className="text-4xl font-bold text-center text-primary-dark mb-14"
            data-aos="fade-up"
          >
            What Our Customers Say
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                text: "I found the cutest birthday gift here. My daughter loved it!",
                author: "Priya",
              },
              {
                text: "Their stationery collection is just amazing. Stylish and affordable!",
                author: "Arun",
              },
              {
                text: "This is my go-to shop for kids’ toys. Always reliable.",
                author: "Sneha",
              },
            ].map((review, i) => (
              <div
                key={i}
                className="bg-neutral-light rounded-2xl shadow-lg p-8 hover:shadow-2xl transition"
                data-aos="zoom-in"
                data-aos-delay={i * 200}
              >
                <p className="text-gray-700 italic mb-6">“{review.text}”</p>
                <h4 className="font-bold text-primary-dark">- {review.author}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER / CTA */}
      <section className="py-20 bg-gradient-to-r from-secondary to-secondary-dark text-white text-center w-full">
        <div
          className="container mx-auto px-6 sm:px-12 lg:px-20"
          data-aos="zoom-in"
        >
          <h2 className="text-4xl font-bold mb-6">Join Our BB Family</h2>
          <p className="mb-8 text-lg">
            Get the latest arrivals, special discounts, and festive offers
            straight to your inbox 🎉
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

export default Home;
