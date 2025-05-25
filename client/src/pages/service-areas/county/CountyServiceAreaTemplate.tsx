import React from 'react';
import { useLocation } from 'wouter';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'wouter';
import NotFound from '@/pages/not-found';

// County data by state
const countyData: {
  [key: string]: {
    [key: string]: {
      cities: string[];
      description: string;
      majorLakes?: string[];
      majorAttractions?: string[];
      imageUrl?: string;
    }
  }
} = {
  oklahoma: {
    'rogers': {
      cities: ['Claremore', 'Catoosa', 'Verdigris', 'Oologah', 'Talala', 'Foyil', 'Inola'],
      description: 'Rogers County is located in northeastern Oklahoma and is home to several beautiful communities and attractions. The county offers a mix of rural charm and suburban convenience, with the historic Route 66 running through parts of the county. The area is known for its rich Native American heritage and is home to the Will Rogers Memorial Museum.',
      majorLakes: ['Oologah Lake', 'Claremore Lake', 'Verdigris River'],
      majorAttractions: ['Will Rogers Memorial Museum', 'J.M. Davis Arms & Historical Museum', 'Belvidere Mansion', 'Will Rogers Downs', 'Hard Rock Hotel & Casino'],
      imageUrl: 'https://images.unsplash.com/photo-1543322748-33df98c325a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
    },
    'mayes': {
      cities: ['Pryor', 'Salina', 'Chouteau', 'Locust Grove', 'Spavinaw', 'Adair', 'Disney'],
      description: 'Mayes County is nestled in the heart of Green Country in northeastern Oklahoma. The county is home to multiple lakes and rivers, making it a popular destination for water recreation. The area has a strong industrial presence with the MidAmerica Industrial Park, one of the largest industrial parks in the United States.',
      majorLakes: ['Grand Lake O\' the Cherokees', 'Lake Hudson', 'Spavinaw Lake', 'Pryor Creek'],
      majorAttractions: ['Spavinaw State Park', 'Pensacola Dam', 'Chouteau Lock and Dam', 'Salina Pumped Storage Project'],
      imageUrl: 'https://images.unsplash.com/photo-1624876512930-99c3e7b70b5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    'delaware': {
      cities: ['Jay', 'Grove', 'Kansas', 'Colcord', 'West Siloam Springs', 'Eucha', 'Bernice'],
      description: 'Delaware County is located in the northeastern corner of Oklahoma and is known for its natural beauty, with a large portion of the county bordering Grand Lake. The area is characterized by rolling hills, forests, and numerous streams and rivers, making it a popular destination for outdoor enthusiasts and lake recreation.',
      majorLakes: ['Grand Lake O\' the Cherokees', 'Lake Eucha', 'Spavinaw Lake'],
      majorAttractions: ['Natural Falls State Park', 'Honey Creek State Park', 'Cherokee Casino Grove', 'Har-Ber Village Museum'],
      imageUrl: 'https://images.unsplash.com/photo-1549877452-9c68bd4ee3ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    'cherokee': {
      cities: ['Tahlequah', 'Park Hill', 'Cookson', 'Keys', 'Welling', 'Hulbert'],
      description: 'Cherokee County is situated in eastern Oklahoma and is known as the heart of Cherokee Nation. The county is named after the Cherokee tribe and is home to the tribal capital in Tahlequah. The area offers beautiful natural scenery with rolling hills, forests, and the scenic Illinois River running through parts of the county.',
      majorLakes: ['Tenkiller Lake', 'Illinois River', 'Fort Gibson Lake'],
      majorAttractions: ['Cherokee National Capitol', 'Cherokee Heritage Center', 'Northeastern State University', 'Illinois River recreational areas', 'Tenkiller State Park'],
      imageUrl: 'https://images.unsplash.com/photo-1588114501482-d367cacc70db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    'sequoyah': {
      cities: ['Sallisaw', 'Roland', 'Vian', 'Muldrow', 'Gore', 'Marble City'],
      description: 'Sequoyah County is located in eastern Oklahoma along the Arkansas border. Named after the Cherokee scholar Sequoyah, who created the Cherokee syllabary, the county offers a mix of natural beauty and historical significance. The area features scenic landscapes with the Arkansas River flowing along its southern border.',
      majorLakes: ['Robert S. Kerr Reservoir', 'Tenkiller Lake', 'Arkansas River'],
      majorAttractions: ['Sequoyah\'s Cabin Museum', 'Spiro Mounds Archaeological Center', 'Tenkiller State Park', 'Sallisaw Creek Park'],
      imageUrl: 'https://images.unsplash.com/photo-1555952494-efd681c7e3f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    'craig': {
      cities: ['Vinita', 'Big Cabin', 'Ketchum', 'Welch', 'White Oak', 'Bluejacket'],
      description: 'Craig County is located in northeastern Oklahoma and is characterized by gently rolling hills and prairie land. The county is bisected by historic Route 66 and serves as a gateway to Grand Lake. Known for its rural charm and friendly communities, Craig County offers a peaceful setting with access to outdoor recreation.',
      majorLakes: ['Grand Lake O\' the Cherokees', 'Big Cabin Creek', 'Neosho River'],
      majorAttractions: ['Eastern Trails Museum', 'Vinita Route 66 attractions', 'Grand Lake recreational areas'],
      imageUrl: 'https://images.unsplash.com/photo-1561843756-06cc0508f96d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    'ottawa': {
      cities: ['Miami', 'Commerce', 'North Miami', 'Quapaw', 'Fairland', 'Afton', 'Wyandotte'],
      description: 'Ottawa County is situated in the northeastern corner of Oklahoma, bordering Kansas and Missouri. The county is known for its rich mining history and Native American heritage, with several tribal headquarters located in the area. The scenic Neosho River flows through the county, providing opportunities for outdoor recreation.',
      majorLakes: ['Grand Lake O\' the Cherokees', 'Spring River', 'Neosho River'],
      majorAttractions: ['Coleman Theatre', 'Dobson Museum', 'Riverview Park', 'Buffalo Run Casino', 'Route 66 landmarks'],
      imageUrl: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    'washington': {
      cities: ['Bartlesville', 'Dewey', 'Ochelata', 'Ramona', 'Copan', 'Vera'],
      description: 'Washington County is located in northeastern Oklahoma and is known for its rich oil history and beautiful landscapes. The county is home to the Phillips Petroleum Company and features a mix of urban amenities in Bartlesville and rural charm in the surrounding communities. The area offers rolling hills, prairie lands, and the Caney River flowing through parts of the county.',
      majorLakes: ['Hulah Lake', 'Copan Lake', 'Caney River'],
      majorAttractions: ['Price Tower Arts Center', 'Woolaroc Museum & Wildlife Preserve', 'Frank Phillips Home', 'Bartlesville Community Center', 'Phillips Petroleum Company Museum'],
      imageUrl: 'https://images.unsplash.com/photo-1562088762-94b3479f6c17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    'nowata': {
      cities: ['Nowata', 'South Coffeyville', 'Delaware', 'New Alluwe', 'Wann', 'Lenapah'],
      description: 'Nowata County is situated in northeastern Oklahoma and is characterized by its rural landscape and small-town atmosphere. The county is named after a Delaware Indian word meaning "welcome" and offers peaceful countryside with rolling hills, pastures, and the Verdigris River flowing through parts of the county.',
      majorLakes: ['Oologah Lake', 'Verdigris River'],
      majorAttractions: ['Glass Mountain State Park', 'Four Mile Creek Recreation Area', 'Nowata County Historical Society Museum'],
      imageUrl: 'https://images.unsplash.com/photo-1510866425199-9cf6bc10e8c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
    }
  },
  arkansas: {
    'benton': {
      cities: ['Bentonville', 'Rogers', 'Bella Vista', 'Centerton', 'Lowell', 'Pea Ridge', 'Cave Springs', 'Siloam Springs'],
      description: 'Benton County is located in the northwestern corner of Arkansas and is one of the fastest-growing areas in the state. The county is known for being the home of Walmart\'s corporate headquarters and offers a mix of urban amenities and natural beauty with the Ozark Mountains and Beaver Lake. The area has become a cultural hub with world-class museums and a thriving food scene.',
      majorLakes: ['Beaver Lake', 'Little Sugar Creek'],
      majorAttractions: ['Crystal Bridges Museum of American Art', 'Walmart Museum', 'Pea Ridge National Military Park', 'Amazeum', 'Downtown Bentonville Square', 'Beaver Lake recreational areas'],
      imageUrl: 'https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    'washington': {
      cities: ['Fayetteville', 'Springdale', 'Prairie Grove', 'Farmington', 'Elkins', 'West Fork', 'Greenland'],
      description: 'Washington County is located in the northwestern part of Arkansas and is known for being the home of the University of Arkansas. The county offers a diverse landscape with the Boston Mountains to the south and the Springfield Plateau to the north. The area features a vibrant cultural scene with historic sites, entertainment venues, and outdoor recreational opportunities.',
      majorLakes: ['Beaver Lake', 'Lake Wedington', 'Lake Fayetteville'],
      majorAttractions: ['University of Arkansas', 'Dickson Street Entertainment District', 'Arkansas Air & Military Museum', 'Prairie Grove Battlefield State Park', 'Devil\'s Den State Park'],
      imageUrl: 'https://images.unsplash.com/photo-1603091420263-32c950fc361b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80'
    },
    'carroll': {
      cities: ['Eureka Springs', 'Berryville', 'Green Forest', 'Holiday Island', 'Oak Grove'],
      description: 'Carroll County is located in the northwestern part of Arkansas and is known for its beautiful Ozark Mountain scenery and the Victorian resort town of Eureka Springs. The county offers a unique blend of natural beauty, historic architecture, and artistic culture. The area is characterized by rolling hills, forests, and the White River forming part of its southern border.',
      majorLakes: ['Table Rock Lake', 'Beaver Lake', 'Kings River'],
      majorAttractions: ['Eureka Springs Historic District', 'Christ of the Ozarks statue', 'Thorncrown Chapel', 'Turpentine Creek Wildlife Refuge', 'Blue Spring Heritage Center'],
      imageUrl: 'https://images.unsplash.com/photo-1543131422-3b12528bcc6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    }
  }
};

// Default data if county is not found
const defaultCountyData = {
  cities: ['Various cities across the county'],
  description: 'This beautiful county offers a range of landscapes and attractions. Our mobile detailing services cover the entire county, bringing professional detailing directly to your location.',
  majorLakes: ['Local lakes and waterways'],
  majorAttractions: ['Local attractions and recreational areas'],
  imageUrl: 'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1156&q=80'
};

// Services offered
const services = [
  "Auto Detailing",
  "Boat Detailing",
  "Motorcycle Detailing",
  "Paint Correction",
  "Ceramic Coating",
  "Interior Detailing",
  "Engine Bay Detailing",
  "Headlight Restoration"
];

const CountyServiceAreaTemplate: React.FC = () => {
  const [location] = useLocation();
  
  // Extract county and state from URL path
  // URL format: /service-areas/county/county-state
  const parts = location.split('/');
  const countyStatePart = parts[parts.length - 1]; // Last segment of the URL
  const countyStateParts = countyStatePart.split('-');
  
  if (countyStateParts.length < 2) {
    return <NotFound />;
  }
  
  // Last part is the state
  const state = countyStateParts.pop() as string;
  // Remaining parts are the county name (could be multi-word)
  const countySlug = countyStateParts.join('-');
  
  // Format county and state names for display
  const countyFormatted = countySlug.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  const stateFormatted = state.charAt(0).toUpperCase() + state.slice(1);
  
  // Get county data or use default
  const countyInfo = countyData[state]?.[countySlug] || defaultCountyData;
  
  // Meta data
  const title = `SWANKIES Elite Detail & Restoration | ${countyFormatted} County, ${stateFormatted}`;
  const metaDescription = `Premium mobile detailing services in ${countyFormatted} County, ${stateFormatted}. Professional auto, boat, and motorcycle detailing at your location.`;
  
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={countyInfo.imageUrl} />
        <meta name="keywords" content={`mobile detailing, ${countyFormatted} County, ${stateFormatted}, auto detailing, boat detailing, motorcycle detailing, ceramic coating, paint correction, ${countyInfo.cities.join(', ')}`} />
        <link rel="canonical" href={`https://swankieselite.com/service-areas/county/${countySlug}-${state}`} />
      </Helmet>
      
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section 
          className="py-16 bg-gradient-dark-2 relative"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.5)), url(${countyInfo.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-4 leading-tight">
                <span className="text-primary text-shadow-neon">SWANKIES</span> Elite Detailing in <span className="text-primary">{countyFormatted} County, {stateFormatted}</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Premium mobile detailing services for auto, boat, and motorcycle. 
                Serving {countyInfo.cities.slice(0, 3).join(', ')} and all of {countyFormatted} County.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/booking" 
                  className="bg-primary text-black font-bold py-3 px-8 rounded-full text-lg hover:shadow-neon-lg transition duration-300 transform hover:-translate-y-1 inline-block text-center"
                >
                  Book Now
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
        
        {/* County Description */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="font-montserrat font-bold text-3xl mb-6">
                  Premium Mobile Detailing in <span className="text-primary text-shadow-neon">{countyFormatted} County</span>
                </h2>
                <p className="text-lg mb-6 text-gray-300">
                  {countyInfo.description}
                </p>
                <p className="text-lg mb-6 text-gray-300">
                  Our professional mobile detailing team brings our expertise and equipment directly to your location, whether you're at home, work, or the marina. We offer comprehensive detailing services for autos, boats, and motorcycles throughout {countyFormatted} County.
                </p>
                <p className="text-lg text-gray-300">
                  We understand the unique environmental challenges vehicles face in {countyFormatted} County, and our detailing services are tailored to provide exceptional results and long-lasting protection.
                </p>
              </div>
              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-2xl shadow-primary/30">
                  <img 
                    src={countyInfo.imageUrl} 
                    alt={`SWANKIES Elite Detail & Restoration in ${countyFormatted} County, ${stateFormatted}`} 
                    className="w-full h-[400px] object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                    <div className="bg-black/50 p-4 backdrop-blur-sm rounded-lg border border-primary/30">
                      <h3 className="text-primary font-bold text-xl mb-2">Mobile Service</h3>
                      <p className="text-white text-sm">We come to you in {countyFormatted} County and surrounding areas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Cities Served */}
            <div className="mb-16">
              <h2 className="font-montserrat font-bold text-3xl mb-8 text-center">
                Cities We Serve in <span className="text-primary text-shadow-neon">{countyFormatted} County</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {countyInfo.cities.map((city, index) => {
                  const citySlug = city.toLowerCase().replace(/\s+/g, '-');
                  const stateSlug = stateFormatted.toLowerCase();
                  
                  return (
                    <Link key={index} href={`/service-areas/${citySlug}-${stateSlug}`}>
                      <div className="bg-card/50 rounded-xl p-4 text-center border border-primary/20 hover:border-primary/60 transition-all cursor-pointer">
                        <h3 className="font-bold text-xl text-white hover:text-primary transition-colors">{city}</h3>
                        <p className="text-gray-400 text-sm mt-1">{stateFormatted}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
            
            {/* County Attractions */}
            {countyInfo.majorAttractions && (
              <div className="mb-16">
                <h2 className="font-montserrat font-bold text-3xl mb-8 text-center">
                  <span className="text-primary text-shadow-neon">Attractions</span> in {countyFormatted} County
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {countyInfo.majorAttractions.map((attraction, index) => (
                    <div key={index} className="bg-card/50 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all">
                      <h3 className="font-bold text-xl mb-4 text-primary">{attraction}</h3>
                      <p className="text-gray-300">
                        Enjoy {attraction} while we take care of your vehicle. Our mobile detailing service comes to you, so you can make the most of your time in {countyFormatted} County.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Lakes */}
            {countyInfo.majorLakes && (
              <div className="mb-16">
                <h2 className="font-montserrat font-bold text-3xl mb-8 text-center">
                  <span className="text-primary text-shadow-neon">Lakes</span> in {countyFormatted} County
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {countyInfo.majorLakes.map((lake, index) => (
                    <div key={index} className="bg-card/50 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all">
                      <h3 className="font-bold text-xl mb-4 text-primary">{lake}</h3>
                      <p className="text-gray-300">
                        We provide specialized boat detailing services at {lake}. Our mobile team brings professional detailing equipment directly to your marina or dock.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Services Offered */}
            <div className="mb-16">
              <h2 className="font-montserrat font-bold text-3xl mb-8 text-center">
                Services Available in <span className="text-primary text-shadow-neon">{countyFormatted} County</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                  <div key={index} className="bg-card/50 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all">
                    <h3 className="font-bold text-xl mb-4 text-primary">{service}</h3>
                    <p className="text-gray-300">
                      Premium {service.toLowerCase()} services by certified professionals. We use only the highest quality products and techniques.
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* CTA */}
            <div className="bg-gradient-dark-2 rounded-xl p-8 text-center">
              <h2 className="font-montserrat font-bold text-3xl mb-6">
                Ready for <span className="text-primary text-shadow-neon">Elite Service</span> in {countyFormatted} County?
              </h2>
              <p className="text-lg max-w-3xl mx-auto mb-8 text-gray-300">
                Contact us today to schedule your premium detailing service. We bring our expertise and equipment directly to your location in {countyFormatted} County.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="/booking" 
                  className="bg-primary text-black font-bold py-3 px-8 rounded-full text-lg hover:shadow-neon-lg transition duration-300 transform hover:-translate-y-1 inline-block text-center"
                >
                  Book Your Appointment
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
        
        {/* Related Service Areas */}
        <section className="py-16 bg-gradient-dark">
          <div className="container mx-auto px-4">
            <h2 className="font-montserrat font-bold text-3xl mb-8 text-center">
              Other <span className="text-primary text-shadow-neon">Service Areas</span>
            </h2>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-gray-300">
              We provide mobile detailing services throughout Northeast Oklahoma and Northwest Arkansas. Check out our other service areas below.
            </p>
            <div className="flex justify-center">
              <Link href="/service-areas" className="bg-primary text-black font-bold py-3 px-8 rounded-full text-lg hover:shadow-neon-lg transition duration-300 transform hover:-translate-y-1 inline-block text-center">
                View All Service Areas
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CountyServiceAreaTemplate;