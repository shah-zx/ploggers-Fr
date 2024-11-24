import React, { useState, useEffect } from 'react';
import './Media.css'; // Ensure you have the necessary styles
import { Container, Row, Col, Button, Form, Modal } from 'react-bootstrap';
import axios from 'axios';

// Initial media data (can be removed if fetching from API)
const initialPress = [
  { imageSrc: './images/Clb-27.jpg', id: 1 },
  { imageSrc: './images/Clb-33.jpg', id: 2 },
  { imageSrc: './images/Clb-34.jpg', id: 3 },
  { imageSrc: './images/Clb-28.jpg', id: 4 },
  { imageSrc: './images/Clb-32.jpg', id: 5 },
  { imageSrc: './images/Clb-31.jpg', id: 6 },
  { imageSrc: './images/Clb-29.jpg', id: 7 },
  { imageSrc: './images/Clb-30.jpg', id: 8 },
];

const Media = () => {
  const [press, setPress] = useState([]);
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [showAddEventModal, setShowAddEventModal] = useState(false); // To control Add Event modal
  const [formData, setFormData] = useState({
    image: null,
    googleFormLink: ''
  });
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  // Hardcoded username and password values
  const validCredentials = {
    pratiksha: 'Pratiksha123',
    sneha: 'Sneha123',
    harshal: 'Harshal123',
    priti: 'Priti123',
    jalgaonploggers: 'JPloggers123'
  };

  // Fetch media items from the backend
  const fetchMediaItems = async () => {
    try {
      const response = await axios.get('https://ploggers-backend.onrender.com/api/media');
      setPress((prevPress) => [...response.data]);
    } catch (error) {
      console.error('Error fetching media items:', error);
    }
  };

  useEffect(() => {
    fetchMediaItems();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'image' ? files[0] : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('image', formData.image);
    data.append('googleFormLink', formData.googleFormLink);

    try {
      const response = await axios.post('https://ploggers-backend.onrender.com/api/media', data);
      setPress((prevPress) => [...prevPress, response.data.mediaItem]);
      setShowAddEventModal(false);
      setFormData({ image: null, googleFormLink: '' });
    } catch (error) {
      console.error('Error submitting media item:', error);
    }
  };

  const handleVerificationSubmit = (e) => {
    e.preventDefault();
    const { username, password } = credentials;

    if (validCredentials[username] === password) {
      setShowVerificationModal(false);
      setShowAddEventModal(true); // Show Add Event modal after successful verification
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <Container className="media-page">
      <section className="existing-media" style={{ marginBottom: '40px', backgroundColor: '#e0f7fa', padding: '20px', borderRadius: '30px', boxShadow: '0 4px 20px rgba(173, 216, 230, 0.5), 0 4px 20px rgba(216, 191, 216, 0.5)' }}>
        <h2 className="text-center">Existing Media</h2>
        <Row>
          {initialPress.map((item, index) => (
            <Col key={index} md={4} className="mb-4">
              <div className="photo-container" style={{ overflow: 'hidden', borderRadius: '50px', boxShadow: '0 4px 20px rgba(173, 216, 230, 0.5)' }}>
                <img src={item.imageSrc} alt={`Existing ${index + 1}`} style={{ width: '100%', height: 'auto', borderRadius: '50px', transition: 'transform 0.3s' }} />
              </div>
            </Col>
          ))}
        </Row>
      </section>

      <Button className="add-event-button" onClick={() => setShowVerificationModal(true)}>Add a new event</Button>

      {/* Verification Modal for Adding Event */}
      <Modal show={showVerificationModal} onHide={() => setShowVerificationModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Verify Credentials</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleVerificationSubmit}>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                required
              />
            </Form.Group>
            {error && <div className="text-danger">{error}</div>}
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Add Event Modal */}
      <Modal show={showAddEventModal} onHide={() => setShowAddEventModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formImage">
              <Form.Label>Upload Image</Form.Label>
              <Form.Control type="file" name="image" onChange={handleInputChange} required />
            </Form.Group>
            <Form.Group controlId="formGoogleFormLink">
              <Form.Label>Google Form Link</Form.Label>
              <Form.Control type="text" name="googleFormLink" value={formData.googleFormLink} onChange={handleInputChange} required />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Event
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <br></br>
      <br></br>
      <br></br>

      <section className="press-news" style={{ marginBottom: '40px', backgroundColor: '#e0f7fa', padding: '20px', borderRadius: '30px', boxShadow: '0 4px 20px rgba(173, 216, 230, 0.5), 0 4px 20px rgba(216, 191, 216, 0.5)' }}>
        <h2 className="text-center">Upcoming events..</h2>
        <Row>
          {press.map((article, index) => (
            <Col key={index} md={4} className="mb-4">
              <div className="photo-container" style={{ overflow: 'hidden', borderRadius: '50px', boxShadow: '0 4px 20px rgba(173, 216, 230, 0.5)' }}>
                <img src={`https://ploggers-backend.onrender.com${article.image}`} alt={`Article ${index + 1}`} style={{ width: '100%', height: 'auto', borderRadius: '50px', transition: 'transform 0.3s' }} />
                <div className="text-center" style={{ marginTop: '10px' }}>
                  <Button
                    variant="primary"
                    onClick={() => window.open(article.googleFormLink, '_blank')}
                    style={{ marginRight: '10px' }}
                  >
                    Fill Form
                  </Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
};

export default Media;
