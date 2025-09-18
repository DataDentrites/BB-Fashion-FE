import React from 'react';
import Navbar from '../components/Navbar';

const articles = [
  {
    title: "Discover BB Fashion World: Your Ultimate Style Destination",
    content: `BB Fashion World is your one-stop shop for trendy fashion, unique gifts, and stylish accessories. 
    We curate collections that bring quality, creativity, and elegance to your everyday life. 
    From fashion-forward clothing to curated gifts and stationery, BB Fashion World is designed to make your shopping experience effortless and enjoyable.`,
    author: "BB Fashion Team",
    date: "September 18, 2025",
  },
  {
    title: "Top 5 Gifts You Can Find at BB Fashion World",
    content: `Looking for the perfect gift? BB Fashion World offers a wide range of thoughtfully curated gifts for birthdays, anniversaries, and special occasions. 
    Each gift is selected to inspire joy and leave a lasting impression. Our collection includes unique home decor, stylish accessories, and memorable keepsakes that anyone would love to receive.`,
    author: "BB Fashion Team",
    date: "September 15, 2025",
  },
  {
    title: "Trendy Stationery to Boost Your Creativity",
    content: `At BB Fashion World, we believe that stylish stationery sparks creativity. 
    Explore our collection of notebooks, planners, pens, and journals designed to enhance your productivity and inspire creativity. 
    Whether for school, work, or personal projects, our stationery helps you stay organized and stylish at the same time.`,
    author: "BB Fashion Team",
    date: "September 12, 2025",
  },
  {
    title: "Fun & Safe Toys for Kids of All Ages",
    content: `BB Fashion World offers safe, engaging, and educational toys for children. 
    From classic games to creative kits, every toy is carefully selected to encourage learning and imaginative play. 
    Perfect for birthdays, holidays, or everyday fun, our toys are designed to spark joy in every child.`,
    author: "BB Fashion Team",
    date: "September 10, 2025",
  },
  {
    title: "Accessorize Your Life: Stylish Picks from BB Fashion World",
    content: `Elevate your style with our curated collection of accessories. BB Fashion World offers trendy bags, jewelry, and other fashion essentials to complement your everyday look. 
    Our accessories are designed to add flair and sophistication to any outfit, helping you express your unique style.`,
    author: "BB Fashion Team",
    date: "September 8, 2025",
  },
  {
    title: "Sustainable Fashion Choices at BB Fashion World",
    content: `BB Fashion World is committed to sustainable and eco-friendly fashion. 
    Learn how you can make responsible choices without compromising on style. 
    From ethically sourced materials to eco-conscious designs, our sustainable collections make it easy to look good and feel good about your impact on the environment.`,
    author: "BB Fashion Team",
    date: "September 5, 2025",
  },
];

const faqs = [
  {
    question: "What is BB Fashion World?",
    answer: `BB Fashion World is a one-stop destination for trendy fashion, unique gifts, stylish stationery, and accessories. 
    Our mission is to provide high-quality, curated products that bring joy, style, and elegance to your life.`,
  },
  {
    question: "Do you offer gift wrapping services?",
    answer: `Yes! We offer premium gift wrapping services for most products. You can select gift wrapping at checkout for a stylish presentation that makes your gift extra special.`,
  },
  {
    question: "How can I track my order?",
    answer: `After placing an order, you will receive a confirmation email with a tracking link. You can also log in to your account on our website to view your order status and estimated delivery.`,
  },
  {
    question: "Are your products eco-friendly?",
    answer: `We are committed to sustainability. Many of our products are made with eco-friendly materials and ethically sourced components. Look for our "Sustainable Choice" labels when browsing.`,
  },
  {
    question: "Can I return or exchange products?",
    answer: `Yes, BB Fashion World has a hassle-free return and exchange policy. Products can be returned within 15 days of delivery in their original condition. Please refer to our Returns & Exchanges page for full details.`,
  },
];

const Blog = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="bg-primary-dark text-white py-24">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            BB Fashion World Blog
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Explore our latest insights, fashion tips, gift ideas, and lifestyle trends curated by BB Fashion World.
          </p>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="py-24">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20 space-y-16">
          {articles.map((article, i) => (
            <div key={i}>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-4">
                {article.title}
              </h2>
              <div className="text-sm text-gray-500 mb-4">
                {article.date} • {article.author}
              </div>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {article.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {faqs.map((faq, i) => (
              <div key={i}>
                <h3 className="text-2xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Newsletter */}
      <section className="py-20 bg-gradient-to-r from-secondary to-secondary-dark text-white text-center">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-6 text-lg sm:text-xl leading-relaxed">
            Subscribe to our newsletter to receive the latest articles, fashion insights, and exclusive updates from BB Fashion World.
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

export default Blog;
