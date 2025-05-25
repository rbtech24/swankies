const Gallery = () => {
  const galleryItems = [
    {
      title: "Paint Correction",
      description: "Transforming scratched and swirled paint to a mirror-like finish with our multi-stage correction process.",
      imageUrl: "https://pixabay.com/get/gad6195ff5b7f7673a420019ae0212be19fa55dcae3a8d27292b2f769a9a14750506fc5f0411bfaa6a40326d8c65da057fa6d38d75aeebcb37784429e91dcc041_1280.jpg",
      altText: "Luxury car paint correction"
    },
    {
      title: "Boat Restoration",
      description: "Complete exterior and interior detailing to bring your boat back to showroom condition.",
      imageUrl: "https://images.unsplash.com/photo-1564182842519-8a3b2af3e228?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      altText: "Boat exterior detailing"
    },
    {
      title: "Motorcycle Detailing",
      description: "Expert cleaning and polishing of all surfaces, including hard-to-reach areas and chrome.",
      imageUrl: "https://pixabay.com/get/g925c7fc8f3c62ec1414db44b1803587beb1bc0d754f8c605321994f3441937ea975fcb211a943c54fd29c9fb33c1d21d2e99147019c5b28ab60a1e4dc6933184_1280.jpg",
      altText: "Motorcycle detailing"
    },
    {
      title: "Interior Detailing",
      description: "Deep cleaning and conditioning of all interior surfaces, from leather to plastics.",
      imageUrl: "https://pixabay.com/get/g0287b0d69b38aa46cd91c43ac57ec5d518c1e05599f936e40018eda75836ddd89e5b92052d44171c6577ac1603331b0c7b9e3c0d49dc8baf2b8073fe840e82fa_1280.jpg",
      altText: "Car interior detailing"
    },
    {
      title: "Boat Interior",
      description: "Complete cleaning and restoration of all cabin surfaces and upholstery.",
      imageUrl: "https://pixabay.com/get/g866eb84bb7f391b9ce2d2851f7c5bebabbecac5799802e5893d674e87740e5bdbca589cf8495522d102fb482385bf08808c034d56eea924c5123ff5de9f361aa_1280.jpg",
      altText: "Boat interior detailing"
    },
    {
      title: "Ceramic Coating",
      description: "Professional application of ceramic coatings for long-lasting protection and shine.",
      imageUrl: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      altText: "Ceramic coating application"
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl mb-4">
            Our <span className="text-primary text-shadow-neon">Work</span> Gallery
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Browse through our collection of before and after transformations and see the Swankies Elite difference.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div key={index} className="gallery-item rounded-xl overflow-hidden shadow-lg relative aspect-[4/3]">
              <img 
                src={item.imageUrl} 
                alt={item.altText} 
                className="w-full h-full object-cover" 
              />
              <div className="gallery-overlay absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="font-montserrat font-bold text-xl mb-2 text-primary">{item.title}</h3>
                <p className="text-sm text-gray-200">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#contact" className="bg-transparent border-2 border-primary text-white hover:text-primary font-bold py-3 px-6 rounded-full transition duration-300">
            See More Examples
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
