import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AutoDetailingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Auto Detailing Services | SWANKIES Elite Detail & Restoration</title>
        <meta name="description" content="Premium auto detailing services with ceramic coating, paint correction, and interior restoration. Mobile service available across Oklahoma and Arkansas." />
      </Helmet>
      
      <Header />
      
      <main className="flex-grow">
        {/* Hero section */}
        <section className="py-16 bg-gradient-dark-2">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
              <span className="text-primary text-shadow-neon">Auto</span> Detailing Services
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 mb-8">
              Restore your vehicle's appearance with our premium detailing services, tailored to your specific needs.
            </p>
            <div className="flex justify-center">
              <a 
                href="/contact" 
                className="bg-primary text-primary-foreground font-bold py-3 px-8 rounded-full text-lg hover:shadow-neon-lg transition duration-300 transform hover:-translate-y-1"
              >
                Schedule Service
              </a>
            </div>
          </div>
        </section>
        
        {/* Main content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="font-montserrat font-bold text-3xl mb-6">
                  <span className="text-primary text-shadow-neon">Premium</span> Auto Detailing
                </h2>
                <p className="text-lg mb-6 text-gray-300">
                  Our auto detailing services are designed to rejuvenate your vehicle's appearance, 
                  protect its surfaces, and maintain its value. We use only the highest quality products 
                  and techniques to ensure exceptional results.
                </p>
                <p className="text-lg mb-6 text-gray-300">
                  Whether you drive a luxury sedan, sports car, SUV, or truck, our team has the expertise 
                  to provide tailored detailing services that meet your specific needs and exceed your expectations.
                </p>
              </div>
              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-2xl shadow-primary/30">
                  <img 
                    src="https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
                    alt="SWANKIES auto detailing services" 
                    className="w-full h-[400px] object-cover" 
                  />
                </div>
              </div>
            </div>
            
            {/* Service packages */}
            <h2 className="font-montserrat font-bold text-3xl mb-10 text-center">
              Our <span className="text-primary text-shadow-neon">Auto Detailing</span> Packages
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Package 1 */}
              <div className="bg-card rounded-xl p-6 shadow-lg border border-primary/20 hover:border-primary/60 transition-all hover:shadow-neon-sm">
                <h3 className="font-montserrat font-bold text-2xl mb-4">Essential Detail</h3>
                <ul className="space-y-2 mb-6 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Exterior hand wash and dry</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Wheel and tire cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Interior vacuum and dusting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Dashboard and console cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Window cleaning (interior and exterior)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Tire dressing</span>
                  </li>
                </ul>
                <div className="flex justify-center">
                  <a 
                    href="/contact" 
                    className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-black font-bold py-2 px-6 rounded-full transition duration-300"
                  >
                    Book Now
                  </a>
                </div>
              </div>
              
              {/* Package 2 */}
              <div className="bg-card rounded-xl p-6 shadow-lg border-2 border-primary shadow-neon-sm transform scale-105">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-black text-sm font-bold py-1 px-4 rounded-full">
                  MOST POPULAR
                </div>
                <h3 className="font-montserrat font-bold text-2xl mb-4">Premium Detail</h3>
                <ul className="space-y-2 mb-6 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Everything in Essential Package</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Clay bar treatment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Paint sealant application</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Leather conditioning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Carpet shampooing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Engine bay cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Chrome polishing</span>
                  </li>
                </ul>
                <div className="flex justify-center">
                  <a 
                    href="/contact" 
                    className="bg-primary text-black hover:shadow-neon-lg font-bold py-2 px-6 rounded-full transition duration-300"
                  >
                    Book Now
                  </a>
                </div>
              </div>
              
              {/* Package 3 */}
              <div className="bg-card rounded-xl p-6 shadow-lg border border-primary/20 hover:border-primary/60 transition-all hover:shadow-neon-sm">
                <h3 className="font-montserrat font-bold text-2xl mb-4">Elite Restoration</h3>
                <ul className="space-y-2 mb-6 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Everything in Premium Package</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Multi-stage paint correction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Ceramic coating application</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Headlight restoration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Interior deep cleaning and sanitization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Water spot removal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Premium protection package (12+ months)</span>
                  </li>
                </ul>
                <div className="flex justify-center">
                  <a 
                    href="/contact" 
                    className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-black font-bold py-2 px-6 rounded-full transition duration-300"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
            
            {/* Additional Services */}
            <div className="bg-card/50 rounded-xl p-8 shadow-lg mb-16">
              <h3 className="font-montserrat font-bold text-2xl mb-6">Additional Auto Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-card p-4 rounded-lg border border-primary/20">
                  <h4 className="font-bold text-xl mb-2">Ceramic Coating</h4>
                  <p className="text-gray-300">Long-lasting protection with a brilliant shine that repels water, dirt, and contaminants.</p>
                </div>
                <div className="bg-card p-4 rounded-lg border border-primary/20">
                  <h4 className="font-bold text-xl mb-2">Paint Correction</h4>
                  <p className="text-gray-300">Remove swirls, scratches, and imperfections to restore your paint's original luster.</p>
                </div>
                <div className="bg-card p-4 rounded-lg border border-primary/20">
                  <h4 className="font-bold text-xl mb-2">Headlight Restoration</h4>
                  <p className="text-gray-300">Restore cloudy, yellowed headlights to crystal clear condition for better visibility.</p>
                </div>
                <div className="bg-card p-4 rounded-lg border border-primary/20">
                  <h4 className="font-bold text-xl mb-2">Odor Removal</h4>
                  <p className="text-gray-300">Eliminate stubborn odors with our specialized treatment for a fresh, clean interior.</p>
                </div>
                <div className="bg-card p-4 rounded-lg border border-primary/20">
                  <h4 className="font-bold text-xl mb-2">Engine Bay Detailing</h4>
                  <p className="text-gray-300">Clean and protect your engine compartment for better performance and appearance.</p>
                </div>
                <div className="bg-card p-4 rounded-lg border border-primary/20">
                  <h4 className="font-bold text-xl mb-2">Leather Restoration</h4>
                  <p className="text-gray-300">Revitalize and protect leather surfaces to extend their life and maintain appearance.</p>
                </div>
              </div>
            </div>
            
            {/* Call to action */}
            <div className="text-center">
              <h3 className="font-montserrat font-bold text-2xl mb-6">Ready to transform your vehicle?</h3>
              <p className="text-lg max-w-3xl mx-auto mb-8 text-gray-300">
                Contact us today to schedule your auto detailing service. We offer mobile services throughout Northeast Oklahoma and Northwest Arkansas.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="/contact" 
                  className="bg-primary text-primary-foreground font-bold py-3 px-8 rounded-full text-lg hover:shadow-neon-lg transition duration-300 transform hover:-translate-y-1"
                >
                  Book an Appointment
                </a>
                <a 
                  href="tel:9188227188" 
                  className="bg-transparent border-2 border-white hover:border-primary text-white hover:text-primary font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:-translate-y-1"
                >
                  Call (918) 822-7188
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AutoDetailingPage;