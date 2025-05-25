import React from 'react';
import CityServiceAreaTemplate from '@/components/CityServiceAreaTemplate';

const BentonvilleDetailingPage = () => {
  return (
    <CityServiceAreaTemplate
      cityName="Bentonville"
      state="Arkansas"
      county="Benton"
      serviceDescription="Known as the headquarters of Walmart and a growing hub for mountain biking and outdoor activities, Bentonville residents appreciate premium services that save time and deliver exceptional results. Our mobile detailing service brings professional-grade equipment and techniques directly to your home, office, or any location convenient for you in the Bentonville area."
      services={[
        "Executive auto detailing for busy professionals",
        "Complete exterior detailing with paint enhancement",
        "Interior deep cleaning and sanitization",
        "Ceramic coating application",
        "Professional paint correction",
        "Headlight restoration",
        "MTB and outdoor vehicle specialized cleaning",
        "Corporate fleet detailing programs"
      ]}
      nearbyAttractions={[
        "Crystal Bridges Museum of American Art",
        "The Momentary",
        "Walmart Museum",
        "Slaughter Pen Mountain Bike Trail",
        "8th Street Market",
        "Bentonville Square",
        "Scott Family Amazeum"
      ]}
      nearbyLakes={[
        "Beaver Lake",
        "Lake Windsor",
        "Loch Lomond",
        "Lake Avalon"
      ]}
      nearbyCities={[
        "Rogers",
        "Bella Vista",
        "Centerton",
        "Pea Ridge",
        "Cave Springs",
        "Lowell",
        "Springdale",
        "Highfill",
        "Little Flock"
      ]}
    />
  );
};

export default BentonvilleDetailingPage;