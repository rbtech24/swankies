import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'wouter';

interface ServiceAreaTemplateProps {
  areaName: string;
  state: string;
  cities: string[];
  services: string[];
  lakeDescription?: string;
  imageUrl?: string;
}

const ServiceAreaTemplate: React.FC<ServiceAreaTemplateProps> = ({
  areaName,
  state,
  cities,
  services,
  lakeDescription,
  imageUrl = "https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&w=1280"
}) => {
  const formattedAreaName = areaName.replace(/\s+/g, '-').toLowerCase();
  const metaDescription = `Premium mobile detailing services in ${areaName}, ${state}. Serving ${cities.slice(0, 3).join(', ')} and surrounding areas. Professional auto, boat, and motorcycle detailing.`;
  
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>SWANKIES Elite Detail & Restoration | {areaName}, {state} | Mobile Detailing Services</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={`SWANKIES Elite Detail & Restoration | ${areaName}, ${state}`} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={imageUrl} />
        <meta name="keywords" content={`mobile detailing, boat detailing, auto detailing, car detailing, ceramic coating, paint correction, ${areaName}, ${cities.join(', ')}`} />
        <link rel="canonical" href={`https://swankieselite.com/service-areas/detailing-service-${formattedAreaName}`} />
      </Helmet>
      
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section 
          className="py-16 bg-gradient-dark-2 relative"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.5)), url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-4 leading-tight">
                <span className="text-primary text-shadow-neon">SWANKIES</span> Elite Detailing in <span className="text-primary">{areaName}, {state}</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Premium mobile detailing services for auto, boat, and motorcycle. 
                Serving {cities.join(', ')} and surrounding areas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/contact" 
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
        
        {/* Service Area Description */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="font-montserrat font-bold text-3xl mb-6">
                  Premium Mobile Detailing in <span className="text-primary text-shadow-neon">{areaName}</span>
                </h2>
                <p className="text-lg mb-6 text-gray-300">
                  SWANKIES Elite Detail & Restoration provides professional mobile detailing services 
                  in {areaName}, {state} and surrounding areas. Our team of certified detailers brings our 
                  expertise and equipment directly to your location, whether you're at home, work, or the marina.
                </p>
                {lakeDescription && (
                  <p className="text-lg mb-6 text-gray-300">
                    {lakeDescription}
                  </p>
                )}
                <p className="text-lg mb-6 text-gray-300">
                  We take pride in delivering exceptional quality and attention to detail for every service, 
                  from basic washes to complete paint correction and ceramic coating applications.
                </p>
              </div>
              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-2xl shadow-primary/30">
                  <img 
                    src={imageUrl} 
                    alt={`SWANKIES Elite Detail & Restoration in ${areaName}, ${state}`} 
                    className="w-full h-[400px] object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                    <div className="bg-black/50 p-4 backdrop-blur-sm rounded-lg border border-primary/30">
                      <h3 className="text-primary font-bold text-xl mb-2">Mobile Service</h3>
                      <p className="text-white text-sm">We come to you in {areaName} and surrounding areas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Cities Served */}
            <div className="mb-16">
              <h2 className="font-montserrat font-bold text-3xl mb-8 text-center">
                Cities We Serve in <span className="text-primary text-shadow-neon">{areaName}</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {cities.map((city, index) => (
                  <div key={index} className="bg-card/50 rounded-xl p-4 text-center border border-primary/20">
                    <h3 className="font-bold text-xl text-white">{city}</h3>
                    <p className="text-gray-400 text-sm mt-1">{state}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Services Offered */}
            <div className="mb-16">
              <h2 className="font-montserrat font-bold text-3xl mb-8 text-center">
                Services Available in <span className="text-primary text-shadow-neon">{areaName}</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                  <div key={index} className="bg-card/50 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all">
                    <h3 className="font-bold text-xl mb-4 text-primary">{service}</h3>
                    <p className="text-gray-300">
                      Premium {service.toLowerCase()} services by certified professionals. We use only the highest quality products and techniques.
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* CTA */}
            <div className="bg-gradient-dark-2 rounded-xl p-8 text-center">
              <h2 className="font-montserrat font-bold text-3xl mb-6">
                Ready for <span className="text-primary text-shadow-neon">Elite Service</span> in {areaName}?
              </h2>
              <p className="text-lg max-w-3xl mx-auto mb-8 text-gray-300">
                Contact us today to schedule your premium detailing service. We bring our expertise and equipment directly to your location in {cities.join(', ')} and surrounding areas.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="/contact" 
                  className="bg-primary text-black font-bold py-3 px-8 rounded-full text-lg hover:shadow-neon-lg transition duration-300 transform hover:-translate-y-1 inline-block text-center"
                >
                  Book Your Appointment
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
        
        {/* Related Service Areas */}
        <section className="py-16 bg-gradient-dark">
          <div className="container mx-auto px-4">
            <h2 className="font-montserrat font-bold text-3xl mb-8 text-center">
              Other <span className="text-primary text-shadow-neon">Service Areas</span>
            </h2>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-gray-300">
              We provide mobile detailing services throughout Northeast Oklahoma and Northwest Arkansas. Check out our other service areas below.
            </p>
            <div className="flex justify-center">
              <Link href="/service-areas">
                <a className="bg-primary text-black font-bold py-3 px-8 rounded-full text-lg hover:shadow-neon-lg transition duration-300 transform hover:-translate-y-1 inline-block text-center">
                  View All Service Areas
                </a>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServiceAreaTemplate;