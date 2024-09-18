import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post('http://your-laravel-api/login', { email, password });
      console.log("Login successful:", response.data);
      navigate('/Home'); // Redirect after login
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
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
              onClick={() => navigate('/')} // Navigate to root when clicked
            />
          </div>
          <h2 className="font-volkhov text-[20px] font-bold leading-[46.44px] ml-4 text-left mb-0">Log In</h2>
          <p className="text-gray-600 ml-4 mb-10">Welcome back! Please enter your details</p>
          
          <form className="w-full sm:w-3/4 md:w-5/6 p-2 mb-4 ml-4 bg-white shadow-sm rounded-3xl">
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
              />
            </div>
            <div className="flex items-center">
              <img 
                src="images/password.png" 
                alt="Password Icon"
                className="h-4 ml-6 w-4"
              />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="flex-1 p-2 border-0 focus:outline-none focus:ring-2 focus:ring-green-500 font-volkhov text-xs"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                aria-label="Password"
              />
              <img 
                src="images/eye.png" 
                alt="Toggle Password Visibility"
                className="h-4 w-4 cursor-pointer mr-10 ml-2"
                onClick={togglePasswordVisibility}
              />
            </div>
          </form>
          
          <button 
            className={`w-full sm:w-3/4 md:w-5/6 py-1 mt-4 ml-4 text-white bg-green-600 rounded-[28px] hover:bg-green-700 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Logging In..." : "Log In"}
          </button>

          <p className="text-gray-600 mb-10 ml-16 mt-2 text-xs">
            Don’t have an account? 
            <a 
              onClick={() => navigate('/signup')}
              className="font-poppins text-sm font-bold leading-6 text-blue-500 hover:underline hover:text-blue-700 transition-colors duration-200 cursor-pointer"
            >
              Sign Up
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

export default Login;