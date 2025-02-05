import React, { useState } from 'react';
import './Contact.css';
import mail_icon from '../../assets/mail_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };

    try {
      const res = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setIsSubmitted(true);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
      console.error("Form submission error:", error);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
  };

  return (
    <div id='contact' className='contact'>
      <div className="title-box">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Connect</h1>
          <p>I’m actively seeking new roles and exciting projects where I can make an impact. If you’re a recruiter looking for a skilled professional, let’s connect and discuss how I can add value to your organization.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Email icon" /> <p>kevinandrews001@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="Phone icon" /> <p>+91 9994053302</p>
            </div>
          </div>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/kevinandrewsv/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://github.com/Kevinandrewsv" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.instagram.com/kevinandrewsv/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>

        {isSubmitted ? (
          <div className="thank-you-message">
            <h2>Thank you for reaching out!</h2>
            <p>Your message has been successfully sent. I will get back to you as soon as possible.</p>
            <button onClick={resetForm} className="refresh-button">Send another message</button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="contact-right">
            <label>Your Name</label>
            <input type="text" placeholder='Enter your name' name='name' required />
            <label>Your Email</label>
            <input type="email" placeholder='Enter your email' name='email' required />
            <label>Write your message here</label>
            <textarea name="message" rows="8" placeholder='Enter your message' required></textarea>
            <button type='submit' className="contact-submit">Submit now</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Contact;
