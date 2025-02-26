// components/Footer.js
import { Container, Row, Col, Nav } from 'react-bootstrap';
import styles from '@/styles/Footer.module.css'; // Assuming a CSS module for styling
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container fluid>
        <Row className="bg-gray text-black p-4 g-5">
          {/* Logo and Slogan Column */}
          <Col md={4}>
            <div>
              <img
                src="/logo-optimus.png"
                alt="Optimus Pharma Logo"
                className="mb-3"
                style={{ maxWidth: '225px', height: 'auto' }}
              />
              <p className={styles.slogan}>
                Unwavering commitment to quality, innovation, and accessibility.
              </p>
            </div>
          </Col>

          {/* Useful Links Column */}
          <Col md={2}>
            <Nav className="flex-column">
              <h4 className={styles.heading}>Quick Links</h4>
              <Link href="/" passHref legacyBehavior>
                <Nav.Link className={styles.navLink}>Home</Nav.Link>
              </Link>
              <Link href="/about" passHref legacyBehavior>
                <Nav.Link className={styles.navLink}>About</Nav.Link>
              </Link>
              <Link href="/products" passHref legacyBehavior>
                <Nav.Link className={styles.navLink}>Products</Nav.Link>
              </Link>
              <Link href="/leadership" passHref legacyBehavior>
                <Nav.Link className={styles.navLink}>Leadership</Nav.Link>
              </Link>
              <Link href="/contact" passHref legacyBehavior>
                <Nav.Link className={styles.navLink}>Contact Us</Nav.Link>
              </Link>
            </Nav>
          </Col>

          {/* Contact Column */}
          <Col md={3}>
            <h4 className={styles.heading}>Contact</h4>
            <div className={styles.headOffice}>
              <p>Optimus Pharma Pvt. (Ltd.)</p>
              <p>259 F/I-Block, Wapda Town, Lahore</p>
              <p>Cell: +92 321 5182261</p>
              <p>Tel: +92 42 35186994</p>
              <p>Fax: +92 42 32212467</p>
              <p>E-mail: info@optimuspharma.com</p>
            </div>
          </Col>

          {/* Group Companies Column */}
          <Col md={3}>
            <Nav className="flex-column">
              <h4 className={styles.heading}>Group</h4>
              <Nav.Link
                href="https://optimusentrepot.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.navLink}
              >
                Optimus Entrepot ⧉
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
        <Row className="bg-gray p-2">
          <Col>
            <small
              className="text-muted"
              style={{ fontSize: '12px', textAlign: 'left', display: 'block' }}
            >
              © 2025 Optimus Pharma. All rights reserved.
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}