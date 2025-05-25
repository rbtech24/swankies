import React from 'react';
import CityServiceAreaTemplate from '@/components/CityServiceAreaTemplate';

const MiamiDetailingPage = () => {
  return (
    <CityServiceAreaTemplate
      cityName="Miami"
      state="Oklahoma"
      county="Ottawa"
      serviceDescription="Miami, Oklahoma, situated in the northeastern corner of the state, combines rich Native American heritage with classic Route 66 charm. Our mobile detailing services in Miami cater to a diverse range of vehicles, from everyday cars to boats used on nearby Grand Lake. We understand the local climate challenges, including seasonal pollen, road salt, and summer heat, providing specialized services that keep your vehicles in pristine condition year-round."
      services={[
        "Complete exterior detailing with paint enhancement",
        "Interior deep cleaning and sanitization",
        "Boat detailing for Grand Lake watercraft",
        "Paint correction and ceramic coating",
        "Motorcycle detailing",
        "RV and large vehicle detailing",
        "Headlight restoration",
        "Fleet services for local businesses"
      ]}
      nearbyAttractions={[
        "Route 66",
        "Coleman Theatre",
        "Dobson Museum",
        "Buffalo Run Casino",
        "Ribbon Road",
        "Modoc Tribal Grounds",
        "NEO A&M College"
      ]}
      nearbyLakes={[
        "Grand Lake O' the Cherokees",
        "Spring River",
        "Neosho River"
      ]}
      nearbyCities={[
        "Commerce",
        "Quapaw",
        "North Miami",
        "Fairland",
        "Afton",
        "Wyandotte",
        "Picher",
        "Grove",
        "Vinita"
      ]}
    />
  );
};

export default MiamiDetailingPage;