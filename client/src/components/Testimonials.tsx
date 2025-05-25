import { useState, useEffect } from "react";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const testimonials = [
    {
      content: "I couldn't believe the transformation of my boat! The team at Swankies Elite Detailing did an incredible job restoring the shine and making it look brand new. Highly recommended!",
      name: "Michael Thompson",
      title: "Boat Owner, Lake Tenkiller"
    },
    {
      content: "The convenience of having my car detailed at home was amazing. The attention to detail was impressive - they got out stains I thought would never come out. My car looks better than when I bought it!",
      name: "Jennifer Williams",
      title: "Car Owner, Lake Eucha"
    },
    {
      content: "My motorcycle has never looked this good! The ceramic coating they applied really makes the paint pop and beads water like crazy. Worth every penny for the professional service.",
      name: "Robert Johnson",
      title: "Motorcycle Enthusiast, Beaver Lake"
    }
  ];

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl mb-4">
            What Our <span className="text-primary text-shadow-neon">Clients</span> Say
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full lg:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-gradient-dark-2 rounded-xl p-8 shadow-lg h-full border border-gray-800">
                    <div className="flex items-center mb-4">
                      <div className="text-primary">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6 italic">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center">
                      <div>
                        <h4 className="font-montserrat font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-400">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {!isMobile && (
            <>
              <button 
                onClick={prevSlide}
                className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center shadow-neon focus:outline-none lg:block hidden"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              
              <button 
                onClick={nextSlide}
                className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center shadow-neon focus:outline-none lg:block hidden"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </>
          )}
          
          {/* Dots for Mobile */}
          <div className="flex justify-center mt-8 lg:hidden">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full mx-1 ${
                  currentSlide === index ? 'bg-primary' : 'bg-gray-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
