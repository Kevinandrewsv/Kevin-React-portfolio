import React, { useState } from 'react';
import './Footer.css';
import logo from '../../assets/logo.png';
import user_icon from '../../assets/user_icon.svg';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubscribe = async (event) => {
    event.preventDefault();
    
    const formData = {
      access_key: '3291b25d-37f4-4e84-b233-4a42be6d4ffc',
      email,
      subject: "New Subscription",
      message: `New subscriber: ${email}`,
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
      } else {
        alert("There was an error, please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setEmail(''); // Clear the email input
  };

  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="Logo" className='logo'/>
        </div>
        <div className="footer-top-right">
          {isSubmitted ? (
            <div className="thank-you-message">
              <p>Thank you for subscribing!</p>
              <button onClick={resetForm} className="footer-refresh-button">Subscribe Again</button>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="footer-email-input">
              <img src={user_icon} alt="User icon" />
              <input 
                type="email" 
                placeholder='Enter your email' 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
              <button type="submit" className="footer-subscribe">Subscribe</button>
            </form>
          )}
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2024 Kevin Andrews. All rights reserved.</p>
        <div className="footer-bottom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
