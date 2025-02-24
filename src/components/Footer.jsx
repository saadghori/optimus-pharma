// components/Footer.js
import { Container, Row, Col, Nav, Stack, NavLink } from 'react-bootstrap';
import styles from '@/styles/Footer.module.css'; // Import the CSS module
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container fluid>
        <Row className='bg-gray text-black p-4 g-4'>
          <Col md={5} className='ps-lg-5'>
            <Stack>
              <img
                src="/logo-optimus.png"
                alt="Optimus Pharma Logo"
                className="mb-3"
                style={{ maxWidth: '225px', height: 'auto' }}
              />
              <p className={styles.slogan}>
                Unwavering commitment to quality, innovation, and accessibility.
              </p>
            </Stack>
          </Col>
          <Col md={3}>
            <Nav className="flex-column">
              <h4 className={styles.heading}>Useful Links</h4>
              <Link href="/" passHref legacyBehavior>
                <Nav.Link className={styles.navLink}>Home</Nav.Link>
              </Link>
              <Link href="/about" passHref legacyBehavior>
                <Nav.Link className={styles.navLink}>About</Nav.Link>
              </Link>
              <Link href="/products" passHref legacyBehavior>
                <Nav.Link className={styles.navLink}>Products</Nav.Link>
              </Link>
              <Link href="/media" passHref legacyBehavior>
                <Nav.Link className={styles.navLink}>Media</Nav.Link>
              </Link>
              <Link href="/contact" passHref legacyBehavior>
                <Nav.Link className={styles.navLink}>Contact Us</Nav.Link>
              </Link>
            </Nav>
          </Col>

          <Col md={4}>
            <h4 className={styles.heading} >Head Office</h4>
            <div className={styles.headOffice}>
                <p>Optimus Pharma</p>
                <p>259 F/I-Block, Wapda Town, Lahore</p>
                <p>Cell: +92 321 5182261</p>
                <p>Tel: +92 42 35186994</p>
                <p>Fax: +92 42 32212467</p>
                <p>E-mail: info@optimuspharma.com</p>
            </div>
          </Col>
        </Row>
        <Row className="bg-gray p-2">
          <Col>
            <small className="text-muted" style={{ fontSize: '12px', textAlign: 'left', display: 'block' }}>
              © 2025 Optimus Pharma. All rights reserved.
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
