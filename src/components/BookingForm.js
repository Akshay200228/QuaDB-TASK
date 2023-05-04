import React, { useState } from 'react';
import '../styles/BookingForm.css';


function BookingForm() {
    const [show] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        seats: 1,
    });

    // Handle Input values
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Submit function
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic
        const user = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            movie: show?.name,
            seats: formData.seats,
        };
        localStorage.setItem('user', JSON.stringify(user));

        const alertElement = document.createElement('div');
        alertElement.innerText = 'Successfully booked movie ticket!';
        alertElement.classList.add('alert');
        document.body.appendChild(alertElement);

        // Set a timeout to remove the alert after 3 seconds
        setTimeout(() => {
            alertElement.remove();
        }, 3000);
    };

    return (
        <div className="booking-form">
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
                    <button type="submit" className="submit">Book Ticket</button>
                </form>
            </div>
        </div>
    );
}

export default BookingForm;
