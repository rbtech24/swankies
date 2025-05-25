import React from 'react';
import ServiceAreaTemplate from '@/components/ServiceAreaTemplate';

const TenkillerLakePage = () => {
  return (
    <ServiceAreaTemplate
      areaName="Tenkiller Lake"
      state="Oklahoma"
      cities={["Tahlequah", "Vian", "Gore", "Keys", "Cookson"]}
      services={[
        "Mobile Car Detailing", 
        "Boat Detailing", 
        "Motorcycle Detailing", 
        "RV Detailing",
        "Ceramic Coating",
        "Paint Correction",
        "Window Tinting"
      ]}
      lakeDescription="Lake Tenkiller, often called 'Heaven in the Hills,' is a clear-water lake in eastern Oklahoma. Our mobile detailing team provides premium services to keep your boat, vehicle, or motorcycle in peak condition, regardless of environmental exposure. We come directly to your location, whether at the marina, home, or office."
      imageUrl="https://images.pexels.com/photos/176400/pexels-photo-176400.jpeg?auto=compress&cs=tinysrgb&w=1280"
    />
  );
};

export default TenkillerLakePage;