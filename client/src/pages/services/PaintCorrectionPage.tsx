import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'wouter';

const PaintCorrectionPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Paint Correction Services | SWANKIES Elite Detail & Restoration</title>
        <meta name="description" content="Professional paint correction services to remove swirls, scratches, and imperfections from your vehicle's paint. Mobile service available across Oklahoma and Arkansas." />
        <meta name="keywords" content="paint correction, swirl removal, scratch removal, paint restoration, auto detailing, mobile detailing, Oklahoma, Arkansas" />
        <link rel="canonical" href="https://swankieselite.com/services/paint-correction" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Paint Correction Services | SWANKIES Elite Detail & Restoration" />
        <meta property="og:description" content="Professional paint correction services to restore your vehicle's paint to a flawless finish." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://swankieselite.com/services/paint-correction" />
        <meta property="og:image" content="https://swankieselite.com/og-paint-correction.jpg" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Paint Correction",
            "provider": {
              "@type": "LocalBusiness",
              "name": "SWANKIES Elite Detail & Restoration",
              "telephone": "+19188227188",
              "areaServed": ["Northeast Oklahoma", "Northwest Arkansas"]
            },
            "description": "Professional paint correction services to remove swirls, scratches, and imperfections from your vehicle's paint.",
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
            backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.6)), url('https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg?auto=compress&cs=tinysrgb&w=1280')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-4 leading-tight">
                Professional <span className="text-primary text-shadow-neon">Paint Correction</span> Services
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Restore your vehicle's finish to a flawless, showroom-quality appearance with our certified paint correction services.
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
        
        {/* What is Paint Correction */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="font-montserrat font-bold text-3xl mb-6">
                  What is <span className="text-primary text-shadow-neon">Paint Correction</span>?
                </h2>
                <p className="text-lg mb-6 text-gray-300">
                  Paint correction is a specialized detailing process that removes imperfections from your vehicle's clear coat and paint to restore a flawless finish. This transformative service addresses common issues like:
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">✓</span>
                    <span>Swirl marks and fine scratches</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">✓</span>
                    <span>Water spots and etching</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">✓</span>
                    <span>Oxidation and fading</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">✓</span>
                    <span>Buffer trails from improper detailing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">✓</span>
                    <span>Minor clear coat damage</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-2xl shadow-primary/30">
                  <img 
                    src="https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg?auto=compress&cs=tinysrgb&w=1280" 
                    alt="Paint correction process on vehicle" 
                    className="w-full h-[400px] object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                    <div className="bg-black/50 p-4 backdrop-blur-sm rounded-lg border border-primary/30">
                      <h3 className="text-primary font-bold text-xl mb-2">Certified Professionals</h3>
                      <p className="text-white text-sm">Our technicians are certified and trained in advanced paint correction techniques</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Our Process */}
            <div className="mb-16">
              <h2 className="font-montserrat font-bold text-3xl mb-8 text-center">
                Our Paint Correction <span className="text-primary text-shadow-neon">Process</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-card/50 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all">
                  <div className="bg-primary/20 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                    <span className="text-primary font-bold text-xl">1</span>
                  </div>
                  <h3 className="font-bold text-xl mb-4 text-primary">Assessment</h3>
                  <p className="text-gray-300">
                    We thoroughly examine your vehicle's paint to identify all imperfections and determine the appropriate correction steps needed.
                  </p>
                </div>
                
                <div className="bg-card/50 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all">
                  <div className="bg-primary/20 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                    <span className="text-primary font-bold text-xl">2</span>
                  </div>
                  <h3 className="font-bold text-xl mb-4 text-primary">Surface Preparation</h3>
                  <p className="text-gray-300">
                    Your vehicle is thoroughly washed, decontaminated, and clay barred to remove all surface contaminants before the correction process begins.
                  </p>
                </div>
                
                <div className="bg-card/50 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all">
                  <div className="bg-primary/20 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                    <span className="text-primary font-bold text-xl">3</span>
                  </div>
                  <h3 className="font-bold text-xl mb-4 text-primary">Correction</h3>
                  <p className="text-gray-300">
                    Using professional-grade tools and compounds, our certified technicians methodically remove imperfections through multi-stage polishing.
                  </p>
                </div>
                
                <div className="bg-card/50 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all">
                  <div className="bg-primary/20 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                    <span className="text-primary font-bold text-xl">4</span>
                  </div>
                  <h3 className="font-bold text-xl mb-4 text-primary">Protection</h3>
                  <p className="text-gray-300">
                    The corrected paint is sealed with a high-quality wax, sealant, or ceramic coating to protect your investment and maintain the flawless finish.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Paint Correction Packages */}
            <div className="mb-16">
              <h2 className="font-montserrat font-bold text-3xl mb-8 text-center">
                Paint Correction <span className="text-primary text-shadow-neon">Packages</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-card/50 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all">
                  <h3 className="font-bold text-xl mb-2 text-primary">Single-Stage Correction</h3>
                  <p className="text-sm text-gray-400 mb-4">For vehicles with minor imperfections</p>
                  <ul className="space-y-2 text-gray-300 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Removes light swirl marks and minor scratches</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Restores gloss and clarity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Includes sealant protection</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>60-70% imperfection removal</span>
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
                  <h3 className="font-bold text-xl mb-2 text-primary">Two-Stage Correction</h3>
                  <p className="text-sm text-gray-400 mb-4">For vehicles with moderate imperfections</p>
                  <ul className="space-y-2 text-gray-300 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Removes moderate swirls, scratches, and oxidation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Enhances depth and reflection</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Includes high-grade sealant or ceramic coating</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>80-90% imperfection removal</span>
                    </li>
                  </ul>
                  <Link href="/booking">
                    <a className="inline-block bg-primary text-black font-bold py-2 px-6 rounded-full hover:shadow-neon-sm transition duration-300 transform hover:-translate-y-1 w-full text-center">
                      Book Now
                    </a>
                  </Link>
                </div>
                
                <div className="bg-card/50 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all">
                  <h3 className="font-bold text-xl mb-2 text-primary">Multi-Stage Correction</h3>
                  <p className="text-sm text-gray-400 mb-4">For vehicles with severe imperfections</p>
                  <ul className="space-y-2 text-gray-300 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Removes heavy swirls, scratches, and oxidation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Maximum gloss and mirror-like finish</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Includes premium ceramic coating</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>95%+ imperfection removal</span>
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
            
            {/* Why Choose Us */}
            <div className="bg-gradient-dark-2 rounded-xl p-8 mb-16">
              <h2 className="font-montserrat font-bold text-3xl mb-6 text-center">
                Why Choose <span className="text-primary text-shadow-neon">SWANKIES</span> for Paint Correction?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-black/30 rounded-lg p-5">
                  <h3 className="font-bold text-xl mb-3 text-primary">Certified Technicians</h3>
                  <p className="text-gray-300">
                    Our detailers are professionally trained and certified in advanced paint correction techniques, ensuring optimal results every time.
                  </p>
                </div>
                
                <div className="bg-black/30 rounded-lg p-5">
                  <h3 className="font-bold text-xl mb-3 text-primary">Premium Products</h3>
                  <p className="text-gray-300">
                    We use only professional-grade compounds, polishes, and equipment that deliver superior results without compromising your vehicle's paint.
                  </p>
                </div>
                
                <div className="bg-black/30 rounded-lg p-5">
                  <h3 className="font-bold text-xl mb-3 text-primary">Mobile Service</h3>
                  <p className="text-gray-300">
                    We bring our expertise directly to your location across Northeast Oklahoma and Northwest Arkansas for maximum convenience.
                  </p>
                </div>
                
                <div className="bg-black/30 rounded-lg p-5">
                  <h3 className="font-bold text-xl mb-3 text-primary">Tailored Approach</h3>
                  <p className="text-gray-300">
                    Every vehicle receives a customized correction plan based on its specific condition, paint type, and your desired outcome.
                  </p>
                </div>
                
                <div className="bg-black/30 rounded-lg p-5">
                  <h3 className="font-bold text-xl mb-3 text-primary">Comprehensive Service</h3>
                  <p className="text-gray-300">
                    From thorough preparation to final protection, we provide complete care for your vehicle throughout the entire correction process.
                  </p>
                </div>
                
                <div className="bg-black/30 rounded-lg p-5">
                  <h3 className="font-bold text-xl mb-3 text-primary">Lasting Results</h3>
                  <p className="text-gray-300">
                    Our paint correction services not only transform your vehicle's appearance but also include protection to maintain that flawless finish.
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
                  <h3 className="font-bold text-xl mb-2 text-white">How long does paint correction take?</h3>
                  <p className="text-gray-300">
                    The time required depends on your vehicle's size and condition. Single-stage correction typically takes 4-6 hours, while multi-stage correction can take 1-2 days for optimal results.
                  </p>
                </div>
                
                <div className="bg-card/30 rounded-xl p-6 border border-primary/20">
                  <h3 className="font-bold text-xl mb-2 text-white">How long will results last?</h3>
                  <p className="text-gray-300">
                    With proper maintenance and protection, paint correction results can last 1-3 years. Adding a ceramic coating after correction can extend this to 5+ years.
                  </p>
                </div>
                
                <div className="bg-card/30 rounded-xl p-6 border border-primary/20">
                  <h3 className="font-bold text-xl mb-2 text-white">Is paint correction safe for all vehicles?</h3>
                  <p className="text-gray-300">
                    Yes, when performed by certified professionals. We assess your vehicle's paint thickness and condition to ensure safe correction without compromising the clear coat or paint integrity.
                  </p>
                </div>
                
                <div className="bg-card/30 rounded-xl p-6 border border-primary/20">
                  <h3 className="font-bold text-xl mb-2 text-white">Can all scratches be removed?</h3>
                  <p className="text-gray-300">
                    Paint correction can remove most surface-level imperfections that haven't penetrated through the clear coat. Deep scratches that reach the base paint or primer may require professional repainting.
                  </p>
                </div>
              </div>
            </div>
            
            {/* CTA */}
            <div className="bg-gradient-dark rounded-xl p-8 text-center">
              <h2 className="font-montserrat font-bold text-3xl mb-6">
                Ready for a <span className="text-primary text-shadow-neon">Flawless Finish</span>?
              </h2>
              <p className="text-lg max-w-3xl mx-auto mb-8 text-gray-300">
                Transform your vehicle's appearance with our professional paint correction services. Contact us today to schedule your appointment.
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

export default PaintCorrectionPage;