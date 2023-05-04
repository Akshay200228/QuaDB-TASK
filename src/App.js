// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// function App() {
//   const [shows, setShows] = useState([]);

//   useEffect(() => {
//     fetch("https://api.tvmaze.com/search/shows?q=all")
//       .then((response) => response.json())
//       .then((data) => setShows(data));
//   }, []);

//   return (
//     <div>
//       <h1>TV Shows</h1>
//       <ul>
//         {shows.map((show) => (
//           <li key={show.show.id}>
//             <Link to={`/details/${show.show.id}`}>
//               {show.show.name} - {show.show.premiered}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import MainScreen from './components/MainScreen';
import SummaryScreen from './components/SummaryScreen';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
        <Routes>
          <Route path="/*" element={<MainScreen/>} ></Route>
          <Route path="/summary/:id" element={<SummaryScreen/>} ></Route>
        </Routes>

  );
}

export default App;

