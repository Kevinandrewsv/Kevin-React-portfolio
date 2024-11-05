import React, { useState, useEffect } from 'react';
import './MyWork.css';
import mywork_data from '../../assets/mywork_data';

const MyWork = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleSwipe = (direction) => {
    if (direction === 'left' && activeTab < mywork_data.length - 1) {
      setActiveTab((prev) => prev + 1);
    } else if (direction === 'right' && activeTab > 0) {
      setActiveTab((prev) => prev - 1);
    }
  };

  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) handleSwipe('left');
      if (touchEndX - touchStartX > 50) handleSwipe('right');
    };

    const contentElement = document.getElementById('swipe-content');
    contentElement.addEventListener('touchstart', handleTouchStart);
    contentElement.addEventListener('touchend', handleTouchEnd);

    return () => {
      contentElement.removeEventListener('touchstart', handleTouchStart);
      contentElement.removeEventListener('touchend', handleTouchEnd);
    };
  }, [activeTab]);

  return (
    <div id='work' className='mywork'>
      <div className="title-box">
        <h1>Projects</h1>
      </div>
      <div className="tab-buttons">
        {mywork_data.map((work, index) => (
          <button
            key={index}
            className={`tab-button ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {work.w_title}
          </button>
        ))}
      </div>

      <div id="swipe-content" className="tab-content">
        <img src={mywork_data[activeTab].w_img} alt={`${mywork_data[activeTab].w_title} project`} />
        <p><strong>Purpose:</strong> {mywork_data[activeTab].w_description1}</p>
        <p><strong>Tech Stack Used:</strong>{mywork_data[activeTab].w_description0}</p>
        <p><strong>Challenges & Learnings:</strong> {mywork_data[activeTab].w_description2}</p>
        <a href={mywork_data[activeTab].w_link} target="_blank" rel="noopener noreferrer" className="visit-button">
          Visit Website
        </a>
      </div>
    </div>
  );
};

export default MyWork;
