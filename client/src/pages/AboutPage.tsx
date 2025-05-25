import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import { Helmet } from "react-helmet";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About Us | SWANKIES Elite Detail & Restoration | Mobile Detailing Experts</title>
        <meta name="description" content="Learn about SWANKIES Elite Detail & Restoration's story, our commitment to excellence, and why we're the trusted choice for premium mobile detailing services in Oklahoma and Arkansas." />
        <meta name="keywords" content="about mobile detailing, detailing experts, certified detailing, Oklahoma detailing company, Arkansas detailing professionals, SWANKIES Elite Detail story" />
        <link rel="canonical" href="https://swankieselite.com/about" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="About SWANKIES Elite Detail & Restoration" />
        <meta property="og:description" content="Discover our story and commitment to excellence in mobile detailing services across Oklahoma and Arkansas." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://swankieselite.com/about" />
        <meta property="og:image" content="https://swankieselite.com/og-about.jpg" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About SWANKIES Elite Detail & Restoration",
            "description": "Learn about our professional mobile detailing services and commitment to excellence",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "SWANKIES Elite Detail & Restoration",
              "description": "Premium mobile detailing services for auto, boat, and motorcycle across Oklahoma and Arkansas.",
              "foundingDate": "2018",
              "areaServed": ["Northeast Oklahoma", "Northwest Arkansas"],
              "knowsAbout": ["Auto Detailing", "Boat Detailing", "Motorcycle Detailing", "Paint Correction", "Ceramic Coating"]
            }
          })}
        </script>
      </Helmet>
      <Header />
      <div className="pt-20">
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;