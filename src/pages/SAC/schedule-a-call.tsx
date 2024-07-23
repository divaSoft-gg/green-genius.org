import Image from 'next/image';
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';

export default function CollectData() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        jobPosition: '',
        employees: '',
        industry: '',
        requestReason: '',
        consent: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handlePhoneChange = (value: string) => {
        setFormData(prevData => ({ ...prevData, phone: value }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prevData => ({ ...prevData, consent: e.target.checked }));
    };

    const isFormValid = () => {
        return (
            formData.firstName &&
            formData.lastName &&
            formData.email &&
            formData.phone &&
            formData.company &&
            formData.jobPosition &&
            formData.employees &&
            formData.industry &&
            formData.requestReason &&
            formData.consent
        );
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isFormValid()) {
            console.log(formData);
            // Perform form submission actions here
        } else {
            // Handle invalid form state here (e.g., show an error message)
            console.log('Form is invalid or not all fields are filled out.');
        }
    };

    return (
        <section className="flex flex-col md:flex-row p-8 bg-gray-100">
            <div className="md:w-5/12 bg-[#08543c] text-white p-8 flex flex-col justify-center items-center">
                <h2 className="mb-4 text-5xl font-extrabold leading-tight text-center">
                    Your <span className="text-[#2fce65]">climate journey</span> starts here
                </h2>
                <p className="mb-6 text-lg text-center">
                    More than 1,500 customers rely on us for their climate strategy. To partner with Greenly, visit our Partners page.
                </p>
                <div className="w-full mt-6">
                    <Carousel showArrows={true} showThumbs={false} autoPlay={true} infiniteLoop={true}>
                        <div>
                            <img src="/RSE-Greenly-mesure-decarbonation-Magazine-EDI-scaled.png" alt="First Slide" />
                            <p className="legend">First Slide Description</p>
                        </div>
                        <div>
                            <img src="/greenly_video_lQAqOkx.png" alt="Second Slide" />
                            <p className="legend">Second Slide Description</p>
                        </div>
                        <div>
                            <img src="/Greenly video ENG.png" alt="Third Slide" />
                            <p className="legend">Third Slide Description</p>
                        </div>
                    </Carousel>
                </div>
            </div>
            <div className="md:w-7/12 bg-white p-8 flex flex-col justify-center items-center">
                <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-2xl">
                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <label className="block font-bold mb-1" htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="First Name"
                                className="w-full p-4 border rounded-lg"
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="block font-bold mb-1" htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Last Name"
                                className="w-full p-4 border rounded-lg"
                            />
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <label className="block font-bold mb-1" htmlFor="email">Work Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Work Email"
                                className="w-full p-4 border rounded-lg"
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="block font-bold mb-1" htmlFor="phone">Phone Number</label>
                            <PhoneInput
                                country={'us'}
                                value={formData.phone}
                                onChange={handlePhoneChange}
                                containerStyle={{ width: '100%' }}
                                inputStyle={{ width: '100%' }}
                                buttonStyle={{ border: '1px solid #ccc', borderRadius: '8px', marginRight: '10px' }}
                            />
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <label className="block font-bold mb-1" htmlFor="company">Company Name</label>
                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                placeholder="Company Name"
                                className="w-full p-4 border rounded-lg"
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="block font-bold mb-1" htmlFor="jobPosition">Job Position</label>
                            <input
                                type="text"
                                name="jobPosition"
                                value={formData.jobPosition}
                                onChange={handleChange}
                                placeholder="Job Position"
                                className="w-full p-4 border rounded-lg"
                            />
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <label className="block font-bold mb-1" htmlFor="employees">Number of Employees</label>
                            <select
                                name="employees"
                                value={formData.employees}
                                onChange={handleChange}
                                className="w-full p-4 border rounded-lg"
                            >
                                <option value="">Select number of employees</option>
                                <option value="10-49">10-49</option>
                                <option value="50-99">50-99</option>
                                <option value="100-249">100-249</option>
                                <option value="250-499">250-499</option>
                                <option value="500-999">500-999</option>
                                <option value="1000-4999">1000-4999</option>
                                <option value="5000-9999">5000-9999</option>
                                <option value="10k+">10k+</option>
                            </select>
                        </div>
                        <div className="w-1/2">
                            <label className="block font-bold mb-1" htmlFor="industry">Industry</label>
                            <select
                                name="industry"
                                value={formData.industry}
                                onChange={handleChange}
                                className="w-full p-4 border rounded-lg"
                            >
                                <option value="">Select industry</option>
                                <option value="Construction & Real Estate">Construction & Real Estate</option>
                                <option value="Consulting & Service">Consulting & Service</option>
                                <option value="Environment & Energy">Environment & Energy</option>
                                <option value="Event & Tourism">Event & Tourism</option>
                                <option value="Finance">Finance</option>
                                <option value="Food & Beverage">Food & Beverage</option>
                                <option value="Healthcare">Healthcare</option>
                                <option value="Manufacturing">Manufacturing</option>
                                <option value="Insurance">Insurance</option>
                                <option value="Logistic & Mobility">Logistic & Mobility</option>
                                <option value="Media & Communication">Media & Communication</option>
                                <option value="Public Service & Education">Public Service & Education</option>
                                <option value="Retail & E-Commerce">Retail & E-Commerce</option>
                                <option value="Tech & IT">Tech & IT</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className="block font-bold mb-1" htmlFor="requestReason">Reason for your request</label>
                        <select
                            name="requestReason"
                            value={formData.requestReason}
                            onChange={handleChange}
                            className="w-full p-4 border rounded-lg"
                        >
                            <option value="">Select reason</option>
                            <option value="Obtaining a certified Carbon Footprint">Obtaining a certified Carbon Footprint</option>
                            <option value="Performing a Life Cycle Assessment">Performing a Life Cycle Assessment</option>
                            <option value="Engaging my suppliers">Engaging my suppliers</option>
                            <option value="CSRD">CSRD</option>
                            <option value="Complying with regulatory requirements">Complying with regulatory requirements</option>
                            <option value="Getting support for an SBTi application">Getting support for an SBTi application</option>
                            <option value="Getting a third-party certification (B Corp, Ecovadis...)">Getting a third-party certification (B Corp, Ecovadis...)</option>
                            <option value="Create a partnership">Create a partnership</option>
                        </select>
                    </div>
                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            name="consent"
                            checked={formData.consent}
                            onChange={handleCheckboxChange}
                            required
                            className="form-checkbox"
                        />
                        <label className="font-bold">
                            By clicking below, you agree that we may process your information in accordance with these terms. For more information about our privacy practices please visit our website.
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#08543c] text-white p-4 rounded-lg font-bold"
                        disabled={!isFormValid()}  // Disable button based on form validation
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}
