import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MainScreen.css';

function MainScreen({ shows }) {
  return (
    <div className="container">
      <h1 className="my-4">TV Shows</h1>
      <div className="row">
        {shows.map(show => (
          <div key={show.show.id} className="col-md-4">
            <div className="card">
                <img src={!show.show.image?.medium?"https://cdn.pixabay.com/photo/2015/05/15/05/59/demonstration-767864_960_720.jpg":show.show.image?.medium} alt={show.show.name} />
              <div className="overlay">
                <h2>{show.show.name}</h2>
                <Link to={`/details/${show.show.id}`} className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
}

export default MainScreen;
