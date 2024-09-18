import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from './Card';
import ExploreData from '../data/ExploreData.json';

const ExploreDetail = () => {
  const { eventId } = useParams(); // Get the event ID from URL parameters
  const [eventDetails, setEventDetails] = useState(null);

  useEffect(() => {
    const data = ExploreData.find(event => event.id === eventId);
    setEventDetails(data);
  }, [eventId]);

  if (!eventDetails) {
    return <div>Loading...</div>; // Handle loading state
  }

  return (
    <div className="bg-beige ml-8 mr-8 pl-6 pr-6 pt-6 pb-6"> 
      <div className="max-w-7xl mx-auto bg-white p-0 rounded-lg shadow-lg">
        <section className="mb-0">
          <img 
            src={eventDetails.image} 
            alt={eventDetails.header} 
            className="w-full h-48 object-cover mb-4 pt-0 rounded-lg"
            onError={(e) => { e.target.src = 'images/fallback-image.png'; }} 
          />
          <h1 className="text-xl text-customGreen text-center font-poppins underline mb-4">{eventDetails.header}</h1>
          <p className="text-sm text-customGreen p-6 text-justify">
            {eventDetails.introduction}
          </p>
        </section>
        
        <h1 className="text-2xl mt-4 text-customGreen text-center font-poppins underline mb-4">Travel Information</h1>
        
        <div className="flex justify-center p-6 flex-wrap">
          {eventDetails.cards.map((card, index) => (
            <Card 
              key={index} 
              title={card.title} 
              content={
                <div className="flex flex-col">
                  {card.content.map((item, idx) => (
                    <div key={idx} className="flex items-start mb-2">
                      <img 
                        src={item.image} 
                        alt="Note" 
                        className="w-4 h-4 mr-2" 
                      />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              } 
              imageUrl={card.imageUrl} 
              navigateTo={card.navigateTo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreDetail;