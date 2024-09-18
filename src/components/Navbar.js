import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleExploreClick = () => {
    navigate('/ExploreContent');
  };

  const handlePostsClick = () => {
    navigate('/Posts');
  };

  const handleLoginClick = () => {
    navigate('/login'); 
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-white">
      <div className="flex items-center ml-60 text-sm space-x-16">
        <button 
          onClick={handleHomeClick} 
          className="text-customGreen font-semibold hover:scale-125" 
          aria-label="Go to Home"
        >
          HOME
        </button>
        <button 
          onClick={handleExploreClick} 
          className="flex items-center text-black font-semibold hover:scale-125" 
          aria-label="Explore"
        >
          EXPLORE
          <img src="images/cycle.png" alt="Explore" className="w-5 h-5 ml-1" />
        </button>
        <button 
          onClick={handlePostsClick} 
          className="flex items-center text-black font-semibold hover:scale-125" 
          aria-label="View Posts"
        >
          POSTS
        </button>
      </div>
      <div className="flex items-center mr-10 space-x-4">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search" 
            className="border text-white  border-gray-300 rounded-md py-1 pl-8 pr-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
          <img src="images/search.png" alt="Search" className="absolute left-2 top-1/2 transform -translate-y-1/2 w-6 h-6" />
        </div>
        <button 
          onClick={handleLoginClick}
          className="bg-yellow-500 text-black px-2 py-1 rounded border border-black transform transition-transform hover:scale-125"
          aria-label="Log In"
        >
          Log In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;