import React from 'react';
import footerStyle from "../../../styles/footer.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAnglesRight, faLocationDot, faPhone, faHeadset, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className={`${footerStyle.footerContainer}`}>
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:py-20 py-10">
                    <div className="lg:text-left md:text-left text-center">
                        <h1 className="text-3xl font-bold text-orange-500 tracking-wider mb-4">Logo Here</h1>
                        <p className="mt-4 text-gray-300">There are many variations of pass of Lorem Ipsum available, but the majority have suffered</p>
                        <p className="text-gray-300">There are many variations of pass of Lorem Ipsum available, but the majority have suffered</p>
                        <h1 className="text-xl font-bold text-white tracking-wider my-3">Follow Us</h1>
                        <div>
                            <a href="##" target="blank">
                                <FontAwesomeIcon icon={faFacebook} className="text-white h-6 w-6 inline mx-2 hover:text-orange-600 duration-300 hover:scale-110" />
                            </a>
                            <a href="##" target="blank">
                                <FontAwesomeIcon icon={faTwitter} className="text-white h-6 w-6 inline mx-2 hover:text-orange-600 duration-300 hover:scale-110" />
                            </a>
                            <a href="##" target="blank">
                                <FontAwesomeIcon icon={faInstagram} className="text-white h-6 w-6 inline mx-2 hover:text-orange-600 duration-300 hover:scale-110" />
                            </a>
                            <a href="##" target="blank">
                                <FontAwesomeIcon icon={faLinkedin} className="text-white h-6 w-6 inline mx-2 hover:text-orange-600 duration-300 hover:scale-110" />
                            </a>
                        </div>
                    </div>
                    <div className="lg:text-left md:text-left text-center text-white">
                        <h2 className="text-2xl font-bold text-white tracking-wider mb-6">Company</h2>
                        <ul>
                            <li>
                                <Link href="/">
                                    <a className="flex items-center mb-3 hover:text-orange-500 duration-300">
                                        <FontAwesomeIcon icon={faAnglesRight} className="w-4 h-4 mr-2" />
                                        <span>Investors</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a className="flex items-center mb-3 hover:text-orange-500 duration-300">
                                        <FontAwesomeIcon icon={faAnglesRight} className="w-4 h-4 mr-2" />
                                        <span>Partners</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a className="flex items-center mb-3 hover:text-orange-500 duration-300">
                                        <FontAwesomeIcon icon={faAnglesRight} className="w-4 h-4 mr-2" />
                                        <span>Contact</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a className="flex items-center mb-3 hover:text-orange-500 duration-300">
                                        <FontAwesomeIcon icon={faAnglesRight} className="w-4 h-4 mr-2" />
                                        <span>Complaints guide</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a className="flex items-center mb-3 hover:text-orange-500 duration-300">
                                        <FontAwesomeIcon icon={faAnglesRight} className="w-4 h-4 mr-2" />
                                        <span>Advisor</span>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:text-left md:text-left text-center text-white">
                        <h2 className="text-2xl font-bold text-white tracking-wider mb-6">Legals</h2>
                        <ul>
                            <li>
                                <Link href="/">
                                    <a className="flex items-center mb-3 hover:text-orange-500 duration-300">
                                        <FontAwesomeIcon icon={faAnglesRight} className="w-4 h-4 mr-2" />
                                        <span>Terms & Services</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a className="flex items-center mb-3 hover:text-orange-500 duration-300">
                                        <FontAwesomeIcon icon={faAnglesRight} className="w-4 h-4 mr-2" />
                                        <span>Disclaimer</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a className="flex items-center mb-3 hover:text-orange-500 duration-300">
                                        <FontAwesomeIcon icon={faAnglesRight} className="w-4 h-4 mr-2" />
                                        <span>Privacy policy</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a className="flex items-center mb-3 hover:text-orange-500 duration-300">
                                        <FontAwesomeIcon icon={faAnglesRight} className="w-4 h-4 mr-2" />
                                        <span>Road Map</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a className="flex items-center mb-3 hover:text-orange-500 duration-300">
                                        <FontAwesomeIcon icon={faAnglesRight} className="w-4 h-4 mr-2" />
                                        <span>Join Us</span>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:text-left md:text-left text-center text-white">
                        <h2 className="text-2xl font-bold text-white tracking-wider mb-6">Contact Info</h2>
                        <ul>
                            <li className="flex items-center mb-3 hover:text-orange-500 duration-300 cursor-pointer text-md">
                                <FontAwesomeIcon icon={faLocationDot} className="w-4 h-4 mr-2" />
                                <span>Level-5, House-7, Banani, Dhaka, Bangladesh</span>
                            </li>
                            <li className="flex items-center mb-3 hover:text-orange-500 duration-300 cursor-pointer">
                                <FontAwesomeIcon icon={faHeadset} className="w-4 h-4 mr-2" />
                                <span>09609122122</span>
                            </li>
                            <li className="flex items-center mb-3 hover:text-orange-500 duration-300 cursor-pointer">
                                <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2" />
                                <span>(+880)-1882449286</span>
                            </li>
                            <li className="flex items-center mb-3 hover:text-orange-500 duration-300 cursor-pointer">
                                <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 mr-2" />
                                <span>info@aamartaka.com</span>
                            </li>
                            <li>
                                <input className="py-2 px-4 rounded-l-md focus:outline-none border focus:border-orange-600 focus:shadow-2xl focus:shadow-gray-500 text-black" type="text" placeholder="Subscribe Newslater" />
                                <input className="py-2 px-4 rounded-r-md border border-white hover:border-[#0B0B47] hover:text-[#0B0B47] hover:bg-white duration-500" type="submit" value="Subscribe" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;