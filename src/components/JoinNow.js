// Code written by sneha chopade ->


import React, { useState } from 'react';
import './JoinNow.css';

const JoinNow = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        dob: '',
        occupation: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('Form Data:', formData); // Debugging line

        try {
            const response = await fetch('https://ploggers-backend.onrender.com/api/join', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                // Reset the form
                setFormData({ fullName: '', dob: '', occupation: '' });
            } else {
                const errorData = await response.json(); // Get error details
                alert('Error submitting form: ' + errorData.message);
            }
        } catch (error) {
            alert('Error submitting form: ' + error.message);
        }
    };

    const handleWhatsAppRedirect = () => {
        window.location.href = 'https://whatsapp.com/channel/0029Va8noliE50UnyunL6n3E';
    };

    const handleDonateRedirect = () => {
        window.location.href = 'http://localhost:3000/donate';
    };

    return (
        <div className="join-now-container">
            <div className="form-section">
                <h2>Join Now</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dob">Date of Birth</label>
                        <input
                            type="date"
                            id="dob"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="occupation">Occupation</label>
                        <select
                            id="occupation"
                            name="occupation"
                            value={formData.occupation}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select</option>
                            <option value="public-sector">Public Sector</option>
                            <option value="student">Student</option>
                            <option value="private-sector">Private Sector</option>
                        </select>
                    </div>
                    <div className="button-group">
                        <button type="submit">Submit</button>
                        <button type="button" onClick={handleWhatsAppRedirect}>WhatsApp Group</button>
                    </div>
                </form>
            </div>
            <div className="donation-section">
                <h2>Donate for Good</h2>
                <img src="/images/donation.jpg" alt="Donate" className="donate-image" />
                <button onClick={handleDonateRedirect}>Donate Now</button>
            </div>
        </div>
    );
};

export default JoinNow;
