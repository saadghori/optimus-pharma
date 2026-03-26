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
                src="/logo-optimus1.png"
                alt="Optimus Pharma Logo"
                className="mb-3"
                style={{ maxWidth: '225px', height: 'auto' }}
              />
              <p 
                className={styles.slogan} 
                style={{ 
                  fontSize: '0.96rem', // Makes it bigger
                  fontWeight: '400',  // Adds a professional weight
                  margin: 0           // Removes default paragraph spacing
                }}
              >
                The gift of health.
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
              <Link href="/products/domestic/ophthalmic/eye-drops" passHref legacyBehavior>
                <Nav.Link className={styles.navLink}>Products</Nav.Link>
              </Link>
              <Link href="/facility" passHref legacyBehavior>
                <Nav.Link className={styles.navLink}>Facility</Nav.Link>
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
            <h4 className={styles.heading}>Contact Us</h4>
            <div className={styles.headOffice}>
              <p>Optimus Laboratories</p>
              <p>Plot No.62, Bhalwal Industrial Estate, Bhalwal, District Sargodha, Pakistan</p>
              <p>Tel: +92 321 5182261</p>
              <p>E-mail: mhsindhu@optimuslaboratories.com</p>
              <p>Head Office: 259, F/1-Block, Wapda Town, Lahore, Pakistan</p>
            </div>
          </Col>

          {/* Group Companies Column */}
          <Col md={3}>
            <Nav className="flex-column">
              <h4 className={styles.heading}>Group</h4>
              <Nav.Link
                href="https://optimuspharma.com.pk/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.navLink}
              >
                Optimus Pharma ⧉
              </Nav.Link>
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
              © 2025 Optimus Laboratories (Pvt.) Ltd. All rights reserved
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}