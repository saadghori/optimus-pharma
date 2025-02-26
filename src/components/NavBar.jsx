// components/NavBar.js
import { useState, useRef, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '@/styles/NavBar.module.css';

export default function NavBar() {
  const router = useRouter();
  const [expanded, setExpanded] = useState(false);
  const navRef = useRef(null);

  // Collapse navbar when clicking outside of it
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setExpanded(false);
      }
    }
    if (expanded) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [expanded]);

  return (
    <Navbar
      bg="white"
      expand="lg"
      sticky="top"
      className="shadow-sm"
      expanded={expanded}
      onToggle={(isExpanded) => setExpanded(isExpanded)}
    >
      <Container ref={navRef}>
        {/* Logo on the far left */}
        <Link href="/" passHref legacyBehavior>
          <Navbar.Brand onClick={() => setExpanded(false)}>
            <img
              src="/logo-optimus.png"
              alt="Optimus Pharma Logo"
              style={{ height: '50px', width: 'auto' }}
            />
          </Navbar.Brand>
        </Link>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="d-lg-none mb-2">
            <hr />
          </div>
          <Nav className="ms-auto">
            <Link href="/" passHref legacyBehavior>
              <Nav.Link
                onClick={() => setExpanded(false)}
                className={`${router.pathname === '/' ? styles.activeLink : styles.inactiveLink} mx-2`}
                aria-current={router.pathname === '/' ? 'page' : undefined}
              >
                HOME
              </Nav.Link>
            </Link>
            <Link href="/about" passHref legacyBehavior>
              <Nav.Link
                onClick={() => setExpanded(false)}
                className={`${router.pathname === '/about' ? styles.activeLink : styles.inactiveLink} mx-2`}
                aria-current={router.pathname === '/about' ? 'page' : undefined}
              >
                ABOUT
              </Nav.Link>
            </Link>
            <Link href="/leadership" passHref legacyBehavior>
              <Nav.Link
                onClick={() => setExpanded(false)}
                className={`${router.pathname === '/leadership' ? styles.activeLink : styles.inactiveLink} mx-2`}
                aria-current={router.pathname === '/leadership' ? 'page' : undefined}
              >
                LEADERSHIP
              </Nav.Link>
            </Link>
            <Link href="/products" passHref legacyBehavior>
              <Nav.Link
                onClick={() => setExpanded(false)}
                className={`${router.pathname === '/products' ? styles.activeLink : styles.inactiveLink} mx-2`}
                aria-current={router.pathname === '/products' ? 'page' : undefined}
              >
                PRODUCTS
              </Nav.Link>
            </Link>
            {/* For large screens: add extra gap. For small screens: show a horizontal divider */}
            <span className="d-none d-lg-inline" style={{ margin: '0 75px' }}></span>
            <div className="d-lg-none">
              <hr />
            </div>
            <Link href="/contact" passHref legacyBehavior>
              <Nav.Link
                onClick={() => setExpanded(false)}
                className={`${router.pathname === '/contact' ? styles.activeLink : styles.inactiveLink} mx-2 mb-2`}
                aria-current={router.pathname === '/contact' ? 'page' : undefined}
              >
                CONTACT US
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
