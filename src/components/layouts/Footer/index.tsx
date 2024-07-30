import SharedSection from '../../common/SharedSection';
import Button from '../../common/Button';
import Instagram from '../../../assets/icons/Instagram';
import Linkedin from '../../../assets/icons/Linkedin';
import Youtube from '../../../assets/icons/Youtube';

const Footer = () => {
    return (
        <SharedSection className="!py-0">
            {/* <!--Grid--> */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
                <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
                    <Button to="#"  className="flex justify-center lg:justify-start font-bold">
                        Green-Genuis
                    </Button>
                    <p className="py-8 px-4 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">Green Genius is a SaaS platform that helps businesses track, manage, and reduce their carbon footprint. It offers tools for supply management, order management, transportation, waste management, and CO2 reporting to support sustainable solutions.</p>
                    {/* <a to="#"  className="py-2.5 px-5 h-9 block w-fit bg-indigo-600 rounded-full shadow-sm text-xs text-white mx-auto transition-all  duration-500 hover:bg-indigo-700 lg:mx-0">
                        Contact us
                    </a> */}
                </div>
                {/* <!--End Col--> */}
                <div className="lg:mx-auto text-left ">
                    <h4 className="text-lg text-gray-900 font-medium mb-7">Pages</h4>
                    <ul className="text-sm  transition-all duration-500">
                        <li className="mb-6"><Button to="/"  className="text-gray-600 hover:text-gray-900">Home</Button></li>
                        <li className="mb-6"><Button to="/pricing"  className=" text-gray-600 hover:text-gray-900">Pricing</Button></li>
                        <li className="mb-6"><Button to="/contact"  className=" text-gray-600 hover:text-gray-900">Contact</Button></li>
                    </ul>
                </div>
                {/* <!--End Col--> */}
                <div className="lg:mx-auto text-left ">
                    <h4 className="text-lg text-gray-900 font-medium mb-7">Products</h4>
                    <ul className="text-sm  transition-all duration-500">
                        <li className="mb-6"><Button to="#"  className="text-gray-600 hover:text-gray-900">Figma UI System</Button></li>
                        <li className="mb-6"><Button to="#"  className=" text-gray-600 hover:text-gray-900">Icons Assets</Button></li>
                        <li className="mb-6"><Button to="#"  className=" text-gray-600 hover:text-gray-900">Responsive Blocks</Button></li>
                        <li><Button to="#"  className=" text-gray-600 hover:text-gray-900">Components Library</Button></li>
                    </ul>
                </div>
                {/* <!--End Col--> */}
                <div className="lg:mx-auto text-left">
                    <h4 className="text-lg text-gray-900 font-medium mb-7">Resources</h4>
                    <ul className="text-sm  transition-all duration-500">
                        <li className="mb-6"><Button to="#"  className="text-gray-600 hover:text-gray-900">FAQs</Button></li>
                        <li className="mb-6"><Button to="#"  className=" text-gray-600 hover:text-gray-900">Quick Start</Button></li>
                    </ul>
                </div>
                {/* <!--End Col--> */}
                <div className="lg:mx-auto text-left">
                    <h4 className="text-lg text-gray-900 font-medium mb-7">Blogs</h4>
                    <ul className="text-sm  transition-all duration-500">
                        <li className="mb-6"><Button to="#"  className="text-gray-600 hover:text-gray-900">News</Button></li>
                        <li className="mb-6"><Button to="#"  className=" text-gray-600 hover:text-gray-900">Tips & Tricks</Button></li>
                        <li className="mb-6"><Button to="#"  className=" text-gray-600 hover:text-gray-900">New Updates</Button></li>
                        <li><Button to="#"  className=" text-gray-600 hover:text-gray-900">Events</Button></li>
                    </ul>
                </div>
            </div>
            {/* <!--Grid--> */}
            <div className="py-7 border-t border-gray-200">
                <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                    <span className="text-sm text-gray-500 sm:text-center ">© 2024 <Button to="#" className="hover:underline">Green-Genuis™</Button>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0 ">
                        <Button to="#" className="w-9 h-9 rounded-full flex justify-center items-center " >
                            <Instagram />   
                        </Button>
                        <Button to="#"  className="w-9 h-9 rounded-full  flex justify-center items-center ">
                            <Linkedin />                                
                        </Button>
                        <Button to="#"  className="w-9 h-9 rounded-full  flex justify-center items-center ">
                            <Youtube />                                
                        </Button>
                    </div>
                </div>
            </div>
        </SharedSection>
    );
}

export default Footer;
