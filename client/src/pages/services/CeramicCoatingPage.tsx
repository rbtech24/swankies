import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'wouter';

const CeramicCoatingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Ceramic Coating Services | SWANKIES Elite Detail & Restoration</title>
        <meta name="description" content="Professional ceramic coating services for long-lasting protection for your vehicle, boat, or motorcycle. Mobile service available across Oklahoma and Arkansas." />
        <meta name="keywords" content="ceramic coating, paint protection, hydrophobic coating, vehicle protection, auto detailing, mobile detailing, Oklahoma, Arkansas" />
        <link rel="canonical" href="https://swankieselite.com/services/ceramic-coating" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Ceramic Coating Services | SWANKIES Elite Detail & Restoration" />
        <meta property="og:description" content="Professional ceramic coating services for long-lasting protection and enhanced appearance for your vehicle." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://swankieselite.com/services/ceramic-coating" />
        <meta property="og:image" content="https://swankieselite.com/og-ceramic-coating.jpg" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Ceramic Coating",
            "provider": {
              "@type": "LocalBusiness",
              "name": "SWANKIES Elite Detail & Restoration",
              "telephone": "+19188227188",
              "areaServed": ["Northeast Oklahoma", "Northwest Arkansas"]
            },
            "description": "Professional ceramic coating services for long-lasting protection and enhanced appearance for vehicles, boats, and motorcycles.",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "areaServed": ["Northeast Oklahoma", "Northwest Arkansas"]
            }
          })}
        </script>
      </Helmet>
      
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section 
          className="py-16 bg-gradient-dark-2 relative"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.6)), url('https://images.pexels.com/photos/6870335/pexels-photo-6870335.jpeg?auto=compress&cs=tinysrgb&w=1280')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-4 leading-tight">
                Professional <span className="text-primary text-shadow-neon">Ceramic Coating</span> Services
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Provide ultimate protection for your vehicle with our certified ceramic coating services, delivering years of durability and a stunning glossy finish.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/booking">
                  <a className="bg-primary text-black font-bold py-3 px-8 rounded-full text-lg hover:shadow-neon-lg transition duration-300 transform hover:-translate-y-1 inline-block text-center">
                    Book Now
                  </a>
                </Link>
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
        
        {/* What is Ceramic Coating */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="font-montserrat font-bold text-3xl mb-6">
                  What is <span className="text-primary text-shadow-neon">Ceramic Coating</span>?
                </h2>
                <p className="text-lg mb-6 text-gray-300">
                  Ceramic coating is a liquid polymer applied to your vehicle's exterior that chemically bonds with the factory paint, creating a permanent or semi-permanent layer of protection. Unlike traditional waxes or sealants, ceramic coatings provide:
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">✓</span>
                    <span>Long-lasting protection (2-5+ years)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">✓</span>
                    <span>Superior hydrophobic properties (water beading/sheeting)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">✓</span>
                    <span>Enhanced gloss and depth</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">✓</span>
                    <span>Protection against UV rays, oxidation, and chemical stains</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">✓</span>
                    <span>Resistance to minor scratches and swirl marks</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-2xl shadow-primary/30">
                  <img 
                    src="https://images.pexels.com/photos/6870335/pexels-photo-6870335.jpeg?auto=compress&cs=tinysrgb&w=1280" 
                    alt="Ceramic coating application on vehicle" 
                    className="w-full h-[400px] object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                    <div className="bg-black/50 p-4 backdrop-blur-sm rounded-lg border border-primary/30">
                      <h3 className="text-primary font-bold text-xl mb-2">Professional Application</h3>
                      <p className="text-white text-sm">Our ceramic coatings are applied by certified technicians for optimal results</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Our Process */}
            <div className="mb-16">
              <h2 className="font-montserrat font-bold text-3xl mb-8 text-center">
                Our Ceramic Coating <span className="text-primary text-shadow-neon">Process</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-card/50 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all">
                  <div className="bg-primary/20 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                    <span className="text-primary font-bold text-xl">1</span>
                  </div>
                  <h3 className="font-bold text-xl mb-4 text-primary">Paint Preparation</h3>
                  <p className="text-gray-300">
                    Your vehicle undergoes thorough washing, clay bar treatment, and paint correction to ensure a perfectly clean and smooth surface before coating.
                  </p>
                </div>
                
                <div className="bg-card/50 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all">
                  <div className="bg-primary/20 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                    <span className="text-primary font-bold text-xl">2</span>
                  </div>
                  <h3 className="font-bold text-xl mb-4 text-primary">Surface Decontamination</h3>
                  <p className="text-gray-300">
                    All surfaces are meticulously cleaned with specialized chemicals to remove any remaining contaminants and oils that could interfere with coating adhesion.
                  </p>
                </div>
                
                <div className="bg-card/50 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all">
                  <div className="bg-primary/20 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                    <span className="text-primary font-bold text-xl">3</span>
                  </div>
                  <h3 className="font-bold text-xl mb-4 text-primary">Coating Application</h3>
                  <p className="text-gray-300">
                    Our certified technicians carefully apply the ceramic coating in a controlled environment, ensuring even coverage and proper bonding to the paint surface.
                  </p>
                </div>
                
                <div className="bg-card/50 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all">
                  <div className="bg-primary/20 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                    <span className="text-primary font-bold text-xl">4</span>
                  </div>
                  <h3 className="font-bold text-xl mb-4 text-primary">Curing & Inspection</h3>
                  <p className="text-gray-300">
                    The coating is allowed to cure properly, followed by a final inspection to ensure perfect application and maximum protection for your vehicle.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Ceramic Coating Packages */}
            <div className="mb-16">
              <h2 className="font-montserrat font-bold text-3xl mb-8 text-center">
                Ceramic Coating <span className="text-primary text-shadow-neon">Packages</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-card/50 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all">
                  <h3 className="font-bold text-xl mb-2 text-primary">Essential Protection</h3>
                  <p className="text-sm text-gray-400 mb-4">1-2 year coating package</p>
                  <ul className="space-y-2 text-gray-300 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Single layer ceramic coating</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>1-2 years of protection</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Enhanced gloss and water beading</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Basic paint decontamination</span>
                    </li>
                  </ul>
                  <Link href="/booking">
                    <a className="inline-block bg-primary text-black font-bold py-2 px-6 rounded-full hover:shadow-neon-sm transition duration-300 transform hover:-translate-y-1 w-full text-center">
                      Book Now
                    </a>
                  </Link>
                </div>
                
                <div className="bg-gradient-dark-2 rounded-xl p-6 border border-primary/50 hover:border-primary/80 transition-all transform hover:-translate-y-1 hover:shadow-neon-sm relative z-10">
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <span className="bg-primary text-black text-sm font-bold py-1 px-4 rounded-full">Most Popular</span>
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-primary">Premium Protection</h3>
                  <p className="text-sm text-gray-400 mb-4">3-5 year coating package</p>
                  <ul className="space-y-2 text-gray-300 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Multiple layers of premium ceramic coating</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>3-5 years of protection</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>1-step paint correction included</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Superior gloss and hydrophobic properties</span>
                    </li>
                  </ul>
                  <Link href="/booking">
                    <a className="inline-block bg-primary text-black font-bold py-2 px-6 rounded-full hover:shadow-neon-sm transition duration-300 transform hover:-translate-y-1 w-full text-center">
                      Book Now
                    </a>
                  </Link>
                </div>
                
                <div className="bg-card/50 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all">
                  <h3 className="font-bold text-xl mb-2 text-primary">Elite Protection</h3>
                  <p className="text-sm text-gray-400 mb-4">5+ year coating package</p>
                  <ul className="space-y-2 text-gray-300 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Multiple layers of professional-grade coating</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>5+ years of protection</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>2-step paint correction included</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Wheel faces and glass coating included</span>
                    </li>
                  </ul>
                  <Link href="/booking">
                    <a className="inline-block bg-primary text-black font-bold py-2 px-6 rounded-full hover:shadow-neon-sm transition duration-300 transform hover:-translate-y-1 w-full text-center">
                      Book Now
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Benefits of Ceramic Coating */}
            <div className="bg-gradient-dark-2 rounded-xl p-8 mb-16">
              <h2 className="font-montserrat font-bold text-3xl mb-6 text-center">
                Benefits of <span className="text-primary text-shadow-neon">Ceramic Coating</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-black/30 rounded-lg p-5">
                  <h3 className="font-bold text-xl mb-3 text-primary">Long-lasting Protection</h3>
                  <p className="text-gray-300">
                    Unlike waxes that last weeks or sealants that last months, ceramic coatings provide years of protection against environmental contaminants.
                  </p>
                </div>
                
                <div className="bg-black/30 rounded-lg p-5">
                  <h3 className="font-bold text-xl mb-3 text-primary">Enhanced Gloss & Depth</h3>
                  <p className="text-gray-300">
                    Ceramic coatings enhance your vehicle's paint with a deep, glass-like shine that surpasses traditional products, making colors more vibrant.
                  </p>
                </div>
                
                <div className="bg-black/30 rounded-lg p-5">
                  <h3 className="font-bold text-xl mb-3 text-primary">Hydrophobic Surface</h3>
                  <p className="text-gray-300">
                    Water beads and sheets off coated surfaces, taking dirt with it and making maintenance easier while reducing water spots.
                  </p>
                </div>
                
                <div className="bg-black/30 rounded-lg p-5">
                  <h3 className="font-bold text-xl mb-3 text-primary">Chemical Resistance</h3>
                  <p className="text-gray-300">
                    Ceramic coatings resist environmental contaminants including acid rain, bird droppings, tree sap, and road salt that can damage paint.
                  </p>
                </div>
                
                <div className="bg-black/30 rounded-lg p-5">
                  <h3 className="font-bold text-xl mb-3 text-primary">UV Protection</h3>
                  <p className="text-gray-300">
                    Shields your vehicle's paint from harmful UV rays that cause oxidation and fading, keeping your paint looking newer for longer.
                  </p>
                </div>
                
                <div className="bg-black/30 rounded-lg p-5">
                  <h3 className="font-bold text-xl mb-3 text-primary">Easier Maintenance</h3>
                  <p className="text-gray-300">
                    Dirt and grime have a harder time bonding to coated surfaces, making regular washing easier and reducing the need for frequent detailing.
                  </p>
                </div>
              </div>
            </div>
            
            {/* FAQ */}
            <div className="mb-16">
              <h2 className="font-montserrat font-bold text-3xl mb-8 text-center">
                Frequently Asked <span className="text-primary text-shadow-neon">Questions</span>
              </h2>
              
              <div className="space-y-4 max-w-3xl mx-auto">
                <div className="bg-card/30 rounded-xl p-6 border border-primary/20">
                  <h3 className="font-bold text-xl mb-2 text-white">How long does ceramic coating last?</h3>
                  <p className="text-gray-300">
                    Depending on the product quality and number of layers applied, our ceramic coatings can last anywhere from 1-5+ years with proper maintenance. Premium coatings with multiple layers offer the longest protection.
                  </p>
                </div>
                
                <div className="bg-card/30 rounded-xl p-6 border border-primary/20">
                  <h3 className="font-bold text-xl mb-2 text-white">Is paint correction necessary before coating?</h3>
                  <p className="text-gray-300">
                    Yes, we strongly recommend paint correction before ceramic coating application. The coating will lock in whatever condition your paint is in, so removing swirls, scratches, and imperfections first ensures the best possible results.
                  </p>
                </div>
                
                <div className="bg-card/30 rounded-xl p-6 border border-primary/20">
                  <h3 className="font-bold text-xl mb-2 text-white">How do I maintain a ceramic coated vehicle?</h3>
                  <p className="text-gray-300">
                    Maintain your coating by washing your vehicle regularly with pH-neutral soap, avoiding automatic car washes with brushes, and applying a ceramic boost spray every few months. We provide full maintenance instructions with every coating service.
                  </p>
                </div>
                
                <div className="bg-card/30 rounded-xl p-6 border border-primary/20">
                  <h3 className="font-bold text-xl mb-2 text-white">Is ceramic coating worth the investment?</h3>
                  <p className="text-gray-300">
                    Absolutely. Ceramic coating provides superior protection compared to traditional products, preserves your vehicle's value, reduces maintenance time, and can actually save money in the long run by eliminating the need for frequent waxing and detailing.
                  </p>
                </div>
              </div>
            </div>
            
            {/* CTA */}
            <div className="bg-gradient-dark rounded-xl p-8 text-center">
              <h2 className="font-montserrat font-bold text-3xl mb-6">
                Ready for <span className="text-primary text-shadow-neon">Ultimate Protection</span>?
              </h2>
              <p className="text-lg max-w-3xl mx-auto mb-8 text-gray-300">
                Transform your vehicle with our professional ceramic coating services. Contact us today to schedule your appointment and enjoy years of superior protection.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/booking">
                  <a className="bg-primary text-black font-bold py-3 px-8 rounded-full text-lg hover:shadow-neon-lg transition duration-300 transform hover:-translate-y-1 inline-block text-center">
                    Book Your Appointment
                  </a>
                </Link>
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
      </main>
      
      <Footer />
    </div>
  );
};

export default CeramicCoatingPage;