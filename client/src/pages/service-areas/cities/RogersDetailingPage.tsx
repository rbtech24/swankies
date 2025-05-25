import React from 'react';
import CityServiceAreaTemplate from '@/components/CityServiceAreaTemplate';

const RogersDetailingPage = () => {
  return (
    <CityServiceAreaTemplate
      cityName="Rogers"
      state="Arkansas"
      county="Benton"
      serviceDescription="Rogers combines small-town charm with modern amenities, and our mobile detailing services are designed to fit perfectly with the busy lifestyle of Rogers residents. Whether you're near the Pinnacle Hills Promenade, relaxing at Beaver Lake, or at home in one of Rogers' beautiful neighborhoods, our team brings premium detailing services directly to you."
      services={[
        "Comprehensive auto detailing packages",
        "Boat detailing for Beaver Lake watercraft",
        "Motorcycle detailing",
        "Paint correction and swirl removal",
        "Ceramic coating application",
        "Interior deep cleaning and protection",
        "Headlight restoration",
        "Engine bay detailing"
      ]}
      nearbyAttractions={[
        "Beaver Lake",
        "Pinnacle Hills Promenade",
        "Rogers Aquatics Center",
        "War Eagle Mill",
        "Hobbs State Park",
        "Daisy Airgun Museum",
        "Rogers Historical Museum"
      ]}
      nearbyLakes={[
        "Beaver Lake",
        "Lake Atalanta",
        "Prairie Creek Marina"
      ]}
      nearbyCities={[
        "Bentonville",
        "Lowell",
        "Springdale",
        "Cave Springs",
        "Little Flock",
        "Bella Vista",
        "Avoca",
        "Pea Ridge",
        "Centerton"
      ]}
    />
  );
};

export default RogersDetailingPage;