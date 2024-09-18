import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ title, content, imageUrl, navigateTo }) => {
  const navigate = useNavigate();

  const handleExploreMore = () => {
    navigate(navigateTo);
  };

  return (
    <div className="bg-beige p-2 shadow-md rounded-lg overflow-hidden flex flex-col mx-2 my-2 max-w-xs">
      {imageUrl && (
        <img 
          src={imageUrl} 
          alt={`Image related to ${title}`} 
          className="w-full h-28 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
          onError={(e) => { e.target.src = '/images/fallback-image.png'; }} // Fallback for main image
        />
      )}
      <div className="bg-white p-2 flex-1 flex flex-col">
        <h2 className="text-lg font-semibold text-center underline mt-0 text-customGreen mb-1">{title}</h2>
        <div className="text-sm text-customGreen flex-1 overflow-hidden" style={{ height: '4rem' }}>
          {content}
        </div>
        
        <div className="mt-2 flex flex-col items-center">
          <div className="border-t border-customGreen w-1/2 mb-1" />
          <button 
            onClick={handleExploreMore} 
            className="text-blue-500 hover:underline hover:font-bold bg-transparent border-none cursor-pointer"
            aria-label={`Explore more about ${title}`}
          >
            Explore more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;