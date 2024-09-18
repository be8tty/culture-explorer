import React, { useState } from 'react';
import Navbar from '../components/Navbar';  
import Celebrations from '../components/Celebrations.js';
import EventsAndFestivals from '../components/EventsAndFestivals.js';
import Footer from '../components/Footer';

const Home = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleLogin = () => {
  //   // Simulate a successful login
  //   setIsLoggedIn(true);
  //   alert("Logged in successfully!");
  // };

  return (
    <div className="relative flex flex-col bg-white">
      <div className="absolute right-10 top-0">
        <img 
          src="images/Rectangle 1 (1).png" 
          alt="Travel" 
          className="rounded-lg" 
        />
      </div>
<Navbar /> 

      <div className="flex flex-col md:flex-row items-center justify-between p-10 mt-40">
        <div className="flex flex-col items-start">
          <div className="bg-[#F5F5DC] p-4 rounded-tr-xl rounded-bl-md">
            <h1 className="text-4xl font-bold">
              <span className="text-green-500">Et</span>
              <span className="text-yellow-500">X</span>
              <span className="text-red-500">plore</span>
            </h1>
            <p className="mt-2 text-gray-600">
              Discover Ethiopia from the comfort of your<br />home and share your travel experiences.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-60"></div>
      <Celebrations />
      <div className="mt-60"></div>
      <EventsAndFestivals />
      <div className="mt-60"></div>
      <Footer />
    </div>
  );
};

export default Home;