import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'wouter';

interface CityServiceAreaTemplateProps {
  cityName: string;
  state: string;
  county: string;
  serviceDescription: string;
  services: string[];
  nearbyAttractions?: string[];
  nearbyLakes?: string[];
  nearbyCities?: string[];
}

const CityServiceAreaTemplate: React.FC<CityServiceAreaTemplateProps> = ({
  cityName,
  state,
  county,
  serviceDescription,
  services,
  nearbyAttractions = [],
  nearbyLakes = [],
  nearbyCities = []
}) => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Mobile Detailing in {cityName}, {state} | SWANKIES Elite Detail & Restoration</title>
        <meta name="description" content={`Professional mobile detailing services in ${cityName}, ${state}. Auto, boat, and motorcycle detailing at your location in ${county} County. Call (918) 822-7188.`} />
        <meta property="og:title" content={`Mobile Detailing in ${cityName}, ${state} | SWANKIES Elite Detail & Restoration`} />
        <meta property="og:description" content={`Professional mobile detailing services in ${cityName}, ${state}. Mobile auto, boat, and motorcycle detailing that comes to your location.`} />
        <meta property="og:type" content="website" />
        <meta name="keywords" content={`${cityName} detailing, mobile detailing ${cityName}, car detailing ${cityName}, boat detailing ${cityName}, motorcycle detailing ${cityName}, ${state} detailing, ${county} County detailing`} />
        <link rel="canonical" href={`https://swankieselitedetail.com/service-areas/${cityName.toLowerCase().replace(/\s+/g, '-')}`} />
      </Helmet>
      
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-dark-2">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6 text-center">
                Mobile Detailing in <span className="text-primary text-shadow-neon">{cityName}</span>, {state}
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 text-center">
                Premium mobile detailing services that come directly to your location in {cityName} and throughout {county} County.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="/booking" 
                  className="bg-primary text-black font-bold py-3 px-8 rounded-full text-lg hover:shadow-neon-lg transition duration-300 transform hover:-translate-y-1 inline-block text-center"
                >
                  Book Now
                </a>
                <a 
                  href="tel:9188227188" 
                  className="bg-transparent border-2 border-white hover:border-primary text-white hover:text-primary font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:-translate-y-1 inline-block text-center"
                >
                  Call (918) 822-7188
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Main Content */}
              <div className="lg:col-span-2">
                <h2 className="font-montserrat font-bold text-3xl mb-6">
                  Elite Mobile Detailing in <span className="text-primary text-shadow-neon">{cityName}</span>
                </h2>
                
                <div className="prose prose-lg prose-invert max-w-none mb-8">
                  <p>
                    SWANKIES Elite Detail & Restoration brings premium mobile detailing services directly to your location in {cityName}, {state}. We understand that {cityName} residents value convenience and quality service, which is why we bring our expertise and professional equipment to you.
                  </p>
                  
                  <p>
                    {serviceDescription}
                  </p>
                  
                  <p>
                    Whether you're near {nearbyCities.length > 0 ? nearbyCities.slice(0, 3).join(', ') : county} or anywhere in {county} County, our mobile detailing service reaches you with the same elite quality and attention to detail that defines SWANKIES.
                  </p>
                </div>
                
                <div className="bg-card/30 rounded-xl p-6 mb-8 border border-primary/20">
                  <h3 className="font-montserrat font-bold text-2xl mb-4">
                    Our <span className="text-primary text-shadow-neon">Services</span> in {cityName}
                  </h3>
                  
                  <ul className="space-y-2">
                    {services.map((service, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {nearbyAttractions.length > 0 && (
                  <div className="bg-gradient-dark rounded-xl p-6 mb-8">
                    <h3 className="font-montserrat font-bold text-2xl mb-4">
                      Serving <span className="text-primary text-shadow-neon">{cityName}'s</span> Attractions
                    </h3>
                    
                    <p className="mb-4">
                      We proudly serve {cityName}'s popular areas and attractions, including:
                    </p>
                    
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {nearbyAttractions.map((attraction, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>{attraction}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {nearbyLakes.length > 0 && (
                  <div className="bg-card/30 rounded-xl p-6 mb-8 border border-primary/20">
                    <h3 className="font-montserrat font-bold text-2xl mb-4">
                      <span className="text-primary text-shadow-neon">Lake</span> Services Near {cityName}
                    </h3>
                    
                    <p className="mb-4">
                      {cityName} is close to some of {state}'s most beautiful lakes. We offer specialized boat detailing services at:
                    </p>
                    
                    <ul className="space-y-2">
                      {nearbyLakes.map((lake, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>{lake}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              {/* Right Column - Sidebar */}
              <div>
                {/* Contact Card */}
                <div className="bg-card/30 rounded-xl p-6 mb-8 border border-primary/20 sticky top-24">
                  <h3 className="font-montserrat font-bold text-2xl mb-4 text-center">
                    Book Your <span className="text-primary text-shadow-neon">Detail</span>
                  </h3>
                  
                  <p className="text-center mb-6">
                    Premium mobile detailing services in {cityName} and throughout {county} County.
                  </p>
                  
                  <div className="space-y-4">
                    <a 
                      href="/booking" 
                      className="flex items-center justify-center bg-primary text-black font-bold py-3 px-6 rounded-full w-full hover:shadow-neon-sm transition duration-300"
                    >
                      Book Online
                    </a>
                    
                    <a 
                      href="tel:9188227188" 
                      className="flex items-center justify-center bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-black font-bold py-3 px-6 rounded-full w-full transition duration-300"
                    >
                      <i className="fas fa-phone-alt mr-2"></i> (918) 822-7188
                    </a>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-700">
                    <h4 className="font-bold text-lg mb-2">Service Hours</h4>
                    <ul className="space-y-1">
                      <li className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span>8:00 AM - 6:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Saturday</span>
                        <span>8:00 AM - 4:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Sunday</span>
                        <span>Closed</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Services Quick Links */}
                <div className="bg-gradient-dark rounded-xl p-6 mb-8">
                  <h3 className="font-montserrat font-bold text-xl mb-4">
                    Our <span className="text-primary text-shadow-neon">Services</span>
                  </h3>
                  
                  <ul className="space-y-2">
                    <li>
                      <Link href="/services/auto-detailing">
                        <a className="flex items-center text-white hover:text-primary transition-colors">
                          <span className="text-primary mr-2">▸</span> 
                          Auto Detailing
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/boat-detailing">
                        <a className="flex items-center text-white hover:text-primary transition-colors">
                          <span className="text-primary mr-2">▸</span> 
                          Boat Detailing
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/motorcycle-detailing">
                        <a className="flex items-center text-white hover:text-primary transition-colors">
                          <span className="text-primary mr-2">▸</span> 
                          Motorcycle Detailing
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/paint-correction">
                        <a className="flex items-center text-white hover:text-primary transition-colors">
                          <span className="text-primary mr-2">▸</span> 
                          Paint Correction
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/ceramic-coating">
                        <a className="flex items-center text-white hover:text-primary transition-colors">
                          <span className="text-primary mr-2">▸</span> 
                          Ceramic Coating
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/interior-detailing">
                        <a className="flex items-center text-white hover:text-primary transition-colors">
                          <span className="text-primary mr-2">▸</span> 
                          Interior Detailing
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                
                {/* Nearby Cities */}
                {nearbyCities.length > 0 && (
                  <div className="bg-card/30 rounded-xl p-6 border border-primary/20">
                    <h3 className="font-montserrat font-bold text-xl mb-4">
                      Also Serving <span className="text-primary text-shadow-neon">Nearby</span>
                    </h3>
                    
                    <ul className="grid grid-cols-2 gap-1">
                      {nearbyCities.map((city, index) => (
                        <li key={index} className="text-sm">
                          {city}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-dark-2">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-montserrat font-bold text-3xl mb-6">
              Ready for <span className="text-primary text-shadow-neon">Elite Service</span> in {cityName}?
            </h2>
            <p className="text-lg max-w-3xl mx-auto mb-8 text-gray-300">
              Book your mobile detailing appointment today. We bring our expertise and professional equipment directly to your location in {cityName}, {state}.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/booking" 
                className="bg-primary text-black font-bold py-3 px-8 rounded-full text-lg hover:shadow-neon-lg transition duration-300 transform hover:-translate-y-1 inline-block"
              >
                Book Your Appointment
              </a>
              <a 
                href="tel:9188227188" 
                className="bg-transparent border-2 border-white hover:border-primary text-white hover:text-primary font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:-translate-y-1 inline-block"
              >
                Call (918) 822-7188
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CityServiceAreaTemplate;