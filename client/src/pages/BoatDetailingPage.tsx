import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BoatDetailingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Boat Detailing Services | SWANKIES Elite Detail & Restoration</title>
        <meta name="description" content="Premium boat detailing services for all watercraft types. Hull cleaning, gelcoat restoration, interior detailing and more across Oklahoma and Arkansas." />
      </Helmet>
      
      <Header />
      
      <main className="flex-grow">
        {/* Hero section */}
        <section className="py-16 bg-gradient-dark-2">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
              <span className="text-primary text-shadow-neon">Boat</span> Detailing Services
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 mb-8">
              Expert marine detailing to keep your watercraft looking pristine and protected from the elements.
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
              <div className="relative order-2 lg:order-1">
                <div className="rounded-xl overflow-hidden shadow-2xl shadow-primary/30">
                  <img 
                    src="https://images.unsplash.com/photo-1605281317010-fe5ffe798166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
                    alt="SWANKIES boat detailing services" 
                    className="w-full h-[400px] object-cover" 
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="font-montserrat font-bold text-3xl mb-6">
                  <span className="text-primary text-shadow-neon">Marine</span> Detailing Excellence
                </h2>
                <p className="text-lg mb-6 text-gray-300">
                  From pontoons to performance boats, our specialized marine detailing services are designed 
                  to address the unique challenges of watercraft maintenance. We understand the harsh 
                  conditions your boat faces and provide solutions that protect your investment.
                </p>
                <p className="text-lg mb-6 text-gray-300">
                  Our team is experienced in working with all types of boats and marine vessels. We bring 
                  our equipment directly to your marina, dock, or home location for convenient service 
                  throughout Northeast Oklahoma and Northwest Arkansas.
                </p>
              </div>
            </div>
            
            {/* Service packages */}
            <h2 className="font-montserrat font-bold text-3xl mb-10 text-center">
              Our <span className="text-primary text-shadow-neon">Boat Detailing</span> Packages
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Package 1 */}
              <div className="bg-card rounded-xl p-6 shadow-lg border border-primary/20 hover:border-primary/60 transition-all hover:shadow-neon-sm">
                <h3 className="font-montserrat font-bold text-2xl mb-4">Essential Marine</h3>
                <ul className="space-y-2 mb-6 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Exterior hull wash and dry</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Basic vinyl cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Interior vacuuming</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Deck wash and rinse</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Window and windshield cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Basic hardware wipe down</span>
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
                <h3 className="font-montserrat font-bold text-2xl mb-4">Premium Marine</h3>
                <ul className="space-y-2 mb-6 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Everything in Essential Package</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Hull cleaning and decontamination</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Vinyl deep cleaning and protection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Teak cleaning and brightening</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Metal polishing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>UV protectant application</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Canvas cleaning</span>
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
                <h3 className="font-montserrat font-bold text-2xl mb-4">Elite Marine Restoration</h3>
                <ul className="space-y-2 mb-6 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Everything in Premium Package</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Gelcoat restoration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Fiberglass polishing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Premium ceramic coating</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Complete interior deep cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Bilge cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Advanced water spot removal</span>
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
              <h3 className="font-montserrat font-bold text-2xl mb-6">Specialized Marine Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-card p-4 rounded-lg border border-primary/20">
                  <h4 className="font-bold text-xl mb-2">Gelcoat Restoration</h4>
                  <p className="text-gray-300">Revitalize dull, oxidized gelcoat to restore your boat's original shine and color.</p>
                </div>
                <div className="bg-card p-4 rounded-lg border border-primary/20">
                  <h4 className="font-bold text-xl mb-2">Marine Ceramic Coating</h4>
                  <p className="text-gray-300">Long-lasting protection against UV damage, salt water, and environmental contaminants.</p>
                </div>
                <div className="bg-card p-4 rounded-lg border border-primary/20">
                  <h4 className="font-bold text-xl mb-2">Bottom Cleaning</h4>
                  <p className="text-gray-300">Remove algae, barnacles, and growth from your boat's hull to improve performance.</p>
                </div>
                <div className="bg-card p-4 rounded-lg border border-primary/20">
                  <h4 className="font-bold text-xl mb-2">Teak Restoration</h4>
                  <p className="text-gray-300">Clean, brighten and seal your teak surfaces to protect them from the elements.</p>
                </div>
                <div className="bg-card p-4 rounded-lg border border-primary/20">
                  <h4 className="font-bold text-xl mb-2">Metal Polishing</h4>
                  <p className="text-gray-300">Restore shine to stainless steel, aluminum, and chrome fixtures on your watercraft.</p>
                </div>
                <div className="bg-card p-4 rounded-lg border border-primary/20">
                  <h4 className="font-bold text-xl mb-2">Canvas & Upholstery</h4>
                  <p className="text-gray-300">Deep clean and protect fabric surfaces from mildew, stains, and UV damage.</p>
                </div>
              </div>
            </div>
            
            {/* Call to action */}
            <div className="text-center">
              <h3 className="font-montserrat font-bold text-2xl mb-6">Ready to make your boat shine?</h3>
              <p className="text-lg max-w-3xl mx-auto mb-8 text-gray-300">
                We service all lakes and marinas in Northeast Oklahoma and Northwest Arkansas. Our mobile detailing brings professional service right to your dock.
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

export default BoatDetailingPage;