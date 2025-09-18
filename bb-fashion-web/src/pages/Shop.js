import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const allProducts = [
  { name: "Elegant Gift Set", description: "A beautifully curated gift set perfect for birthdays and special occasions.", image: "assets/product1.webp", price: "$49.99", category: "Gifts" },
  { name: "Trendy Notebook", description: "Stylish and functional stationery for your everyday needs.", image: "assets/product2.webp", price: "$19.99", category: "Stationery" },
  { name: "Kids’ Toy Set", description: "Fun and safe toys that spark creativity in children.", image: "assets/product3.webp", price: "$29.99", category: "Kids’ Toys" },
  { name: "Fashion Accessories", description: "Add a touch of style with our curated accessories collection.", image: "assets/product4.webp", price: "$24.99", category: "Accessories" },
  { name: "Luxury Pen", description: "Premium quality pen for office and personal use.", image: "assets/product5.webp", price: "$14.99", category: "Stationery" },
  { name: "Decorative Item", description: "Unique and stylish home décor item.", image: "assets/product6.webp", price: "$34.99", category: "Gifts" },
];

const categories = ["All", "Gifts", "Stationery", "Kids’ Toys", "Accessories"];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* HERO / Header */}
      <section className="bg-primary-dark text-white py-24">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Shop Our Collection
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Explore our curated selection of gifts, stationery, toys, and accessories. Quality products that bring style and joy to your everyday life.
          </p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20 text-center">
          <h2 className="text-3xl font-bold text-primary-dark mb-6">Categories</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  selectedCategory === cat
                    ? "bg-secondary text-white shadow-lg"
                    : "bg-white text-primary border border-gray-300 hover:bg-secondary hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="py-24">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark text-center mb-12">
            {selectedCategory === "All" ? "Featured Products" : selectedCategory}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl shadow-xl border border-gray-200 hover:shadow-2xl transition overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-primary">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <p className="text-xl font-semibold mb-4">{product.price}</p>
                  <button className="w-full py-3 bg-secondary text-white font-semibold rounded-full hover:bg-secondary-dark transition">
                    Add to Cart
                  </button>
                </div>
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
            Subscribe to our newsletter to receive the latest products, offers, and exclusive updates.
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

export default Shop;
