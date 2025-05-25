import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'wouter';

const AutoDetailingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Professional Auto Detailing Services | SWANKIES Elite Detail & Restoration</title>
        <meta name="description" content="Premium mobile auto detailing services including paint correction, ceramic coating, interior detailing, and engine bay cleaning. Serving Oklahoma and Arkansas." />
        <meta property="og:title" content="Professional Auto Detailing | SWANKIES Elite Detail & Restoration" />
        <meta property="og:description" content="Mobile auto detailing services with certified technicians. Premium exterior and interior detailing that comes to your location." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&w=1280" />
        <meta name="keywords" content="auto detailing, car detailing, mobile detailing, paint correction, ceramic coating, interior detailing, engine detailing, headlight restoration, Oklahoma, Arkansas" />
        <link rel="canonical" href="https://swankieselite.com/services/auto-detailing" />
      </Helmet>
      
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section 
          className="py-20 bg-gradient-dark-2 relative"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.6)), url('https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&w=1280')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6 leading-tight">
                Professional <span className="text-primary text-shadow-neon">Auto Detailing</span> Services
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Premium mobile detailing services that bring certified expertise and professional-grade products directly to your location. Protect your investment with our comprehensive auto detailing packages.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/contact" 
                  className="bg-primary text-black font-bold py-3 px-8 rounded-full text-lg hover:shadow-neon-lg transition duration-300 transform hover:-translate-y-1 inline-block text-center"
                >
                  Book Your Detail
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
        
        {/* Why Choose Us */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-montserrat font-bold text-3xl mb-12 text-center">
              Why Choose <span className="text-primary text-shadow-neon">SWANKIES</span> For Your Vehicle
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-card/30 p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-all">
                <div className="text-primary text-4xl mb-4">
                  <i className="fas fa-certificate"></i>
                </div>
                <h3 className="font-bold text-xl mb-4">Certified Technicians</h3>
                <p className="text-gray-300">
                  Our technicians are certified in paint correction, ceramic coating application, and interior detailing techniques, ensuring your vehicle receives the highest quality care.
                </p>
              </div>
              
              <div className="bg-card/30 p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-all">
                <div className="text-primary text-4xl mb-4">
                  <i className="fas fa-star"></i>
                </div>
                <h3 className="font-bold text-xl mb-4">Premium Products</h3>
                <p className="text-gray-300">
                  We use only the highest quality, professional-grade detailing products that deliver exceptional results while being safe for your vehicle's surfaces.
                </p>
              </div>
              
              <div className="bg-card/30 p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-all">
                <div className="text-primary text-4xl mb-4">
                  <i className="fas fa-home"></i>
                </div>
                <h3 className="font-bold text-xl mb-4">Mobile Convenience</h3>
                <p className="text-gray-300">
                  Our fully-equipped mobile detailing unit comes to your location—home, office, or anywhere convenient for you across Northeast Oklahoma and Northwest Arkansas.
                </p>
              </div>
              
              <div className="bg-card/30 p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-all">
                <div className="text-primary text-4xl mb-4">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3 className="font-bold text-xl mb-4">Long-Term Protection</h3>
                <p className="text-gray-300">
                  Our ceramic coating and paint protection services create a durable barrier against environmental contaminants, UV rays, and everyday wear.
                </p>
              </div>
              
              <div className="bg-card/30 p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-all">
                <div className="text-primary text-4xl mb-4">
                  <i className="fas fa-tachometer-alt"></i>
                </div>
                <h3 className="font-bold text-xl mb-4">Value Preservation</h3>
                <p className="text-gray-300">
                  Regular professional detailing maintains your vehicle's appearance and condition, helping preserve its resale value and extending its lifespan.
                </p>
              </div>
              
              <div className="bg-card/30 p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-all">
                <div className="text-primary text-4xl mb-4">
                  <i className="fas fa-thumbs-up"></i>
                </div>
                <h3 className="font-bold text-xl mb-4">Satisfaction Guaranteed</h3>
                <p className="text-gray-300">
                  We stand behind our work with a satisfaction guarantee. If you're not completely satisfied with our service, we'll make it right.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Service Packages */}
        <section className="py-16 bg-gradient-dark">
          <div className="container mx-auto px-4">
            <h2 className="font-montserrat font-bold text-3xl mb-12 text-center">
              Our Auto Detailing <span className="text-primary text-shadow-neon">Packages</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Package 1 */}
              <div className="bg-card/50 rounded-xl p-6 shadow-lg border border-primary/20 hover:border-primary/60 transition-all hover:shadow-neon-sm">
                <h3 className="font-montserrat font-bold text-2xl mb-4 text-center">Essential Detail</h3>
                <div className="text-center mb-6">
                  <span className="text-primary text-4xl font-bold">$149</span>
                  <span className="text-gray-400 ml-1">starting at</span>
                </div>
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
              <div className="bg-card/50 rounded-xl p-6 shadow-lg border-2 border-primary shadow-neon-sm transform scale-105 relative z-10">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-black text-sm font-bold py-1 px-4 rounded-full">
                  MOST POPULAR
                </div>
                <h3 className="font-montserrat font-bold text-2xl mb-4 text-center">Premium Detail</h3>
                <div className="text-center mb-6">
                  <span className="text-primary text-4xl font-bold">$249</span>
                  <span className="text-gray-400 ml-1">starting at</span>
                </div>
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
              <div className="bg-card/50 rounded-xl p-6 shadow-lg border border-primary/20 hover:border-primary/60 transition-all hover:shadow-neon-sm">
                <h3 className="font-montserrat font-bold text-2xl mb-4 text-center">Elite Restoration</h3>
                <div className="text-center mb-6">
                  <span className="text-primary text-4xl font-bold">$399</span>
                  <span className="text-gray-400 ml-1">starting at</span>
                </div>
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
            
            <p className="text-center text-gray-400 italic">
              * Pricing varies based on vehicle size, condition, and specific requirements. Contact us for a personalized quote.
            </p>
          </div>
        </section>
        
        {/* Specialized Services */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-montserrat font-bold text-3xl mb-12 text-center">
              Specialized <span className="text-primary text-shadow-neon">Services</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-card/30 rounded-xl overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/3826583/pexels-photo-3826583.jpeg?auto=compress&cs=tinysrgb&w=1280" 
                    alt="Professional Paint Correction" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-montserrat font-bold text-2xl mb-4">Paint Correction</h3>
                  <p className="text-gray-300 mb-6">
                    Our multi-stage paint correction process removes swirls, scratches, and imperfections to restore your vehicle's finish to a mirror-like shine. Using professional-grade compounds and polishes, we carefully remove surface defects while preserving your paint's integrity.
                  </p>
                  <Link href="/services/paint-correction">
                    <a className="text-primary hover:underline font-bold inline-flex items-center">
                      Learn More <i className="fas fa-arrow-right ml-2"></i>
                    </a>
                  </Link>
                </div>
              </div>
              
              <div className="bg-card/30 rounded-xl overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg?auto=compress&cs=tinysrgb&w=1280" 
                    alt="Ceramic Coating Application" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-montserrat font-bold text-2xl mb-4">Ceramic Coating</h3>
                  <p className="text-gray-300 mb-6">
                    Protect your vehicle's paint with our professional ceramic coating services. This advanced liquid polymer creates a permanent bond with your paint, providing long-lasting protection against UV rays, chemical stains, and environmental contaminants while enhancing gloss and making cleaning easier.
                  </p>
                  <Link href="/services/ceramic-coating">
                    <a className="text-primary hover:underline font-bold inline-flex items-center">
                      Learn More <i className="fas fa-arrow-right ml-2"></i>
                    </a>
                  </Link>
                </div>
              </div>
              
              <div className="bg-card/30 rounded-xl overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/2922140/pexels-photo-2922140.jpeg?auto=compress&cs=tinysrgb&w=1280" 
                    alt="Interior Detailing Services" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-montserrat font-bold text-2xl mb-4">Interior Detailing</h3>
                  <p className="text-gray-300 mb-6">
                    Our comprehensive interior detailing restores your vehicle's cabin to showroom condition. We deep clean all surfaces, including carpet, upholstery, leather, dashboard, console, and hard-to-reach areas, eliminating stains, odors, and bacteria while applying protective treatments.
                  </p>
                  <Link href="/services/interior-detailing">
                    <a className="text-primary hover:underline font-bold inline-flex items-center">
                      Learn More <i className="fas fa-arrow-right ml-2"></i>
                    </a>
                  </Link>
                </div>
              </div>
              
              <div className="bg-card/30 rounded-xl overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/2500706/pexels-photo-2500706.jpeg?auto=compress&cs=tinysrgb&w=1280" 
                    alt="Headlight Restoration" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-montserrat font-bold text-2xl mb-4">Headlight Restoration</h3>
                  <p className="text-gray-300 mb-6">
                    Restore visibility and improve your vehicle's appearance with our headlight restoration service. We remove yellowing, oxidation, and haziness from your headlights, improving nighttime visibility and enhancing your vehicle's overall look with a professional sealant application.
                  </p>
                  <a href="/contact" className="text-primary hover:underline font-bold inline-flex items-center">
                    Get a Quote <i className="fas fa-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-16 bg-gradient-dark-2">
          <div className="container mx-auto px-4">
            <h2 className="font-montserrat font-bold text-3xl mb-12 text-center">
              Our Detailing <span className="text-primary text-shadow-neon">Process</span>
            </h2>
            
            <div className="max-w-4xl mx-auto mb-16">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary/30"></div>
                
                {/* Step 1 */}
                <div className="relative flex flex-col md:flex-row items-center mb-12">
                  <div className="flex-1 md:pr-8 md:text-right mb-6 md:mb-0">
                    <h3 className="font-bold text-xl mb-2">Initial Assessment</h3>
                    <p className="text-gray-300">
                      We thoroughly evaluate your vehicle's condition, identifying areas that need special attention and discussing your specific goals and expectations.
                    </p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-black font-bold">1</div>
                  <div className="flex-1 md:pl-8"></div>
                </div>
                
                {/* Step 2 */}
                <div className="relative flex flex-col md:flex-row-reverse items-center mb-12">
                  <div className="flex-1 md:pl-8 mb-6 md:mb-0">
                    <h3 className="font-bold text-xl mb-2">Pre-Washing Process</h3>
                    <p className="text-gray-300">
                      We start with a thorough pre-washing process to safely remove surface contaminants, using specialized tools and products to prevent scratching or damaging your paint.
                    </p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-black font-bold">2</div>
                  <div className="flex-1 md:pr-8"></div>
                </div>
                
                {/* Step 3 */}
                <div className="relative flex flex-col md:flex-row items-center mb-12">
                  <div className="flex-1 md:pr-8 md:text-right mb-6 md:mb-0">
                    <h3 className="font-bold text-xl mb-2">Decontamination</h3>
                    <p className="text-gray-300">
                      Using clay bar technology and specialized chemicals, we remove embedded contaminants from your paint surface that washing alone cannot remove.
                    </p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-black font-bold">3</div>
                  <div className="flex-1 md:pl-8"></div>
                </div>
                
                {/* Step 4 */}
                <div className="relative flex flex-col md:flex-row-reverse items-center mb-12">
                  <div className="flex-1 md:pl-8 mb-6 md:mb-0">
                    <h3 className="font-bold text-xl mb-2">Paint Correction (if needed)</h3>
                    <p className="text-gray-300">
                      For vehicles requiring paint correction, we use professional-grade compounds and polishes to remove swirls, scratches, and oxidation, restoring your paint's clarity and shine.
                    </p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-black font-bold">4</div>
                  <div className="flex-1 md:pr-8"></div>
                </div>
                
                {/* Step 5 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 md:text-right mb-6 md:mb-0">
                    <h3 className="font-bold text-xl mb-2">Protection Application</h3>
                    <p className="text-gray-300">
                      We apply high-quality protection products tailored to your needs, whether it's ceramic coating, paint sealant, or wax, to enhance and protect your vehicle's appearance.
                    </p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-black font-bold">5</div>
                  <div className="flex-1 md:pl-8"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-montserrat font-bold text-3xl mb-12 text-center">
              Frequently Asked <span className="text-primary text-shadow-neon">Questions</span>
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h3 className="font-bold text-xl mb-3">How long does an auto detailing service take?</h3>
                <p className="text-gray-300">
                  The time required varies depending on the package and your vehicle's condition. An Essential Detail typically takes 2-3 hours, Premium Detail 4-6 hours, and Elite Restoration 8+ hours. We'll provide a time estimate when you book your appointment.
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="font-bold text-xl mb-3">How often should I have my vehicle professionally detailed?</h3>
                <p className="text-gray-300">
                  For optimal results, we recommend a basic detail every 3-4 months and a more comprehensive service every 6-12 months. However, this can vary based on your driving habits, where you park, and local weather conditions.
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="font-bold text-xl mb-3">What should I do to prepare my vehicle before detailing?</h3>
                <p className="text-gray-300">
                  We recommend removing personal items and valuables from your vehicle. If possible, removing trash and large items will also help our team focus on the detailing process, though this isn't required.
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="font-bold text-xl mb-3">How long will ceramic coating last?</h3>
                <p className="text-gray-300">
                  Our professional ceramic coatings typically last 2-5 years with proper maintenance. The exact duration depends on the specific product used, exposure to elements, and how well the vehicle is maintained after application.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-xl mb-3">Do you offer any guarantees on your work?</h3>
                <p className="text-gray-300">
                  Yes, we stand behind our work with a satisfaction guarantee. If you're not completely satisfied with our service, we'll return to address any concerns. Additionally, our ceramic coating services come with a product warranty.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-montserrat font-bold text-3xl mb-6">
              Ready to <span className="text-primary text-shadow-neon">Transform</span> Your Vehicle?
            </h2>
            <p className="text-lg max-w-3xl mx-auto mb-8 text-gray-300">
              Book your professional auto detailing service today. We bring our expertise and equipment directly to your location throughout Northeast Oklahoma and Northwest Arkansas.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/contact" 
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

export default AutoDetailingPage;