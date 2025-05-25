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
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 bg-background hero-parallax"
        style={{
          backgroundImage: "url('https://pixabay.com/get/g3d5f59e71ae60ad209ef702723382431452d71c3af75a28f28d09bd06ead5effc565442fa25fa76fc7f70113e1391ccabd499304edff6fca4d51c23716174a4d_1280.jpg')",
        }}>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/20"></div>
      
      <div className="container mx-auto px-4 z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-montserrat font-bold text-5xl md:text-6xl mb-6 leading-tight">
            <span className="text-primary text-shadow-neon">Premium Mobile</span> Detailing Services
          </h1>
          <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-2xl mx-auto">
            Bringing professional auto, boat, and motorcycle detailing directly to you. Serving Lake Eucha, Lake Hudson, Lake Tenkiller, and Beaver Lake areas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#contact" 
              className="bg-primary text-primary-foreground font-bold py-4 px-8 rounded-full text-lg hover:shadow-neon-lg transition duration-300 transform hover:-translate-y-1"
            >
              Book Now
            </a>
            <a 
              href="#services" 
              className="bg-transparent border-2 border-white hover:border-primary text-white hover:text-primary font-bold py-4 px-8 rounded-full text-lg transition duration-300 transform hover:-translate-y-1"
            >
              Our Services
            </a>
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
