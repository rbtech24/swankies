import React from 'react';
import { useLocation } from 'wouter';
import CityServiceAreaTemplate from '@/components/CityServiceAreaTemplate';
import NotFound from '@/pages/not-found';

// Helper function to determine state and county based on city name
const getCityInfo = (citySlug: string) => {
  // Extract city name and state from URL format (city-state)
  const parts = citySlug.split('-');
  if (parts.length < 2) return null;
  
  const state = parts[parts.length - 1];
  // Remove state from parts and rejoin to get city name with dashes
  parts.pop();
  const cityWithDashes = parts.join('-');
  
  // Convert dash format back to proper city name format
  const cityName = cityWithDashes.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  // Determine county based on city and state
  let county = "Unknown";
  
  // Oklahoma counties
  if (state === 'oklahoma') {
    if (['Grove', 'Jay', 'Kansas', 'Colcord', 'West Siloam Springs', 'Eucha', 'Bernice'].includes(cityName)) {
      county = 'Delaware';
    } else if (['Tahlequah', 'Park Hill', 'Cookson', 'Keys', 'Welling'].includes(cityName)) {
      county = 'Cherokee';
    } else if (['Claremore', 'Catoosa', 'Verdigris', 'Oologah', 'Talala', 'Foyil', 'Inola'].includes(cityName)) {
      county = 'Rogers';
    } else if (['Pryor', 'Salina', 'Chouteau', 'Locust Grove', 'Spavinaw', 'Adair', 'Disney'].includes(cityName)) {
      county = 'Mayes';
    } else if (['Miami', 'Commerce', 'North Miami', 'Quapaw', 'Fairland', 'Afton', 'Wyandotte'].includes(cityName)) {
      county = 'Ottawa';
    } else if (['Vinita', 'Big Cabin', 'Ketchum', 'Welch', 'White Oak', 'Bluejacket'].includes(cityName)) {
      county = 'Craig';
    } else if (['Nowata', 'South Coffeyville', 'Delaware', 'New Alluwe', 'Wann', 'Lenapah'].includes(cityName)) {
      county = 'Nowata';
    } else if (['Bartlesville', 'Dewey', 'Ochelata', 'Ramona', 'Copan', 'Vera'].includes(cityName)) {
      county = 'Washington';
    }
  }
  // Arkansas counties
  else if (state === 'arkansas') {
    if (['Bentonville', 'Rogers', 'Springdale', 'Bella Vista', 'Centerton', 'Lowell', 'Pea Ridge', 'Cave Springs'].includes(cityName)) {
      county = 'Benton';
    } else if (['Fayetteville', 'Springdale', 'Prairie Grove', 'Farmington', 'Elkins', 'West Fork', 'Greenland'].includes(cityName)) {
      county = 'Washington';
    } else if (['Eureka Springs', 'Berryville', 'Green Forest', 'Holiday Island', 'Oak Grove'].includes(cityName)) {
      county = 'Carroll';
    }
  }

  return {
    cityName,
    state: state.charAt(0).toUpperCase() + state.slice(1),
    county
  };
};

const GenericCityDetailingPage: React.FC = () => {
  const [location] = useLocation();
  
  // Extract city slug from URL path
  const path = location.split('/');
  const citySlug = path[path.length - 1]; // Last segment of the URL
  
  const cityInfo = getCityInfo(citySlug);
  
  if (!cityInfo) {
    return <NotFound />;
  }
  
  const { cityName, state, county } = cityInfo;
  
  // Generate nearby cities based on county
  let nearbyCities: string[] = [];
  
  if (county === 'Delaware') {
    nearbyCities = ['Grove', 'Jay', 'Kansas', 'Colcord', 'West Siloam Springs', 'Eucha', 'Bernice'];
  } else if (county === 'Cherokee') {
    nearbyCities = ['Tahlequah', 'Park Hill', 'Cookson', 'Keys', 'Welling'];
  } else if (county === 'Rogers') {
    nearbyCities = ['Claremore', 'Catoosa', 'Verdigris', 'Oologah', 'Talala', 'Foyil', 'Inola'];
  } else if (county === 'Mayes') {
    nearbyCities = ['Pryor', 'Salina', 'Chouteau', 'Locust Grove', 'Spavinaw', 'Adair', 'Disney'];
  } else if (county === 'Ottawa') {
    nearbyCities = ['Miami', 'Commerce', 'North Miami', 'Quapaw', 'Fairland', 'Afton', 'Wyandotte'];
  } else if (county === 'Benton') {
    nearbyCities = ['Bentonville', 'Rogers', 'Bella Vista', 'Centerton', 'Lowell', 'Pea Ridge', 'Cave Springs'];
  } else if (county === 'Washington' && state === 'Arkansas') {
    nearbyCities = ['Fayetteville', 'Springdale', 'Prairie Grove', 'Farmington', 'Elkins', 'West Fork', 'Greenland'];
  } else if (county === 'Carroll') {
    nearbyCities = ['Eureka Springs', 'Berryville', 'Green Forest', 'Holiday Island', 'Oak Grove'];
  } else if (county === 'Craig') {
    nearbyCities = ['Vinita', 'Big Cabin', 'Ketchum', 'Welch', 'White Oak', 'Bluejacket'];
  } else if (county === 'Nowata') {
    nearbyCities = ['Nowata', 'South Coffeyville', 'Delaware', 'New Alluwe', 'Wann', 'Lenapah'];
  } else if (county === 'Washington' && state === 'Oklahoma') {
    nearbyCities = ['Bartlesville', 'Dewey', 'Ochelata', 'Ramona', 'Copan', 'Vera'];
  }
  
  // Filter out the current city from nearby cities
  nearbyCities = nearbyCities.filter(city => city !== cityName);
  
  // Generate nearby lakes based on county/region
  let nearbyLakes: string[] = [];
  
  if (['Delaware', 'Mayes', 'Craig'].includes(county) && state === 'Oklahoma') {
    nearbyLakes = ['Grand Lake O\' the Cherokees', 'Lake Hudson', 'Spavinaw Lake'];
  } else if (county === 'Cherokee') {
    nearbyLakes = ['Tenkiller Lake', 'Illinois River', 'Fort Gibson Lake'];
  } else if (county === 'Rogers') {
    nearbyLakes = ['Oologah Lake', 'Claremore Lake', 'Verdigris River'];
  } else if (county === 'Ottawa') {
    nearbyLakes = ['Grand Lake O\' the Cherokees', 'Spring River', 'Neosho River'];
  } else if (['Benton', 'Carroll'].includes(county) && state === 'Arkansas') {
    nearbyLakes = ['Beaver Lake', 'Table Rock Lake', 'Bull Shoals Lake'];
  }
  
  // Generate a generic service description
  const serviceDescription = `${cityName}, ${state} is one of the premier communities we serve with our mobile detailing services. Whether you need auto, boat, or motorcycle detailing, our professional team comes directly to your location in ${cityName} with all the equipment needed for a premium detailing experience. We understand the unique environmental challenges vehicles face in ${county} County and provide specialized services to keep your vehicles in pristine condition year-round.`;
  
  // Standard services offered across all locations
  const services = [
    "Complete exterior detailing with paint enhancement",
    "Interior deep cleaning and sanitization",
    "Paint correction and swirl removal",
    "Ceramic coating application",
    "Headlight restoration",
    "Engine bay detailing",
    "Motorcycle detailing",
    "Boat detailing"
  ];
  
  return (
    <CityServiceAreaTemplate
      cityName={cityName}
      state={state}
      county={county}
      serviceDescription={serviceDescription}
      services={services}
      nearbyLakes={nearbyLakes.length > 0 ? nearbyLakes : undefined}
      nearbyCities={nearbyCities.length > 0 ? nearbyCities : undefined}
    />
  );
};

export default GenericCityDetailingPage;