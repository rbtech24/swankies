import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const ServiceAreas = () => {
  // Define service areas data structure
  const serviceAreas = [
    {
      lake: "Grand Lake",
      state: "Oklahoma",
      cities: "Jay, Grove, Vanity, Langley, Ketchum",
      services: "Mobile Car, Boat, Motorcycle & RV detailing, Ceramic Coating, Paint Correction, Window Tinting"
    },
    {
      lake: "Beaver Lake",
      state: "Arkansas",
      cities: "Rogers, Eureka Springs, Garfield, Prairie Creek, Monte Ne",
      services: "Mobile Car, Boat, Motorcycle & RV detailing, Ceramic Coating, Paint Correction, Window Tinting"
    },
    {
      lake: "Tenkiller Lake",
      state: "Oklahoma",
      cities: "Tahlequah, Vian, Gore, Keys, Cookson",
      services: "Mobile Car, Boat, Motorcycle & RV detailing, Ceramic Coating, Paint Correction, Window Tinting"
    },
    {
      lake: "Oologah Lake",
      state: "Oklahoma",
      cities: "Claremore, Oologah, Collinsville, Chelsea, Talala",
      services: "Mobile Car, Boat, Motorcycle & RV detailing, Ceramic Coating, Paint Correction, Window Tinting"
    },
    {
      lake: "Fort Gibson Lake",
      state: "Oklahoma",
      cities: "Muskogee, Wagoner, Fort Gibson, Hulbert, Okay",
      services: "Mobile Car, Boat, Motorcycle & RV detailing, Ceramic Coating, Paint Correction, Window Tinting"
    },
    {
      lake: "Lake Hudson",
      state: "Oklahoma",
      cities: "Tahlequah, Vian, Gore, Keys, Cookson",
      services: "Mobile Car, Boat, Motorcycle & RV detailing, Ceramic Coating, Paint Correction, Window Tinting"
    },
    {
      lake: "Lake Eucha",
      state: "Oklahoma",
      cities: "Jay, Eucha, Grove, Concord, Kansas",
      services: "Mobile Car, Boat, Motorcycle & RV detailing, Ceramic Coating, Paint Correction, Window Tinting"
    },
    {
      lake: "Spavinaw Lake",
      state: "Oklahoma",
      cities: "Spavinaw, Langley, Salina, Jay, Disney",
      services: "Mobile Car, Boat, Motorcycle & RV detailing, Ceramic Coating, Paint Correction, Window Tinting"
    },
    {
      lake: "Claremore Lake",
      state: "Oklahoma",
      cities: "Claremore, Verdigris, Catoosa, Inola, Owasso",
      services: "Mobile Car, Boat, Motorcycle & RV detailing, Ceramic Coating, Paint Correction, Window Tinting"
    },
    {
      lake: "Lake Flint Creek",
      state: "Arkansas",
      cities: "Gentry, Siloam Springs, Decatur, Gravette, Centerton",
      services: "Mobile Car, Boat, Motorcycle & RV detailing, Ceramic Coating, Paint Correction, Window Tinting"
    },
    {
      lake: "Loch Lomond Lake",
      state: "Arkansas",
      cities: "Bella Vista, Bentonville, Centerton, Gravette, Pea Ridge",
      services: "Mobile Car, Boat, Motorcycle & RV detailing, Ceramic Coating, Paint Correction, Window Tinting"
    },
    {
      lake: "Lake Windsor",
      state: "Arkansas",
      cities: "Bella Vista, Bentonville, Centerton, Gravette, Pea Ridge",
      services: "Mobile Car, Boat, Motorcycle & RV detailing, Ceramic Coating, Paint Correction, Window Tinting"
    },
    {
      lake: "Lake Norwood",
      state: "Arkansas",
      cities: "Bella Vista, Bentonville, Centerton, Gravette, Pea Ridge",
      services: "Mobile Car, Boat, Motorcycle & RV detailing, Ceramic Coating, Paint Correction, Window Tinting"
    },
    {
      lake: "Lake Avalon",
      state: "Arkansas",
      cities: "Bella Vista, Bentonville, Pineville (MO), Gravette, Jane (MO)",
      services: "Mobile Car, Boat, Motorcycle & RV detailing, Ceramic Coating, Paint Correction, Window Tinting"
    },
    {
      lake: "Lake Rayburn",
      state: "Arkansas",
      cities: "Bella Vista, Bentonville, Centerton, Pea Ridge, Rogers",
      services: "Mobile Car, Boat, Motorcycle & RV detailing, Ceramic Coating, Paint Correction, Window Tinting"
    },
    {
      lake: "Lake Brittany",
      state: "Arkansas",
      cities: "Bella Vista, Bentonville, Rogers, Centerton, Pea Ridge",
      services: "Mobile Car, Boat, Motorcycle & RV detailing, Ceramic Coating, Paint Correction, Window Tinting"
    },
    {
      lake: "Lake Ann",
      state: "Arkansas",
      cities: "Bella Vista, Bentonville, Gravette, Centerton, Pea Ridge",
      services: "Mobile Car, Boat, Motorcycle & RV detailing, Ceramic Coating, Paint Correction, Window Tinting"
    },
    {
      lake: "Lake Elmdale",
      state: "Arkansas",
      cities: "Springdale, Fayetteville, Elkins, Johnson, Goshen",
      services: "Mobile Car, Boat, Motorcycle & RV detailing, Ceramic Coating, Paint Correction, Window Tinting"
    },
    {
      lake: "Chimney Rock Lake",
      state: "Oklahoma",
      cities: "Gentry, Siloam Springs, Decatur, Highfill, Hiwasse",
      services: "Mobile Car, Boat, Motorcycle & RV detailing, Ceramic Coating, Paint Correction, Window Tinting"
    },
    {
      lake: "Robert S. Kerr Reservoir",
      state: "Oklahoma",
      cities: "Salisaw, Rowland, Keota, Stigler, Webber Falls, Marble City",
      services: "Mobile Car, Boat, Motorcycle & RV detailing, Ceramic Coating, Paint Correction, Window Tinting"
    }
  ];

  // Group service areas by state
  const groupedAreas = {
    Oklahoma: serviceAreas.filter(area => area.state === "Oklahoma"),
    Arkansas: serviceAreas.filter(area => area.state === "Arkansas")
  };

  // List of counties served
  const counties = [
    "Benton County, Arkansas",
    "Rogers County, Arkansas",
    "Washington County, Arkansas", 
    "Mayes County, Oklahoma",
    "Delaware County, Oklahoma",
    "Cherokee County, Oklahoma",
    "Sequoyah County, Oklahoma"
  ];

  // List of cities served
  const cities = [
    "Adair", "Bernice", "Chouteau", "Colcord", "Gans", "Grove", "Hulbert", "Jay", 
    "Kansas", "Locust Grove", "Muldrow", "Park Hill", "Peggs", "Pryor Creek", 
    "Roland", "Salina", "Sallisaw", "Sportsman Acres", "Tahlequah", "Vian", 
    "Welling", "West Siloam Springs", "Bella Vista", "Bentonville", "Catoosa", 
    "Centerton", "Chelsea", "Claremore", "Decatur", "Elkins", "Farmington", 
    "Fayetteville", "Foyil", "Gentry", "Gravette", "Greenland", "Inola", "Lowell", 
    "Oologah", "Pea Ridge", "Rogers", "Springdale", "Verdigris"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero section */}
        <section className="py-16 bg-gradient-dark-2">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
              Our <span className="text-primary text-shadow-neon">Service</span> Areas
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 mb-8">
              We deliver elite detailing services directly to your location—serving Northeast Oklahoma 
              and Northwest Arkansas with precision, convenience, and care.
            </p>
            <div className="flex justify-center">
              <a 
                href="tel:+19188227188" 
                className="bg-primary text-primary-foreground font-bold py-3 px-8 rounded-full text-lg hover:shadow-neon-lg transition duration-300 flex items-center"
              >
                <i className="fas fa-phone-alt mr-2"></i>
                Call Now: (918) 822-7188
              </a>
            </div>
          </div>
        </section>
        
        {/* Map and intro */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-montserrat font-bold text-3xl mb-6">
                  We <span className="text-primary text-shadow-neon">Come To</span> You
                </h2>
                <p className="text-lg mb-6 text-gray-300">
                  Your time is valuable—spend it where it matters. Our fully-equipped mobile unit brings 
                  certified expertise and premium detailing products directly to your driveway, office, 
                  marina, or lakeside dock.
                </p>
                <p className="text-lg mb-8 text-gray-300">
                  While you focus on your day, we deliver meticulous care and unmatched attention to 
                  detail—right where you are.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-primary text-xl mt-1 mr-3"></i>
                    <div>
                      <p className="text-gray-200">Fully Mobile & Equipped</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-primary text-xl mt-1 mr-3"></i>
                    <div>
                      <p className="text-gray-200">Lake Area Specialists</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-check-circle text-primary text-xl mt-1 mr-3"></i>
                    <div>
                      <p className="text-gray-200">100% Satisfaction Guaranteed</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link href="#oklahoma">
                    <Button className="bg-primary text-primary-foreground hover:shadow-neon-lg">
                      Oklahoma Lakes
                    </Button>
                  </Link>
                  <Link href="#arkansas">
                    <Button className="bg-primary text-primary-foreground hover:shadow-neon-lg">
                      Arkansas Lakes
                    </Button>
                  </Link>
                  <Link href="#cities">
                    <Button className="bg-transparent border-2 border-primary text-white hover:text-primary">
                      All Served Cities
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d825806.5298171782!2d-95.40242770522587!3d36.31881274662786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c01654a16e3333%3A0x780bba8f67ba76f4!2sLake%20Tenkiller!5e0!3m2!1sen!2sus!4v1652884562358!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
                <div className="absolute inset-0 border-4 border-primary rounded-xl pointer-events-none"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Oklahoma service areas */}
        <section id="oklahoma" className="py-16 bg-gradient-dark">
          <div className="container mx-auto px-4">
            <h2 className="font-montserrat font-bold text-3xl mb-10 text-center">
              <span className="text-primary text-shadow-neon">Oklahoma</span> Service Areas
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {groupedAreas.Oklahoma.map((area, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-dark-2 rounded-xl p-6 shadow-lg border border-gray-800 hover:border-primary transition-all duration-300 hover:shadow-neon"
                >
                  <h3 className="font-montserrat font-bold text-xl mb-2 text-primary">
                    {area.lake}
                  </h3>
                  <div className="flex items-center mb-4">
                    <i className="fas fa-map-marker-alt text-primary mr-2"></i>
                    <span className="text-gray-300">{area.state}</span>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-1 text-gray-200">Cities Served:</h4>
                    <p className="text-gray-400">{area.cities}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-200">Services Available:</h4>
                    <p className="text-gray-400">{area.services}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Arkansas service areas */}
        <section id="arkansas" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-montserrat font-bold text-3xl mb-10 text-center">
              <span className="text-primary text-shadow-neon">Arkansas</span> Service Areas
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {groupedAreas.Arkansas.map((area, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-dark-2 rounded-xl p-6 shadow-lg border border-gray-800 hover:border-primary transition-all duration-300 hover:shadow-neon"
                >
                  <h3 className="font-montserrat font-bold text-xl mb-2 text-primary">
                    {area.lake}
                  </h3>
                  <div className="flex items-center mb-4">
                    <i className="fas fa-map-marker-alt text-primary mr-2"></i>
                    <span className="text-gray-300">{area.state}</span>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-1 text-gray-200">Cities Served:</h4>
                    <p className="text-gray-400">{area.cities}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-200">Services Available:</h4>
                    <p className="text-gray-400">{area.services}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Counties and cities section */}
        <section id="cities" className="py-16 bg-gradient-dark">
          <div className="container mx-auto px-4">
            <h2 className="font-montserrat font-bold text-3xl mb-10 text-center">
              Counties & <span className="text-primary text-shadow-neon">Cities</span> We Serve
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Counties */}
              <div className="bg-gradient-dark-2 rounded-xl p-6 shadow-lg border border-gray-800">
                <h3 className="font-montserrat font-bold text-2xl mb-6 text-primary text-center">
                  Counties
                </h3>
                <ul className="space-y-3">
                  {counties.map((county, index) => (
                    <li key={index} className="flex items-start">
                      <i className="fas fa-map text-primary mt-1 mr-3"></i>
                      <span className="text-gray-300">{county}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Cities */}
              <div className="bg-gradient-dark-2 rounded-xl p-6 shadow-lg border border-gray-800">
                <h3 className="font-montserrat font-bold text-2xl mb-6 text-primary text-center">
                  Cities
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {cities.map((city, index) => (
                    <div key={index} className="flex items-start">
                      <i className="fas fa-city text-primary mt-1 mr-2 text-sm"></i>
                      <span className="text-gray-300 text-sm">{city}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-montserrat font-bold text-3xl mb-6">
              Ready for <span className="text-primary text-shadow-neon">Elite</span> Service?
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-300 mb-8">
              Don't wait to transform your vehicle, boat, or motorcycle. Book your premium mobile 
              detailing service today and experience the Swankies difference.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="tel:+19188227188" 
                className="bg-primary text-primary-foreground font-bold py-4 px-8 rounded-full text-lg hover:shadow-neon-lg transition duration-300 flex items-center justify-center"
              >
                <i className="fas fa-phone-alt mr-2"></i>
                Call: (918) 822-7188
              </a>
              <Link href="/#contact">
                <a className="bg-transparent border-2 border-primary text-white hover:text-primary font-bold py-4 px-8 rounded-full text-lg transition duration-300 flex items-center justify-center">
                  <i className="fas fa-envelope mr-2"></i>
                  Contact Us
                </a>
              </Link>
            </div>
            <p className="mt-6 text-red-400">
              <i className="fas fa-exclamation-circle mr-2"></i>
              Spots are limited. Summer appointments are filling fast.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServiceAreas;