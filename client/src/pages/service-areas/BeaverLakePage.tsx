import React from 'react';
import ServiceAreaTemplate from '@/components/ServiceAreaTemplate';

const BeaverLakePage = () => {
  return (
    <ServiceAreaTemplate
      areaName="Beaver Lake"
      state="Arkansas"
      cities={["Rogers", "Eureka Springs", "Garfield", "Prairie Creek", "Monte Ne"]}
      services={[
        "Mobile Car Detailing", 
        "Boat Detailing", 
        "Motorcycle Detailing", 
        "RV Detailing",
        "Ceramic Coating",
        "Paint Correction",
        "Window Tinting"
      ]}
      lakeDescription="Beaver Lake in Northwest Arkansas is a stunning 28,000-acre lake with over 480 miles of shoreline. Our mobile detailing services are perfect for boat owners who want to maintain their watercraft in pristine condition. We bring our professional equipment and expertise directly to your dock or marina, ensuring your boat looks its best throughout the boating season."
      imageUrl="https://images.pexels.com/photos/1482193/pexels-photo-1482193.jpeg?auto=compress&cs=tinysrgb&w=1280"
    />
  );
};

export default BeaverLakePage;