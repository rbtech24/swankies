import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const MobileCallButton = () => {
  const isMobile = useIsMobile();
  
  if (!isMobile) return null;
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a href="tel:+19188227188" className="block">
        <Button 
          className="rounded-full bg-primary hover:bg-primary/90 shadow-neon p-4 h-16 w-16"
          aria-label="Call us now"
        >
          <Phone className="h-8 w-8 text-black" />
        </Button>
      </a>
    </div>
  );
};

export default MobileCallButton;