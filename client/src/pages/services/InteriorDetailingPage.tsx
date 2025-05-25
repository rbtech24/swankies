import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'wouter';

const InteriorDetailingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Interior Detailing Services | SWANKIES Elite Detail & Restoration</title>
        <meta name="description" content="Professional interior detailing services for your vehicle, boat, or motorcycle. Deep cleaning, sanitizing, and conditioning for all interior surfaces. Mobile service available across Oklahoma and Arkansas." />
        <meta name="keywords" content="interior detailing, car interior cleaning, leather conditioning, upholstery cleaning, carpet cleaning, auto detailing, mobile detailing, Oklahoma, Arkansas" />
        <link rel="canonical" href="https://swankieselite.com/services/interior-detailing" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Interior Detailing Services | SWANKIES Elite Detail & Restoration" />
        <meta property="og:description" content="Professional interior detailing services for deep cleaning, sanitizing, and conditioning all interior surfaces." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://swankieselite.com/services/interior-detailing" />
        <meta property="og:image" content="https://swankieselite.com/og-interior-detailing.jpg" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Interior Detailing",
            "provider": {
              "@type": "LocalBusiness",
              "name": "SWANKIES Elite Detail & Restoration",
              "telephone": "+19188227188",
              "areaServed": ["Northeast Oklahoma", "Northwest Arkansas"]
            },
            "description": "Professional interior detailing services for deep cleaning, sanitizing, and conditioning all interior surfaces of vehicles, boats, and motorcycles.",
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
            backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.6)), url('https://images.pexels.com/photos/3807319/pexels-photo-3807319.jpeg?auto=compress&cs=tinysrgb&w=1280')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-4 leading-tight">
                Professional <span className="text-primary text-shadow-neon">Interior Detailing</span> Services
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Revitalize your vehicle's interior with our comprehensive detailing services, eliminating dirt, stains, and odors while restoring and protecting all surfaces.
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
        
        {/* What is Interior Detailing */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="font-montserrat font-bold text-3xl mb-6">
                  What is <span className="text-primary text-shadow-neon">Interior Detailing</span>?
                </h2>
                <p className="text-lg mb-6 text-gray-300">
                  Interior detailing is a comprehensive cleaning and restoration process that addresses every surface inside your vehicle. Unlike a basic interior cleaning, our professional interior detailing service:
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">✓</span>
                    <span>Deep cleans all surfaces including hard-to-reach areas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">✓</span>
                    <span>Removes embedded dirt, stains, and bacteria</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">✓</span>
                    <span>Eliminates odors at their source</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">✓</span>
                    <span>Conditions and protects surfaces from future damage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">✓</span>
                    <span>Sanitizes high-touch areas for a healthier environment</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-2xl shadow-primary/30">
                  <img 
                    src="https://images.pexels.com/photos/3807319/pexels-photo-3807319.jpeg?auto=compress&cs=tinysrgb&w=1280" 
                    alt="Car interior detailing process" 
                    className="w-full h-[400px] object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                    <div className="bg-black/50 p-4 backdrop-blur-sm rounded-lg border border-primary/30">
                      <h3 className="text-primary font-bold text-xl mb-2">Professional Techniques</h3>
                      <p className="text-white text-sm">We use specialized tools and products for safe and effective cleaning</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Our Process */}
            <div className="mb-16">
              <h2 className="font-montserrat font-bold text-3xl mb-8 text-center">
                Our Interior Detailing <span className="text-primary text-shadow-neon">Process</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-card/50 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all">
                  <div className="bg-primary/20 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                    <span className="text-primary font-bold text-xl">1</span>
                  </div>
                  <h3 className="font-bold text-xl mb-4 text-primary">Preparation & Inspection</h3>
                  <p className="text-gray-300">
                    We begin with a thorough inspection and removal of personal items, followed by debris removal and initial vacuuming to prepare for deep cleaning.
                  </p>
                </div>
                
                <div className="bg-card/50 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all">
                  <div className="bg-primary/20 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                    <span className="text-primary font-bold text-xl">2</span>
                  </div>
                  <h3 className="font-bold text-xl mb-4 text-primary">Deep Cleaning</h3>
                  <p className="text-gray-300">
                    Using specialized tools and cleaners, we thoroughly clean all surfaces including carpets, upholstery, leather, plastics, and glass to remove dirt and stains.
                  </p>
                </div>
                
                <div className="bg-card/50 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all">
                  <div className="bg-primary/20 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                    <span className="text-primary font-bold text-xl">3</span>
                  </div>
                  <h3 className="font-bold text-xl mb-4 text-primary">Odor Elimination</h3>
                  <p className="text-gray-300">
                    We target odor sources with professional-grade treatments and sanitizers to eliminate, not just mask, unpleasant smells for a truly fresh interior.
                  </p>
                </div>
                
                <div className="bg-card/50 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all">
                  <div className="bg-primary/20 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                    <span className="text-primary font-bold text-xl">4</span>
                  </div>
                  <h3 className="font-bold text-xl mb-4 text-primary">Protection & Finishing</h3>
                  <p className="text-gray-300">
                    We apply appropriate conditioners and protectants to each surface type, enhancing appearance and providing long-lasting protection against future damage.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Interior Detailing Packages */}
            <div className="mb-16">
              <h2 className="font-montserrat font-bold text-3xl mb-8 text-center">
                Interior Detailing <span className="text-primary text-shadow-neon">Packages</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-card/50 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all">
                  <h3 className="font-bold text-xl mb-2 text-primary">Essential Interior</h3>
                  <p className="text-sm text-gray-400 mb-4">Basic interior refresh</p>
                  <ul className="space-y-2 text-gray-300 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Thorough vacuuming</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Surface cleaning of all interior panels</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Window and mirror cleaning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Surface protectant application</span>
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
                  <h3 className="font-bold text-xl mb-2 text-primary">Premium Interior</h3>
                  <p className="text-sm text-gray-400 mb-4">Complete interior detailing</p>
                  <ul className="space-y-2 text-gray-300 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Deep vacuuming and extraction</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Stain removal from carpet and upholstery</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Leather cleaning and conditioning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Thorough cleaning of all surfaces</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Odor elimination</span>
                    </li>
                  </ul>
                  <Link href="/booking">
                    <a className="inline-block bg-primary text-black font-bold py-2 px-6 rounded-full hover:shadow-neon-sm transition duration-300 transform hover:-translate-y-1 w-full text-center">
                      Book Now
                    </a>
                  </Link>
                </div>
                
                <div className="bg-card/50 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all">
                  <h3 className="font-bold text-xl mb-2 text-primary">Elite Interior</h3>
                  <p className="text-sm text-gray-400 mb-4">Ultimate interior restoration</p>
                  <ul className="space-y-2 text-gray-300 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Everything in Premium package</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Steam cleaning for disinfection</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Complete detail of all compartments</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Headliner cleaning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Premium protectants with UV guard</span>
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
            
            {/* Surface Specific Treatments */}
            <div className="bg-gradient-dark-2 rounded-xl p-8 mb-16">
              <h2 className="font-montserrat font-bold text-3xl mb-6 text-center">
                Surface-Specific <span className="text-primary text-shadow-neon">Treatments</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-black/30 rounded-lg p-5">
                  <h3 className="font-bold text-xl mb-3 text-primary">Leather Care</h3>
                  <p className="text-gray-300">
                    Our leather treatment process thoroughly cleans, conditions, and protects leather surfaces, preventing cracking and fading while restoring a supple feel and natural appearance.
                  </p>
                </div>
                
                <div className="bg-black/30 rounded-lg p-5">
                  <h3 className="font-bold text-xl mb-3 text-primary">Carpet & Upholstery</h3>
                  <p className="text-gray-300">
                    We use hot water extraction and specialized cleaning agents to remove deep-seated dirt, stains, and allergens from carpets and fabric upholstery, leaving them fresh and revitalized.
                  </p>
                </div>
                
                <div className="bg-black/30 rounded-lg p-5">
                  <h3 className="font-bold text-xl mb-3 text-primary">Plastic & Vinyl</h3>
                  <p className="text-gray-300">
                    Plastic and vinyl surfaces receive thorough cleaning followed by application of specialized dressings that restore color and provide UV protection without leaving a greasy residue.
                  </p>
                </div>
                
                <div className="bg-black/30 rounded-lg p-5">
                  <h3 className="font-bold text-xl mb-3 text-primary">Headliner Care</h3>
                  <p className="text-gray-300">
                    Our gentle headliner cleaning process removes stains and accumulated grime without compromising the adhesive backing, preventing sagging while restoring a clean appearance.
                  </p>
                </div>
                
                <div className="bg-black/30 rounded-lg p-5">
                  <h3 className="font-bold text-xl mb-3 text-primary">Interior Glass</h3>
                  <p className="text-gray-300">
                    We clean all interior glass surfaces to a streak-free finish, removing film buildup, fingerprints, and haze for improved visibility and a crystal-clear appearance.
                  </p>
                </div>
                
                <div className="bg-black/30 rounded-lg p-5">
                  <h3 className="font-bold text-xl mb-3 text-primary">Odor Elimination</h3>
                  <p className="text-gray-300">
                    Our comprehensive odor elimination process targets odor-causing bacteria at their source using specialized treatments, ozone technology, and enzyme-based solutions for long-lasting freshness.
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
                  <h3 className="font-bold text-xl mb-2 text-white">How long does interior detailing take?</h3>
                  <p className="text-gray-300">
                    Most interior detailing services take between 3-6 hours depending on the vehicle's size and condition. Our Elite Interior package may take up to 8 hours for larger vehicles with heavy soiling.
                  </p>
                </div>
                
                <div className="bg-card/30 rounded-xl p-6 border border-primary/20">
                  <h3 className="font-bold text-xl mb-2 text-white">Can you remove all stains from upholstery?</h3>
                  <p className="text-gray-300">
                    While we can remove most stains, some permanent stains may remain if they've set for too long or have already damaged the fabric. Our technicians will be honest about what can be achieved during the initial assessment.
                  </p>
                </div>
                
                <div className="bg-card/30 rounded-xl p-6 border border-primary/20">
                  <h3 className="font-bold text-xl mb-2 text-white">How often should I get my interior detailed?</h3>
                  <p className="text-gray-300">
                    For most vehicles, we recommend a full interior detailing every 4-6 months. Vehicles exposed to children, pets, smoking, or frequent use may benefit from more frequent detailing every 2-3 months.
                  </p>
                </div>
                
                <div className="bg-card/30 rounded-xl p-6 border border-primary/20">
                  <h3 className="font-bold text-xl mb-2 text-white">Will interior detailing eliminate all odors?</h3>
                  <p className="text-gray-300">
                    Our odor elimination process is highly effective for most common odors. However, severe odors from water damage, cigarette smoke, or pet accidents may require multiple treatments or specialized services for complete elimination.
                  </p>
                </div>
              </div>
            </div>
            
            {/* CTA */}
            <div className="bg-gradient-dark rounded-xl p-8 text-center">
              <h2 className="font-montserrat font-bold text-3xl mb-6">
                Ready for a <span className="text-primary text-shadow-neon">Fresh Interior</span>?
              </h2>
              <p className="text-lg max-w-3xl mx-auto mb-8 text-gray-300">
                Transform your vehicle's interior with our professional detailing services. Contact us today to schedule your appointment and enjoy a cleaner, healthier, and more comfortable ride.
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

export default InteriorDetailingPage;