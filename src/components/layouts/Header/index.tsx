import { useState } from 'react';
import SharedSection from '../SharedSection';
import { menuItems } from '../../../helpers/constant';
import { Link } from 'react-router-dom';
import Button from '../../common/Button';
import ArrowLeft from '../../../assets/icons/ArrowLeft';

const Header = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);

const handleMenuToggle = () => {
setIsMenuOpen(!isMenuOpen);
};

return (
    <nav className="relative bg-white border-gray-200  w-full z-50 top-0 left-0 ">
        <SharedSection className=" flex flex-wrap items-center justify-between !py-3">
            <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="/favicon.ico" className="h-8" alt="Green Genuis Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap ">Green-Genius</span>
            </a>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <Button to='http://app.green-genius.org' type="button"
                    className="flex text-blue-500 bg-blue-100  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center ">
                    Get started
                    <ArrowLeft />
                </Button>
                <Button type="button" onClick={handleMenuToggle}
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                    aria-controls="navbar-cta" aria-expanded={isMenuOpen}>
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </Button>
            </div>
            <div id="navbar-cta" className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'}`}>
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                            {Object.entries(menuItems).map(([label, path]) => (
                                <li key={label}>
                                    <Link to={path}
                                        className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500  ">
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
        </SharedSection>
    </nav>
);
};

export default Header;