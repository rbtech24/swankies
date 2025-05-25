import React from 'react';
import CityServiceAreaTemplate from '@/components/CityServiceAreaTemplate';

const ClaremoreDetailingPage = () => {
  return (
    <CityServiceAreaTemplate
      cityName="Claremore"
      state="Oklahoma"
      county="Rogers"
      serviceDescription="Known as the home of Will Rogers and the setting for the musical 'Oklahoma!', Claremore combines rich history with modern amenities. Our mobile detailing services cater to Claremore's diverse vehicle needs, from everyday cars to boats on nearby Oologah Lake. We understand the local climate challenges and provide specialized protection that keeps your vehicles looking their best year-round."
      services={[
        "Complete exterior detailing with paint enhancement",
        "Interior deep cleaning and sanitization",
        "Boat detailing for Oologah Lake watercraft",
        "Paint correction and swirl removal",
        "Ceramic coating application",
        "Headlight restoration",
        "RV and large vehicle detailing",
        "Fleet detailing for businesses"
      ]}
      nearbyAttractions={[
        "Will Rogers Memorial Museum",
        "J.M. Davis Arms & Historical Museum",
        "Belvidere Mansion",
        "Claremore Lake",
        "Will Rogers Downs",
        "Robson Performing Arts Center",
        "Route 66"
      ]}
      nearbyLakes={[
        "Oologah Lake",
        "Claremore Lake",
        "Verdigris River"
      ]}
      nearbyCities={[
        "Verdigris",
        "Catoosa",
        "Oologah",
        "Collinsville",
        "Chelsea",
        "Inola",
        "Foyil",
        "Talala",
        "Owasso"
      ]}
    />
  );
};

export default ClaremoreDetailingPage;