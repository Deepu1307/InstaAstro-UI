import React from 'react';
import './Home.css';
import mobiles from "../../assets/mobile-removebg-preview.png";

const Home = () => {
    return (
        <>
          <div className="astro-card">
            <div className="card-content">
              <div className="image-content">
                <img src={mobiles} alt="Mobile 1" className="mobile-image" />
              </div>
              <div className="text-content">
                <p>Talk to India's</p>
                <h2> Best Astrologers at ₹1</h2>
                <p>And get ₹100 talk time</p>
              </div>
            </div>
            <div className="buttons">
              <button className="chat-btn">Chat with Astrologer</button>
              <button className="talk-btn">Talk with Astrologer</button>
            </div>
          </div>
        </>
      );
}

export default Home;