import React from "react";
import { FaHeart, FaUtensils, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 mt-auto">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand Section */}
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
                            <FaUtensils className="text-2xl text-orange-400" />
                            <h3 className="text-xl font-bold">Recipe Finder</h3>
                        </div>
                        <p className="text-gray-300 mb-4">
                            Discover, save, and share amazing recipes from around the world.
                        </p>
                        {/* Social Links */}
                        <div className="flex justify-center md:justify-start space-x-4">
                            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                                <FaGithub size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                                <FaLinkedin size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                                <FaTwitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center">
                        <h4 className="text-lg font-semibold mb-4 text-orange-400">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                            <li><a href="/favorites" className="text-gray-300 hover:text-white transition-colors">Favorites</a></li>
                            <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="text-center md:text-right">
                        <h4 className="text-lg font-semibold mb-4 text-orange-400">Get in Touch</h4>
                        <p className="text-gray-300 mb-2">
                            Have questions or suggestions?
                        </p>
                        <a 
                            href="/contact" 
                            className="inline-block px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-gray-400 mb-2 md:mb-0">
                            &copy; {new Date().getFullYear()} Recipe Finder. All rights reserved.
                        </p>
                        <p className="text-sm text-gray-400 flex items-center">
                            Made with <FaHeart className="text-red-500 mx-1" /> by Ragavan
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;