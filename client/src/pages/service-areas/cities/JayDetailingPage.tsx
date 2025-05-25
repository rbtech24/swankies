import React from 'react';
import CityServiceAreaTemplate from '@/components/CityServiceAreaTemplate';

const JayDetailingPage = () => {
  return (
    <CityServiceAreaTemplate
      cityName="Jay"
      state="Oklahoma"
      county="Delaware"
      serviceDescription="Jay, Oklahoma is the gateway to some of the most beautiful lakes and outdoor areas in Northeast Oklahoma. As the county seat of Delaware County, Jay is centrally located near Grand Lake, Lake Eucha, and Spavinaw Lake. Our mobile detailing services come directly to Jay residents, offering premium detailing for boats, cars, trucks, and RVs. We understand the specific needs of vehicles in this region that experience everything from lake water exposure to dusty country roads."
      services={[
        "Complete exterior detailing with paint enhancement",
        "Interior deep cleaning and sanitization",
        "Boat detailing for Grand Lake watercraft",
        "Paint correction and swirl removal",
        "Ceramic coating application",
        "Headlight restoration",
        "RV and large vehicle detailing",
        "Motorcycle detailing"
      ]}
      nearbyAttractions={[
        "Natural Falls State Park",
        "Cherokee Nation Casino",
        "Pensacola Dam",
        "Lake Eucha Park",
        "Spring Valley Ranch"
      ]}
      nearbyLakes={[
        "Grand Lake O' the Cherokees",
        "Lake Eucha",
        "Spavinaw Lake"
      ]}
      nearbyCities={[
        "Grove",
        "Salina",
        "Spavinaw",
        "Kansas",
        "Colcord",
        "West Siloam Springs",
        "Eucha",
        "Langley",
        "Vinita"
      ]}
    />
  );
};

export default JayDetailingPage;