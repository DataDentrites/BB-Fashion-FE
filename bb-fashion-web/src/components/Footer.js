import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-black text-white py-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Call-to-Action Section */}
                    <div className="lg:col-span-1">
                        <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
                        <p className="text-sm text-gray-400 mb-6">
                            Sign up to receive exclusive offers, updates, and the latest trends in fashion.
                        </p>
                        <Link
                            to="/shop"
                            className="inline-block px-6 py-3 bg-primary-light text-primary-dark font-bold rounded-lg hover:bg-primary-dark hover:text-white transition-colors"
                        >
                            Shop Now
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div className="lg:col-span-1">
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/shop" className="text-gray-400 hover:text-white transition-colors">
                                    Shop
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div className="lg:col-span-1">
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <p className="text-sm text-gray-400">
                            Email: <a href="mailto:support@bbfashion.com" className="hover:underline">support@bbfashion.com</a>
                        </p>
                        <p className="text-sm text-gray-400">
                            Phone: <a href="tel:+11234567890" className="hover:underline">+1 (123) 456-7890</a>
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.324V1.325C24 .593 23.407 0 22.675 0z" />
                                </svg>
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.608 1.794-1.574 2.163-2.723-.949.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.09-.205-7.719-2.165-10.148-5.144-.424.729-.666 1.574-.666 2.476 0 1.708.87 3.213 2.188 4.096-.807-.026-1.566-.247-2.228-.616v.062c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.317 0-.626-.03-.927-.086.627 1.956 2.444 3.379 4.6 3.419-1.68 1.319-3.809 2.105-6.102 2.105-.396 0-.788-.023-1.175-.067 2.179 1.397 4.768 2.212 7.548 2.212 9.056 0 14.002-7.496 14.002-13.986 0-.213-.005-.425-.014-.636.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.056 2.003.24 2.478.403a4.92 4.92 0 0 1 1.675 1.013 4.92 4.92 0 0 1 1.013 1.675c.163.475.347 1.272.403 2.478.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.206-.24 2.003-.403 2.478a4.92 4.92 0 0 1-1.013 1.675 4.92 4.92 0 0 1-1.675 1.013c-.475.163-1.272.347-2.478.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.056-2.003-.24-2.478-.403a4.92 4.92 0 0 1-1.675-1.013 4.92 4.92 0 0 1-1.013-1.675c-.163-.475-.347-1.272-.403-2.478-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.056-1.206.24-2.003.403-2.478a4.92 4.92 0 0 1 1.013-1.675 4.92 4.92 0 0 1 1.675-1.013c.475-.163 1.272-.347 2.478-.403 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.013-4.947.072-1.28.059-2.153.25-2.91.527a6.92 6.92 0 0 0-2.51 1.64 6.92 6.92 0 0 0-1.64 2.51c-.277.757-.468 1.63-.527 2.91-.059 1.28-.072 1.688-.072 4.947s.013 3.667.072 4.947c.059 1.28.25 2.153.527 2.91a6.92 6.92 0 0 0 1.64 2.51 6.92 6.92 0 0 0 2.51 1.64c.757.277 1.63.468 2.91.527 1.28.059 1.688.072 4.947.072s3.667-.013 4.947-.072c1.28-.059 2.153-.25 2.91-.527a6.92 6.92 0 0 0 2.51-1.64 6.92 6.92 0 0 0 1.64-2.51c.277-.757.468-1.63.527-2.91.059-1.28.072-1.688.072-4.947s-.013-3.667-.072-4.947c-.059-1.28-.25-2.153-.527-2.91a6.92 6.92 0 0 0-1.64-2.51 6.92 6.92 0 0 0-2.51-1.64c-.757-.277-1.63-.468-2.91-.527-1.28-.059-1.688-.072-4.947-.072z" />
                                    <circle cx="12" cy="12" r="3.5" />
                                    <path d="M16.5 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center text-sm text-gray-500">
                    <p>© 2023 BB Fashion. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
