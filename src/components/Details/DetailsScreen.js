import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './DetailsScreen.css';


function DetailsScreen() {
    const { id } = useParams();
    const [show, setShow] = useState(null);

    useEffect(() => {
        axios.get(`https://api.tvmaze.com/shows/${id}`)
            .then(response => setShow(response.data))
            .catch(error => console.log(error));
    }, [id]);

    if (!show) {
        return <div>Loading...</div>;
    }

    return (
        <div className="details-container">
            <h1>{show.name}</h1>
            {show.image && <img src={show.image.medium} alt={show.name} />}
            <h2>Summary</h2>
            <div className='summary' dangerouslySetInnerHTML={{ __html: show.summary }}></div>
            <div className="col-md-6">
                <h3>Show Info</h3>
                <ul>
                    <li><strong>Genres: </strong>{show.genres.join(', ')}</li>
                    <li><strong>Status: </strong>{show.status}</li>
                    <li><strong>Premiered: </strong>{show.premiered}</li>
                    <li><strong>Rating: </strong>{show.rating.average}</li>
                    <li><strong>Network: </strong>{show.network ? show.network.name : 'N/A'}</li>
                </ul>
            </div>

            <h2>Book Tickets Here</h2>
            <Link to={`/book/${id}`} className="btn">Book Ticket</Link>
        </div>
    );
}

export default DetailsScreen;



