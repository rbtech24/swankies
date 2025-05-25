import { useState, useEffect } from "react";
import { Link } from "wouter";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <header className={`bg-gradient-dark-2 fixed w-full z-50 ${scrolled ? 'shadow-neon' : ''}`}>
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <Link href="/">
            <a className="text-primary text-3xl font-montserrat font-bold text-shadow-neon">
              SWANKIES<span className="text-white"> Elite Detail & Restoration</span>
            </a>
          </Link>
          
          <button 
            className="lg:hidden text-primary text-2xl focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <i className="fas fa-bars"></i>
          </button>
          
          <ul className="hidden lg:flex items-center space-x-8 font-montserrat">
            <li><a href="/#home" className="nav-link text-white hover:text-primary transition duration-300">Home</a></li>
            <li><a href="/#services" className="nav-link text-white hover:text-primary transition duration-300">Services</a></li>
            <li><a href="/#gallery" className="nav-link text-white hover:text-primary transition duration-300">Gallery</a></li>
            <li><a href="/service-areas" className="nav-link text-white hover:text-primary transition duration-300">Service Areas</a></li>
            <li><a href="/#about" className="nav-link text-white hover:text-primary transition duration-300">About Us</a></li>
            <li><a href="/#testimonials" className="nav-link text-white hover:text-primary transition duration-300">Testimonials</a></li>
            <li><a href="/#contact" className="nav-link text-white hover:text-primary transition duration-300">Contact</a></li>
            <li>
              <a 
                href="tel:+19188227188" 
                className="ml-4 bg-primary text-primary-foreground font-bold py-2 px-6 rounded-full hover:shadow-neon-lg transition duration-300"
              >
                <i className="fas fa-phone-alt mr-2"></i>Call Now
              </a>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 right-0 w-[280px] h-full bg-secondary z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <Link href="/">
              <a className="text-primary text-2xl font-montserrat font-bold text-shadow-neon">
                Swankies
              </a>
            </Link>
            <button 
              className="text-primary text-2xl focus:outline-none"
              onClick={closeMobileMenu}
              aria-label="Close menu"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          
          <ul className="space-y-4 font-montserrat">
            <li><a href="/#home" onClick={closeMobileMenu} className="block py-2 text-white hover:text-primary transition duration-300 border-b border-gray-700">Home</a></li>
            <li><a href="/#services" onClick={closeMobileMenu} className="block py-2 text-white hover:text-primary transition duration-300 border-b border-gray-700">Services</a></li>
            <li><a href="/#gallery" onClick={closeMobileMenu} className="block py-2 text-white hover:text-primary transition duration-300 border-b border-gray-700">Gallery</a></li>
            <li><a href="/service-areas" onClick={closeMobileMenu} className="block py-2 text-white hover:text-primary transition duration-300 border-b border-gray-700">Service Areas</a></li>
            <li><a href="/#about" onClick={closeMobileMenu} className="block py-2 text-white hover:text-primary transition duration-300 border-b border-gray-700">About Us</a></li>
            <li><a href="/#testimonials" onClick={closeMobileMenu} className="block py-2 text-white hover:text-primary transition duration-300 border-b border-gray-700">Testimonials</a></li>
            <li><a href="/#contact" onClick={closeMobileMenu} className="block py-2 text-white hover:text-primary transition duration-300 border-b border-gray-700">Contact</a></li>
            <li className="pt-4">
              <a 
                href="tel:+19188227188" 
                className="flex items-center justify-center bg-primary text-primary-foreground font-bold py-3 px-6 rounded-full hover:shadow-neon-lg transition duration-300 w-full"
              >
                <i className="fas fa-phone-alt mr-2"></i>Call Now
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 ${mobileMenuOpen ? 'block' : 'hidden'}`}
        onClick={closeMobileMenu}
      ></div>
    </header>
  );
};

export default Header;
