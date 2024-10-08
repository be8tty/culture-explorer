import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login'; 
import SignUp from './pages/Signup'; 
import ExploreContent from './ExploreContent'; 
import ExploreDetail from './components/ExploreDetail'; 

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/explorecontent" element={<ExploreContent />} />
          <Route path="/event/:eventId" element={<ExploreDetail />} /> {/* Dynamic route */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;