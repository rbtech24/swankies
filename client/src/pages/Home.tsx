import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>SWANKIES Elite Detail & Restoration | Mobile Auto, Boat & Motorcycle Detailing in Oklahoma & Arkansas</title>
        <meta name="description" content="Premium mobile detailing services for auto, boat, and motorcycle. Serving Northeast Oklahoma and Northwest Arkansas with professional paint correction, ceramic coating, and interior detailing." />
        <meta name="keywords" content="mobile detailing, auto detailing, boat detailing, motorcycle detailing, ceramic coating, paint correction, Oklahoma detailing, Arkansas detailing, professional detailing" />
        <link rel="canonical" href="https://swankieselite.com/" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="SWANKIES Elite Detail & Restoration | Mobile Detailing Services" />
        <meta property="og:description" content="Premium mobile detailing for auto, boat, and motorcycle. Serving Northeast Oklahoma and Northwest Arkansas." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://swankieselite.com/" />
        <meta property="og:image" content="https://swankieselite.com/og-image.jpg" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "SWANKIES Elite Detail & Restoration",
            "description": "Premium mobile detailing services for auto, boat, and motorcycle.",
            "url": "https://swankieselite.com",
            "telephone": "+19188227188",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "OK",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 36.5929,
              "longitude": -94.8816
            },
            "areaServed": ["Northeast Oklahoma", "Northwest Arkansas"],
            "serviceType": ["Auto Detailing", "Boat Detailing", "Motorcycle Detailing", "Paint Correction", "Ceramic Coating"]
          })}
        </script>
      </Helmet>
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
