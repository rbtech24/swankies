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
      
      {/* Service Area Routes */}
      <Route path="/service-areas/detailing-service-grand-lake" component={GrandLakePage} />
      <Route path="/service-areas/detailing-service-tenkiller-lake" component={TenkillerLakePage} />
      <Route path="/service-areas/detailing-service-beaver-lake" component={BeaverLakePage} />
      
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
