import { useState, useEffect } from 'react';

const MobileCallButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Check visibility based on scroll position
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Initial checks
    checkMobile();
    handleScroll();

    // Add event listeners
    window.addEventListener('resize', checkMobile);
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listeners
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isMobile) return null;

  return (
    <a
      href="tel:+19188227188"
      className={`fixed bottom-6 right-6 bg-primary text-primary-foreground rounded-full shadow-neon z-40 flex items-center justify-center h-16 w-16 transform transition-all duration-300 ${
        isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0 pointer-events-none'
      }`}
      aria-label="Call Now"
    >
      <i className="fas fa-phone-alt text-2xl"></i>
    </a>
  );
};

export default MobileCallButton;