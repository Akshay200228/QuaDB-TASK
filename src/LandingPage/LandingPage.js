import React, { useEffect, useState } from 'react';
import './LandingPage.css';

function LandingPage() {
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => {
          fetch('https://api.tvmaze.com/search/shows?q=all')
            .then(response => response.json())
            .then(data => {
              const randomIndex = Math.floor(Math.random() * data.length);
              const image = data[randomIndex].show.image.medium;
              setImageUrl(image);
            })
            .catch(error => console.log(error));
        }, 2000);
    
        return () => clearTimeout(timer);
      }, [imageUrl]);
    
  return (
    <div>
      <nav className="navbar">
        <div className="logo">My Website</div>
      </nav>
      <div className="landing-image">
        {imageUrl && <img src={imageUrl} alt="Landing Page Image" />}
        <div className="landing-text">
          <h1>Welcome to QuaDB Task Best Solution</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt ipsum vitae ultrices sollicitudin. Donec vel sapien vitae nulla lacinia ullamcorper.</p>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
