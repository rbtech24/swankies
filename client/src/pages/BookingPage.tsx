import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm';

const BookingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Book Your Detailing Service | SWANKIES Elite Detail & Restoration</title>
        <meta name="description" content="Schedule your premium mobile detailing service for auto, boat, or motorcycle. Choose your preferred date and time for service across Oklahoma and Arkansas." />
        <meta property="og:title" content="Book Your Detailing Service | SWANKIES Elite Detail & Restoration" />
        <meta property="og:description" content="Schedule your premium mobile detailing service. Choose your preferred date and time for professional detailing at your location." />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="book detailing, schedule detailing, auto detailing appointment, boat detailing booking, motorcycle detailing schedule, Oklahoma detailing, Arkansas detailing" />
        <link rel="canonical" href="https://swankieselite.com/booking" />
      </Helmet>
      
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section 
          className="py-16 bg-gradient-dark-2 relative"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.6)), url('https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&w=1280')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
              Book Your <span className="text-primary text-shadow-neon">Detailing Service</span>
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 mb-8">
              Schedule your premium mobile detailing service with just a few clicks. Choose your preferred date and time, and we'll bring our expertise directly to your location.
            </p>
          </div>
        </section>
        
        {/* Booking Form Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-16">
              <BookingForm />
            </div>
            
            <div className="max-w-3xl mx-auto mt-16 bg-card/30 rounded-xl p-8 border border-primary/20">
              <h2 className="font-montserrat font-bold text-2xl mb-6 text-center">
                Booking <span className="text-primary text-shadow-neon">Information</span>
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-xl mb-3">Service Hours</h3>
                  <p className="text-gray-300">
                    We offer detailing services from Monday through Saturday, 8:00 AM to 6:00 PM. Please note that all appointments are subject to availability and weather conditions for outdoor services.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-xl mb-3">Service Areas</h3>
                  <p className="text-gray-300">
                    We provide mobile detailing services throughout Northeast Oklahoma and Northwest Arkansas. For specific service areas, please visit our <a href="/service-areas" className="text-primary hover:underline">Service Areas</a> page.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-xl mb-3">Booking Confirmation</h3>
                  <p className="text-gray-300">
                    After submitting your booking request, you'll receive an email confirmation within 24 hours. One of our team members will also contact you to confirm your appointment details and provide any additional information.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-xl mb-3">Cancellation Policy</h3>
                  <p className="text-gray-300">
                    We understand that plans can change. We request at least 24 hours' notice for cancellations or rescheduling. For same-day cancellations, a $50 fee may apply.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-xl mb-3">Weather Policy</h3>
                  <p className="text-gray-300">
                    In case of inclement weather, we may need to reschedule your appointment. We'll monitor the forecast and contact you if rescheduling is necessary. You'll never be charged for weather-related rescheduling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Need Assistance Section */}
        <section className="py-16 bg-gradient-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-montserrat font-bold text-3xl mb-6">
              Need <span className="text-primary text-shadow-neon">Assistance?</span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto mb-8 text-gray-300">
              If you have any questions or need help with your booking, our team is ready to assist you. Contact us by phone or email for immediate assistance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="tel:9188227188" 
                className="bg-primary text-black font-bold py-3 px-8 rounded-full text-lg hover:shadow-neon-lg transition duration-300 transform hover:-translate-y-1 inline-block"
              >
                Call (918) 822-7188
              </a>
              <a 
                href="mailto:info@swankieselite.com" 
                className="bg-transparent border-2 border-white hover:border-primary text-white hover:text-primary font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:-translate-y-1 inline-block"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BookingPage;