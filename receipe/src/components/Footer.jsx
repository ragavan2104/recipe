import React from "react";
import { FaHeart, FaUtensils, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="relative mt-20">
            {/* Wave decoration */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
                <svg 
                    className="relative block w-full h-16" 
                    viewBox="0 0 1200 120" 
                    preserveAspectRatio="none"
                >
                    <path 
                        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                        fill="white" 
                        opacity=".25"
                    ></path>
                    <path 
                        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
                        fill="white" 
                        opacity=".5"
                    ></path>
                    <path 
                        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
                        fill="white"
                    ></path>
                </svg>
            </div>

            <div className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-indigo-900 text-white pt-20 pb-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                        {/* Brand Section */}
                        <div className="md:col-span-2">
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg">
                                    <FaUtensils className="text-2xl text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                        CookBook
                                    </h3>
                                    <p className="text-slate-400 text-sm">Recipe Discovery Platform</p>
                                </div>
                            </div>
                            <p className="text-slate-300 mb-6 text-lg leading-relaxed max-w-md">
                                Discover, save, and share amazing recipes from around the world. Your culinary journey starts here.
                            </p>
                            {/* Social Links */}
                            <div className="flex space-x-4">
                                {[
                                    { icon: FaGithub, color: 'hover:text-gray-400' },
                                    { icon: FaLinkedin, color: 'hover:text-blue-400' },
                                    { icon: FaTwitter, color: 'hover:text-sky-400' },
                                    { icon: FaInstagram, color: 'hover:text-pink-400' }
                                ].map((social, index) => (
                                    <a 
                                        key={index}
                                        href="#" 
                                        className={`p-3 bg-slate-700/50 rounded-xl text-slate-400 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-slate-600/50`}
                                    >
                                        <social.icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-lg font-semibold mb-6 text-blue-400">Quick Links</h4>
                            <ul className="space-y-3">
                                {[
                                    { name: 'Home', href: '/' },
                                    { name: 'Favorites', href: '/favorites' },
                                    { name: 'Contact', href: '/contact' },
                                    { name: 'About Us', href: '#' }
                                ].map((link) => (
                                    <li key={link.name}>
                                        <a 
                                            href={link.href} 
                                            className="text-slate-300 hover:text-white transition-colors duration-300 hover:pl-2 transform"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="text-lg font-semibold mb-6 text-purple-400">Get in Touch</h4>
                            <p className="text-slate-300 mb-4">
                                Have questions or recipe suggestions?
                            </p>
                            <a 
                                href="/contact" 
                                className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="border-t border-slate-700 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <p className="text-slate-400 text-sm">
                                &copy; {new Date().getFullYear()} CookBook. All rights reserved.
                            </p>
                            <div className="flex items-center space-x-6 text-sm text-slate-400">
                                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                                <div className="flex items-center">
                                    Made with <FaHeart className="text-red-500 mx-2" size={14} /> by Ragavan
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;