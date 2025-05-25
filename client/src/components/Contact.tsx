import { useState } from "react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import L from "leaflet";
import { useEffect, useRef } from "react";

// Define form schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  service: z.string().min(1, { message: "Please select a service" }),
  message: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMapRef = useRef<L.Map | null>(null);

  // Form definition
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    },
  });

  // Handle form submission
  const onSubmit = async (data: ContactFormValues) => {
    try {
      await apiRequest("POST", "/api/contact", data);
      setIsSubmitted(true);
      toast({
        title: "Success!",
        description: "Your message has been sent. We'll contact you shortly.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      });
    }
  };

  // Initialize map
  useEffect(() => {
    if (mapRef.current && !leafletMapRef.current) {
      // Center coordinates for Lake Tenkiller area
      const map = L.map(mapRef.current).setView([35.9209, -94.8975], 9);
      
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
      
      // Add markers for service areas
      L.marker([36.3693, -94.7971]).addTo(map)
        .bindPopup('Lake Tenkiller')
        .openPopup();
      
      L.marker([36.1870, -95.0970]).addTo(map)
        .bindPopup('Lake Eucha');
      
      L.marker([36.4434, -95.2701]).addTo(map)
        .bindPopup('Lake Hudson');
      
      L.marker([36.4213, -94.0683]).addTo(map)
        .bindPopup('Beaver Lake');
      
      // Draw service area
      L.circle([36.3693, -94.7971], {
        color: '#39ff14',
        fillColor: '#39ff14',
        fillOpacity: 0.1,
        radius: 50000
      }).addTo(map);
      
      leafletMapRef.current = map;
    }
    
    return () => {
      if (leafletMapRef.current) {
        leafletMapRef.current.remove();
        leafletMapRef.current = null;
      }
    };
  }, []);

  return (
    <section id="contact" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-montserrat font-bold text-4xl mb-6">
              Get In <span className="text-primary text-shadow-neon">Touch</span>
            </h2>
            <p className="text-lg mb-8 text-gray-300">
              Ready to transform your vehicle, boat, or motorcycle? Contact us today to schedule your detailing service or request a free quote.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-secondary p-3 rounded-full mr-4">
                  <i className="fas fa-map-marker-alt text-primary"></i>
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-lg">Service Area</h4>
                  <p className="text-gray-400">Lake Eucha, Lake Hudson, Lake Tenkiller, and Beaver Lake areas in Oklahoma and Arkansas</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-secondary p-3 rounded-full mr-4">
                  <i className="fas fa-phone-alt text-primary"></i>
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-lg">Phone</h4>
                  <p className="text-gray-400">
                    <a href="tel:+19185551234" className="hover:text-primary transition duration-300">(918) 555-1234</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-secondary p-3 rounded-full mr-4">
                  <i className="fas fa-envelope text-primary"></i>
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-lg">Email</h4>
                  <p className="text-gray-400">
                    <a href="mailto:info@swankieselite.com" className="hover:text-primary transition duration-300">info@swankieselite.com</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-secondary p-3 rounded-full mr-4">
                  <i className="fas fa-clock text-primary"></i>
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-lg">Hours</h4>
                  <p className="text-gray-400">Monday - Saturday: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-400">Sunday: By appointment only</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="bg-secondary p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="bg-secondary p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="bg-secondary p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition duration-300">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          
          <div>
            <div className="bg-gradient-dark-2 rounded-xl p-8 shadow-lg border border-gray-800">
              <h3 className="font-montserrat font-bold text-2xl mb-6 text-center">
                Request a <span className="text-primary">Quote</span>
              </h3>
              
              {!isSubmitted ? (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your Name" 
                                {...field} 
                                className="bg-background border-gray-700 focus:border-primary" 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your Phone" 
                                type="tel" 
                                {...field} 
                                className="bg-background border-gray-700 focus:border-primary" 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your Email" 
                              type="email" 
                              {...field} 
                              className="bg-background border-gray-700 focus:border-primary" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Needed</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-background border-gray-700 focus:border-primary">
                                <SelectValue placeholder="Select a Service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="auto">Auto Detailing</SelectItem>
                              <SelectItem value="boat">Boat Detailing</SelectItem>
                              <SelectItem value="motorcycle">Motorcycle Detailing</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your detailing needs" 
                              rows={4} 
                              {...field} 
                              className="bg-background border-gray-700 focus:border-primary" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-primary text-primary-foreground font-bold py-3 px-6 rounded-full hover:shadow-neon-lg transition duration-300"
                    >
                      Send Request
                    </Button>
                  </form>
                </Form>
              ) : (
                <div className="text-center py-8">
                  <div className="text-primary text-5xl mb-4">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <h3 className="font-montserrat font-bold text-2xl mb-2">Thank You!</h3>
                  <p className="text-gray-300">Your request has been submitted successfully. We'll contact you shortly.</p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Service Area Map */}
        <div className="mt-16">
          <h3 className="font-montserrat font-bold text-2xl mb-6 text-center">
            Our <span className="text-primary">Service</span> Area
          </h3>
          <div ref={mapRef} className="rounded-xl overflow-hidden h-[400px]"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
