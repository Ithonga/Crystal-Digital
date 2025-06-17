import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="static bg-gray-800 text-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8 justify-around">
          <div>
            <img src="/footer-logo.png" alt="Logo" className="h-12 mb-5" />
            <p className="mb-4 text-gray-400 max-w-[500px]">
              Unleash the power of graphics design with our creative excellence.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-white">
                  Our Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* <div>
              <h3 className="text-lg font-bold mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">My Account</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Track Order</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Wishlist</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Returns & Exchanges</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Shipping & Delivery</a></li>
              </ul>
            </div> */}

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span>Muguku Business Centre, Kikuyu</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📱</span>
                <span>+254 722 855 767</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✉️</span>
                <span>cdigitalent@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-gray-400 text-center">
          <p>© 2025 Crystal Digital Entertainment.</p>
          <p>Designed and Developed by{" "}<Link to="https://www.ronnieithonga.com" target="_blank" className="text-blue-600 underline hover:text-white">Ronnie Ithonga</Link>.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8