const Services = () => {
  const services = [
    {
      title: "Auto Detailing",
      icon: "fa-car",
      items: [
        "Exterior wash and ceramic coating",
        "Interior deep cleaning and conditioning",
        "Paint correction and protection",
        "Headlight restoration",
        "Engine bay detailing"
      ]
    },
    {
      title: "Boat Detailing",
      icon: "fa-ship",
      items: [
        "Hull cleaning and polishing",
        "Teak restoration and treatment",
        "Vinyl and upholstery cleaning",
        "Metal polishing and brightwork",
        "Anti-fouling treatment"
      ]
    },
    {
      title: "Motorcycle Detailing",
      icon: "fa-motorcycle",
      items: [
        "Complete wash and decontamination",
        "Chrome and metal polishing",
        "Leather cleaning and conditioning",
        "Chain cleaning and lubrication",
        "Ceramic coating application"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl mb-4">
            Our <span className="text-primary text-shadow-neon">Premium</span> Services
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We offer a comprehensive range of detailing services tailored to cars, boats, and motorcycles, all delivered at your location.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card bg-gradient-dark-2 rounded-xl p-8 shadow-lg">
              <div className="flex justify-center mb-6">
                <span className="text-primary text-4xl">
                  <i className={`fas ${service.icon}`}></i>
                </span>
              </div>
              <h3 className="font-montserrat font-bold text-2xl text-center mb-6 text-primary">{service.title}</h3>
              <ul className="space-y-3">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-3"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 text-center">
                <a href="#contact" className="inline-block bg-transparent border-2 border-primary text-white hover:text-primary font-bold py-3 px-6 rounded-full transition duration-300">
                  Get Quote
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="bg-primary text-primary-foreground font-bold py-4 px-8 rounded-full text-lg hover:shadow-neon-lg transition duration-300 transform hover:-translate-y-1">
            Book Your Service
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
