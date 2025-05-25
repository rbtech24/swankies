import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;