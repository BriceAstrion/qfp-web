import React from "react";
import innovation from "../assets/who.png";
import { Link } from "react-router-dom";
import material from "../assets/sus-mat.png";
import reduction from "../assets/reduction.png";
import production from "../assets/production.png";

const Card = ({ title, text, link, image, isLastColumn }) => {
    return (
        <div
            className={`bg-white p-5 hover:shadow-lg transition-shadow duration-200 border-gray-300 ${
                isLastColumn ? "" : "border-r"
            }`}
        >
            <Link to={link} className="block">
            <img
                src={image}
                alt={title}
                className="rounded-lg w-full h-40 object-cover mb-4"
                />
            </Link>
            <h3 className="font-bold text-lg text-gray-800">{title}</h3>
            <p className="text-gray-700 text-sm mt-2 mb-4">{text}</p>
            <Link
                to={link}
                className="text-blue-500 hover:underline font-medium"
            >
                Read more
            </Link>
        </div>
    );
};

const cardData = [
    {
        title: "Sustainable materials",
        text: "We take a “circular economy” approach to the materials we use, and collaborate with other companies and " +
            "institutes to make our packaging more sustainable.",
        link: "/about/innovation/focus-areas/sustainable-materials",
        image: material,
    },
    {
        title: "Reducing waste",
        text: "On the way towards addressing a vital Sustainable Development Goal, we are working on reducing " +
            "inefficiency and fighting food waste across the food value chain.",
        link: "/about/innovation/focus-areas/reducing-waste",
        image: reduction,
    },
    {
        title: "Food production",
        text: "By producing food in a responsible, sustainable, and innovative way, we can move towards UN’s second " +
            "Sustainable Development Goal of zero hunger by 2030.",
        link: "/about/innovation/focus-areas/food-production",
        image: production,
    },
];

const FocusAreas = () => {
    return (
        <div className="min-h-screen bg-gray-100">
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
                    <h1 className="text-3xl font-bold">Focus Areas</h1>
                    <p className="mt-6 text-md leading-relaxed">
                        As an active, open-minded participant in the innovation ecosystem, we work to catalyze change
                        and help convert bright ideas and technologies into real-world resources. We focus on areas
                        where we can make a meaningful difference in food preservation and sustainability in the food
                        packaging industry.
                    </p>
                </div>
            </div>

            {/* Description Section */}
            <div className="ml-40 px-10 py-10 text-left">
                <h2 className="text-3xl font-bold text-black mb-4">
                    Tomorrow’s challenges demand innovative food preservation solutions today!
                </h2>
                <p className="text-gray-600 max-w-3xl mb-6">
                    The global challenges we face today raise critical questions about how we produce and consume food.
                    How do we ensure food security while reducing the high levels of waste we see today? How can we
                    improve shelf life while ensuring that food remains fresh, safe, and free from harmful chemicals? As
                    the need for sustainable solutions becomes clearer, we focus on advancing food preservation
                    technologies that extend the shelf life of both hard and soft foods, reducing food waste and
                    promoting sustainability.<br /><br />
                    At Quantum Food Preservation, we’re committed to building a collaborative innovation ecosystem. By
                    working together with collaborators from the worlds of technology, start-ups, academia, and more, we
                    are developing sustainable packaging solutions that make food safer and longer-lasting, without
                    harming the environment.
                </p>
            </div>

            {/* Protecting Food and Cards Section */}
            <div className="ml-40 px-10 py-10 text-left bg-gray-50 mb-10 mr-40">
                <h1 className="text-3xl font-bold">Preserve Quality, Reduce Waste, Protect the Planet</h1>
                <p className="mt-4 text-md leading-relaxed">
                    At Quantum Food Preservation, we are dedicated to extending the shelf life of both hard and soft
                    foods through innovative, sustainable coating solutions. Our goal is to ensure food stays fresh,
                    safe, and free from harmful chemicals for longer periods, reducing food waste across the globe.
                    We believe that by focusing on the development of eco-friendly food preservation technologies, we
                    can make a meaningful impact on the environment, the food industry, and the communities that rely on
                    sustainable practices.
                </p>

                {/* Cards Section */}
                <div className="flex justify-center items-center px-10 mt-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-xl">
                        {cardData.map((card, index) => (
                            <Card key={index} {...card} />
                        ))}
                    </div>
                </div>
            </div>


            {/* Footer Space */}
            <div className="py-2"></div>
        </div>
    );
};

export default FocusAreas;