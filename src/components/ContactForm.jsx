import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://pharma-backend-f278.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setResponseMessage(data.message);
        setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form
      } else {
        setResponseMessage(data.message || 'Submission failed');
      }
    } catch (error) {
      setResponseMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <Container
      style={{
        backgroundColor: 'white',
        border: '2px solid #ff7823',
        borderRadius: '8px',
        padding: '2rem',
        maxWidth: '600px'
      }}
      className="my-4"
    >
      <h2 style={{ color: '#ff7823', textAlign: 'center' }}>Let's Get in Touch</h2>
      <p style={{ color: 'black', textAlign: 'center', fontSize: '0.95rem' }}>
        Submit the form below if you have any questions and would like to reach out to one of our representatives.
      </p>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName" className="mb-3">
          <Form.Label style={{ color: 'black', fontSize: '0.85rem' }}>
            Name <span style={{ color: 'red' }}>*</span>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ fontSize: '0.85rem', color: '#555' }}
          />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label style={{ color: 'black', fontSize: '0.85rem' }}>
            Email <span style={{ color: 'red' }}>*</span>
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ fontSize: '0.85rem', color: '#555' }}
          />
        </Form.Group>

        <Form.Group controlId="formPhone" className="mb-3">
          <Form.Label style={{ color: 'black', fontSize: '0.85rem' }}>Phone</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter your phone number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={{ fontSize: '0.85rem', color: '#555' }}
          />
        </Form.Group>

        <Form.Group controlId="formMessage" className="mb-3">
          <Form.Label style={{ color: 'black', fontSize: '0.85rem' }}>
            Message <span style={{ color: 'red' }}>*</span>
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Your message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={{ fontSize: '0.85rem', color: '#555' }}
          />
        </Form.Group>

        <div style={{ textAlign: 'center' }}>
            <Button
                variant="warning"
                type="submit"
                style={{ backgroundColor: '#ff7823', borderColor: '#ff7823', color: 'white' }}
            >
                Send Message
            </Button>
</div>
      </Form>
      {responseMessage && <p className="mt-3 text-center" style={{ color: '#ff7823', fontSize: '0.85rem', fontWeight:'bold' }}>
      {responseMessage}</p>}
    </Container>
  );
};

export default ContactForm;
