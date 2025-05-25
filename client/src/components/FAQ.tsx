import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqItems = [
    {
      question: "What areas do you serve?",
      answer: "We proudly serve Northeast Oklahoma and Northwest Arkansas, including the Grand Lake, Lake Tenkiller, Beaver Lake areas, and surrounding communities. Our mobile detailing service comes directly to your location across both states."
    },
    {
      question: "How long does a detailing service take?",
      answer: "Service times vary depending on the package and vehicle condition. Basic exterior detailing typically takes 1-2 hours, while comprehensive packages with paint correction or ceramic coating may take 4-8+ hours. We'll provide a time estimate when you book your appointment."
    },
    {
      question: "Do I need to provide water or electricity?",
      answer: "No, our mobile detailing unit is fully self-contained with water tanks and generators. We bring everything needed to provide premium service at your location, whether it's your home, office, or marina."
    },
    {
      question: "What forms of payment do you accept?",
      answer: "We accept all major credit cards, cash, Venmo, PayPal, and CashApp. Payment is typically collected upon completion of service and satisfaction with the results."
    },
    {
      question: "How far in advance should I book?",
      answer: "We recommend booking at least 2-3 days in advance for regular detailing services. For specialized services like ceramic coating or paint correction, 1-2 weeks notice is preferred. For same-day service, call us to check availability."
    },
    {
      question: "Do you detail boats and other watercraft?",
      answer: "Yes! We specialize in boat detailing services including hull cleaning, oxidation removal, interior detailing, and protective treatments. We service all types of watercraft including pontoons, ski boats, fishing boats, jet skis, and more."
    },
    {
      question: "What if it rains on my scheduled day?",
      answer: "If inclement weather is forecasted on your scheduled day, we'll contact you to reschedule. If unexpected weather occurs during your appointment, we may need to reschedule or adjust the service accordingly."
    },
    {
      question: "How long does ceramic coating last?",
      answer: "Our professional ceramic coatings typically last 2-5 years with proper maintenance. The exact duration depends on the specific product used, exposure to elements, and how well the vehicle is maintained after application."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-montserrat font-bold text-4xl mb-12 text-center">
          Frequently Asked <span className="text-primary text-shadow-neon">Questions</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-800 rounded-lg bg-card/30 px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-xl font-semibold py-4 text-left hover:text-primary transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4 pt-2">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-6">
              Have more questions? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/contact" 
                className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-black font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:-translate-y-1 inline-block"
              >
                Contact Us
              </a>
              <a 
                href="/booking" 
                className="bg-primary text-black font-bold py-3 px-8 rounded-full text-lg hover:shadow-neon-lg transition duration-300 transform hover:-translate-y-1 inline-block"
              >
                Book Your Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;