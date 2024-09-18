import React, { useEffect, useState } from 'react';
import Navbarl from './components/Navbar.js';
import FilterApp from './components/FilterApp.js';

const images = [
  'images/irecha.png',
  'images/lalibela2.jpg',
  'images/eth.png',
];
const titles = ['Irrecha', 'Lalibela', 'Food'];
const descriptions = [
  "Oromo people's thanksgiving festival...",
  "Lalibela is a town in the Amhara region...",
  "Ethiopian food is known for its vibrant flavors...",
];

const ExploreContent = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
 return (
    <div className="flex flex-col min-h-screen">
      <Navbarl />

      {/* Sliding Image Section */}
      <div 
        className="flex-grow bg-cover bg-center mt-0 mb-10 mx-5" 
        style={{ backgroundImage: `url('${images[currentImageIndex]}')`, height: '40vh', position: 'relative' }}>
        <div className="absolute inset-0 opacity-50"></div>
        <div className="relative z-10 p-2 bg-custom-bg bg-opacity-70 rounded-lg max-w-md mt-20 mx-auto">
          <h1 className="text-lg font-bold text-green-600 text-center">{titles[currentImageIndex]}</h1>
          <p className="text-red-700 mt-2 text-sm text-center">{descriptions[currentImageIndex]}</p>
        </div>
      </div>
      <FilterApp/>
    
    </div>
  );
};

export default ExploreContent;