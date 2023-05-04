import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/DetailsScreen.css';


function DetailsScreen() {
    const { id } = useParams();
    const [show, setShow] = useState(null);

    useEffect(() => {
        axios.get(`https://api.tvmaze.com/shows/${id}`)
            .then(response => setShow(response.data))
            .catch(error => console.log(error));
    }, [id]);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        seats: 1,
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            movie: show.name,
            seats: formData.seats,
        };
        localStorage.setItem('user', JSON.stringify(user));
        alert('Successfully booked movie ticket!');
    };

    if (!show) {
        return <div>Loading...</div>;
    }

    return (
        <div className="details-container">
            <h1>{show.name}</h1>
            {show.image && <img src={show.image.medium} alt={show.name} />}
            <div className='summary' dangerouslySetInnerHTML={{ __html: show.summary }}></div>
            {/* <p>{show.summary}</p> */}
            <h2>Book Tickets</h2>
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="tel"
                            className="form-control"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="seats">Seats</label>
                        <input
                            type="number"
                            className="form-control"
                            id="seats"
                            name="seats"
                            value={formData.seats}
                            min="1"
                            max="10"
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Book Ticket</button>
                </form>
            </div>
        </div>
    );
}

export default DetailsScreen;



