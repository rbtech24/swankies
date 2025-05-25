import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Privacy Policy | SWANKIES Elite Detail & Restoration</title>
        <meta name="description" content="Privacy Policy for SWANKIES Elite Detail & Restoration. Learn how we collect, use, and protect your personal information." />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://swankieselite.com/privacy-policy" />
      </Helmet>
      
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-montserrat font-bold text-4xl mb-8 pt-8 text-center">
              Privacy <span className="text-primary text-shadow-neon">Policy</span>
            </h1>
            
            <div className="prose prose-lg prose-invert max-w-none">
              <p>Last Updated: May 25, 2025</p>
              
              <p>
                At SWANKIES Elite Detail & Restoration, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
              </p>
              
              <h2>1. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul>
                <li><strong>Personal Information:</strong> Name, email address, phone number, and address when you book a service, contact us, or create an account.</li>
                <li><strong>Vehicle Information:</strong> Make, model, year, and condition of your vehicle for service purposes.</li>
                <li><strong>Payment Information:</strong> Credit card details or other payment information when you make a purchase.</li>
                <li><strong>Usage Data:</strong> Information about how you use our website, including IP address, browser type, pages visited, and time spent on the site.</li>
                <li><strong>Communications:</strong> Records of your correspondence with us if you contact us directly.</li>
              </ul>
              
              <h2>2. How We Use Your Information</h2>
              <p>We use the information we collect for the following purposes:</p>
              <ul>
                <li>To provide and improve our services</li>
                <li>To process payments and bookings</li>
                <li>To communicate with you about appointments, promotions, and updates</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To personalize your experience and deliver content relevant to your interests</li>
                <li>To maintain the security and functionality of our website</li>
                <li>To comply with legal obligations</li>
              </ul>
              
              <h2>3. Information Sharing and Disclosure</h2>
              <p>We may share your information with:</p>
              <ul>
                <li><strong>Service Providers:</strong> Third-party vendors who perform services on our behalf, such as payment processing or website hosting.</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights or the safety of our users.</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, your information may be transferred as a business asset.</li>
              </ul>
              <p>We do not sell or rent your personal information to third parties for marketing purposes.</p>
              
              <h2>4. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to collect information about your browsing activities. These technologies help us analyze website traffic, customize content, and improve your experience. You can control cookies through your browser settings, but disabling them may limit some features of our website.
              </p>
              
              <h2>5. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no internet transmission is completely secure, and we cannot guarantee the security of information transmitted to our website.
              </p>
              
              <h2>6. Your Rights and Choices</h2>
              <p>Depending on your location, you may have the following rights:</p>
              <ul>
                <li>Access, correct, or delete your personal information</li>
                <li>Object to or restrict the processing of your data</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time (where processing is based on consent)</li>
                <li>Opt-out of marketing communications</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
              </p>
              
              <h2>7. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.
              </p>
              
              <h2>8. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will post the revised policy on this page with an updated revision date. We encourage you to review this policy periodically.
              </p>
              
              <h2>9. Contact Us</h2>
              <p>
                If you have any questions or concerns about our Privacy Policy or our data practices, please contact us at:
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

export default PrivacyPolicyPage;