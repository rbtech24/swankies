import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import { Link } from "wouter";
import { Helmet } from "react-helmet";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Premium Detailing Services | Auto, Boat & Motorcycle | SWANKIES Elite</title>
        <meta name="description" content="Comprehensive auto, boat, and motorcycle detailing services including ceramic coating, paint correction, and interior detailing. Mobile service available in Oklahoma and Arkansas." />
        <meta name="keywords" content="auto detailing, boat detailing, motorcycle detailing, ceramic coating, paint correction, interior detailing, mobile detailing, Oklahoma, Arkansas" />
        <link rel="canonical" href="https://swankieselite.com/services" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Premium Detailing Services | SWANKIES Elite Detail & Restoration" />
        <meta property="og:description" content="Professional detailing services for auto, boat, and motorcycle with ceramic coating and paint correction. Mobile service available." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://swankieselite.com/services" />
        <meta property="og:image" content="https://swankieselite.com/og-services.jpg" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Vehicle Detailing Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "SWANKIES Elite Detail & Restoration",
              "telephone": "+19188227188",
              "areaServed": ["Northeast Oklahoma", "Northwest Arkansas"]
            },
            "description": "Professional detailing services for automobiles, boats, and motorcycles including ceramic coating, paint correction, and interior detailing.",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Detailing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Auto Detailing"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Boat Detailing"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Motorcycle Detailing"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Ceramic Coating"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Paint Correction"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-dark-2">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
              Our <span className="text-primary text-shadow-neon">Premium</span> Services
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 mb-8">
              Comprehensive detailing services for your vehicle, boat, and motorcycle, delivered with precision and care.
            </p>
          </div>
        </section>
        
        {/* Service Cards */}
        <Services />
        
        {/* Detailed Services Sections */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            {/* Auto Detailing */}
            <div className="mb-20">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-montserrat font-bold text-3xl">
                  <span className="text-primary text-shadow-neon">Auto</span> Detailing
                </h2>
                <Link href="/services/auto-detailing">
                  <a className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-black font-bold py-2 px-6 rounded-full transition duration-300">
                    View Details
                  </a>
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                <div className="bg-card/50 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all">
                  <h3 className="font-bold text-xl mb-4 text-primary">Mobile Automotive Detailing</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Certified Interior & Exterior Detailing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Certified Paint Correction</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Certified Ceramic Coating</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Engine Detailing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Window Tinting</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-card/50 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all">
                  <h3 className="font-bold text-xl mb-4 text-primary">Surface Treatment</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Glass/Mirror Ceramic Coating</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Decontamination/Sealants/Wax</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Odor/Bacteria Removal</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Headlight Restoration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Plastic Restoration</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-card/50 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all">
                  <h3 className="font-bold text-xl mb-4 text-primary">Premium Auto Detailing</h3>
                  <p className="text-gray-300 mb-4">
                    Having your car detailed by a trained and certified professional isn't just about making it look good — it's about protecting your investment.
                  </p>
                  <p className="text-gray-300">
                    Certified detailers use proper techniques and high-quality products to safely clean, correct, and protect your vehicle's surfaces, preserving the paint, interior materials, and overall condition.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Boat Detailing */}
            <div className="mb-20">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-montserrat font-bold text-3xl">
                  <span className="text-primary text-shadow-neon">Boat</span> Detailing
                </h2>
                <Link href="/services/boat-detailing">
                  <a className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-black font-bold py-2 px-6 rounded-full transition duration-300">
                    View Details
                  </a>
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                <div className="bg-card/50 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all">
                  <h3 className="font-bold text-xl mb-4 text-primary">Mobile Marine Detailing</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Complete Hull & Topside Detailing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Decontamination/Wax/Sealant</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Marine Certified Ceramic Coating</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Gel Coat/Paint Correction</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Sanding (Certified)</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-card/50 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all">
                  <h3 className="font-bold text-xl mb-4 text-primary">Marine Finishing</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Metal Polishing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Glass Ceramic Coating</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Plastic Restoration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>UV Protection Treatments</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-card/50 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all">
                  <h3 className="font-bold text-xl mb-4 text-primary">Marine Polishing & Coating</h3>
                  <p className="text-gray-300 mb-4">
                    Having your boat professionally polished and ceramic coated by a certified detailer is one of the best ways to restore its original shine—or preserve it if the boat is new.
                  </p>
                  <p className="text-gray-300">
                    For new boats, proper maintenance from the start is key to achieving maximum protection and retaining long-term value.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Motorcycle Detailing */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-montserrat font-bold text-3xl">
                  <span className="text-primary text-shadow-neon">Motorcycle</span> Detailing
                </h2>
                <Link href="/services/motorcycle-detailing">
                  <a className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-black font-bold py-2 px-6 rounded-full transition duration-300">
                    View Details
                  </a>
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                <div className="bg-card/50 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all">
                  <h3 className="font-bold text-xl mb-4 text-primary">Mobile Motorcycle Detailing</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Complete Bike Wash & Detail</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Chrome & Metal Polishing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Certified Paint Correction</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Ceramic Coating</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Leather Conditioning/Protection</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-card/50 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all">
                  <h3 className="font-bold text-xl mb-4 text-primary">Specialized Treatments</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Windshield/Headlight/Mirror Ceramic Coating</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Plastic Restoration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Mobile Service Available</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-card/50 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all">
                  <h3 className="font-bold text-xl mb-4 text-primary">Motorcycle Care</h3>
                  <p className="text-gray-300 mb-4">
                    Getting your motorcycle professionally detailed by a certified expert is key to keeping it looking sharp and holding its value—whether it's a Harley cruiser or a Honda or Yamaha sport bike.
                  </p>
                  <p className="text-gray-300">
                    Adding a ceramic coating creates a durable, long-lasting barrier against UV rays, chemicals, and scratches.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-dark-2">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6">
              Ready to <span className="text-primary text-shadow-neon">Transform</span> Your Vehicle?
            </h2>
            <p className="text-lg max-w-3xl mx-auto mb-10 text-gray-300">
              Contact us today to schedule your premium detailing service. We bring our expertise and equipment directly to your location across Northeast Oklahoma and Northwest Arkansas.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#contact" 
                className="bg-primary text-primary-foreground font-bold py-4 px-8 rounded-full text-lg hover:shadow-neon-lg transition duration-300 transform hover:-translate-y-1"
              >
                Book Your Service
              </a>
              <a 
                href="tel:9188227188" 
                className="bg-transparent border-2 border-white hover:border-primary text-white hover:text-primary font-bold py-4 px-8 rounded-full text-lg transition duration-300 transform hover:-translate-y-1"
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

export default ServicesPage;