import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function SummaryScreen() {
  const { id } = useParams();
  const [summary, setSummary] = useState('');

  useEffect(() => {
    axios.get(`https://api.tvmaze.com/shows/${id}`)
      .then(response => setSummary(response.data.summary))
      .catch(error => console.log(error));
  }, [id]);

  return (
    <div>
      <h1>Summary</h1>
      <p>{summary}</p>
    </div>
  );
}

export default SummaryScreen;