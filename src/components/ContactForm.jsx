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
  const [isSubmitting, setIsSubmitting] = useState(false);

  // REPLACE THIS WITH YOUR ACTUAL ACCESS KEY FROM WEB3FORMS
  const WEB3FORMS_ACCESS_KEY = "a851fcc9-738a-4403-aa40-c9a7d778d75c";

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage('');

    try {
      // Prepare the payload for Web3Forms
      const submissionData = {
        ...formData,
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `New Contact Form Submission from ${formData.name}`,
        from_name: "Optimus Website"
      };

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(submissionData),
      });

      const data = await res.json();

      if (data.success) {
        setResponseMessage("Thank you for reaching out. We have received your message and will get in touch soon.");
        setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form
      } else {
        setResponseMessage(data.message || 'Submission failed. Please try again.');
      }
    } catch (error) {
      setResponseMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container
      style={{
        backgroundColor: 'white',
        border: '1px solid gray',
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
            disabled={isSubmitting}
            style={{
              backgroundColor: '#ff7823',
              borderColor: '#ff7823',
              border: '0.2rem solid #ff7823',
              color: 'white',
              padding: '0.75rem 1.25rem',
              fontSize: '0.8rem',
              fontWeight: 620,
              borderRadius: '4px',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
              minWidth: '100px'
            }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </div>
      </Form>
      {responseMessage && (
        <p className="mt-3 text-center" style={{ color: '#ff7823', fontSize: '0.85rem', fontWeight: 'bold' }}>
          {responseMessage}
        </p>
      )}
    </Container>
  );
};

export default ContactForm;