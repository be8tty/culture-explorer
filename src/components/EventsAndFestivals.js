import React from 'react';
import eventsData from '../data/eventsData'; 

const EventsAndFestivals = () => {
  return (
    <div className="py-10"> 
      <div className="max-w-4xl mx-auto">
        <h2 className="bg-custom-yellow text-3xl font-bold text-left text-black mb-5 py-6">
          Events & Festivals
        </h2>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {eventsData.map((event, index) => (
          <div
            key={index}
            className="bg-custom-gray overflow-hidden hover:shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={event.imageUrl}
              alt={event.title}
              className="w-full h-48 object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'fallback-image.png'; 
              }}
            />
            <div className="p-4">
              <div className="flex items-center">
                <img
                  src={event.iconUrl}
                  alt={`${event.title} icon`}
                  className="w-10 h-10 object-cover mr-2"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'fallback-icon.png'; 
                  }}
                />
                <h3 className="text-sm font-semibold">{event.title}</h3>
              </div>
              <p className="text-gray-600 mt-2">{event.description}</p>
            </div>      
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsAndFestivals;