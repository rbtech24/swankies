import React from 'react';
import CityServiceAreaTemplate from '@/components/CityServiceAreaTemplate';

const GroveDetailingPage = () => {
  return (
    <CityServiceAreaTemplate
      cityName="Grove"
      state="Oklahoma"
      county="Delaware"
      serviceDescription="Grove is a popular destination for boaters and lake enthusiasts, and our mobile detailing services are perfect for keeping your vehicles and watercraft in pristine condition. Whether you need detailing for your car after a trip to Grand Lake or want to maintain your boat's appearance and value, our team delivers exceptional results right at your marina or residence."
      services={[
        "Full-service auto detailing for all vehicle types",
        "Specialized boat detailing at marinas and lake homes",
        "Motorcycle and watercraft detailing",
        "Paint correction and ceramic coating applications",
        "Interior deep cleaning and protection",
        "Headlight restoration",
        "Engine bay cleaning",
        "Professional RV detailing"
      ]}
      nearbyAttractions={[
        "Grand Lake O' the Cherokees",
        "Har-Ber Village Museum",
        "Lendonwood Gardens",
        "Patricia Island Country Club",
        "Cherokee Queen Riverboat",
        "Wolf Creek Park"
      ]}
      nearbyLakes={[
        "Grand Lake O' the Cherokees",
        "Lake Hudson",
        "Lake Eucha"
      ]}
      nearbyCities={[
        "Jay",
        "Langley",
        "Ketchum",
        "Bernice",
        "Fairland",
        "Afton",
        "Cleora",
        "Colcord",
        "Disney"
      ]}
    />
  );
};

export default GroveDetailingPage;