import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer bg-gradient-to-r from-[#00093c] to-[#2d0b00] text-white py-10">
      <div className="innerdiv max-w-screen-xl mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Logo and About */}
        <div className="div1">
          <h1 className="text-2xl font-bold">YourLogo</h1>
          <p className="mt-3 text-gray-400">
            Building modern and user-friendly experiences, tailored to meet your needs.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="div2">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="text-gray-300 hover:text-gray-100">Home</a></li>
            <li><a href="/about" className="text-gray-300 hover:text-gray-100">About</a></li>
            <li><a href="/products" className="text-gray-300 hover:text-gray-100">Products</a></li>
            <li><a href="/contact" className="text-gray-300 hover:text-gray-100">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="div3">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li className="text-gray-300">1234 Modern St, Tech City</li>
            <li className="text-gray-300">Email: contact@yourdomain.com</li>
            <li className="text-gray-300">Phone: +123 456 7890</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="div4">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="#"
              className="bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition duration-300"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-400 mt-10">
        <p>&copy; {new Date().getFullYear()} YourCompany. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
