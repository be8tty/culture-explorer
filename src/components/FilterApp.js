import React from 'react';
import { useLocation } from 'react-router-dom';
import Bar from './Bar';
import CardsDisplay from './CardsDisplay';

const FilterApp = () => {
  const location = useLocation();
  const filterData = location.state?.filterData || {};
  
  const [filter, setFilter] = React.useState({
    region: filterData.region || null,
    category: filterData.category || null,
  });

  const handleFilterChange = (region, category) => {
    setFilter({ region, category });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Bar onFilterChange={handleFilterChange} />
      <CardsDisplay region={filter.region} category={filter.category} />
    </div>
  );
};

export default FilterApp;