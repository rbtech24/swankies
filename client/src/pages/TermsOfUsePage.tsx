import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const TermsOfUsePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Terms of Use | SWANKIES Elite Detail & Restoration</title>
        <meta name="description" content="Terms of Use for SWANKIES Elite Detail & Restoration services. Read our terms and conditions for mobile detailing services in Oklahoma and Arkansas." />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://swankieselite.com/terms-of-use" />
      </Helmet>
      
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-montserrat font-bold text-4xl mb-8 pt-8 text-center">
              Terms of <span className="text-primary text-shadow-neon">Use</span>
            </h1>
            
            <div className="prose prose-lg prose-invert max-w-none">
              <p>Last Updated: May 25, 2025</p>
              
              <h2>1. Acceptance of Terms</h2>
              <p>
                Welcome to SWANKIES Elite Detail & Restoration. By accessing and using our website (swankieselite.com) and services, you agree to be bound by these Terms of Use, our Privacy Policy, and any additional terms that may apply. If you do not agree with any of these terms, please do not use our website or services.
              </p>
              
              <h2>2. Services Description</h2>
              <p>
                SWANKIES Elite Detail & Restoration provides mobile detailing services for automobiles, boats, motorcycles, and other vehicles. Our services include, but are not limited to, exterior washing, interior cleaning, paint correction, ceramic coating, and other professional detailing services.
              </p>
              
              <h2>3. Booking and Cancellation</h2>
              <p>
                By booking our services, you agree to provide accurate and complete information. We require at least 24-hour notice for cancellations or rescheduling. Cancellations made with less than 24-hour notice may result in a cancellation fee of up to 50% of the service cost. No-shows may be charged the full service amount.
              </p>
              
              <h2>4. Payment Terms</h2>
              <p>
                Payment is due at the time services are rendered unless otherwise arranged in advance. We accept cash, credit cards, and other payment methods as specified at the time of booking. Prices are subject to change without notice.
              </p>
              
              <h2>5. Service Areas</h2>
              <p>
                We provide services within specific areas of Oklahoma and Arkansas as detailed on our Service Areas page. Additional travel fees may apply for locations outside our primary service areas.
              </p>
              
              <h2>6. Vehicle Condition and Liability</h2>
              <p>
                Prior to service, you must inform us of any existing damage, mechanical issues, or special conditions of your vehicle. We are not responsible for any pre-existing conditions or damage. While we take the utmost care in our services, we are not liable for any damage that may occur due to pre-existing conditions or normal wear and tear revealed during the detailing process.
              </p>
              
              <h2>7. Intellectual Property</h2>
              <p>
                All content on our website, including text, graphics, logos, images, and software, is the property of SWANKIES Elite Detail & Restoration and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without our express written consent.
              </p>
              
              <h2>8. User Content</h2>
              <p>
                By submitting testimonials, reviews, photos, or other content to our website or social media accounts, you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, display, and distribute such content for promotional purposes.
              </p>
              
              <h2>9. Limitation of Liability</h2>
              <p>
                SWANKIES Elite Detail & Restoration will not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services or website.
              </p>
              
              <h2>10. Governing Law</h2>
              <p>
                These Terms of Use shall be governed by and construed in accordance with the laws of the state of Oklahoma, without regard to its conflict of law provisions.
              </p>
              
              <h2>11. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Use at any time. Any changes will be posted on this page with an updated revision date. Your continued use of our website and services after such modifications will constitute your acknowledgment and acceptance of the modified terms.
              </p>
              
              <h2>12. Contact Information</h2>
              <p>
                If you have any questions or concerns about these Terms of Use, please contact us at:
              </p>
              <p>
                SWANKIES Elite Detail & Restoration<br />
                Phone: (918) 822-7188<br />
                Email: info@swankieselite.com
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfUsePage;