import React, { useState } from 'react';
import business from "../assets/business.png";
import countriesData from '../data/countries.json';
import {parsePhoneNumber} from "libphonenumber-js";

const ContactSales = () => {
    const [step, setStep] = useState(1); // Current step state
    const [purpose, setPurpose] = useState('');
    const [businessInterest, setBusinessInterest] = useState([]);
    const [specificInterest, setSpecificInterest] = useState('');
    const [requestDescription, setRequestDescription] = useState('');
    const [role, setRole] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [countryCode, setCountryCode] = useState('');
    const [city, setCity] = useState('');
    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');
    const [functionType, setFunctionType] = useState('');
    const [updates, setUpdates] = useState(false);
    const [message, setMessage] = useState('');
    const [privacyPolicyChecked, setPrivacyPolicyChecked] = useState(false);
    const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');


    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const handleNext = () => {
        if (step === 1 && purpose && businessInterest.length > 0) {
            setStep(2);
        } else if (step === 2 && specificInterest) {
            setStep(3);
        } else if (step === 3 && requestDescription && role) {
            setStep(4);
        }
    };

    const handlePrevious = () => {
        if (step === 2) {
            setStep(1);
        } else if (step === 3) {
            setStep(2);
        } else if (step === 4) {
            setStep(3);
        }
    };

    const handleCheckboxChange = (e) => {
        const value = e.target.value;
        setBusinessInterest((prev) =>
            prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
        );
    };

    const handlePurposeChange = (e) => {
        setPurpose(e.target.value);
    };

    const handleSpecificInterestChange = (e) => {
        setSpecificInterest(e.target.value);
    };

    const handleRequestDescriptionChange = (e) => {
        setRequestDescription(e.target.value);
    };

    const handleRoleChange = (e) => {
        setRole(e.target.value);
    };
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleCountryCodeChange = (e) => {
        const selectedCountryCode = e.target.value;
        setCountryCode(selectedCountryCode);
    };

    const handlePhoneNumberChange = (e) => {
        const value = e.target.value;
        setPhoneNumber(value);

        if (countryCode) {
            try {
                // Parse the phone number with the selected country code
                const phone = parsePhoneNumber(value, countryCode);
                if (!phone.isValid()) {
                    setIsValidPhoneNumber(false);
                    setErrorMessage('Invalid phone number for the selected country');
                } else {
                    setIsValidPhoneNumber(true);
                    setErrorMessage('');
                }
            } catch (error) {
                setIsValidPhoneNumber(false);
                setErrorMessage('Invalid phone number format');
            }
        }
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);

        if (!emailRegex.test(event.target.value)) {
            setEmailError("Please enter a valid email address.");
        } else {
            setEmailError("");
        }
    };

    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!emailRegex.test(email)) {
            setEmailError("Please enter a valid email address.");
            return;
        }

        if (!privacyPolicyChecked) {
            alert('You must agree to the privacy policy to submit the form.');
            return;
        }

        if (!isValidPhoneNumber || !countryCode || !phoneNumber) {
            alert('Please enter a valid phone number with the correct country code.');
            return;
        }

        if (email && firstName && lastName && phoneNumber && city && countryCode && company && position && functionType) {
            alert('Form submitted successfully');
            console.log("Form Submitted");
        }
    };


    return (
        <div>
            {/* Hero Section */}
            <div
                className="relative p-10 text-white rounded-lg shadow-lg overflow-hidden h-[485px] flex items-center
                justify-center"
                style={{
                    backgroundImage: `url(${business})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="absolute left-16 sm:left-32 p-8 rounded-lg max-w-lg sm:max-w-xl bg-opacity-80 bg-bgMain">
                    <h4 className="text-3xl text-sdMain font-bold">How can we help you?</h4>
                    <p className="mt-2 text-md leading-relaxed">
                        We are happy to answer your questions – please feel free to reach out!
                    </p>
                </div>
            </div>

            <div className="flex flex-col min-h-screen bg-bgMain p-8">
                <div className="flex bg-white p-6 rounded-lg shadow-md w-full">
                    {/* Left Column - Title, Image, and Summary */}
                    <div className="w-1/2 pr-6 flex flex-col items-start">
                        <h1 className="text-3xl text-bgMain font-bold mb-4">Get in Touch with Us!</h1>
                        {step === 1 ? (
                            <>
                                <div className="flex items-center mb-4">
                                    <img src={business} alt="Business Image" className="w-50 h-32 object-cover mr-4"/>
                                    <p className="text-sm leading-relaxed text-gray-600">
                                        Do you have questions about our solutions and products or need expert advice?
                                        Our friendly team is here to help! Just fill out the form, and we’ll reply soon.
                                    </p>
                                </div>
                            </>
                        ) : step === 2 ? (
                            <>
                                <h1 className="text-lg font-bold text-sdMain mb-2">Summary</h1>
                                <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                                    <div>Purpose of contact</div>
                                    <div className="font-semibold">{purpose}</div>
                                    <div>Business area of interest</div>
                                    <div className="font-semibold">{businessInterest.join(', ')}</div>
                                </div>
                            </>
                        ) : step === 3 ? (
                            <>
                                <h1 className="text-lg font-bold text-sdMain mb-2">Summary</h1>
                                <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                                    <div>Purpose of contact</div>
                                    <div className="font-semibold">{purpose}</div>
                                    <div>Business area of interest</div>
                                    <div className="font-semibold">{businessInterest.join(', ')}</div>
                                    <div>Specific area of interest</div>
                                    <div className="font-semibold">{specificInterest}</div>
                                </div>
                            </>
                        ) : (
                            <>
                                <h1 className="text-lg font-bold text-sdMain mb-2">Summary</h1>
                                <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                                    <div>Purpose of contact</div>
                                    <div className="font-semibold">{purpose}</div>
                                    <div>Business area of interest</div>
                                    <div className="font-semibold">{businessInterest.join(', ')}</div>
                                    <div>Specific area of interest</div>
                                    <div className="font-semibold">{specificInterest}</div>
                                    <div>Request description</div>
                                    <div className="font-semibold">{requestDescription}</div>
                                    <div>Message</div> <div className="font-semibold">{message}</div>
                                    <div>Role</div> <div className="font-semibold">{role}</div>
                                </div>
                            </>
                        )}
                    </div>

                    {/* Transversal Line */}
                    <div className="border-r border-gray-300"></div>

                    {/* Right Column - Form Inputs */}
                    <div className="w-1/2 pl-6">
                        <div className="relative w-full bg-gray-200 h-1 mt-4 mb-6">
                            <div
                                className="absolute top-0 left-0 bg-gradient-to-r from-blue-700 to-blue-800 h-2
        rounded-full transition-all duration-500"
                                style={{width: `${(step - 1) / 2 * 67}%`}}
                            ></div>

                            {/* Step Markers */}
                            <div className="absolute top-[-10px] flex justify-between w-full px-4">
                                <div className="relative text-center">
                                    <div
                                        className={`w-6 h-6 rounded-full flex items-center justify-center ${
                                            step >= 1 ? 'bg-blue-800' : 'bg-gray-300'
                                        }`}
                                    >
                                        <span className="text-white text-xs">1</span>
                                    </div>
                                </div>

                                <div className="relative text-center">
                                    <div
                                        className={`w-6 h-6 rounded-full flex items-center justify-center ${
                                            step >= 3 ? 'bg-blue-800' : 'bg-gray-300'
                                        }`}
                                    >
                                        <span className="text-white text-xs">2</span>
                                    </div>
                                </div>

                                <div className="relative text-center">
                                    <div
                                        className={`w-6 h-6 rounded-full flex items-center justify-center ${
                                            step === 4 ? 'bg-blue-800' : 'bg-gray-300'
                                        }`}
                                    >
                                        <span className="text-white text-xs">3</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {step === 1 && (
                            <>
                                <div className="mb-4">
                                    <h2 className="text-lg font-semibold">Purpose of Contact</h2>
                                    <div className="mt-4 mb-4">
                                        <label className="flex items-center text-sm mt-3 mb-3">
                                            <input
                                                type="radio"
                                                name="purpose"
                                                value="Request a quote"
                                                checked={purpose === "Request a quote"}
                                                onChange={handlePurposeChange}
                                                className="mr-2"
                                            />
                                            Request a quote
                                        </label>
                                        <label className="flex items-center text-sm mt-3 mb-3">
                                            <input
                                                type="radio"
                                                name="purpose"
                                                value="Request for product information"
                                                checked={purpose === "Request for product information"}
                                                onChange={handlePurposeChange}
                                                className="mr-2"
                                            />
                                            Request for product information
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-lg font-semibold">Business Area of Interest</h2>
                                    <div className="mt-4 mb-4">
                                        <label className="flex items-center text-sm mt-4 mb-4">
                                            <input
                                                type="checkbox"
                                                value="Packaging"
                                                checked={businessInterest.includes("Packaging")}
                                                onChange={handleCheckboxChange}
                                                className="mr-2"
                                            />
                                            Packaging
                                        </label>
                                        <label className="flex items-center text-sm mt-4 mb-4">
                                            <input
                                                type="checkbox"
                                                value="Processing"
                                                checked={businessInterest.includes("Processing")}
                                                onChange={handleCheckboxChange}
                                                className="mr-2"
                                            />
                                            Processing
                                        </label>
                                        <label className="flex items-center text-sm mt-4 mb-4">
                                            <input
                                                type="checkbox"
                                                value="Services"
                                                checked={businessInterest.includes("Services")}
                                                onChange={handleCheckboxChange}
                                                className="mr-2"
                                            />
                                            Services
                                        </label>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    onClick={handleNext}
                                    className={`mt-4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600
                                     transition ${!(purpose && businessInterest.length > 0) && 'cursor-not-allowed opacity-50'}`}
                                    disabled={!(purpose && businessInterest.length > 0)}
                                >
                                    Next &gt;
                                </button>
                            </>
                        )}

                        {step === 2 && (
                            <>
                                <h2 className="text-lg font-semibold">Specific Area of Interest</h2>
                                <div className="mt-4 mb-4">
                                    {['Automation', 'Consumables (e.g. adhesives, lubricant, membranes)',
                                        'Expert Services (Consultancy)', 'Installation', 'Maintenance', 'Parts',
                                        'Plant Components (e.g. pumps and valves)', 'Services Agreements', 'Training',
                                        'Upgrades for Equipment and Machines', 'Other'].map((interest) => (
                                        <label key={interest} className="flex items-center text-sm mt-3 mb-3">
                                            <input
                                                type="radio"
                                                name="specificInterest"
                                                value={interest}
                                                checked={specificInterest === interest}
                                                onChange={handleSpecificInterestChange}
                                                className="mr-2"
                                            />
                                            {interest}
                                        </label>
                                    ))}
                                </div>
                                <div className="flex justify-between mt-4">
                                    <button onClick={handlePrevious} className="py-2 px-4 bg-gray-300 rounded-md">
                                        Previous
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleNext}
                                        className={`py-2 px-4 bg-blue-500 text-white rounded-md 
                                        hover:bg-blue-600 transition ${!specificInterest &&
                                        'cursor-not-allowed opacity-50'}`}
                                        disabled={!specificInterest}
                                    >
                                        Next &gt;
                                    </button>
                                </div>
                            </>
                        )}

                        {step === 3 && (
                            <>
                                <h2 className="text-lg font-semibold">What describes your request the best?</h2>
                                <div className="mt-4">
                                    <label className="flex items-center mt-3 mb-3">
                                        <input
                                            type="radio"
                                            name="requestDescription"
                                            value="I have a project in development with budget assigned"
                                            onChange={handleRequestDescriptionChange}
                                            className="mr-2"
                                        />
                                        I have a project in development with budget assigned
                                    </label>
                                    <label className="flex items-center mt-3 mb-3">
                                        <input
                                            type="radio"
                                            name="requestDescription"
                                            value="I'm looking for new alternatives or a solution provider"
                                            onChange={handleRequestDescriptionChange}
                                            className="mr-2"
                                        />
                                        I'm looking for new alternatives or a solution provider
                                    </label>
                                </div>

                                <div className="mt-4">
                                    <label className="block text-sm">Your Role</label>
                                    <select className="mt-2 border rounded-md p-2 w-1/2" value={role}
                                            onChange={handleRoleChange}>
                                        <option value="">Choose one option</option>
                                        <option value="Manager">Manager</option>
                                        <option value="Engineer">Engineer</option>
                                        <option value="Executive">Executive</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div className="mt-4">
                                    <label className="text-sm">Message</label>
                                    <textarea
                                        className="mt-2 border rounded-md p-2 w-full h-75"
                                        placeholder="How we can help you?"
                                        value={message}
                                        onChange={handleMessageChange}
                                    />
                                </div>

                                <div className="flex justify-between mt-4">
                                    <button onClick={handlePrevious} className="py-2 px-4 bg-gray-300 rounded-md">
                                        Previous
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleNext}
                                        className={`py-2 px-4 bg-blue-500 text-white rounded-md 
                                        hover:bg-blue-600 transition ${!(requestDescription && role && message)
                                        && 'cursor-not-allowed opacity-50'}`}
                                        disabled={!(requestDescription && role && message)}
                                    >
                                        Next &gt;
                                    </button>
                                </div>
                            </>
                        )}

                        {step === 4 && (
                            <>
                                <h2 className="text-lg font-semibold">Company Information</h2>
                                <div className="mt-4">
                                    <label className="block text-sm text-gray-600">Work e-mail</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={handleEmailChange}
                                        className="mt-2 border text-sm rounded-md p-2 w-full"
                                        placeholder="example@company.com"
                                    />
                                    {emailError && <span className="text-red-600 text-sm">{emailError}</span>}
                                </div>

                                <div className="mt-4">
                                    <label className="block text-sm text-gray-600">First Name</label>
                                    <input
                                        type="text"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        className="mt-2 border text-sm rounded-md p-2 w-full"
                                        placeholder="First Name"
                                    />
                                </div>

                                <div className="mt-4">
                                    <label className="block text-sm text-gray-600">Last Name</label>
                                    <input
                                        type="text"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        className="mt-2 border text-sm rounded-md p-2 w-full"
                                        placeholder="Last Name"
                                    />
                                </div>

                                <div className="mt-4">
                                    <label className="block text-sm text-gray-600">Phone Number</label>
                                    <input
                                        type="text"
                                        value={phoneNumber}
                                        onChange={handlePhoneNumberChange}
                                        className="mt-2 border text-sm rounded-md p-2 w-full"
                                        placeholder="Enter phone number"
                                    />
                                    {!isValidPhoneNumber && <span className="text-red-600 text-sm">{errorMessage}</span>}
                                </div>

                                <div className="mt-4">
                                    <label className="block text-sm text-gray-600">City of Workplace</label>
                                    <input
                                        type="text"
                                        value={city}
                                        onChange={handleCityChange}
                                        className="mt-2 border text-sm rounded-md p-2 w-full"
                                        placeholder="City"
                                    />
                                </div>

                                <div className="mt-4">
                                    <label className="block text-sm text-gray-600">Country</label>
                                    <select
                                        value={countryCode}
                                        onChange={handleCountryCodeChange}
                                        className="mt-2 border text-sm rounded-md p-2 w-full"
                                    >
                                        <option value="">Select Country</option>
                                        {countriesData.map((country) => (
                                            <option key={country.cca3} value={country.cca3}>
                                                {country.name.common}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="mt-4">
                                    <label className="block text-sm text-gray-600">Company</label>
                                    <input
                                        type="text"
                                        value={company}
                                        onChange={(e) => setCompany(e.target.value)}
                                        className="mt-2 border text-sm rounded-md p-2 w-full"
                                        placeholder="Company Name"
                                    />
                                </div>

                                <div className="mt-4">
                                    <label className="block text-sm text-gray-600">Position</label>
                                    <select
                                        value={position}
                                        onChange={(e) => setPosition(e.target.value)}
                                        className="mt-2 border text-sm rounded-md p-2 w-full"
                                    >
                                        <option value="">Choose one option</option>
                                        <option value="Manager">Manager</option>
                                        <option value="Engineer">Engineer</option>
                                        <option value="Executive">Executive</option>
                                    </select>
                                </div>

                                <div className="mt-4">
                                    <label className="block text-sm text-gray-600">Function</label>
                                    <select
                                        value={functionType}
                                        onChange={(e) => setFunctionType(e.target.value)}
                                        className="mt-2 border text-sm rounded-md p-2 w-full"
                                    >
                                        <option value="">Choose one option</option>
                                        <option value="Sales">Sales</option>
                                        <option value="Support">Support</option>
                                        <option value="Development">Development</option>
                                    </select>
                                </div>

                                <div className="mt-4 flex items-center text-sm text-gray-600">
                                    <input
                                        type="checkbox"
                                        checked={updates}
                                        onChange={() => setUpdates(!updates)}
                                        className="mr-2"
                                    />
                                    <label>Yes, I would like to receive regular updates from QFP.</label>
                                </div>

                                <div className="mt-4 flex items-center text-sm text-gray-600">
                                    <input
                                        type="checkbox"
                                        required
                                        checked={privacyPolicyChecked}
                                        onChange={() => setPrivacyPolicyChecked(!privacyPolicyChecked)}
                                        className="mr-2"
                                    />
                                    <label>By submitting this form, you confirm you have read and acknowledge QFP's privacy policy.</label>
                                </div>

                                <div className="flex justify-between mt-4">
                                    <button onClick={() => setStep(step - 1)} className="py-2 px-4 bg-gray-300 rounded-md">
                                        Previous
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleSubmit}
                                        className={`py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition ${!(email && firstName && lastName && phoneNumber && city && countryCode && company && position && functionType && updates && privacyPolicyChecked) && 'cursor-not-allowed opacity-50'}`}
                                        disabled={!(email && firstName && lastName && phoneNumber && city && countryCode && company && position && functionType && updates && privacyPolicyChecked)}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSales;