import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroElement = document.querySelector('.hero-parallax') as HTMLElement;
      
      if (heroElement) {
        heroElement.style.transform = `translateY(${scrollPosition * 0.4}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background image with parallax effect */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90 bg-background hero-parallax"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1567808291548-fc3ee04dbcf0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
        }}>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 z-10 py-20">
        <div className="md:flex items-center">
          <div className="md:w-3/5 lg:w-1/2 text-left mb-10 md:mb-0">
            <h1 className="font-montserrat font-bold text-5xl md:text-7xl mb-4 leading-none">
              <span className="text-primary text-shadow-neon block">Professional Mobile Detailing</span>
              <span className="text-white">Auto, Boat & Motorcycle</span><br />
              <span className="text-white">Oklahoma & Arkansas</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-2xl">
              Premium mobile auto, boat, and motorcycle detailing services. Serving Northeast Oklahoma and Northwest Arkansas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/booking" 
                className="bg-primary text-black font-bold py-4 px-8 rounded-full text-lg hover:shadow-neon-lg transition duration-300 transform hover:-translate-y-1 inline-block text-center"
              >
                Book Your Service
              </a>
              <a 
                href="#services" 
                className="bg-transparent border-2 border-white hover:border-primary text-white hover:text-primary font-bold py-4 px-8 rounded-full text-lg transition duration-300 transform hover:-translate-y-1 inline-block text-center"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
      

      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#services" className="text-white hover:text-primary transition duration-300">
          <i className="fas fa-chevron-down text-2xl"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;
