import React from 'react';
import { Link } from 'react-router-dom';
import './MainScreen.css';
import LandingPage from '../../LandingPage/LandingPage';

function MainScreen({ shows }) {
  return (
    <>
    <LandingPage/>
    <div className="container">
      <h1 className="my-4">TV Shows</h1>
      <div className="row">
        {shows.map(show => (
          <div key={show.show.id} className="col-md-4">
            <div className="card">
                <img src={!show.show.image?.medium?"https://static.tvmaze.com/uploads/images/original_untouched/425/1064746.jpg":show.show.image?.medium} alt={show.show.name} />
              <div className="overlay">
                <h2>{show.show.name}</h2>
                <Link to={`/details/${show.show.id}`} className="mainBtn">View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default MainScreen;
