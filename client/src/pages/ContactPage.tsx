import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Helmet } from "react-helmet";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact Us | SWANKIES Elite Detail & Restoration | Mobile Detailing</title>
        <meta name="description" content="Contact SWANKIES Elite Detail & Restoration for premium mobile detailing services in Oklahoma and Arkansas. Reach us for auto, boat, and motorcycle detailing inquiries." />
        <meta name="keywords" content="contact mobile detailing, detailing service contact, Oklahoma detailing contact, Arkansas detailing contact, auto detailing phone number, boat detailing contact" />
        <link rel="canonical" href="https://swankieselite.com/contact" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Contact SWANKIES Elite Detail & Restoration" />
        <meta property="og:description" content="Reach out to us for premium mobile detailing services across Oklahoma and Arkansas." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://swankieselite.com/contact" />
        <meta property="og:image" content="https://swankieselite.com/og-contact.jpg" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact SWANKIES Elite Detail & Restoration",
            "description": "Contact information for SWANKIES Elite Detail & Restoration",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "SWANKIES Elite Detail & Restoration",
              "telephone": "+19188227188",
              "email": "info@swankieselite.com",
              "areaServed": ["Northeast Oklahoma", "Northwest Arkansas"],
              "serviceType": ["Auto Detailing", "Boat Detailing", "Motorcycle Detailing"]
            }
          })}
        </script>
      </Helmet>
      <Header />
      <div className="pt-20">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;