const About = () => {
  const features = [
    {
      title: "Mobile Service",
      description: "We come to your location"
    },
    {
      title: "Premium Products",
      description: "Only the best for your vehicle"
    },
    {
      title: "Certified Technicians",
      description: "Trained and experienced staff"
    },
    {
      title: "Satisfaction Guarantee",
      description: "Your happiness is our priority"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-montserrat font-bold text-4xl mb-6">
              About <span className="text-primary text-shadow-neon">SWANKIES</span> Elite Detail & Restoration
            </h2>
            <p className="text-lg mb-6 text-gray-300">
              Founded with a passion for perfection, SWANKIES Elite Detail & Restoration brings professional-grade detailing services directly to your location. We specialize in transforming vehicles, boats, and motorcycles with meticulous attention to detail.
            </p>
            <p className="text-lg mb-8 text-gray-300">
              Our mobile detailing service covers Lake Eucha, Lake Hudson, Lake Tenkiller, and Beaver Lake areas in Oklahoma and Arkansas, making premium detailing convenient for you.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <i className="fas fa-check-circle text-primary text-xl mt-1 mr-3"></i>
                  <div>
                    <h4 className="font-montserrat font-semibold text-lg">{feature.title}</h4>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <a href="#contact" className="bg-primary text-primary-foreground font-bold py-3 px-8 rounded-full text-lg hover:shadow-neon-lg transition duration-300 inline-block">
              Contact Us
            </a>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000" 
              alt="SWANKIES Professional Boat Detailing" 
              className="rounded-xl shadow-lg object-cover w-full h-[500px]" 
            />
            <div className="absolute -bottom-6 -left-6 bg-gradient-dark-2 rounded-xl p-6 shadow-neon w-48 border-2 border-primary">
              <div className="flex flex-col items-center text-center">
                <span className="text-primary font-montserrat font-bold text-xl">CERTIFIED</span>
                <span className="text-white font-medium mt-2">Professional Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
