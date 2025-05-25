import React from 'react';
import CityServiceAreaTemplate from '@/components/CityServiceAreaTemplate';

const TahlequahDetailingPage = () => {
  return (
    <CityServiceAreaTemplate
      cityName="Tahlequah"
      state="Oklahoma"
      county="Cherokee"
      serviceDescription="As the capital of the Cherokee Nation and home to Northeastern State University, Tahlequah residents deserve premium mobile detailing services that match the area's rich heritage. Our elite detailing team brings professional-grade equipment and eco-friendly products directly to your location, whether you're near the Illinois River, in downtown Tahlequah, or at a residential property in the surrounding area."
      services={[
        "Complete exterior detailing with clay bar treatment",
        "Interior deep cleaning and sanitization",
        "Paint correction for swirl and scratch removal",
        "Ceramic coating application for long-lasting protection",
        "Headlight restoration",
        "Boat detailing for Illinois River and Lake Tenkiller watercraft",
        "Motorcycle detailing",
        "Fleet vehicle maintenance programs"
      ]}
      nearbyAttractions={[
        "Illinois River",
        "Lake Tenkiller",
        "Cherokee National History Museum",
        "Northeastern State University",
        "Cherokee Heritage Center",
        "Ancient Village",
        "Tahlequah Capitol Square"
      ]}
      nearbyLakes={[
        "Lake Tenkiller",
        "Fort Gibson Lake",
        "Illinois River"
      ]}
      nearbyCities={[
        "Park Hill",
        "Hulbert",
        "Welling",
        "Eldon",
        "Keys",
        "Cookson",
        "Peggs",
        "Moodys",
        "Briggs"
      ]}
    />
  );
};

export default TahlequahDetailingPage;