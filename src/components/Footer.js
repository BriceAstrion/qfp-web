import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/New logo b.png";
import linkedin from "../assets/linkedin.png";
import fb from "../assets/fb.png";
import insta from "../assets/insta.png";

const Footer = () => {
    return (
        <footer className="bg-white text-gray-700 py-8 px-4 md:px-12">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Left Section: Logo and Tagline */}
                <div className="flex flex-col items-center mb-6 md:mb-0">
                    <Link to="/">
                        <img
                            src={logo}
                            alt="Company Logo"
                            className="h-36 mb-0"
                        />
                    </Link>
                    <p className="text-lg font-semibold text-center text-green-600">
                        Preserving Freshness, Naturally!
                    </p>
                </div>

                {/* Center Section: Links */}
                <div className="flex flex-wrap justify-center md:justify-start space-x-6 mb-4 md:mb-0">
                    <a href="/contact-us" className="text-bgMain text-md fond-bold hover:text-green]
                    hover:underline">
                        Contact Us
                    </a>
                    <a href="#group"
                       className="text-bgMain text-md fond-bold hover:primaryHover hover:underline">
                        Our Group
                    </a>
                    <a href="#privacy"
                       className="text-bgMain text-md fond-bold hover:primaryHover hover:underline">
                        Privacy Policy
                    </a>
                    <a href="#conduct"
                       className="text-bgMain text-md fond-bold hover:primaryHover hover:underline">
                        Code of Conduct
                    </a>
                    <a href="#cookie"
                       className="text-bgMain text-md fond-bold hover:primaryHover hover:underline">
                        Cookie Policy
                    </a>
                </div>

                {/* Right Section: Social Media Icons */}
                <div className="flex space-x-6">
                    <a href="https://www.linkedin.com/company/quantum-food-preservation/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_companies%3Bq178xmz8Qj6ghgKyZmGS%2FQ%3D%3D"
                       target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="LinkedIn" className="h-8 w-8 hover:opacity-75"/>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61569902566733" target="_blank" rel="noopener noreferrer">
                        <img src={fb} alt="Facebook" className="h-8 w-8 hover:opacity-75"/>
                    </a>
                    <a href="https://www.instagram.com/quantumfoodpreservation" target="_blank"
                       rel="noopener noreferrer">
                        <img src={insta} alt="Instagram" className="h-8 w-8 hover:opacity-75"/>
                    </a>
                </div>
            </div>

            {/* Bottom Section: Copyright and Go to Top */}
            <div className="text-center mt-6">
                <p className="text-sm mb-4 text-green-600">
                    <strong>
                        © {new Date().getFullYear()} Quantum Food Preservation | All Rights Reserved | Accessibility
                    </strong>
                </p>
                <a href="#top" className="text-green-600 font-bold hover:underline">
                    Go to Top ↑
                </a>
            </div>
        </footer>
    );
};

export default Footer;