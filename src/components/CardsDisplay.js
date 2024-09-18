import React from 'react';
import PropTypes from 'prop-types';
import cardsData from '../data/cardsData'; 

const CardsDisplay = ({ region, category }) => {
  const filteredCards = cardsData.filter(card => {
    return (!region || card.region === region) && (!category || card.category === category);
  });

  if (filteredCards.length === 0) {
    return <div className="text-center p-4">No cards found for the selected filters.</div>;
  }

  return (
    <div className="flex flex-wrap justify-center p-4">
      {filteredCards.map(card => (
        <div 
          key={card.id} 
          className="bg-beige p-4 shadow-md mx-2 my-2 flex flex-col h-full" 
          style={{ flex: '0 0 calc(25% - 16px)', maxWidth: 'calc(25% - 16px)', height: '450px' }} 
        >
          <img 
            src={card.imageUrl} 
            alt={card.title || "Card Image"} 
            className="w-full h-36 object-cover mb-2 transition-transform duration-300 ease-in-out transform hover:scale-105" 
          />
          <div className="bg-white p-4 flex flex-col flex-1" style={{ overflow: 'hidden' }}>
            <h2 className="text-base text-customGreen font-poppins text-center mt-0 mb-1">{card.title}</h2>
            <div className="border-b border-customGreen mb-1" />
            <p className="mb-4 text-sm text-customGreen font-poppins flex-1 overflow-ellipsis overflow-hidden" style={{ height: '100px' }}>
              {card.content}
            </p>
            <div className="border-t border-gray-300 mb-0 w-full" />
            <div className="flex justify-center mt-0">
              <a href={card.link} className="text-blue-500 hover:underline hover:font-bold text-center">Explore more</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

CardsDisplay.propTypes = {
  region: PropTypes.string,
  category: PropTypes.string,
};

export default CardsDisplay;