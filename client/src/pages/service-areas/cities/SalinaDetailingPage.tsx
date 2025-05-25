import React from 'react';
import CityServiceAreaTemplate from '@/components/CityServiceAreaTemplate';

const SalinaDetailingPage = () => {
  return (
    <CityServiceAreaTemplate
      cityName="Salina"
      state="Oklahoma"
      county="Mayes"
      serviceDescription="Salina, Oklahoma sits at the junction of the Grand River, Lake Hudson, and W.R. Holway Reservoir, making it a prime location for water recreation and lake life. Our mobile detailing services are perfectly suited for Salina residents who need expert care for their boats, vehicles, and RVs. We understand the unique challenges of maintaining vehicles in lake areas and provide specialized services to protect against water damage, sun exposure, and mineral deposits."
      services={[
        "Complete exterior detailing with paint enhancement",
        "Interior deep cleaning and sanitization",
        "Boat detailing for Lake Hudson and Grand Lake watercraft",
        "Paint correction and ceramic coating",
        "Watercraft protection treatments",
        "RV and large vehicle detailing",
        "Motorcycle detailing",
        "Fleet services for local businesses"
      ]}
      nearbyAttractions={[
        "Lake Hudson (Markham Ferry Reservoir)",
        "W.R. Holway Reservoir",
        "Grand River",
        "Salina Highbanks Speedway",
        "Spavinaw Wildlife Management Area"
      ]}
      nearbyLakes={[
        "Lake Hudson",
        "Grand Lake O' the Cherokees",
        "W.R. Holway Reservoir",
        "Spavinaw Lake"
      ]}
      nearbyCities={[
        "Pryor",
        "Locust Grove",
        "Spavinaw",
        "Chouteau",
        "Disney",
        "Langley",
        "Jay",
        "Adair",
        "Rose"
      ]}
    />
  );
};

export default SalinaDetailingPage;