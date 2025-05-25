import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'wouter';

// Define location interfaces for type safety
interface Location {
  name: string;
  state: string;
  cities: string[];
  county: string;
  attractions: string[];
  urlSlug: string;
  imageUrl?: string;
}

const ServiceAreasIndex = () => {
  // SEO metadata
  const title = "Service Areas | SWANKIES Elite Detail & Restoration | OK & AR";
  const description = "SWANKIES Elite Detail & Restoration provides premium mobile detailing services across Northeast Oklahoma and Northwest Arkansas. Serving Grand Lake, Tenkiller Lake, Beaver Lake and surrounding areas.";
  const keywords = "mobile detailing service areas, Oklahoma detailing, Arkansas detailing, Grand Lake, Tenkiller Lake, Beaver Lake, Northeast Oklahoma, Northwest Arkansas";
  // Oklahoma locations
  const oklahomaLocations: Location[] = [
    {
      name: "Grand Lake",
      state: "Oklahoma",
      cities: ["Jay", "Grove", "Vanity", "Langley", "Ketchum"],
      county: "Delaware",
      attractions: ["Marinas", "State Parks", "Fishing", "Boating", "Water Sports"],
      urlSlug: "grand-lake",
      imageUrl: "https://images.pexels.com/photos/5353282/pexels-photo-5353282.jpeg?auto=compress&cs=tinysrgb&w=640"
    },
    {
      name: "Tenkiller Lake",
      state: "Oklahoma",
      cities: ["Tahlequah", "Vian", "Gore", "Keys", "Cookson"],
      county: "Cherokee, Sequoyah",
      attractions: ["Known as 'Heaven in the Hills'", "Cliff diving", "Scuba diving", "Fishing", "Boating"],
      urlSlug: "tenkiller-lake",
      imageUrl: "https://images.pexels.com/photos/176400/pexels-photo-176400.jpeg?auto=compress&cs=tinysrgb&w=640"
    },
    {
      name: "Oologah Lake",
      state: "Oklahoma",
      cities: ["Claremore", "Oologah", "Collinsville", "Chelsea", "Talala"],
      county: "Rogers, Nowata",
      attractions: ["Blue Creek Cove", "Fishing", "Boating", "Will Rogers State Park"],
      urlSlug: "oologah-lake",
      imageUrl: "https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=640"
    },
    {
      name: "Fort Gibson Lake",
      state: "Oklahoma",
      cities: ["Muskogee", "Wagoner", "Fort Gibson", "Hulbert", "Okay"],
      county: "Wagoner, Cherokee",
      attractions: ["Fishing", "Boating", "Water sports", "Taylor Ferry Marina"],
      urlSlug: "fort-gibson-lake",
      imageUrl: "https://images.pexels.com/photos/1619854/pexels-photo-1619854.jpeg?auto=compress&cs=tinysrgb&w=640"
    },
    {
      name: "Lake Hudson",
      state: "Oklahoma",
      cities: ["Locust Grove", "Pryor", "Salina", "Strang", "Disney"],
      county: "Mayes",
      attractions: ["Fishing", "Boating", "Snowdale State Park"],
      urlSlug: "lake-hudson",
      imageUrl: "https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&w=640"
    }
  ];

  // Arkansas locations
  const arkansasLocations: Location[] = [
    {
      name: "Beaver Lake",
      state: "Arkansas",
      cities: ["Rogers", "Eureka Springs", "Garfield", "Prairie Creek", "Monte Ne"],
      county: "Benton, Carroll",
      attractions: ["Hobbs State Park", "Fishing", "Boating", "Water sports"],
      urlSlug: "beaver-lake",
      imageUrl: "https://images.pexels.com/photos/1482193/pexels-photo-1482193.jpeg?auto=compress&cs=tinysrgb&w=640"
    },
    {
      name: "Lake Flint Creek",
      state: "Arkansas",
      cities: ["Gentry", "Siloam Springs", "Decatur", "Gravette", "Centerton"],
      county: "Benton",
      attractions: ["Fishing", "Canoeing", "Scenic views"],
      urlSlug: "lake-flint-creek",
      imageUrl: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=640"
    },
    {
      name: "Loch Lomond Lake",
      state: "Arkansas",
      cities: ["Bella Vista", "Bentonville", "Centerton", "Gravette", "Pea Ridge"],
      county: "Benton",
      attractions: ["Fishing", "Walking trails"],
      urlSlug: "loch-lomond-lake",
      imageUrl: "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=640"
    },
    {
      name: "Lake Windsor",
      state: "Arkansas",
      cities: ["Bella Vista", "Bentonville", "Centerton", "Gravette", "Pea Ridge"],
      county: "Benton",
      attractions: ["Fishing", "Boating", "Lakeside community"],
      urlSlug: "lake-windsor",
      imageUrl: "https://images.pexels.com/photos/753325/pexels-photo-753325.jpeg?auto=compress&cs=tinysrgb&w=640"
    },
    {
      name: "Lake Elmdale",
      state: "Arkansas",
      cities: ["Springdale", "Fayetteville", "Elkins", "Johnson", "Goshen"],
      county: "Washington",
      attractions: ["Fishing", "Picnicking", "Nature viewing"],
      urlSlug: "lake-elmdale",
      imageUrl: "https://images.pexels.com/photos/147411/pexels-photo-147411.jpeg?auto=compress&cs=tinysrgb&w=640"
    }
  ];

  // List of all counties served
  const oklahomaCounties = ["Benton County", "Rogers County", "Washington County", "Mayes County", "Delaware County", "Cherokee County", "Sequoyah County"];
  const arkansasCounties = ["Benton County", "Washington County"];

  // List of all cities served
  const cities = [
    "Adair", "Bernice", "Chouteau", "Colcord", "Gans", "Grove", "Hulbert", "Jay", "Kansas", 
    "Locust Grove", "Muldrow", "Park Hill", "Peggs", "Pryor Creek", "Roland", "Salina", 
    "Sallisaw", "Sportsman Acres", "Tahlequah", "Vian", "Welling", "West Siloam Springs", 
    "Bella Vista", "Bentonville", "Catoosa", "Centerton", "Chelsea", "Claremore", "Decatur", 
    "Elkins", "Farmington", "Fayetteville", "Foyil", "Gentry", "Gravette", "Greenland", 
    "Inola", "Lowell", "Oologah", "Pea Ridge", "Rogers", "Springdale", "Verdigris"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href="https://swankieselite.com/service-areas" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://swankieselite.com/service-areas" />
        <meta property="og:image" content="https://swankieselite.com/og-service-areas.jpg" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": title,
            "description": description,
            "publisher": {
              "@type": "LocalBusiness",
              "name": "SWANKIES Elite Detail & Restoration",
              "telephone": "+19188227188",
              "areaServed": [
                {
                  "@type": "State",
                  "name": "Oklahoma"
                },
                {
                  "@type": "State",
                  "name": "Arkansas"
                }
              ]
            },
            "mainEntity": {
              "@type": "Service",
              "serviceType": "Mobile Detailing",
              "areaServed": [
                ...oklahomaLocations.map(loc => ({
                  "@type": "Place",
                  "name": loc.name,
                  "address": {
                    "@type": "PostalAddress",
                    "addressRegion": "OK"
                  }
                })),
                ...arkansasLocations.map(loc => ({
                  "@type": "Place",
                  "name": loc.name,
                  "address": {
                    "@type": "PostalAddress",
                    "addressRegion": "AR"
                  }
                }))
              ]
            }
          })}
        </script>
      </Helmet>
      
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
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
                href="#oklahoma" 
                className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-black font-bold py-3 px-6 rounded-full transition duration-300 mr-4"
              >
                Oklahoma Locations
              </a>
              <a 
                href="#arkansas" 
                className="bg-transparent border-2 border-white hover:border-primary text-white hover:text-primary font-bold py-3 px-6 rounded-full transition duration-300"
              >
                Arkansas Locations
              </a>
            </div>
          </div>
        </section>
        
        {/* Oklahoma Locations */}
        <section id="oklahoma" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-10 text-center">
              <span className="text-primary text-shadow-neon">Oklahoma</span> Service Areas
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {oklahomaLocations.map((location, index) => (
                <div key={index} className="bg-card/30 rounded-xl shadow-lg border border-primary/20 hover:border-primary/40 transition-all hover:shadow-neon-sm group">
                  <div className="p-6">
                    <h3 className="font-montserrat font-bold text-2xl mb-2 text-white group-hover:text-primary transition-colors">
                      {location.name}
                    </h3>
                    <p className="text-sm text-gray-400 mb-4">{location.county} County</p>
                    <div className="mb-4">
                      <h4 className="text-primary font-bold mb-2">Cities Served:</h4>
                      <p className="text-gray-300">{location.cities.join(', ')}</p>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-primary font-bold mb-2">Attractions:</h4>
                      <p className="text-gray-300">{location.attractions.join(', ')}</p>
                    </div>
                    <Link href={`/service-areas/detailing-service-${location.urlSlug}`}>
                      <a className="inline-block bg-primary text-black font-bold py-2 px-6 rounded-full hover:shadow-neon-sm transition duration-300 transform hover:-translate-y-1">
                        View Details
                      </a>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-dark-2 rounded-xl p-8 mb-16">
              <h3 className="font-montserrat font-bold text-2xl mb-6 text-center">
                Oklahoma <span className="text-primary text-shadow-neon">Counties</span> We Serve
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {oklahomaCounties.map((county, index) => {
                  const countySlug = county.toLowerCase().replace(/\s+/g, '-').replace(' county', '');
                  return (
                    <Link key={index} href={`/service-areas/county/${countySlug}-oklahoma`}>
                      <div className="bg-black/30 rounded-lg p-3 text-center hover:bg-card/30 cursor-pointer transition-colors">
                        <span className="text-white hover:text-primary transition-colors">{county}</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        
        {/* Arkansas Locations */}
        <section id="arkansas" className="py-16 bg-gradient-dark">
          <div className="container mx-auto px-4">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-10 text-center">
              <span className="text-primary text-shadow-neon">Arkansas</span> Service Areas
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {arkansasLocations.map((location, index) => (
                <div key={index} className="bg-card/30 rounded-xl shadow-lg border border-primary/20 hover:border-primary/40 transition-all hover:shadow-neon-sm group">
                  <div className="p-6">
                    <h3 className="font-montserrat font-bold text-2xl mb-2 text-white group-hover:text-primary transition-colors">
                      {location.name}
                    </h3>
                    <p className="text-sm text-gray-400 mb-4">{location.county} County</p>
                    <div className="mb-4">
                      <h4 className="text-primary font-bold mb-2">Cities Served:</h4>
                      <p className="text-gray-300">{location.cities.join(', ')}</p>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-primary font-bold mb-2">Attractions:</h4>
                      <p className="text-gray-300">{location.attractions.join(', ')}</p>
                    </div>
                    <Link href={`/service-areas/detailing-service-${location.urlSlug}`}>
                      <a className="inline-block bg-primary text-black font-bold py-2 px-6 rounded-full hover:shadow-neon-sm transition duration-300 transform hover:-translate-y-1">
                        View Details
                      </a>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-black/30 rounded-xl p-8 mb-16">
              <h3 className="font-montserrat font-bold text-2xl mb-6 text-center">
                Arkansas <span className="text-primary text-shadow-neon">Counties</span> We Serve
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {arkansasCounties.map((county, index) => {
                  const countySlug = county.toLowerCase().replace(/\s+/g, '-').replace(' county', '');
                  return (
                    <Link key={index} href={`/service-areas/county/${countySlug}-arkansas`}>
                      <div className="bg-black/30 rounded-lg p-3 text-center hover:bg-card/30 cursor-pointer transition-colors">
                        <span className="text-white hover:text-primary transition-colors">{county}</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        
        {/* All Cities */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-montserrat font-bold text-3xl mb-10 text-center">
              All <span className="text-primary text-shadow-neon">Cities</span> We Serve
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {cities.map((city, index) => {
                // Determine which state based on cities typically in Arkansas vs Oklahoma
                const isArkansas = ['Bella Vista', 'Bentonville', 'Centerton', 'Decatur', 'Elkins', 
                                   'Farmington', 'Fayetteville', 'Gentry', 'Gravette', 'Greenland', 
                                   'Lowell', 'Pea Ridge', 'Rogers', 'Springdale', 'West Siloam Springs'].includes(city);
                
                const state = isArkansas ? 'arkansas' : 'oklahoma';
                const citySlug = city.toLowerCase().replace(/\s+/g, '-');
                
                return (
                  <div key={index} className="bg-card/30 rounded-lg p-3 text-center hover:bg-card/50 transition-colors">
                    <Link href={`/service-areas/${citySlug}-${state}`} className="text-white hover:text-primary transition-colors">
                      {city}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-16 bg-gradient-dark-2">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-montserrat font-bold text-3xl mb-6">
              Ready for <span className="text-primary text-shadow-neon">Elite Service</span>?
            </h2>
            <p className="text-lg max-w-3xl mx-auto mb-8 text-gray-300">
              Contact us today to schedule your premium detailing service. We bring our expertise and equipment directly to your location.
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

export default ServiceAreasIndex;