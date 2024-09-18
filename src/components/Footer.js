import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-200 p-8">
      <div className="flex justify-between">
        {/* Contact Section */}
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold mb-1">Contact Us</h2>
          <div className="flex items-center mb-1">
            <img src="images/gmail.png" alt="Gmail" className="w-5 h-5 mr-2" />
            <span>etxplore@gmail.com</span>
          </div>
          <div className="flex items-center">
            <img src="images/phone.png" alt="Phone" className="w-5 h-5 mr-2" />
            <span>+251 911 111 111</span>
          </div>
        </div>

        {/* App Download Section */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-1">Get EtXplore App</h2>
          <div className="flex space-x-4">
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
              <img src="images/play.png" alt="Get it on Google Play" className="h-10" />
            </a>
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <img src="images/app.png" alt="Download on the App Store" className="h-10" />
            </a>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold mb-1">Follow us on</h2>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="w-8 h-8" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="images/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" alt="YouTube" className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;