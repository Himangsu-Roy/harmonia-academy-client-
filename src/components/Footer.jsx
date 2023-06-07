import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          <div className="mb-6 sm:mb-0">
            <h4 className="text-gray-400 font-semibold text-[18px] mb-3">
              Company
            </h4>
            <Link
              to="/about"
              className="text-gray-400 hover:text-white block mb-2">
              About Us
            </Link>
            <Link
              to="/team"
              className="text-gray-400 hover:text-white block mb-2">
              Team
            </Link>
            <Link
              to="/careers"
              className="text-gray-400 hover:text-white block">
              Careers
            </Link>
          </div>
          <div className="mb-6 sm:mb-0">
            <h4 className="text-gray-400 mb-3 font-semibold text-[18px]">
              Support
            </h4>
            <Link
              to="/faq"
              className="text-gray-400 hover:text-white block mb-2">
              FAQ
            </Link>
            <Link
              to="/contact-us"
              className="text-gray-400 hover:text-white block mb-2">
              Contact Us
            </Link>
            <Link
              to="/customer-service"
              className="text-gray-400 hover:text-white block">
              Customer Service
            </Link>
          </div>
          <div className="mb-6 sm:mb-0">
            <h4 className="text-gray-400 mb-3 font-semibold text-[18px]">
              Legal
            </h4>
            <Link
              to="/terms-of-service"
              className="text-gray-400 hover:text-white block mb-2">
              Terms of Service
            </Link>
            <Link
              to="/privacy-policy"
              className="text-gray-400 hover:text-white block mb-2">
              Privacy Policy
            </Link>
            <Link
              to="/cookie-policy"
              className="text-gray-400 hover:text-white block">
              Cookie Policy
            </Link>
          </div>
          <div>
            <h4 className="text-gray-400 mb-3 font-semibold text-[18px]">
              Connect With Us
            </h4>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <p className="text-center text-gray-400 mt-6">
          © 2023 Harmonia Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
