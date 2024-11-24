import React, { useState } from 'react';

const DonationPage = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
    });
    const [loading, setLoading] = useState(false);
    const [submittedEmails, setSubmittedEmails] = useState([]); // Track submitted emails
    const [errorMessage, setErrorMessage] = useState(''); // For error messages

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setErrorMessage(''); // Clear error message on input change
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Check if the email has been submitted already
        if (submittedEmails.includes(formData.email)) {
            setErrorMessage('You have already shown interest!');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch('https://ploggers-backend.onrender.com/api/donate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (response.ok) {
                alert(data.message);
                setSubmittedEmails((prevEmails) => [...prevEmails, formData.email]); // Add email to submitted list
                setFormData({ fullName: '', email: '', phone: '' });
            } else {
                alert('Error: ' + data.message);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Error submitting form. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const VMStyles = {
        container: {
            fontFamily: 'Arial, sans-serif',
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
        },
        main: {
            display: 'flex',
            flex: 1,
        },
        leftHalf: {
            flex: 1,
            padding: '20px',
            textAlign: 'center',
            backgroundColor: '#f0f0f0',
            borderRadius: '50px',
        },
        rightHalf: {
            flex: 1,
            padding: '20px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        },
        section: {
            margin: '20px 0',
        },
        item: {
            display: 'inline-block',
            width: '200px',
            margin: '10px',
            textAlign: 'center',
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        input: {
            margin: '10px 0',
            padding: '10px',
            width: '300px',
        },
        button: {
            margin: '10px 5px',
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
        },
        card: {
            borderRadius: '10px',
            boxShadow: '0 4px 20px rgba(173, 216, 230, 0.5)',
            padding: '20px',
            margin: '20px auto',
            maxWidth: '600px',
            backgroundColor: 'white',
        },
        loader: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f0f0f0',
        },
        spinner: {
            border: '8px solid #f3f3f3',
            borderTop: '8px solid #3498db',
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            animation: 'spin 1s linear infinite',
        },
    };

    return (
        <div style={VMStyles.container}>
            {loading ? (
                <div style={VMStyles.loader}>
                    <div style={VMStyles.spinner}></div>
                </div>
            ) : (
                <div style={VMStyles.main}>
                    <div style={VMStyles.leftHalf}>
                        <h2>Items Needed</h2>
                        <div style={VMStyles.card}>
                            <div style={VMStyles.item}>
                                <img src="./images/plogging-gloves.jpg" alt="Plogging Gloves" style={{ width: '100%' }} />
                                <p>Plogging Gloves</p>
                            </div>
                            <div style={VMStyles.item}>
                                <img src="./images/bags.jpg" alt="Jute Bags" style={{ width: '100%' }} />
                                <p>Jute Bags</p>
                            </div>
                            <div style={VMStyles.item}>
                                <img src="./images/brooms.jpg" alt="Brooms" style={{ width: '100%' }} />
                                <p>Brooms</p>
                            </div>
                            <div style={VMStyles.item}>
                                <img src="./images/Tool.jpeg" alt="Tools" style={{ width: '76%' }} />
                                <p>Tools</p>
                            </div>
                        </div>
                    </div>

                    <div style={VMStyles.rightHalf}>
                        <h2>Express Your Intention to Donate</h2>
                        <div style={VMStyles.card}>
                            <form style={VMStyles.form} onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Name"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                    style={VMStyles.input}
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    style={VMStyles.input}
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone No."
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    style={VMStyles.input}
                                />
                                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                                <button type="submit" style={VMStyles.button}>Submit</button>
                                <a href="https://whatsapp.com/channel/0029Va8noliE50UnyunL6n3E" style={{ textDecoration: 'none' }}>
                                    <button type="button" style={VMStyles.button}>Join WhatsApp Group</button>
                                </a>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DonationPage;