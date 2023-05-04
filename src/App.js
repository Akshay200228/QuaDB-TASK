import React, { useState, useEffect } from 'react';
import MainScreen from './components/MainScreen';
import DetailsScreen from './components/DetailsScreen';
import { Routes, Route } from "react-router-dom";
import axios from 'axios';



function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios.get('https://api.tvmaze.com/search/shows?q=all')
      .then(response => setShows(response.data))
      .catch(error => console.log(error));
  }, []);
  return (
    <Routes>
      <Route exact path="/" element={<MainScreen shows={shows}/>}/>
      <Route path="/details/:id" element={<DetailsScreen />} ></Route>
    </Routes>

  );
}

export default App;

