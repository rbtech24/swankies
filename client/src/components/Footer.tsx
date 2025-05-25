const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Service Areas", href: "/service-areas" },
    { name: "About Us", href: "/about" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Book Now", href: "/booking" },
    { name: "Contact", href: "/contact" }
  ];
  
  const services = [
    { name: "Auto Detailing", href: "/services/auto-detailing" },
    { name: "Boat Detailing", href: "/services/boat-detailing" },
    { name: "Motorcycle Detailing", href: "/services/motorcycle-detailing" },
    { name: "Paint Correction", href: "/services/paint-correction" },
    { name: "Ceramic Coating", href: "/services/ceramic-coating" },
    { name: "Interior Detailing", href: "/services/interior-detailing" }
  ];

  return (
    <footer className="bg-background py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <a href="/" className="text-primary text-3xl font-montserrat font-bold text-shadow-neon">
              SWANKIES<span className="text-white"> Elite Detail & Restoration</span>
            </a>
            <p className="mt-4 text-gray-400">
              Premium mobile detailing services for autos, boats, and motorcycles. We bring the detail shop to you.
            </p>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold text-xl mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-primary transition duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold text-xl mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a href={service.href} onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-primary transition duration-300">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold text-xl mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="fas fa-phone-alt text-primary mt-1 mr-3"></i>
                <span className="text-gray-400">
                  <a href="tel:+19188227188" className="hover:text-primary transition duration-300">
                    (918) 822-7188
                  </a>
                </span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope text-primary mt-1 mr-3"></i>
                <span className="text-gray-400">
                  <a href="mailto:info@swankieselite.com" className="hover:text-primary transition duration-300">
                    info@swankieselite.com
                  </a>
                </span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-primary mt-1 mr-3"></i>
                <span className="text-gray-400">
                  Serving Lake Eucha, Lake Hudson, Lake Tenkiller, and Beaver Lake areas
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          {/* Legal Links */}
          <div className="flex flex-wrap justify-center mb-6 gap-x-6 gap-y-2">
            <a href="/terms-of-use" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-primary transition duration-300 text-sm">
              Terms of Use
            </a>
            <a href="/privacy-policy" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-primary transition duration-300 text-sm">
              Privacy Policy
            </a>
            <a href="/cookie-policy" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-primary transition duration-300 text-sm">
              Cookie Policy
            </a>
            <a href="/sitemap" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-primary transition duration-300 text-sm">
              Sitemap
            </a>
            <a href="/sitemap.xml" className="text-gray-400 hover:text-primary transition duration-300 text-sm">
              XML Sitemap
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Swankies Elite Detailing. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition duration-300">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
