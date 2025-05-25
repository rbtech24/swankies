import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import ServiceAreas from "@/pages/ServiceAreasIndex";
import ServicesPage from "@/pages/ServicesPage";
import GalleryPage from "@/pages/GalleryPage";
import AboutPage from "@/pages/AboutPage";
import TestimonialsPage from "@/pages/TestimonialsPage";
import ContactPage from "@/pages/ContactPage";
import BookingPage from "@/pages/BookingPage";
import AutoDetailingPage from "@/pages/AutoDetailingPage";
import BoatDetailingPage from "@/pages/BoatDetailingPage";
import MotorcycleDetailingPage from "@/pages/MotorcycleDetailingPage";
import MobileCallButton from "@/components/MobileCallButton";

// Service Area Pages
import GrandLakePage from "@/pages/service-areas/GrandLakePage";
import TenkillerLakePage from "@/pages/service-areas/TenkillerLakePage";
import BeaverLakePage from "@/pages/service-areas/BeaverLakePage";

// City Service Area Pages
import GroveDetailingPage from "@/pages/service-areas/cities/GroveDetailingPage";
import TahlequahDetailingPage from "@/pages/service-areas/cities/TahlequahDetailingPage";
import BentonvilleDetailingPage from "@/pages/service-areas/cities/BentonvilleDetailingPage";
import RogersDetailingPage from "@/pages/service-areas/cities/RogersDetailingPage";
import ClaremoreDetailingPage from "@/pages/service-areas/cities/ClaremoreDetailingPage";
import JayDetailingPage from "@/pages/service-areas/cities/JayDetailingPage";
import SalinaDetailingPage from "@/pages/service-areas/cities/SalinaDetailingPage";
import MiamiDetailingPage from "@/pages/service-areas/cities/MiamiDetailingPage";
import GenericCityDetailingPage from "@/pages/service-areas/cities/GenericCityDetailingPage";

// County Service Area Pages
import CountyServiceAreaTemplate from "@/pages/service-areas/county/CountyServiceAreaTemplate";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/gallery" component={GalleryPage} />
      <Route path="/service-areas" component={ServiceAreas} />
      <Route path="/about" component={AboutPage} />
      <Route path="/testimonials" component={TestimonialsPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/booking" component={BookingPage} />
      <Route path="/services/auto-detailing" component={AutoDetailingPage} />
      <Route path="/services/boat-detailing" component={BoatDetailingPage} />
      <Route path="/services/motorcycle-detailing" component={MotorcycleDetailingPage} />
      
      {/* Service Area Routes - Lakes */}
      <Route path="/service-areas/detailing-service-grand-lake" component={GrandLakePage} />
      <Route path="/service-areas/detailing-service-tenkiller-lake" component={TenkillerLakePage} />
      <Route path="/service-areas/detailing-service-beaver-lake" component={BeaverLakePage} />
      
      {/* Service Area Routes - Cities */}
      <Route path="/service-areas/grove-oklahoma" component={GroveDetailingPage} />
      <Route path="/service-areas/tahlequah-oklahoma" component={TahlequahDetailingPage} />
      <Route path="/service-areas/bentonville-arkansas" component={BentonvilleDetailingPage} />
      <Route path="/service-areas/rogers-arkansas" component={RogersDetailingPage} />
      <Route path="/service-areas/claremore-oklahoma" component={ClaremoreDetailingPage} />
      <Route path="/service-areas/jay-oklahoma" component={JayDetailingPage} />
      <Route path="/service-areas/salina-oklahoma" component={SalinaDetailingPage} />
      <Route path="/service-areas/miami-oklahoma" component={MiamiDetailingPage} />
      
      {/* County service area routes */}
      <Route path="/service-areas/county/:countyState" component={CountyServiceAreaTemplate} />
      
      {/* Generic route for any other city-state combination */}
      <Route path="/service-areas/:cityState" component={GenericCityDetailingPage} />
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <MobileCallButton />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
