import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    // Handle sign-up logic here 
    console.log("Email:", email);
    console.log("Username:", username);
    console.log("Password:", password);
    // Proceed with sign-up
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="relative flex w-full max-w-3xl h-auto md:flex-row p-0 rounded-lg shadow-md bg-beige">
        <div className="flex flex-col items-start p-4 w-full md:w-1/2">
          <div className="flex items-center mb-1 mt-2">
            <img 
              src="images/vector.png" 
              alt="Back Arrow"
              className="h-4 w-4 ml-4 cursor-pointer text-gray-600"
              onClick={() => navigate('/login')} // Navigate to Login.js
            />
          </div>
          <h2 className="font-volkhov text-[20px] font-bold leading-[46.44px] ml-4 text-left mb-0">Get Started</h2>
          <p className="text-gray-600 ml-4 mb-10 text-sm">Welcome to EtXplore- Let’s create your account</p>
          
          <form className="w-full sm:w-3/4 md:w-5/6 p-2 mb-4 ml-4 bg-white shadow-sm rounded-3xl" onSubmit={handleSignUp}>
            <div className="flex items-center mb-4">
              <img 
                src="images/user.png" 
                alt="Username Icon"
                className="h-4 ml-6 w-4"
              />
              <input
                id="username"
                type="text"
                placeholder="Username"
                className="flex-1 p-2 border-0 focus:outline-none focus:ring-2 focus:ring-green-500 font-volkhov text-xs"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                aria-label="Username"
                required
              />
            </div>
            <div className="flex items-center mb-4">
              <img 
                src="images/email.png" 
                alt="Email Icon"
                className="h-4 ml-6 w-4"
              />
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="flex-1 p-2 border-0 focus:outline-none focus:ring-2 focus:ring-green-500 font-volkhov text-xs"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email"
                required
              />
            </div>
            <div className="flex items-center mb-4">
              <img 
                src="images/password.png" 
                alt="Password Icon"
                className="h-4 ml-6 w-4"
              />
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="flex-1 p-2 border-0 focus:outline-none focus:ring-2 focus:ring-green-500 font-volkhov text-xs"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                aria-label="Password"
                required
              />
            </div>
          </form>
          
          <button 
            className="w-full sm:w-3/4 md:w-5/6 py-1 mt-4 ml-4 text-white bg-green-600 rounded-[28px] hover:bg-green-700"
            type="submit"
            onClick={handleSignUp}
          >
            Sign Up
          </button>

          <p className="text-gray-600 mb-10 ml-16 mt-2 text-xs">
            Already have an account? 
            <a 
              href="/login" 
              className="font-poppins text-sm font-bold leading-6 text-blue-500 hover:underline hover:text-blue-700 transition-colors duration-200"
            >
              Log In
            </a>
          </p>
        </div>
        <div className="hidden md:flex absolute right-0 top-0 h-full items-center justify-center" style={{ width: '60%', maxWidth: '400px' }}>
          <img
            src="images/login.png" 
            alt="Illustration"
            className="opacity-100 h-full w-full object-cover rounded-tr-lg rounded-br-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;