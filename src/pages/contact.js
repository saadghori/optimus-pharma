import Head from "next/head";
import ContactForm from "@/components/ContactForm";
import { Container, Row, Col } from "react-bootstrap";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Optimus Pharma</title>
      </Head>
    <Container className="py-5 px-4" style={{ backgroundColor: "white" }}>
      {/* Page Title */}
      <h1 style={{ color: "#ff7823", fontWeight: "bold", fontSize: "1.15rem" }} className="mb-3">
        Contact Us
      </h1>

      {/* Introductory Text */}
      <p className="mb-4" style={{ color: "black", fontSize: "1.4rem" }}>
        Thank you for your interest in Optimus Pharma. Please note, fields marked with an asterisk (*) are required.
      </p>

      {/* Main Content */}
      <Row style={{ minHeight: "70vh" }} className="align-items-start">
        {/* Contact Form Section */}
        <Col md={7}>
          <ContactForm />
        </Col>

        {/* Head Office Section */}
        <Col md={5}>
          <div
            style={{
              backgroundColor: "#ff7823",
              color: "white",
              padding: "1.5rem",
              borderRadius: "8px",
              width: "100%",
              maxWidth: "650px",
              marginTop: "1.5rem",
            }}
          >
            <h3 style={{ fontWeight: "bold" }}>Head Office</h3>
            <p style={{ marginBottom: "0.3rem", marginBottom: "1rem" }}>Optimus Pharma Pvt. (Ltd.)</p>
            <ul
              style={{
                fontStyle: "normal",
                fontSize: "0.9rem",
                lineHeight: "1.4",
                margin: 0,
                paddingLeft: "1.2rem",
              }}
            >
              
              <li style={{ marginBottom: "0.3rem" }}>259 F/I-Block, Wapda Town, Lahore</li>
              <li style={{ marginBottom: "0.3rem" }}>Tel: +92-42-35186994</li>
              <li style={{ marginBottom: "0.3rem" }}>Cell: +92 321 5182261</li>
              <li style={{ marginBottom: "0.3rem" }}>Fax: +92-42-32212467</li>
              <li style={{ marginBottom: "0.3rem" }}>Email: info@optimuspharma.com</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
    </>
  );
}
