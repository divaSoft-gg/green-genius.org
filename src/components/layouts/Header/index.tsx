import { useEffect, useState } from 'react';
import SharedSection from '../SharedSection';
import { languages, menuItems } from '../../../helpers/constant';
import { Link } from 'react-router-dom';
import Button from '../../common/Button';
import ArrowLeft from '../../../assets/icons/ArrowLeft';
import Logo from '../../../assets/icons/logo';
import GlobeIcon from '../../../assets/icons/Globe';
import { useTranslation } from 'react-i18next';
import ArrowRight from '../../../assets/icons/ArrowRight';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { t, i18n } = useTranslation();

    const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    };

    const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
    };

    const handleClickOutside = (event : MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isDropdownOpen && !target.closest('.dropdown-button')) {
          setIsDropdownOpen(false);
      }
  };

  useEffect(() => {
      document.addEventListener('click', handleClickOutside);
      return () => {
          document.removeEventListener('click', handleClickOutside);
      };
  }, [isDropdownOpen]);

    const isRTL = i18n.language === 'ar';

    return (
        <nav className="relative bg-white border-gray-200 w-full z-50 top-0 left-0">
        <SharedSection className="flex flex-wrap items-center justify-between !py-3">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Logo />
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className={`relative ${isRTL ? 'ml-2' : 'mr-2'} dropdown-button`}>
              <button
                className="flex items-center justify-center p-2 text-gray-500 rounded-lg focus:outline-none focus:ring-2 border-b-2 border-primary-500 focus:border-primary focus:border-b-0"
                onClick={handleDropdownToggle}>
                <div className={` ${isRTL ? 'ml-2' : 'mr-2'} inline-flex bottom-0`}>{i18n.language.toUpperCase()}</div>
                <GlobeIcon />
              </button>
              {isDropdownOpen && (
                <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                  {languages.map(({ code, name, country_code }) => (
                    <li key={country_code} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      <button
                        className="flex items-center w-full text-left"
                        onClick={() => { i18n.changeLanguage(code); handleDropdownToggle() }}
                      >
                        <span className={`flag-icon flag-icon-${country_code} mr-2`}></span>
                        {name}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <Button to='http://app.green-genius.org' type="button"
              className="flex items-center justify-center  text-blue-500 bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center ">
              {t('navbar.getStarted')}
              <div className={` ${isRTL ? 'mr-3' : 'ml-3'} `}>
                  {isRTL ? <ArrowLeft /> : <ArrowRight />} 
              </div>
            </Button>
            <Button type="button" onClick={handleMenuToggle}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
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
              {Object.entries(menuItems).map(([key, path]) => (
                <li className='!mx-0' key={key}>
                  <Link to={path}
                    className="block py-2 ml-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500">
                    {t(`navbar.${key}`)}
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