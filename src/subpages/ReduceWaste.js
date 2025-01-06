import React from "react";
import reduction from "../assets/reduction.png";
import {Link} from "react-router-dom";
import amount from "../assets/amount.png";
import cost from "../assets/cost.png";
import globe from "../assets/globe.png";
import material from "../assets/sus-mat.png";
import production from "../assets/production.png";

const Card = ({ title, text, link, image, isLastColumn }) => {
    return (
        <div
            className={`bg-white p-5 hover:shadow-lg transition-shadow duration-200 border-gray-300 ${
                isLastColumn ? "" : "border-r"
            } rounded-lg`}
        >
            <Link to={link} className="block">
                {/* Image */}
                <div className="w-full h-40 overflow-hidden rounded-t-lg mb-4">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </div>
            </Link>
            {/* Title Under Image */}
            <h3 className="font-bold text-xl text-gray-800 mb-2">{title}</h3>
            {/* Description */}
            <p className="text-gray-700 text-sm mb-4">{text}</p>
            {/* Learn More Link as a Button */}
            <Link
                to={link}
                className="inline-block text-blue-500 border border-blue-500 rounded px-4 py-2 hover:bg-blue-100 transition duration-200"
            >
                Learn more
            </Link>
        </div>
    );
};

const Card2 = ({ title, text, link, image, isLastColumn }) => {
    return (
        <div
            className={`bg-white p-5 hover:shadow-lg transition-shadow duration-200 border-gray-300 ${
                isLastColumn ? "" : "border-r"
            }`}
        >
            <Link to={link} className="block">
                {/* Image */}
                <div className="w-full h-40 overflow-hidden rounded-t-lg">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </div>
            </Link>
            {/* Title Under Image */}
            <h3 className="font-bold text-lg text-gray-800 mt-4">{title}</h3>
            {/* Description */}
            <p className="text-gray-700 text-sm mt-2 mb-4">{text}</p>
        </div>
    );
};

const card = [
    {
        title: "Increase the amount of food available for human consumption",
        text: "One benefit to fighting food waste is that reducing waste makes more food available for human consumption," +
            " which is vital in a world where food insecurity is a real threat for many people around the world.",
        image: amount,
    },
    {
        title: "Deliver cost savings to food producers and consumers",
        text: "In food production, technical inefficiencies and malfunctions cause a large portion of the waste4 – food " +
            "is perishable and unscheduled shutdowns can leave this food stranded at key moments in the production cycle." +
            " Pluse, changeovers between different products often lead to food loss while equipment is shut down, cleaned, " +
            "and restarted.",
        image: cost,
    },
    {
        title: "Lower the environmental and climate impact of food production",
        text: "By protecting food throughout the value chain, we can turn by-products into added-value ingredients, " +
            "increasing efficiencies, reducing food waste and making the most of raw materials.",
        image: globe,
    }
];

const cardData = [
    {
        title: "Sustainable materials",
        text: "We take a “circular economy” approach to the materials we use, and collaborate with other companies and " +
            "institutes to make our packaging more sustainable.",
        link: "/about/innovation/focus-areas/sustainable-materials",
        image: material,
    },
    {
        title: "Food production",
        text: "By producing food in a responsible, sustainable, and innovative way, we can move towards UN’s second " +
            "Sustainable Development Goal of zero hunger by 2030.",
        link: "/about/innovation/focus-areas/food-production",
        image: production,
    },
];

const ReduceWaste = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Hero Section */}
            <div
                className="relative p-10 text-white rounded-lg shadow-lg overflow-hidden h-[400px] flex items-center"
                style={{
                    backgroundImage: `url(${reduction})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="absolute left-40 p-8 rounded-lg max-w-xl">
                    <h1 className="text-3xl font-bold">Reduce Waste</h1>
                    <p className="mt-6 text-md leading-relaxed"> Reducing waste and inefficiency in the food value chain
                        means doing our part to reduce loss and waste happening in between agriculture and
                        distribution.</p>
                </div>
            </div>

            {/* Description Section */}
            <div className="ml-40 px-10 py-10 text-left mr-40">
                <h2 className="text-3xl font-bold text-black mb-6 leading-tight">
                    Understanding the challenge: The environmental <br/> and social impact of food loss
                </h2>
                <p className="text-gray-800 text-sm mb-4 leading-relaxed">
                    Waste and loss are prevalent throughout the food industry. One third of all food is lost or wasted,<br/>
                    and the waste is spread throughout the entire value chain – from agriculture and rearing, through<br/>
                    production, transportation, storage, and in the kitchens of final consumers.
                </p>

                <p className="text-gray-800 text-sm mb-4 leading-relaxed">
                    Sustainable Development Target 12.3 aims to “halve per capita global food waste at the retail and<br/>
                    consumer levels and reduce food losses along production and supply chains.” As an estimated 14% of<br/>
                    the world’s food is lost in production before it reaches the retailer, reaching this target would<br/>
                    lead to a significant amount of nutrition staying in the food production cycle.
                </p>

                <p className="text-gray-800 text-sm mb-4 leading-relaxed">
                    Addressing this target would contribute to several dimensions of the 2030 Agenda, such as reducing<br/>
                    food insecurity and hunger, improving freshwater availability, addressing climate change, and<br/>
                    protecting ecosystem sustainability.
                </p>

                <p className="text-gray-800 text-sm mb-4 leading-relaxed">
                    For Roberto Franchitti, Executive Vice President for Services, addressing this goal is vital for<br/>
                    several reasons. “Waste reduction is a moral imperative,” he says, “especially when it comes to food<br/>
                    loss. Wasting or losing food ultimately contributes to food shortages, so everyone in the industry<br/>
                    has an obligation to play a part.”
                </p>

                <p className="text-gray-800 text-sm mb-4 leading-relaxed">
                    He also emphasizes the fact that reducing inefficiency and waste almost always brings business<br/>
                    benefits as well. “I can’t think of any examples that we’ve been involved in, where there hasn’t<br/>
                    been a business case for investing in efficiency and waste reduction,” he concludes.
                </p>
            </div>

            <div className="ml-40 px-10 py-10 text-left bg-gray-50 mb-10 mr-40">
                <h1 className="text-xl font-bold">Triple benefit to fighting food waste</h1>
                {/* Cards Section */}
                <div className="flex justify-center items-center px-10 mt-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-xl">
                        {card.map((card, index) => (
                            <Card2 key={index} {...card} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Protecting Food and Cards Section */}
            <div className="ml-40 px-10 py-10 text-left bg-gray-50 mb-10 mr-40">
                <h1 className="text-xl font-bold">Explore other focus areas</h1>
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
            <div className="py-6"></div>
        </div>
    );
};

export default ReduceWaste;