import React from "react";
import { Link } from "react-router-dom";
import innovation from "../assets/who.png";
import purpose from "../assets/purpose.png";
import company from "../assets/company.png";
import facts from "../assets/facts.png";
import leadership from "../assets/leadership.png";

const Card = ({ title, text, link, image, isLastColumn }) => {
    return (
        <div
            className={`bg-white p-5 hover:shadow-lg transition-shadow duration-200 border-gray-300 ${
                isLastColumn ? "" : "border-r"
            }`}
        >
            <Link to={link} className="block">
                {/* Image */}
                <img
                    src={image}
                    alt={title}
                    className="rounded-t-lg w-full h-40 object-cover"
                />
            </Link>
            {/* Title Under Image */}
            <h3 className="font-bold text-lg text-sdMain mt-4">{title}</h3>
            {/* Description */}
            <p className="text-gray-700 text-sm mt-2 mb-4">{text}</p>
            {/* Learn More Link */}
            <Link
                to={link}
                className="text-blue-500 hover:underline font-medium"
            >
                Learn more
            </Link>
        </div>
    );
};

const cardData = [
    {
        title: "Our innovation approach",
        text: "From our foundation to our present-day operations, innovation has always been fundamental to what we do" +
            " at Quantum Food Preservation and to creating a better future for all.",
        link: "/about/innovation/approach",
        image: purpose,
    },
    {
        title: "Focus areas",
        text: "To us, innovation in the packaging and food and beverage industries means focusing on the use of " +
            "sustainable materials, how we produce food, and reducing waste.",
        link: "/about/innovation/focus-areas",
        image: company,
    },
    {
        title: "A heritage of innovation",
        text: "A review of the most notable breakthroughs Quantum Food Preservation has gone through, including its " +
            "founding principles.",
        link: "/about/innovation/heritage",
        image: facts,
    },
    {
        title: "Innovation ecosystem",
        text: "We believe in open innovation and work with collaborators inside and outside of Quantum Food Preservation" +
            " to build a better future.",
        link: "/about/innovation/ecosystem",
        image: leadership,
    },
    {
        title: "Product innovation",
        text: "Dedicated to innovating with you and for you to build a more resilient and profitable future.",
        link: "/about/who-we-are/product",
        image: leadership,
    },
];

const Innovation = () => {
    return (
        <div className="min-h-screen bg-bgMain">
            {/* Hero Section */}
            <div
                className="relative p-10 text-white rounded-lg shadow-lg overflow-hidden h-[400px] flex items-center"
                style={{
                    backgroundImage: `url(${innovation})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="absolute left-40 p-8 rounded-lg max-w-xl">
                    <h1 className="text-3xl font-bold">Innovation</h1>
                    <p className="mt-6 text-md leading-relaxed"></p>
                </div>
            </div>

            {/* Description Section */}
            <div className="ml-40 px-10 py-10 text-left">
                <h2 className="text-3xl font-bold text-sdMain mb-4">
                    Tomorrow’s challenges demand innovation today!
                </h2>
                <p className="text-textSecondary max-w-3xl mb-6">
                    Innovation is fundamental to what we do at Quantum Food Preservation. After all, it's how it all
                    began. A package should always save more than it costs. That’s something that still holds true for
                    us today, as we work to keep our commitment to make food safe and available, everywhere.<br/><br/>
                    As a team of dedicated experts, open-minded collaborators and visionaries who share the philosophy
                    that innovation can create a better future for all, we’re tackling challenges in the food and
                    beverage industry every day – pushing the boundaries of what's possible, making a positive impact on
                    the world, and delivering on our promise to protect what's good: food, people, and the planet.
                </p>
            </div>

            {/* Cards Section */}
            <div className="ml-48 text-left text-textSecondary text-3xl font-bold mb-6">Curious about how we innovate?</div>
            <div className="flex justify-center items-center px-10">
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 w-full max-w-screen-xl border-t border-gray-300"
                >
                    {cardData.map((card, index) => (
                        <Card
                            key={index}
                            {...card}
                            isLastColumn={(index + 1) % 5 === 0}
                        />
                    ))}
                </div>
            </div>

            {/* Footer Space */}
            <div className="py-6"></div>
        </div>
    );
};

export default Innovation;