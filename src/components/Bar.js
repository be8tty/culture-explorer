import React, { useState } from 'react';
import FilterApp from './FilterApp';

const Bar = ({ onFilterChange }) => {
  console.log('onFilterChange:', onFilterChange); 

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const regions = ['Northern', 'Central', 'Eastern', 'Southern', 'Western'];

  // Define categoryRoutes 
  const categoryRoutes = {
    Festivals: 'Festivals',
    'Food & Cloth': 'FoodCloth',
    Customs: 'Customs',
    'Cultural Dance': 'Dance',
    Religious: 'Religious',
  };

  const handleDropdownToggle = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleDropdownItemClick = (region) => {
    setSelectedRegion(region);
    setSelectedCategory(null); // Reset category when region changes
    if (typeof onFilterChange === 'function') {
      onFilterChange(region, null); // Notify parent component of selection
    } else {
      console.error('onFilterChange is not a function');
    }
    setDropdownOpen(false);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (typeof onFilterChange === 'function') {
      onFilterChange(selectedRegion, category); // Notify parent component of selection
    }
  };

  return (
    <div className="flex justify-center items-center space-x-14 p-4 bg-white max-w-4xl mx-auto">
      {/* Dropdown for "Region" */}
      <div className="relative">
        <button
          className="flex items-center text-green-600"
          onClick={handleDropdownToggle}
          aria-haspopup="true"
          aria-expanded={isDropdownOpen}
        >
          {selectedRegion || 'Region'}
          <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isDropdownOpen && (
          <ul className="absolute left-0 mt-2 bg-customGreen border rounded shadow-md z-10">
            {regions.map((region) => (
              <li key={region}>
                <button
                  className="block px-4 py-2 text-white hover:bg-green-500 focus:outline-none"
                  onClick={() => handleDropdownItemClick(region)}
                >
                  {region}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Category buttons */}
      <div className="flex space-x-2">
        {Object.keys(categoryRoutes).map((category) => (
          <div key={category} className="bg-beige p-1 flex-grow min-w-[150px] rounded-lg">
            <button
              className={`w-full px-4 py-2 ${selectedCategory === category ? 'bg-green-600 text-white' : 'text-green-600'} border border-beige rounded transition-transform duration-200 hover:scale-105 hover:shadow-lg`}
              onClick={() => handleCategoryClick(category)}
              disabled={!selectedRegion} // Disable if no region is selected
            >
              {category}
            </button>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Bar;