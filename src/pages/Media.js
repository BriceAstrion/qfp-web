import React from "react";
import { Link } from "react-router-dom";
import careers from "../assets/media.png";

const Media = () => {
    return (
        <div>
            {/* Hero Section */}
            <div
                className="relative p-10 text-white rounded-lg shadow-lg overflow-hidden h-[400px] flex items-center"
                style={{
                    backgroundImage: `url(${careers})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="absolute left-40 p-8 rounded-lg max-w-xl">
                    <h1 className="text-3xl font-bold">Careers</h1>
                    <p className="mt-6 text-md leading-relaxed">
                        Whether you're an experienced professional or just starting your career, your ideas are
                        welcomed here. Join us and make an impact to be proud of - for food, people, and the planet.
                    </p>
                </div>
            </div>

            {/* Quick Links Section */}
            <div className="py-12 bg-bgMain">
                <div className="container mx-auto px-8">
                    <h2 className="text-3xl font-bold text-textSecondary mb-6">Quick Links</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {/* Single Quick Link */}
                        <div className="p-4 shadow-sm">
                            <h3 className="text-lg font-semibold text-sdMain">
                                <Link to="/about/media/newsroom">Newsroom</Link>
                            </h3>
                            <p className="mt-2 text-sm text-textSecondary">
                                Browse through the latest news and announcements from Quantum Food Preservation.
                            </p>
                        </div>
                        <div className="p-4 shadow-sm">
                            <h3 className="text-lg font-semibold text-sdMain">
                                <Link to="/events">Events</Link>
                            </h3>
                            <p className="mt-2 text-sm text-textSecondary">
                                Check the upcoming events and webinars Quantum Food Preservation is hosting or
                                participating in as a speaker or partner.
                            </p>
                        </div>
                        <div className="p-4 shadow-sm">
                            <h3 className="text-lg font-semibold text-sdMain">
                                <Link to="/stories">Stories</Link>
                            </h3>
                            <p className="mt-2 text-sm text-textSecondary">
                                Explore our industry perspectives and discover the latest stories shaping the future of food.
                            </p>
                        </div>
                        <div className="p-4 shadow-sm">
                            <h3 className="text-lg font-semibold text-sdMain">
                                <Link to="/trademark-logotype">Trademark & Logotype</Link>
                            </h3>
                            <p className="mt-2 text-sm text-textSecondary">
                                A brief description of our logotypes and brand. Use approved artwork to reproduce our
                                logotypes and ensure correct brand names.
                            </p>
                        </div>
                        <div className="p-4 shadow-sm">
                            <h3 className="text-lg font-semibold text-sdMain">
                                <Link to="/webinars">Webinars</Link>
                            </h3>
                            <p className="mt-2 text-sm text-textSecondary">
                                Join our webinars to learn about food and preservation trends, product innovation, etc.
                            </p>
                        </div>
                        <div className="p-4 shadow-sm">
                            <h3 className="text-lg font-semibold text-sdMain">
                                <a href="/media" target="_blank" rel="noopener noreferrer">
                                    Media
                                </a>
                            </h3>
                            <p className="mt-2 text-sm text-textSecondary">
                                Find all our images in our external image archive.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Media;