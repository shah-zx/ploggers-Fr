import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://ploggers-backend.onrender.com/api/contact', {  // Use full URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        console.error('Response not ok:', data);
        alert(data.message);
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('Failed to submit contact form');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f0f0' }}>
      <form onSubmit={handleSubmit} style={{ borderRadius: '50px', boxShadow: '0 0 10px gray', padding: '40px', backgroundColor: '#fff', maxWidth: '500px', width: '100%' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Contact Us</h2>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '50px', border: '1px solid #ccc' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '50px', border: '1px solid #ccc' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Message</label>
          <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '50px', border: '1px solid #ccc' }}></textarea>
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', borderRadius: '50px', border: 'none', backgroundColor: '#FFC080', color: '#fff', fontSize: '16px' }}>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
