// components/NavBar.js

import { useState, useRef, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '@/styles/NavBar.module.css';

const sidebarStyles = {
  container: (show) => ({
    position: 'fixed',
    top: 0,
    right: show ? '0' : '-450px',
    width: '450px',
    maxWidth: '90vw',
    height: '100%',
    backgroundColor: '#fff',
    zIndex: 1050,
    boxShadow: '-4px 0 10px rgba(0, 0, 0, 0.1)',
    transition: 'right 0.3s ease-in-out',
    display: 'flex',
    flexDirection: 'column',
  }),
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 1.5rem',
    borderBottom: '1px solid #f0f0f0',
  },
  productsTitle: {
    fontWeight: '600',
    color: '#ff7823',
    fontSize: '1.2rem',
  },
  closeButton: {
    fontSize: '2rem',
    cursor: 'pointer',
    color: '#343333',
  },
  overlay: (show) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: show ? 'rgba(0, 0, 0, 0.5)' : 'transparent',
    zIndex: show ? 1040 : -1,
    transition: 'background-color 0.3s ease-in-out',
  }),
  content: {
    flexGrow: 1,
    overflowY: 'auto',
    padding: '1rem 1.5rem',
  },
  categoryTitle: {
    fontWeight: '700',
    color: '#ff7823',
    textTransform: 'uppercase',
    fontSize: '0.9rem',
    padding: '1rem 0 0.5rem 0',
  },
  divider: {
    borderBottom: '1px solid #f0f0f0',
    margin: '1.5rem 0',
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.75rem 0.5rem',
    fontSize: '1rem',
    fontWeight: 420,
    color: '#3d3d3dff',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease, color 0.2s ease',
    borderRadius: '4px',
  },
  itemHover: {
    backgroundColor: '#fff',
    color: '#ff7823',
  },
  itemActive: {
    backgroundColor: '#ff7823',
    color: '#fff',
  },
  arrow: (isActive) => ({
    transition: 'transform 0.2s ease',
    color: isActive ? '#fff' : '#999',
  }),
  dropdownContent: (isOpen) => ({
    overflow: 'hidden',
    maxHeight: isOpen ? '300px' : '0',
    transition: 'max-height 0.3s ease-in-out',
    paddingLeft: '1rem',
  }),
  dropdownItem: {
    display: 'block',
    padding: '0.5rem 0',
    fontSize: '0.95rem',
    color: '#555',
    textDecoration: 'none',
  },
  dropdownItemHover: {
    color: '#ff7823',
  }
};

const Sidebar = ({ show, onClose, sidebarRef }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoveredDropdownItem, setHoveredDropdownItem] = useState(null);

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const handleLinkClick = () => {
    onClose();
    setOpenDropdown(null);
  };

  const handleDropdownClick = (e, dropdownName) => {
    e.stopPropagation();
    toggleDropdown(dropdownName);
  };

  // Reset dropdown when sidebar closes
  useEffect(() => {
    if (!show) {
      setOpenDropdown(null);
    }
  }, [show]);

  return (
    <>
      <div style={sidebarStyles.container(show)} ref={sidebarRef}>
        <div style={sidebarStyles.header}>
          <div style={sidebarStyles.productsTitle}>PRODUCTS</div>
          <div style={sidebarStyles.closeButton} onClick={onClose}>
            &times;
          </div>
        </div>
        <div style={sidebarStyles.content}>
          <div style={sidebarStyles.categoryTitle}>Export</div>
          <div
            style={{ 
              ...sidebarStyles.item,
              ...(openDropdown === 'export-ophthalmic' ? sidebarStyles.itemActive : {}),
              ...((hoveredItem === 'export-ophthalmic' && openDropdown !== 'export-ophthalmic') ? sidebarStyles.itemHover : {})
            }}
            onClick={(e) => handleDropdownClick(e, 'export-ophthalmic')}
            onMouseEnter={() => setHoveredItem('export-ophthalmic')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            Ophthalmic
            <span style={sidebarStyles.arrow(openDropdown === 'export-ophthalmic')}>
              {openDropdown === 'export-ophthalmic' ? '▲' : '▼'}
            </span>
          </div>
          <div style={sidebarStyles.dropdownContent(openDropdown === 'export-ophthalmic')}>
            <Link href="/products/export/ophthalmic/eye-drops" passHref legacyBehavior>
              <a style={{...sidebarStyles.dropdownItem, ...(hoveredDropdownItem === 'eye-drops-exp' ? sidebarStyles.dropdownItemHover : {})}}
                onMouseEnter={() => setHoveredDropdownItem('eye-drops-exp')}
                onMouseLeave={() => setHoveredDropdownItem(null)}
                onClick={handleLinkClick}>Eye Drops</a>
            </Link>
            <Link href="/products/export/ophthalmic/eye-ointments" passHref legacyBehavior>
              <a style={{...sidebarStyles.dropdownItem, ...(hoveredDropdownItem === 'eye-ointments-exp' ? sidebarStyles.dropdownItemHover : {})}}
                onMouseEnter={() => setHoveredDropdownItem('eye-ointments-exp')}
                onMouseLeave={() => setHoveredDropdownItem(null)}
                onClick={handleLinkClick}>Eye Ointments</a>
            </Link>
            <Link href="/products/export/ophthalmic/eye-supplements" passHref legacyBehavior>
              <a style={{...sidebarStyles.dropdownItem, ...(hoveredDropdownItem === 'eye-supplements-exp' ? sidebarStyles.dropdownItemHover : {})}}
                onMouseEnter={() => setHoveredDropdownItem('eye-supplements-exp')}
                onMouseLeave={() => setHoveredDropdownItem(null)}
                onClick={handleLinkClick}>Eye Supplements</a>
            </Link>
          </div>
          <div
            style={{ 
              ...sidebarStyles.item, 
              ...(openDropdown === 'export-ent' ? sidebarStyles.itemActive : {}),
              ...((hoveredItem === 'export-ent' && openDropdown !== 'export-ent') ? sidebarStyles.itemHover : {})
            }}
            onClick={(e) => handleDropdownClick(e, 'export-ent')}
            onMouseEnter={() => setHoveredItem('export-ent')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            ENT
            <span style={sidebarStyles.arrow(openDropdown === 'export-ent')}>
              {openDropdown === 'export-ent' ? '▲' : '▼'}
            </span>
          </div>
          <div style={sidebarStyles.dropdownContent(openDropdown === 'export-ent')}>
            <Link href="/products/export/ent/nasal-sprays" passHref legacyBehavior>
              <a style={{...sidebarStyles.dropdownItem, ...(hoveredDropdownItem === 'nasal-sprays-exp' ? sidebarStyles.dropdownItemHover : {})}}
                onMouseEnter={() => setHoveredDropdownItem('nasal-sprays-exp')}
                onMouseLeave={() => setHoveredDropdownItem(null)}
                onClick={handleLinkClick}>Nasal Sprays</a>
            </Link>
            <Link href="/products/export/ent/ear-drops" passHref legacyBehavior>
              <a style={{...sidebarStyles.dropdownItem, ...(hoveredDropdownItem === 'ear-drops-exp' ? sidebarStyles.dropdownItemHover : {})}}
                onMouseEnter={() => setHoveredDropdownItem('ear-drops-exp')}
                onMouseLeave={() => setHoveredDropdownItem(null)}
                onClick={handleLinkClick}>Ear Drops</a>
            </Link>
          </div>
          <div style={sidebarStyles.divider}></div>
          <div style={sidebarStyles.categoryTitle}>Domestic</div>
          <div
            style={{ 
              ...sidebarStyles.item, 
              ...(openDropdown === 'domestic-ophthalmic' ? sidebarStyles.itemActive : {}),
              ...((hoveredItem === 'domestic-ophthalmic' && openDropdown !== 'domestic-ophthalmic') ? sidebarStyles.itemHover : {})
            }}
            onClick={(e) => handleDropdownClick(e, 'domestic-ophthalmic')}
            onMouseEnter={() => setHoveredItem('domestic-ophthalmic')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            Ophthalmic
            <span style={sidebarStyles.arrow(openDropdown === 'domestic-ophthalmic')}>
              {openDropdown === 'domestic-ophthalmic' ? '▲' : '▼'}
            </span>
          </div>
          <div style={sidebarStyles.dropdownContent(openDropdown === 'domestic-ophthalmic')}>
            {/* CORRECTED LINKS BELOW */}
            <Link href="/products/domestic/ophthalmic/eye-drops" passHref legacyBehavior> 
              <a style={{...sidebarStyles.dropdownItem, ...(hoveredDropdownItem === 'eye-drops-dom' ? sidebarStyles.dropdownItemHover : {})}}
                onMouseEnter={() => setHoveredDropdownItem('eye-drops-dom')}
                onMouseLeave={() => setHoveredDropdownItem(null)}
                onClick={handleLinkClick}>Eye Drops</a>
            </Link>
            <Link href="/products/domestic/ophthalmic/eye-ointments" passHref legacyBehavior>
              <a style={{...sidebarStyles.dropdownItem, ...(hoveredDropdownItem === 'eye-ointments-dom' ? sidebarStyles.dropdownItemHover : {})}}
                onMouseEnter={() => setHoveredDropdownItem('eye-ointments-dom')}
                onMouseLeave={() => setHoveredDropdownItem(null)}
                onClick={handleLinkClick}>Eye Ointments</a>
            </Link>
            <Link href="/products/domestic/ophthalmic/eye-supplements" passHref legacyBehavior>
              <a style={{...sidebarStyles.dropdownItem, ...(hoveredDropdownItem === 'eye-supplements-dom' ? sidebarStyles.dropdownItemHover : {})}}
                onMouseEnter={() => setHoveredDropdownItem('eye-supplements-dom')}
                onMouseLeave={() => setHoveredDropdownItem(null)}
                onClick={handleLinkClick}>Eye Supplements</a>
            </Link>
          </div>
        </div>
      </div>
      <div style={sidebarStyles.overlay(show)} onClick={onClose}></div>
    </>
  );
};

export default function NavBar() {
  const router = useRouter();
  const [expanded, setExpanded] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const navRef = useRef(null);
  const sidebarRef = useRef(null);

  useEffect(() => {
    if (showSidebar) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    }
  }, [showSidebar]);

  useEffect(() => {
    function handleClickOutside(event) {
      const targetIsProductLink = event.target.closest('[data-id="products-link"]');
      if (targetIsProductLink) return;

      if (
        navRef.current && !navRef.current.contains(event.target) &&
        sidebarRef.current && !sidebarRef.current.contains(event.target)
      ) {
        setExpanded(false);
        setShowSidebar(false);
      }
    }
    if (expanded || showSidebar) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [expanded, showSidebar]);

  // A custom hook to detect if we're on a small screen
  const useIsSmallScreen = () => {
    const [isSmall, setIsSmall] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsSmall(window.innerWidth < 992); // 992px is Bootstrap's 'lg' breakpoint
      };
      // Set initial value
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isSmall;
  };

  const isSmallScreen = useIsSmallScreen();

  const handleProductsClick = () => {
    setShowSidebar(prev => !prev);
    // Only collapse the navbar on small screens
    if (isSmallScreen) {
      setExpanded(false);
    }
  };

  return (
    <>
      <Navbar
        bg="white"
        expand="lg"
        sticky="top"
        className="shadow-sm"
        expanded={expanded}
        onToggle={(isExpanded) => {
          setExpanded(isExpanded);
          if (isExpanded === false) {
            setShowSidebar(false);
          }
        }}
      >
        <Container ref={navRef}>
          <Link href="/" passHref legacyBehavior>
            <Navbar.Brand onClick={() => { setExpanded(false); setShowSidebar(false); }}>
              <img
                src="/logo-optimus1.png"
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
                  onClick={() => { setExpanded(false); setShowSidebar(false); }}
                  className={`${router.pathname === '/' ? styles.activeLink : styles.inactiveLink} mx-2`}
                  aria-current={router.pathname === '/' ? 'page' : undefined}
                >
                  HOME
                </Nav.Link>
              </Link>
              <Link href="/about" passHref legacyBehavior>
                <Nav.Link
                  onClick={() => { setExpanded(false); setShowSidebar(false); }}
                  className={`${router.pathname === '/about' ? styles.activeLink : styles.inactiveLink} mx-2`}
                  aria-current={router.pathname === '/about' ? 'page' : undefined}
                >
                  ABOUT
                </Nav.Link>
              </Link>
              <Link href="/leadership" passHref legacyBehavior>
                <Nav.Link
                  onClick={() => { setExpanded(false); setShowSidebar(false); }}
                  className={`${router.pathname === '/leadership' ? styles.activeLink : styles.inactiveLink} mx-2`}
                  aria-current={router.pathname === '/leadership' ? 'page' : undefined}
                >
                  LEADERSHIP
                </Nav.Link>
              </Link>
              <Nav.Link
                onClick={handleProductsClick}
                className={`${styles.inactiveLink} mx-2`}
                data-id="products-link"
              >
                PRODUCTS
              </Nav.Link>
              <span className="d-none d-lg-inline" style={{ margin: '0 50px' }}></span>
              <div className="d-lg-none">
                <hr />
              </div>
              <Link href="/contact" passHref legacyBehavior>
                <Nav.Link
                  onClick={() => { setExpanded(false); setShowSidebar(false); }}
                  className={`${styles.contactButton} mx-2 mb-2`}
                  aria-current={router.pathname === '/contact' ? 'page' : undefined}
                >
                  CONTACT US
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Sidebar show={showSidebar} onClose={() => setShowSidebar(false)} sidebarRef={sidebarRef} />
    </>
  );
}