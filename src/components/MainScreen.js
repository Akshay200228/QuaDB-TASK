import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function MainScreen() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios.get('https://api.tvmaze.com/search/shows?q=all')
      .then(response => setShows(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>TV Shows</h1>
      <ul>
        {shows.map(show => (
          <li key={show.show.id}>
            <Link to={`/summary/${show.show.id}`}>
              {show.show.name} - {show.show.network?.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MainScreen;