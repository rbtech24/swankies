import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const SitemapPage = () => {
  const servicePages = [
    { name: "Auto Detailing", url: "/services/auto-detailing" },
    { name: "Boat Detailing", url: "/services/boat-detailing" },
    { name: "Motorcycle Detailing", url: "/services/motorcycle-detailing" },
    { name: "Paint Correction", url: "/services/paint-correction" },
    { name: "Ceramic Coating", url: "/services/ceramic-coating" },
    { name: "Interior Detailing", url: "/services/interior-detailing" }
  ];

  const mainPages = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Gallery", url: "/gallery" },
    { name: "Service Areas", url: "/service-areas" },
    { name: "About Us", url: "/about" },
    { name: "Testimonials", url: "/testimonials" },
    { name: "Contact", url: "/contact" },
    { name: "Book Now", url: "/booking" }
  ];

  const serviceAreaPages = [
    { name: "Grand Lake, Oklahoma", url: "/service-areas/detailing-service-grand-lake" },
    { name: "Tenkiller Lake, Oklahoma", url: "/service-areas/detailing-service-tenkiller-lake" },
    { name: "Beaver Lake, Arkansas", url: "/service-areas/detailing-service-beaver-lake" }
  ];

  const cityPages = [
    { name: "Grove, Oklahoma", url: "/service-areas/grove-oklahoma" },
    { name: "Jay, Oklahoma", url: "/service-areas/jay-oklahoma" },
    { name: "Tahlequah, Oklahoma", url: "/service-areas/tahlequah-oklahoma" },
    { name: "Bentonville, Arkansas", url: "/service-areas/bentonville-arkansas" },
    { name: "Rogers, Arkansas", url: "/service-areas/rogers-arkansas" },
    { name: "Miami, Oklahoma", url: "/service-areas/miami-oklahoma" },
    { name: "Claremore, Oklahoma", url: "/service-areas/claremore-oklahoma" },
    { name: "Salina, Oklahoma", url: "/service-areas/salina-oklahoma" }
  ];

  const legalPages = [
    { name: "Terms of Use", url: "/terms-of-use" },
    { name: "Privacy Policy", url: "/privacy-policy" },
    { name: "Cookie Policy", url: "/cookie-policy" },
    { name: "Sitemap", url: "/sitemap" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Sitemap | SWANKIES Elite Detail & Restoration</title>
        <meta name="description" content="Navigate our website with our comprehensive sitemap. Find all pages related to our mobile detailing services for autos, boats, and motorcycles." />
        <link rel="canonical" href="https://swankieselite.com/sitemap" />
      </Helmet>
      
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-montserrat font-bold text-4xl mb-8 pt-8 text-center">
              Site<span className="text-primary text-shadow-neon">map</span>
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div>
                <h2 className="font-montserrat font-bold text-2xl mb-4 text-primary">
                  Main Pages
                </h2>
                <ul className="space-y-2">
                  {mainPages.map((page, index) => (
                    <li key={index}>
                      <a 
                        href={page.url} 
                        onClick={() => window.scrollTo(0, 0)} 
                        className="text-white hover:text-primary transition-colors"
                      >
                        {page.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="font-montserrat font-bold text-2xl mb-4 text-primary">
                  Services
                </h2>
                <ul className="space-y-2">
                  {servicePages.map((page, index) => (
                    <li key={index}>
                      <a 
                        href={page.url} 
                        onClick={() => window.scrollTo(0, 0)} 
                        className="text-white hover:text-primary transition-colors"
                      >
                        {page.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="font-montserrat font-bold text-2xl mb-4 text-primary">
                Service Areas - Lakes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {serviceAreaPages.map((page, index) => (
                  <div key={index}>
                    <a 
                      href={page.url} 
                      onClick={() => window.scrollTo(0, 0)} 
                      className="text-white hover:text-primary transition-colors"
                    >
                      {page.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="font-montserrat font-bold text-2xl mb-4 text-primary">
                Service Areas - Cities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {cityPages.map((page, index) => (
                  <div key={index}>
                    <a 
                      href={page.url} 
                      onClick={() => window.scrollTo(0, 0)} 
                      className="text-white hover:text-primary transition-colors"
                    >
                      {page.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="font-montserrat font-bold text-2xl mb-4 text-primary">
                Legal Pages
              </h2>
              <ul className="space-y-2">
                {legalPages.map((page, index) => (
                  <li key={index}>
                    <a 
                      href={page.url} 
                      onClick={() => window.scrollTo(0, 0)} 
                      className="text-white hover:text-primary transition-colors"
                    >
                      {page.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SitemapPage;