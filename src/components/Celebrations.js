import React from 'react';
import CelebrationsData from '../data/Celebrations.json';

const CelebrationCard = ({ title, date, imageUrl }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-90">
    <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">{date}</p>
    </div>
  </div>
);

const Celebrations = () => {
  return (
    <div className="bg-custombeige p-6 m-10 text-center">
      {/* Container for title and subtitle */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">13 Months Of Sunshine</h1>
        <h2 className="text-xl">Monthly Celebrations : MESKEREM</h2>
      </div>
      
      {/* Container for celebration cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {CelebrationsData.map((celebration, index) => (
          <CelebrationCard key={index} {...celebration} />
        ))}
      </div>
    </div>
  );
};

export default Celebrations;