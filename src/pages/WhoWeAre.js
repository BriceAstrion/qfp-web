import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import who from "../assets/who.png";
import purpose from "../assets/purpose.png";
import company from "../assets/company.png";
import facts from "../assets/facts.png";
import leadership from "../assets/leadership.png";
import newsletterBackground from "../assets/img_2.png";
import countries from "../data/countries.json";

const Card = ({ title, text, link, image, isLast }) => {
    return (
        <div
            className={`bg-white p-5 hover:shadow-lg transition-shadow duration-200 ${
                isLast ? "" : "border-r border-gray-300"
            }`}
        >
            <Link to={link}>
                <img
                    src={image}
                    alt={title}
                    className="rounded-t-lg w-full h-40 object-cover mb-4"
                />
            </Link>
            <h3 className="font-bold text-lg text-sdMain mb-2">{title}</h3>
            <p className="text-gray-700 mb-4">{text}</p>
            <Link to={link} className="text-blue-500 hover:underline">
                Learn more
            </Link>
        </div>
    );
};

const cardData = [
    {
        title: "Our purpose",
        text: "Discover our purpose.",
        link: "/about/who-we-are/purpose",
        image: purpose,
    },
    {
        title: "Our company",
        text: "Learn more about us.",
        link: "/about/who-we-are/company",
        image: company,
    },
    {
        title: "Facts & Figures",
        text: "Explore our key facts.",
        link: "/about/who-we-are/facts",
        image: facts,
    },
    {
        title: "Our leadership",
        text: "Meet our leadership team.",
        link: "/about/who-we-are/leadership",
        image: leadership,
    },
];

const Who = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [formData, setFormData] = useState({ email: "", firstName: "", lastName: "", country: "", updates: false });

    useEffect(() => {
        Modal.setAppElement('body');
    }, []);

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        closeModal();
    };

    return (
        <div className="min-h-screen bg-bgMain">
            {/* Hero Section */}
            <div
                className="relative p-10 text-white rounded-lg shadow-lg overflow-hidden h-[400px] flex items-center"
                style={{
                    backgroundImage: `url(${who})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="absolute left-40 p-8 rounded-lg max-w-xl">
                    <h1 className="text-3xl font-bold">Who We Are</h1>
                </div>
            </div>

            {/* Description Section */}
            <div className="ml-40 px-10 py-10 text-left">
                <h2 className="text-3xl font-bold text-sdMain mb-4">
                    Quantum Food Preservation:{" "}
                    <span className="text-sdMain">Preserving the Taste <br/> of Tomorrow,
                        Enhancing Nature’s Freshness!</span>
                </h2>
                <p className="text-textSecondary max-w-3xl mb-6">
                    At Quantum Food Preservation, we are passionate about revolutionizing the way food is stored and
                    preserved. Our innovative technology harnesses the principles of quantum science to extend the shelf
                    life of perishable foods, ensuring that freshness and flavour are never compromised. Committed to
                    sustainability and health, we strive to minimize food waste while maximizing nutritional quality,
                    empowering individuals and communities to make smarter food choices. Join us on a journey to protect
                    what’s good for our plates and our planet.
                </p>
            </div>

            {/* Cards Section */}
            <div className="ml-48 text-left text-textSecondary text-3xl font-bold mb-4">Get To Know Us!</div>
            <div className="flex justify-center items-center px-10">
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-screen-xl border-r border-gray-300">
                    {cardData.map((card, index) => (
                        <Card key={index} {...card} isLast={index === cardData.length - 1}/>
                    ))}
                </div>
            </div>

            <div className="flex justify-center items-center px-10 mt-8 mb-8">
                <div
                    className="relative bg-cover bg-center w-full max-w-screen-xl h-[400px] overflow-hidden shadow-lg"
                    style={{
                        backgroundImage: `url(${newsletterBackground})`,
                    }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-transparent"></div>

                    {/* Text Content */}
                    <div className="absolute right-[10%] top-1/2 transform -translate-y-1/2 text-right">
                        <h2 className="text-3xl text-white font-bold mb-4 leading-tight">
                            Interested in more?
                        </h2>
                        <p className="text-sm text-white mb-6 leading-relaxed max-w-[300px]">
                            Get the latest food packaging, processing,
                            and distribution news, trends, and commentary with our newsletter.
                        </p>
                        <button
                            onClick={openModal}
                            className="bg-blue-500 text-white font-semibold px-6 py-3 rounded hover:bg-blue-700 transition"
                        >
                            Sign up
                        </button>
                        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal" overlayClassName="overlay">
                            <h2>Sign up for more information</h2>
                            <form onSubmit={handleSubmit}>
                                {/* Form Fields */}
                                <input type="email" name="email" required onChange={handleInputChange}/>
                                <input type="text" name="firstName" required onChange={handleInputChange}/>
                                <input type="text" name="lastName" required onChange={handleInputChange}/>
                                <select name="country" required onChange={handleInputChange}>
                                    <option value="">Choose your Country</option>
                                    {countries.map(({cca3, name}) => (
                                        <option key={cca3} value={name.common}>{name.common}</option>
                                    ))}
                                </select>
                                <button type="submit">Submit</button>
                            </form>
                            <button onClick={closeModal}>Close</button>
                        </Modal>
                    </div>
                </div>
            </div>

            {/* Footer Space */}
            <div className="py-2"></div>
        </div>
    );
};

export default Who;