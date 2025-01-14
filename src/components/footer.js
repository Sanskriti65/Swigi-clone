import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaInstagram, FaFacebook, FaPinterest, FaTwitter } from 'react-icons/fa';

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="flex-col items-center w-full py-2 bg-gray-200">
            <div className="max-w-screen-xl mx-auto px-4 py-8 grid gap-8 md:grid-cols-5 items-start">
                <div className="space-y-4">
                    <div className="flex flex-col items-center">
                        <img src={`${process.env.PUBLIC_URL}/images/Group.svg`} alt="Group" />
                        <span className="text-sm mt-2">&copy; {currentYear} Swiggy Limited</span>
                    </div>
                </div>
                <div className="space-y-4 md:ml text-left">
                    <h3 className="font-semibold text-lg">Company</h3>
                    <ul className="space-y-2 text-m">
                        <li><Link to="sss" className='text-black'>About Us</Link></li>
                        <li><Link to="sss" className='text-black'>Swiggy Corporate</Link></li>
                        <li><Link to="sss" className='text-black'>Careers</Link></li>
                        <li><Link to="sss" className='text-black'>Team</Link></li>
                        <li><Link to="sss" className='text-black'>Swiggy One</Link></li>
                        <li><Link to="sss" className='text-black'>Swiggy Instamart</Link></li>
                        <li><Link to="sss" className='text-black'>Swiggy Dineout</Link></li>
                        <li><Link to="sss" className='text-black'>Swiggy Genie</Link></li>
                        <li><Link to="sss" className='text-black'>Minis</Link></li>
                    </ul>
                </div>

                <div className="space-y-4 text-left">
                    <h3 className="font-semibold text-lg">Contact us</h3>
                    <ul className="space-y-2 text-m">
                        <li><Link to="sss" className='text-black'>Help & Support</Link></li>
                        <li><Link to="sss" className='text-black'>Partner with us</Link></li>
                        <li><Link to="sss" className='text-black'>Ride with us</Link></li>
                    </ul>

                    <h3 className="font-semibold text-lg mt-5 text-left">Legal</h3>
                    <ul className="space-y-2 text-m">
                        <li><Link to="sss" className='text-black'>Terms & Conditions</Link></li>
                        <li><Link to="sss" className='text-black'>Cookie Policy</Link></li>
                        <li><Link to="sss" className='text-black'>Privacy Policy</Link></li>
                    </ul>
                </div>

                <div className="space-y-4 md:ml-1 text-left">
                    <h3 className="font-semibold text-lg">Available in:</h3>
                    <ul className="space-y-2 text-m">
                        <li><Link to="sss" className='text-black'>Bangalore</Link></li>
                        <li><Link to="sss" className='text-black'>Gurgaon</Link></li>
                        <li><Link to="sss" className='text-black'>Hyderabad</Link></li>
                        <li><Link to="sss" className='text-black'>Delhi</Link></li>
                        <li><Link to="sss" className='text-black'>Mumbai</Link></li>
                        <li><Link to="sss" className='text-black'>Pune</Link></li>
                    </ul>
                </div>

                <div className="space-y-4 md:ml-1 text-left">
                    <h3 className="font-semibold text-lg">Life at Swiggy</h3>
                    <ul className="space-y-2 text-m">
                        <li><Link to="sss" className='text-black'>Explore with Swiggy</Link></li>
                        <li><Link to="sss" className='text-black'>Swiggy News</Link></li>
                        <li><Link to="sss" className='text-black'>Snackables</Link></li>
                    </ul>

                    <h3 className="font-semibold text-lg mt-5 text-left">Social Links</h3>
                    <div className="flex space-x-4">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition duration-300 ease-in-out">
                            <FaLinkedinIn size={24} />

                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-500 transition duration-300 ease-in-out">
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition duration-300 ease-in-out">
                            <FaFacebook size={24} />
                        </a>
                        <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-700 transition duration-300 ease-in-out">
                            <FaPinterest size={24} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 transition duration-300 ease-in-out">
                            <FaTwitter size={24} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-600 my-4"></div>
            <div className="max-w-screen-xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-m">
                <span>For better experience, download the Swiggy app now</span>
                <img src={`${process.env.PUBLIC_URL}/images/AppStore.avif`} alt="App Store icon" />
                <img src={`${process.env.PUBLIC_URL}/images/GooglePlay.avif`} alt="Google Play icon" />
            </div>
        </footer>
    );
}